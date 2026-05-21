import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { MAX_LINK, PHONE, PHONE_HREF } from "./shared";

const NAV = [
  ["Объёмы", "#volumes"],
  ["Услуги", "#services"],
  ["Цены", "#pricing"],
  ["FAQ", "#faq"],
  ["Контакты", "#contact"],
];

export default function AppleHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.72)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        }}
      >
        <div className="section-wrap-wide h-[52px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 no-underline" style={{ textDecoration: "none" }}>
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "var(--ink)" }}
            >
              <Icon name="Droplets" size={15} className="text-white" />
            </div>
            <span className="font-semibold text-sm tracking-tight" style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}>
              АкваСервис
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(([l, h]) => (
              <a key={l} href={h} className="nav-link">{l}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={PHONE_HREF} className="nav-link flex items-center gap-1.5">
              <Icon name="Phone" size={13} />
              {PHONE}
            </a>
            <a href={MAX_LINK} target="_blank" rel="noopener" className="btn-apple text-sm px-5 py-2.5">
              Написать в Max
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href={PHONE_HREF}
              aria-label={`Позвонить ${PHONE}`}
              className="flex items-center justify-center"
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "#EFF6FF",
                color: "#0071E3",
                textDecoration: "none",
              }}
            >
              <Icon name="Phone" size={18} />
            </a>
            <button
              className="flex items-center justify-center w-8 h-8"
              onClick={() => setMob(!mob)}
              style={{ color: "var(--ink)" }}
              aria-label="Меню"
            >
              <Icon name={mob ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {mob && (
          <div
            className="md:hidden px-6 pt-2 pb-6 space-y-0"
            style={{ borderTop: "1px solid var(--border-c)" }}
          >
            {NAV.map(([l, h]) => (
              <a
                key={l}
                href={h}
                onClick={() => setMob(false)}
                className="flex items-center justify-between py-4 text-sm font-medium"
                style={{ color: "var(--ink)", borderBottom: "1px solid var(--border-subtle)" }}
              >
                {l}
                <Icon name="ChevronRight" size={15} style={{ color: "var(--ink-tertiary)" }} />
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-5">
              <a href={MAX_LINK} target="_blank" rel="noopener" className="btn-apple w-full justify-center">
                Написать в Max
              </a>
              <a href={PHONE_HREF} className="btn-apple-outline w-full justify-center">
                <Icon name="Phone" size={15} /> {PHONE}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
