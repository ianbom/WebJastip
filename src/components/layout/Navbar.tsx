"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, MessageCircle, Search, X } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/config/site";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Katalog", href: "/katalog" },
  { label: "Makanan", href: "/katalog?kategori=makanan" },
  { label: "Oleh-oleh", href: "/katalog?kategori=oleh-oleh" },
  { label: "Kurma", href: "/katalog?kategori=kurma" },
  { label: "Layanan", href: "/katalog?kategori=layanan" },
  { label: "Kemitraan", href: "/#kemitraan" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const waLink = createWhatsAppLink({ type: "general" });

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileMenuOpen]);

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Langsung ke konten</a>
      <div className="site-announcement">
        <div className="rz-container site-announcement__inner">
          <p>Menemani kebutuhan jamaah di Madinah<span> · Antar ke lobi hotel</span></p>
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={13} aria-hidden="true" />
            <span>{SITE_CONFIG.whatsappDisplay}</span>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="rz-container site-header__inner">
          <div className="site-header__left">
            <button
              ref={triggerRef}
              type="button"
              className="site-icon-button site-menu-trigger"
              aria-label="Buka menu navigasi"
              aria-haspopup="dialog"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                dialogRef.current?.showModal();
                setMobileMenuOpen(true);
              }}
            >
              <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <nav className="site-desktop-nav" aria-label="Navigasi utama">
              {navLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            </nav>
          </div>

          <Link className="site-brand" href="/" aria-label="Nuraya Madinah — Beranda">
            <span>NURAYA</span>
            <small>MADINAH</small>
          </Link>

          <div className="site-header__actions">
            <Link href="/katalog" className="site-icon-button" aria-label="Cari produk">
              <Search size={19} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <a className="site-header__contact" href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Hubungi Kami
            </a>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="site-menu"
        aria-labelledby="mobile-menu-title"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button");
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          setMobileMenuOpen(false);
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeMenu();
        }}
      >
        <div className="site-menu__heading">
          <h2 id="mobile-menu-title" className="site-brand"><span>NURAYA</span><small>MADINAH</small></h2>
          <button type="button" className="site-icon-button" aria-label="Tutup menu" onClick={closeMenu} autoFocus>
            <X size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <nav className="site-menu__links" aria-label="Navigasi mobile">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}<ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="site-menu__contact">
          <p>Kebutuhan selama di Madinah?<br />Konsultasikan langsung dengan admin kami.</p>
          <a className="rz-btn" href={waLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} aria-hidden="true" /> Chat WhatsApp
          </a>
        </div>
      </dialog>
    </>
  );
}
