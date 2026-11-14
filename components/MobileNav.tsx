"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import type { NavItem } from "@/content/site";
import ArrowIcon from "./ArrowIcon";

type MobileNavProps = {
  items: NavItem[];
};

export default function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 760px)");
    const close = () => setOpen(false);
    query.addEventListener("change", close);
    return () => query.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function handleAnchorClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (!open) return;

    setOpen(false);
    const section = document.querySelector<HTMLElement>(href);
    if (!section) return;

    section.setAttribute("tabindex", "-1");
    section.focus({ preventScroll: true });
  }

  return (
    <>
      <button
        ref={buttonRef}
        className="menu-toggle"
        type="button"
        aria-controls="primary-nav"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Menu <span aria-hidden="true"></span>
      </button>
      <nav
        className={open ? "primary-nav is-open" : "primary-nav"}
        id="primary-nav"
        aria-label="Main navigation"
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => handleAnchorClick(event, item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contact"
          onClick={(event) => handleAnchorClick(event, "#contact")}
        >
          Contact <ArrowIcon />
        </a>
      </nav>
    </>
  );
}
