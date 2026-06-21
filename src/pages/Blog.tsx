import { useEffect } from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "skolko-vody-nuzhno-dlya-basseyna",
    title: "Сколько воды нужно для наполнения бассейна и как её доставить",
    date: "15 июня 2026",
    desc: "Рассчитываем объём воды для бассейнов разного размера и объясняем, почему водовоз — самый быстрый способ наполнить его в Новороссийске.",
    tag: "Бассейны",
  },
  {
    slug: "voda-na-stroiku-novorossiysk",
    title: "Вода на стройку в Новороссийске: нормы, расчёт и доставка",
    date: "10 июня 2026",
    desc: "Сколько технической воды нужно для замешивания бетона, кладки кирпича и штукатурки — и как организовать регулярные подвозы водовозом.",
    tag: "Строительство",
  },
  {
    slug: "chem-otlichaetsya-tekhnicheskaya-voda",
    title: "Чем техническая вода отличается от питьевой и где её применяют",
    date: "5 июня 2026",
    desc: "Разбираем разницу между питьевой и технической водой, стандарты качества и сферы применения — от стройки до полива.",
    tag: "Полезно знать",
  },
  {
    slug: "podvoz-vody-na-dachny-uchastok",
    title: "Подвоз воды на дачный участок: когда это выгоднее скважины",
    date: "1 июня 2026",
    desc: "Сравниваем стоимость бурения скважины и регулярного подвоза воды водовозом. Когда доставка выгоднее для сезонного использования.",
    tag: "Частный дом",
  },
  {
    slug: "kak-zakazat-vodovoz-v-novorossiyske",
    title: "Как заказать водовоз в Новороссийске: пошаговая инструкция",
    date: "25 мая 2026",
    desc: "Что нужно подготовить перед приездом машины, как рассчитать нужный объём и что влияет на цену доставки воды.",
    tag: "Инструкция",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Блог о доставке воды — АкваСервис Новороссийск";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.content = content;
    };
    setMeta("description", "Полезные статьи о доставке воды водовозом в Новороссийске: бассейны, стройка, дача, техническая вода. АкваСервис.");
    setOg("og:title", "Блог о доставке воды — АкваСервис Новороссийск");
    setOg("og:description", "Полезные статьи о доставке воды водовозом в Новороссийске: бассейны, стройка, дача, техническая вода.");
    const canon = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (canon) canon.href = "https://vodanovoros.ru/blog";
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "var(--surface)", minHeight: "100vh" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 20px" }}>
        <Link to="/" style={{ color: "var(--blue)", fontSize: 14, textDecoration: "none" }}>
          ← На главную
        </Link>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "var(--ink)", margin: "24px 0 8px" }}>
          Блог о доставке воды
        </h1>
        <p style={{ color: "var(--ink-secondary)", marginBottom: 40, fontSize: 16 }}>
          Полезные статьи об использовании и доставке воды в Новороссийске
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  border: "1px solid var(--border-c)",
                  borderRadius: 12,
                  padding: "24px",
                  background: "var(--surface)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                  <span
                    style={{
                      background: "var(--surface-3)",
                      color: "var(--ink-secondary)",
                      fontSize: 12,
                      fontWeight: 500,
                      padding: "3px 10px",
                      borderRadius: 20,
                    }}
                  >
                    {post.tag}
                  </span>
                  <span style={{ color: "var(--ink-tertiary)", fontSize: 13 }}>{post.date}</span>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)", margin: "0 0 8px" }}>
                  {post.title}
                </h2>
                <p style={{ color: "var(--ink-secondary)", fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                  {post.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}