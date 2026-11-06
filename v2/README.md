# Strike Performance Club — beide websiteconcepten

Dit archief bevat **Concept A (Strike Arena)** en **Concept B (Strike Elevate)** samen in **één direct te deployen statische website**.

## Openen na deployment

- `/` — overzicht met beide concepten
- `/concept-a/` — Concept A, de krachtige/donkere stijl
- `/concept-b/` — Concept B, de modernere/lichtere stijl

## Deployen met Claude Code

1. Pak de ZIP uit in een lege projectmap.
2. Open deze map in Claude Code.
3. Vraag Claude: *"Deploy dit statische HTML-project inclusief alle submappen; behoud de routes /, /concept-a/ en /concept-b/. Wijzig de styling niet. Geef me na deployment drie publieke links."*
4. Gebruik bij voorkeur GitHub Pages, Cloudflare Pages, Netlify of Vercel. Dit zijn **statische HTML-bestanden**; er is geen npm-installatie of buildproces nodig.

### Direct deployen (statisch)

- **Netlify:** kies *Deploy manually* en upload de **uitgepakte map** (of volg de opties van het platform).
- **Vercel:** importeer de map als static site, zonder build command; output is de projectroot.
- **GitHub Pages:** zet de inhoud in de root van de gepubliceerde branch, activeer Pages. `.nojekyll` is inbegrepen.

## Mappenstructuur

```
index.html             ← keuze tussen A/B
concept-a/index.html   ← Concept A (zelfstandige HTML)
concept-b/index.html   ← Concept B (zelfstandige HTML)
previews/              ← screenshots desktop/mobiel
.nojekyll              ← GitHub Pages
README.md
CLAUDE.md
```

## Huisstijl

Beide concepten gebruiken **zwart #000000, voltgeel #E8F500, wit #FFFFFF** zoals de oorspronkelijke Strike Performance Club-website. De structuur is doelbewust niet hetzelfde: beide zijn bedoeld om als klantopties te vergelijken.

## Livegang / belangrijke beperkingen

- De login, reserveringsflow, lesbezetting en andere interactieve onderdelen zijn **frontend-demonstraties**, geen productie-backend.
- Reserveringen worden lokaal in de browser opgeslagen: verschillende bezoekers delen **geen live bezetting**.
- Er zijn nog **geen echte Mollie-betalingen** of automatische bevestigingsmails. Een productie-implementatie moet betalingen server-side via webhooks valideren en alleen daarna de accounttoegang activeren.
- De webshop vereist een daadwerkelijke Shopify-store, bijvoorbeeld `shop.strikeperformanceclub.nl`, inclusief domeininstellingen en Shopify-kortingsregels voor leden.
- Echte ledenkorting vereist veilige controle of iemand een geldig abonnement heeft; frontend-login alleen is niet voldoende.
- Controleer vóór publicatie alle prijzen, roosterdata, contactgegevens, verwijzingen, testimonials en beeldrechten. Demo-afbeeldingen zijn niet automatisch goedgekeurd voor commercieel gebruik.

## Als de klant heeft gekozen

Verplaats de inhoud van `concept-a/index.html` of `concept-b/index.html` naar `/index.html` als definitieve homepagina, of behoud de demostructuur op een preview-domein. Eerst backend/checkout integreren voordat je live reserveringen accepteert.
