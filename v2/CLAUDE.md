# Instructies voor Claude Code — STRIKE

**Doel:** Deploy **beide** websiteconcepten met **één deploy**. Niet één van de twee overschrijven. Gebruik de mapstructuur zoals aangeleverd.

- Root `/` = vergelijking/keuzepagina in `index.html`.
- `/concept-a/` = `concept-a/index.html` (Arena).
- `/concept-b/` = `concept-b/index.html` (Elevate).
- Bewaar merkkleuren: zwart `#000000`, voltgeel `#E8F500`, wit `#FFFFFF`.
- Beide HTML-pagina's zijn standalone; verander geen interne routes tenzij nodig voor de gekozen host.
- Geen build tooling introduceren als dat niet hoeft. Publiceer als statische bestanden.
- Test na deploy expliciet: 3 routes (/, /concept-a/, /concept-b/), mobiel menu en lesrooster-demo.
- Behandel reserveringen, login, Mollie, Shopify en e-mail als **demo**, nooit claimen dat transacties of bevestigingen productie-klaar zijn.
- Geef de gebruiker na deployment de publieke URL's van alle drie routes, en vermeld welke integraties nog ontbreken.
