"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    if (!open) return;

    document.addEventListener(
      "pointerdown",
      (e) => {
        const target = e.target as Node;
        if (
          menuRef.current &&
          !menuRef.current.contains(target) &&
          iconRef.current &&
          !iconRef.current.contains(target)
        ) {
          setOpen(false);
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort(); // Cancels the event listner
    };
  }, [open]);

  return (
    <nav className="sticky top-0 left-0 w-full z-100 flex items-center justify-center bb bg-background">
      <div className="px-3 py-1 w-full max-w-4xl flex flex-row justify-between items-center bg-background z-100">
        <div className="w-full">
          <Link href="/" className="text-2xl font-bold max-navbar:text-3xl">
            Laurens Schunk
          </Link>
        </div>

        <div className="w-full flex flex-row justify-end gap-5 max-navbar:hidden">
          <Link href="/portfolio" className="text-lg">
            Portfolio
          </Link>
          <Link href="/contact" className="text-lg">
            Contact
          </Link>
        </div>

        <Icon
          ref={iconRef}
          className="navbar:hidden select-none cursor-pointer text-3xl"
          icon={"lucide:align-justify"}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className={`
        origin-top
        transition-transform duration-300 ease-in-out
        ${open ? "scale-y-100 bb" : "scale-y-0"}
        navbar:scale-y-0
        transform
        absolute top-[var(--navbar-height)] left-0 w-full bg-background z-50
        flex flex-col gap-3 py-3 items-center
      `}
      >
        <Link
          href="/portfolio"
          className="text-xl"
          onClick={() => setOpen(false)}
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className="text-xl"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
