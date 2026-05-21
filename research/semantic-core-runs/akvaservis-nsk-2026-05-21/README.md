# Семантическое ядро: АкваСервис (Новороссийск)

**Дата прогона:** 2026-05-21  
**Проект:** доставка воды водовозом от 7,5 м³  
**Preview:** https://water-delivery-premium--preview.poehali.dev/  
**Production target:** https://akvaservis-nsk.ru/

## Состав пакета

| Файл | Назначение |
|---|---|
| `index.html` | Главный отчёт «всё в одном» |
| `semantic-core.xlsx` | Excel-книга для работы в таблицах |
| `00-brief.md` | Входные данные и границы |
| `01-site-inventory.md` | Инвентаризация лендинга |
| `02-seed-map.md` | Карта seed-семейств |
| `03-wordstat-raw.csv` | Сырые данные Wordstat (MCP Kovcheg) |
| `04-keywords-clean.csv` | Очищенные запросы |
| `05-clusters.csv` | Кластеры и приоритеты |
| `06-url-map.csv` | Карта URL |
| `07-content-briefs.md` | Контент-брифы P0/P1 |
| `08-serp-geo-notes.md` | SERP/GEO/AI заметки |
| `09-quality-report.md` | Качество и ограничения |
| `10-todo.md` | TODO после исследования |
| `12-implementation-roadmap.md` | Roadmap 7/30/90 дней |

## Ключевые цифры

- Wordstat-вызовов: **23**
- Сырых строк: **~120** (с no-data seeds)
- Очищенных запросов (include): **46**
- Кластеров: **10**

## Регион Wordstat

- Основной гео-фокус: **Новороссийск ID 970**
- Расширение спроса: **Краснодарский край ID 10995** (прокси для низкого локального объёма)

## Генерация отчётов

```bash
python scripts/build_core_html_report.py research/semantic-core-runs/akvaservis-nsk-2026-05-21/
python scripts/build_semantic_core_xlsx.py research/semantic-core-runs/akvaservis-nsk-2026-05-21/
```
