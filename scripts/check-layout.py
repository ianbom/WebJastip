import os
import time

origin = os.environ.get("QA_ORIGIN", "http://localhost:3000").rstrip("/")
new_tab(origin)
wait_for_load()

def wait_until(expression):
    for attempt in range(50):
        if js(expression):
            return
        time.sleep(0.1)
    raise AssertionError(expression)

wait_until("document.querySelectorAll('.rz-card').length === 8")

for width in (360, 390, 768, 1024, 1280, 1440):
    cdp("Emulation.setDeviceMetricsOverride", width=width, height=900, deviceScaleFactor=1, mobile=width < 768)
    time.sleep(0.3)
    result = js("""(() => {
      const visible = selector => document.querySelector(selector)?.getBoundingClientRect().width > 0;
      return {
        overflow: document.documentElement.scrollWidth > innerWidth,
        titleColor: getComputedStyle(document.querySelector('.rz-hero h1')).color,
        footerColumns: getComputedStyle(document.querySelector('.rz-foot__g')).gridTemplateColumns.split(' ').length,
        menuVisible: visible('[aria-label="Buka menu navigasi"]'),
        desktopVisible: visible('[aria-label="Navigasi utama"]'),
        sectionLinksVisible: Array.from(document.querySelectorAll('.rz-head .rz-link')).every(link=>link.getBoundingClientRect().width > 0),
        navRight: document.querySelector('[aria-label="Navigasi utama"]').getBoundingClientRect().right,
        brandLeft: document.querySelector('header .site-brand').getBoundingClientRect().left,
        titleBottom: document.querySelector('.rz-hero h1').getBoundingClientRect().bottom,
        heroBottom: document.querySelector('.rz-hero').getBoundingClientRect().bottom
      };
    })()""")
    assert not result["overflow"], (width, "page overflow", result)
    assert result["titleColor"] == "rgb(255, 255, 255)", (width, "hero contrast", result)
    assert result["footerColumns"] == (4 if width >= 1280 else 2 if width >= 768 else 1), (width, "footer grid", result)
    assert result["menuVisible"] == (width < 1280), (width, "menu breakpoint")
    assert result["desktopVisible"] == (width >= 1280), (width, "desktop breakpoint")
    assert result["sectionLinksVisible"] == (width >= 640), (width, "duplicate section links")
    assert result["titleBottom"] <= result["heroBottom"], (width, "clipped hero title")
    if width >= 1280:
        assert result["navRight"] < result["brandLeft"], (width, "navbar overlaps brand")
    print("PASS layout", width)

cdp("Emulation.setDeviceMetricsOverride", width=390, height=844, deviceScaleFactor=1, mobile=True)

def click(selector):
    position = js("""(() => {
      const box = document.querySelector(%r).getBoundingClientRect();
      return {x: box.x + box.width / 2, y: box.y + box.height / 2};
    })()""" % selector)
    click_at_xy(position["x"], position["y"])
    time.sleep(0.15)

click('[aria-label="Buka menu navigasi"]')
assert js("document.querySelector('#mobile-navigation').open"), "drawer did not open"
assert js("document.body.style.overflow") == "hidden", "background scroll unlocked"
cdp("Input.dispatchKeyEvent", type="keyDown", key="Tab", code="Tab", windowsVirtualKeyCode=9, modifiers=8)
cdp("Input.dispatchKeyEvent", type="keyUp", key="Tab", code="Tab", windowsVirtualKeyCode=9, modifiers=8)
assert js("document.activeElement.href?.includes('wa.me')"), "reverse focus trap failed"
for unused in range(12):
    cdp("Input.dispatchKeyEvent", type="keyDown", key="Tab", code="Tab", windowsVirtualKeyCode=9)
    cdp("Input.dispatchKeyEvent", type="keyUp", key="Tab", code="Tab", windowsVirtualKeyCode=9)
    assert js("document.querySelector('#mobile-navigation').contains(document.activeElement)"), "focus escaped drawer"
cdp("Input.dispatchKeyEvent", type="keyDown", key="Escape", code="Escape", windowsVirtualKeyCode=27)
cdp("Input.dispatchKeyEvent", type="keyUp", key="Escape", code="Escape", windowsVirtualKeyCode=27)
time.sleep(0.15)
assert not js("document.querySelector('#mobile-navigation').open"), "Escape did not close drawer"
assert js("document.activeElement.getAttribute('aria-label')") == "Buka menu navigasi", "focus not restored"
assert js("document.body.style.overflow") != "hidden", "scroll not restored"
click('[aria-label="Buka menu navigasi"]')
click('[aria-label="Tutup menu"]')
assert not js("document.querySelector('#mobile-navigation').open"), "close button failed"
click('[aria-label="Buka menu navigasi"]')
click_at_xy(380, 420)
time.sleep(0.15)
assert not js("document.querySelector('#mobile-navigation').open"), "backdrop failed"
click('[aria-label="Buka menu navigasi"]')
cdp("Emulation.setDeviceMetricsOverride", width=1280, height=844, deviceScaleFactor=1, mobile=False)
wait_until("!document.querySelector('#mobile-navigation').open && document.body.style.overflow !== 'hidden'")
cdp("Emulation.setDeviceMetricsOverride", width=390, height=844, deviceScaleFactor=1, mobile=True)
click('[aria-label="Buka menu navigasi"]')
click('#mobile-navigation a[href="/katalog"]')
wait_for_load()
assert "/katalog" in page_info()["url"], "catalog navigation failed"
assert not js("document.querySelector('#mobile-navigation').open"), "navigation did not close drawer"
assert js("document.body.style.overflow") != "hidden", "navigation left scroll locked"
print("PASS mobile drawer: keyboard, focus, backdrop, navigation, scroll")

goto_url(origin + "/katalog?kategori=kurma")
wait_for_load()
wait_until("document.querySelectorAll('.rz-card h3').length === 3")
cdp("Emulation.setDeviceMetricsOverride", width=1440, height=900, deviceScaleFactor=1, mobile=False)
click('header a[href="/katalog?kategori=makanan"]')
wait_until("document.querySelector('[aria-pressed=true]')?.textContent.includes('Makanan')")
assert js("Array.from(document.querySelectorAll('.rz-card h3')).some(e=>e.textContent.includes('Albaik'))"), "URL and catalog out of sync"
click('button[aria-pressed="true"]')
assert js("location.search.includes('kategori=makanan')"), "filter URL changed unexpectedly"
print("PASS same-page navbar category navigation")

goto_url(origin)
wait_for_load()
wait_until("document.querySelectorAll('.rz-card').length === 8")
links = js("Array.from(new Set(Array.from(document.querySelectorAll('header a, footer a, .rz-hero a, .rz-card, .rz-card a, .rz-tile')).map(a=>a.getAttribute('href')).filter(h=>h && h.startsWith('/'))))")
assert any(href.startswith('/produk/') for href in links), "product routes missing from checks"
cdp("Emulation.setDeviceMetricsOverride", width=390, height=844, deviceScaleFactor=1, mobile=True)
for href in links:
    goto_url(origin + href)
    wait_for_load()
    assert not js("document.title.includes('404') || document.body.innerText.includes('This page could not be found')"), href
    assert js("document.documentElement.scrollWidth <= innerWidth"), (href, "overflow")
    print("PASS route", href)
goto_url(origin)
wait_for_load()
wait_until("document.querySelector('.rz-hero') !== null")
whatsapp = js("Array.from(document.querySelectorAll('a[href*=\"wa.me\"]')).map(a=>a.href)")
assert whatsapp and all(link.startswith("https://wa.me/") and "text=" in link for link in whatsapp), whatsapp
cdp("Emulation.setEmulatedMedia", features=[{"name": "prefers-reduced-motion", "value": "reduce"}])
assert js("parseFloat(getComputedStyle(document.querySelector('.rz-hero__c')).animationDuration) <= 0.01"), "reduced motion ignored"
print("PASS WhatsApp links and reduced motion; no messages sent")
cdp("Emulation.setEmulatedMedia", features=[])
cdp("Emulation.clearDeviceMetricsOverride")
