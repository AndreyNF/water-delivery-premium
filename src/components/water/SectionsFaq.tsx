import Icon from "@/components/ui/icon";
import MaxIcon from "@/components/ui/MaxIcon";
import { useFade, Section, MAX_LINK, PHONE_HREF, PHONE } from "./shared";

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  { q: "Как быстро приедет водовоз?", a: "В большинстве районов Новороссийска — 1–2 часа с момента подтверждения заявки. Мысхако, Цемдолина и отдалённые посёлки — до 3 часов. Принимаем заявки круглосуточно." },
  { q: "Какой минимальный объём заказа?", a: "Минимальный рейс — 7,5 м³ (7 500 литров). Слив воды и подъезд к объекту включены в стоимость." },
  { q: "Сколько стоит доставка водовоза?", a: "Цена зависит от объёма и адреса. Уточните стоимость в Max — ответим за несколько минут и рассчитаем точную цену." },
  { q: "Чем водовоз отличается от доставки 19 литров?", a: "Бутыли 19 л — это питьевая вода небольшими партиями для дома или офиса. Водовоз АкваСервис — машина с ёмкостью от 7,5 м³: одним рейсом заполняем ёмкость на стройке, даче, в бассейне или промобъекте. Мы не доставляем бутыли 19 л." },
  { q: "Как заказать техническую воду водовозом?", a: "Напишите в Max или позвоните: укажите адрес, нужный объём (от 7,5 м³) и задачу — стройка, промобъект, резервуар. Рассчитаем стоимость и время выезда за несколько минут." },
  { q: "Как заполнить бассейн водовозом?", a: "Укажите объём бассейна — рассчитаем количество рейсов. Средний бассейн 30–50 м³ заполняем за 3–5 рейсов по 10 м³. Можем организовать несколько машин одновременно." },
  { q: "Какие документы предоставляете?", a: "Товарная накладная, счёт-фактура (для юрлиц и ИП), сертификаты качества воды — по запросу." },
  { q: "Как оплатить?", a: "Наличными, картой или банковским переводом. Для организаций — по счёту. Оплата после доставки." },
];

function FaqRow({ item, delay }: { item: FaqItem; delay: number }) {
  const f = useFade(delay);
  return (
    <details ref={f.ref} style={f.style} className="faq-item faq-details">
      <summary className="faq-btn faq-summary">
        <span style={{ fontSize: 16, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.02em", paddingRight: 16 }}>
          {item.q}
        </span>
        <div className="faq-toggle-icon">
          <Icon name="Plus" size={14} style={{ color: "var(--ink)" }} />
        </div>
      </summary>
      <div className="faq-answer">
        <p className="t-body" style={{ fontSize: 15 }}>{item.a}</p>
      </div>
    </details>
  );
}

export function FaqSection() {
  const header = useFade(0);

  return (
    <Section id="faq">
      <div ref={header.ref} style={header.style} className="mb-12">
        <p className="t-label mb-3">Частые вопросы</p>
        <h2 className="t-headline">FAQ</h2>
      </div>
      <div style={{ maxWidth: 680 }}>
        {FAQS.map((item, i) => (
          <FaqRow key={item.q} item={item} delay={i * 50} />
        ))}
      </div>
    </Section>
  );
}

export function ContactSection() {
  const f1 = useFade(0);
  const f2 = useFade(100);

  return (
    <section
      id="contact"
      style={{ background: "var(--ink)", paddingTop: "clamp(64px,8vw,112px)", paddingBottom: "clamp(64px,8vw,112px)" }}
    >
      <div className="section-wrap">
        <div ref={f1.ref} style={f1.style} className="mb-10">
          <p className="t-label mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Контакты</p>
          <h2 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 600, letterSpacing: "-0.04em", color: "white", lineHeight: 1.1, maxWidth: 560 }}>
            Закажите водовоз прямо сейчас
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.55)", marginTop: 16, maxWidth: 420, lineHeight: 1.65 }}>
            От 7,5 м³ воды на ваш объект. Выезжаем в течение 1–3 часов, работаем без выходных.
          </p>
        </div>

        <div
          className="mb-10 grid gap-4 sm:grid-cols-2"
          style={{ maxWidth: 520 }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "20px 22px",
            }}
          >
            <p className="t-label mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Телефон</p>
            <a
              href={PHONE_HREF}
              style={{
                display: "block",
                fontSize: "clamp(22px, 4vw, 28px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "white",
                textDecoration: "none",
                lineHeight: 1.2,
              }}
            >
              {PHONE}
            </a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>
              Звоните — принимаем заявки 24/7
            </p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "20px 22px",
            }}
          >
            <p className="t-label mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Max</p>
            <a
              href={MAX_LINK}
              target="_blank"
              rel="noopener"
              style={{
                display: "block",
                fontSize: 17,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#C4B5FD",
                textDecoration: "none",
                lineHeight: 1.3,
              }}
            >
              Написать в Max
            </a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 8 }}>
              Ответим за несколько минут
            </p>
          </div>
        </div>

        <div ref={f2.ref} style={f2.style} className="mb-14">
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={MAX_LINK} target="_blank" rel="noopener"
              className="btn-max sm:w-auto w-full justify-center"
              style={{ fontSize: 15, padding: "14px 20px", borderRadius: 16 }}
            >
              <MaxIcon size={19} /> Написать в Max
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 sm:w-auto w-full transition-all hover:bg-white/10"
              style={{
                fontSize: 16,
                fontWeight: 600,
                padding: "16px 28px",
                borderRadius: 16,
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "white",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              <Icon name="Phone" size={18} /> {PHONE}
            </a>
          </div>

          <div
            className="md:hidden mt-4 flex items-center gap-2 justify-center"
            style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}
          >
            <Icon name="Info" size={13} />
            Минимальный объём — 7,5 м³ (7 500 литров)
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)" }}>
              <Icon name="Droplets" size={13} className="text-white" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>АкваСервис Новороссийск</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            © 2026 ·{" "}
            <a href={PHONE_HREF} style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
              {PHONE}
            </a>
            {" · "}Доставка воды водовозом · 24/7
          </p>
        </div>
      </div>
    </section>
  );
}

export function FloatingWA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={PHONE_HREF}
        title={`Позвонить ${PHONE}`}
        aria-label={`Позвонить ${PHONE}`}
        className="flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--ink)",
          boxShadow: "0 4px 20px rgba(10,15,30,0.35)",
        }}
      >
        <Icon name="Phone" size={22} />
      </a>
      <a
        href={MAX_LINK}
        target="_blank"
        rel="noopener"
        title="Написать в Max"
        aria-label="Написать в Max"
        className="flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--max)",
          boxShadow: "0 4px 20px rgba(109, 76, 255, 0.45)",
        }}
      >
        <MaxIcon size={24} />
      </a>
    </div>
  );
}