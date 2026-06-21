# 01. Инвентаризация сайта

**URL:** https://vodanovoros.ru/  
**Статус:** ✅ **200 OK**, custom domain (Caddy/nginx)

## SEO / техника

| Элемент | Статус | Комментарий |
|---|---|---|
| Title | ✅ | «Доставка воды водовозом Новороссийск — от 7,5 м³ \| АкваСервис» |
| Meta description | ✅ | Max + телефон, водовоз, не 19л |
| Canonical | ✅ | https://vodanovoros.ru/ |
| H1 (SPA) | ✅ | водовоз от 7,5 м³ |
| Schema LocalBusiness | ✅ | telephone +79883174484, areaServed |
| Schema FAQPage | ✅ | 7 вопросов |
| Яндекс.Вебмастер | ✅ | meta verification |
| Google Search Console | ✅ | meta verification |
| Метрика | ✅ | ym(109349401) prod + ym(101026698) poehali |
| OG/Twitter | ✅ | |

## Контент / блоки (SPA)

| Якорь | Статус | Комментарий |
|---|---|---|
| `#compare` | ✅ | водовоз vs 19л |
| `#services-technical` | ✅ | техническая вода |
| `#volumes` | ✅ | объёмы 7,5 / 10 м³ |
| `#services` | ✅ | услуги |
| `#faq` | ✅ | FAQ в DOM (`<details>`) |
| `#contact` | ✅ | телефон + Max |
| Цены «от X ₽» | ❌ | нет прайса |
| `#pricing` | ⚠️ | блок есть, без цифр |

## CTA

| Канал | Статус |
|---|---|
| Телефон +7 (988) 317-44-84 | ✅ шапка, hero, контакты, static bar |
| Max | ✅ кнопки + MaxIcon |
| Плавающие кнопки | ✅ звонок + Max |

## Замечания (P1)

1. **Дубль Метрики** — два счётчика на одной странице.
2. **Static phone bar** — синяя полоска сверху дублирует шапку (можно убрать после стабилизации).
3. **sameAs** в schema — `https://max.ru/` без профиля.
4. **trustedDomains** в старом счётчике — только poehali.dev, не vodanovoros.ru.

## Что уже хорошо (vs preview)

P0 SEO внедрены: позиционирование водовоза, телефон prod, техническая вода, сравнение с 19л, FAQ в DOM.
