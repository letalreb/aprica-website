# Aprica Mountain Lodge - Next.js Website

Sito statico in Next.js per case vacanze ad Aprica, ottimizzato per AI e SEO.

## �️ Benvenuti nelle Vostre Nuove Case Vacanza in Montagna

Scoprite il piacere di una vacanza in montagna senza rinunciare a nessun comfort. I nostri splendidi appartamenti di **nuova costruzione, appena ultimati**, sono pensati per offrirvi relax, praticità e un'atmosfera accogliente in ogni stagione.

### ✨ Comfort Moderni
Ogni appartamento è completamente arredato e dotato di:
- 🧺 **Lavatrice e lavastoviglie**
- 📶 **Wi-Fi veloce**
- 📺 **Netflix e TV**
- 🚿 **Bagno elegante con doccia**
- 🚗 **Garage privato**

## �🎯 Caratteristiche Principali

### AI-First Architecture
- **JSON-LD Schema.org**: Dati strutturati completi per ogni pagina
- **Tag HTML5 Semantici**: `<article>`, `<section>`, `<aside>` per estrazione dati AI
- **Data Summary Sections**: Fatti strutturati per LLM e AI Search Agents
- **FAQ Strutturate**: Schema FAQ per zero-click searches
- **Knowledge Graph**: Collegamenti a entità note (Bernina Express, Mortirolo, etc.)

### SEO Optimization
- **Next.js Metadata API**: Title, description, canonical, Open Graph
- **Multilingua**: Supporto IT/EN tramite dizionari JSON
- **Breadcrumb Navigation**: Schema breadcrumb per navigazione
- **Structured Data**: Organization, LodgingBusiness, Accommodation schemas

### Contenuti
- 4 appartamenti di nuova costruzione (20 posti letto totali)
- Design moderno con slideshow homepage
- Galleria fotografica con 20+ immagini
- Guida locale Valtellina
- FAQ dinamiche
- Testi accoglienti in IT/EN
- Dati ottimizzati per AI agents

## 🚀 Avvio Rapido

```bash
# Installa dipendenze
npm install

# Avvia server di sviluppo
npm run dev

# Build statico per produzione
npm run build
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura Progetto

```
aprica-website/ con slideshow
│   ├── appartamenti/                 
│   │   └── page.tsx                  # Lista appartamenti
│   ├── appartamento/[slug]/page.tsx  # Pagine appartamenti dinamiche
│   ├── galleria/page.tsx            # Galleria fotografica
│   ├── guida-valtellina/page.tsx    # Guida locale
│   └── faq/page.tsx                 # FAQ page
├── components/
│   ├── RichDataGenerator.tsx         # Generatore JSON-LD centralizzato
│   ├── HeroSlideshow.tsx            # Slideshow homepage
│   ├── ApartmentCard.tsx            # Card appartamento moderna
│   ├── ImageGallery.tsx             # Galleria immagini
│   ├── FAQSection.tsx               # Sezione FAQ con schema
│   ├── DataSummary.tsx              # Componente dati in sintesi
│   └── FeatureList.tsx              # Lista caratteristiche semantica
├── data/
│   └── appartamenti.json            # Dati appartamenti e struttura
├── locales/
│   ├── it.json                      # Dizionario italiano (testi completi)
│   └── en.json                      # Dizionario inglese (testi completi)
├── public/
│   └── images/                      # 20+ immagini degli appartamentie struttura
├── locales/
│   ├── it.json                      # Dizionario italiano
│   └── en.json                      # Dizionario inglese
├── types/
│   └── schema.ts                    # Type definitions Schema.org
└── next.config.js                   # Configurazione Next.js
```

## 🧩 Componenti Principali Richiesti

### 1. RichDataGenerator.tsx
Componente centralizzato per JSON-LD con funzioni:
- `generateOrganizationSchema()`
- `generateLodgingBusinessSchema()`
- `generateAccommodationSchema(apartment)`
- `generateBreadcrumbSchema(items)`
- `generateFAQSchema(faqs)`

### 2. layout.tsx
Layout principale con:
- Metadata API completi
- Navigation semantica con ARIA
- Footer strutturato
- JSON-LD globale (Organization, LodgingBusiness)

### 3. appartamento/[slug]/page.tsx
- Generazione statica per tutti gli appartamenti
- Metadata dinamici
- JSON-LD: Accommodation + Breadcrumb
- Sezioni "Dati in Sintesi" per AI
- Microdata Schema.org inline

## 🤖 Ottimizzazione per AI

### Attributi Speciali
```html
<section data-ai-extract="key-facts">
  <!-- Contenuto facilmente estraibile da LLM -->
</section>
```

### Structured Data
Ogni pagina include JSON-LD completo per:
- Organization
- LodgingBusiness
- Apartment (per ogni appartamento)
- BreadcrumbList
- FA� Design Moderno

### Slideshow Homepage
- Hero slideshow con 4 slide animate
- Transizioni fluide automatiche
- Controlli di navigazione intuitivi
- Overlay con gradient elegante

### Componenti Moderni
- **ApartmentCard**: Card elegante con hover effects
- **ImageGallery**: Griglia responsive con zoom
- **HeroSlideshow**: Carousel automatico con controlli
- Design pulito con shadow e gradients

### Colori & Style
- Palette brand (Aprica Blue, Green, Snow)
- Animazioni smooth su tutti gli elementi
- Responsive mobile-first
- Glassmorphism e backdrop blur

## �QPage

### Contenuti Strutturati
- Liste puntate chiare
- Dati numerici espliciti (20 posti, 400 metri, 4 appartamenti)
- Entità geografiche linkate (Bernina, Mortirolo)
- FAQ con domande reali dei turisti

## 🌍 Multilingua

Gestione tramite dizionari JSON in `/locales/`:
- `it.json` - Italiano
- `en.json` - English

## 🎨 Personalizzazione

### Domini e URL
Aggiorna `BASE_URL` in `components/RichDataGenerator.tsx`:
```typescript
const BASE_URL = 'https://tuodominio.it';
```

### Dati Struttura
Modifica `/data/appartamenti.json` per aggiornare informazioni

## 📊 SEO Best Practices Implementate

✅ Metadata API completi per ogni pagina  
✅ JSON-LD Schema.org su tutte le pagine  
✅ Tag semantici HTML5  
✅ ARIA labels per accessibilità  
✅ Breadcrumb navigation  
✅ Canonical URLs  
✅ Open Graph e Twitter Cards  
✅ Microdata inline  

---

**Sviluppato con ❤️ per Aprica Mountain Lodge**
