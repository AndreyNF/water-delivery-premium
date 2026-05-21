import Icon from "@/components/ui/icon";
import MaxIcon from "@/components/ui/MaxIcon";
import { useFade, Section, SectionHeader, MAX_LINK } from "./shared";

const COMPARE_ROWS: [string, string, string][] = [
  ["Объём за заказ", "19–38 л (1–2 бутыли)", "От 7,5 м³ (7 500 л)"],
  ["Минимальный заказ", "1 бутыль 19 л", "7,5 м³ за рейс"],
  ["Для чего", "Питьевая вода в офис / дом", "Стройка, бассейн, ёмкость, пром"],
  ["Срок доставки", "По графику поставщика", "1–3 часа по Новороссийску"],
  ["Что мы делаем", "—", "Водовоз сливает в вашу ёмкость"],
];

export function CompareVs19Section() {
  const f = useFade(0);

  return (
    <Section id="compare" bg="#fff" py="clamp(40px,5vw,64px)">
      <div ref={f.ref} style={f.style}>
        <SectionHeader
          label="Важно"
          title={<>Водовоз — не доставка<br />бутылей 19 л</>}
        />
        <p className="t-body mb-8" style={{ maxWidth: 560 }}>
          По запросу «доставка воды Новороссийск» чаще ищут бутилированную воду. АкваСервис —
          <strong> водовоз от 7,5 м³</strong> для стройки, дома, бассейна и промышленных объектов.
        </p>
        <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--border-c)" }}>
          <table className="w-full text-left" style={{ minWidth: 520, borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#F9FAFB", borderBottom: "1px solid var(--border-c)" }}>
                <th style={{ padding: "14px 16px", fontSize: 12, fontWeight: 600, color: "var(--ink-tertiary)", textTransform: "uppercase", letterSpacing: "0.05em" }} />
                <th style={{ padding: "14px 16px", fontSize: 14, fontWeight: 600, color: "var(--ink-secondary)" }}>19 л бутыли</th>
                <th style={{ padding: "14px 16px", fontSize: 14, fontWeight: 600, color: "#0071E3" }}>Водовоз АкваСервис</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(([label, bottle, tanker]) => (
                <tr key={label} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "14px 16px", fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{label}</td>
                  <td style={{ padding: "14px 16px", fontSize: 14, color: "var(--ink-secondary)" }}>{bottle}</td>
                  <td style={{ padding: "14px 16px", fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{tanker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

export function TechnicalWaterSection() {
  const f1 = useFade(0);
  const f2 = useFade(80);

  return (
    <Section id="services-technical" bg="#F9FAFB">
      <div ref={f1.ref} style={f1.style} className="mb-10">
        <p className="t-label mb-3">Техническая вода</p>
        <h2 className="t-headline mb-4">Техническая вода водовозом</h2>
        <p className="t-body" style={{ maxWidth: 640 }}>
          Доставляем техническую воду водовозом от 7,5 м³ на стройку, промышленные объекты
          и частные ёмкости. Подходит для замеса бетона, уплотнения грунта, пылеподавления
          и других технических задач — когда нужен объём, а не бутыли.
        </p>
      </div>

      <div ref={f2.ref} style={f2.style} className="grid md:grid-cols-2 gap-6 mb-8">
        <div style={{ background: "white", border: "1px solid #EAECF0", borderRadius: 16, padding: 24 }}>
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#F0F4FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="HardHat" size={21} style={{ color: "#0071E3" }} />
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>Куда возим</h3>
          </div>
          <ul className="space-y-2 t-small" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Строительные площадки и бетонные работы", "Заполнение накопительных ёмкостей", "Промышленные и складские объекты", "Пожарные резервуары и водоёмы"].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span style={{ color: "#0071E3", marginTop: 2 }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: "white", border: "1px solid #EAECF0", borderRadius: 16, padding: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>Чем отличается от питьевой?</h3>
          <p className="t-small mb-4">
            Техническая вода предназначена для хозяйственных и строительных нужд, не для питья
            из-под крана без обработки. Для питьевого водоснабжения и бассейнов — отдельная
            питьевая вода водовозом, с сертификатами по запросу.
          </p>
          <p className="t-small" style={{ color: "var(--ink-tertiary)" }}>
            Объёмы: 7,5 м³ и 10 м³ за рейс. Слив и подъезд к объекту — включены.
          </p>
        </div>
      </div>

      <a href={MAX_LINK} target="_blank" rel="noopener" className="btn-apple text-sm px-7 py-3">
        <MaxIcon size={17} />
        Рассчитать объём в Max
      </a>
    </Section>
  );
}
