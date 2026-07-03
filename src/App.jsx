import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advisory from './components/Advisory';
import Experience from './components/Experience';
import Writing from './components/Writing';
import Speaking from './components/Speaking';
import ProofSignals from './components/ProofSignals';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const SITE_URL = 'https://martinjuradop.github.io/';
const OG_IMAGE_URL = `${SITE_URL}og-image.png`;
const SITE_HANDLE = 'https://www.linkedin.com/in/martin-jurado-pedroza-678205182/';

const LANG_META = {
  en: {
    title: 'Martin Jurado Pedroza | Executive Advisor',
    description:
      'Executive advisor in technology, data, and AI. Martin Jurado Pedroza helps leadership teams and boards align strategy, architecture, and execution for measurable business impact.',
    ogLocale: 'en_US',
    localeLink: 'en',
    keywords:
      'Martin Jurado Pedroza, Executive Advisor, AI Strategy, Data Strategy, Technology Transformation, CTO Advisor, CDAO Advisor, CAIO Advisor, board advisory, executive coaching, data governance'
  },
  es: {
    title: 'Martin Jurado Pedroza | Asesor Ejecutivo',
    description:
      'Asesor ejecutivo en tecnología, datos e IA. Martin Jurado Pedroza ayuda a equipos directivos y consejos a alinear estrategia, arquitectura y ejecución para impacto empresarial medible.',
    ogLocale: 'es_MX',
    localeLink: 'es',
    keywords:
      'Martin Jurado Pedroza, Asesor Ejecutivo, Estrategia de IA, Estrategia de Datos, Transformación Digital, Asesoría para consejos, CTO Advisory, CDAO, CAIO'
  }
};

function getCanonicalUrl() {
  return `${SITE_URL}`;
}

function getLocalizedUrl(language) {
  const normalized = language === 'es' ? 'es' : 'en';
  return `${SITE_URL}?lang=${normalized}`;
}

function upsertMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLinkTag(rel, attrs = {}, href) {
  const selector = Object.entries(attrs).reduce(
    (result, [key, value]) => `${result}[${key}="${value}"]`,
    `link[rel="${rel}"]`
  );
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    Object.entries(attrs).forEach(([key, value]) => {
      tag.setAttribute(key, value);
    });
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function upsertJsonLd(tagId, payload) {
  let tag = document.head.querySelector(`#${tagId}`);
  if (!tag) {
    tag = document.createElement('script');
    tag.setAttribute('type', 'application/ld+json');
    tag.setAttribute('id', tagId);
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(payload);
}

function buildSchemaForLanguage(language, t) {
  const description = t('seo.profileDescription');
  const expertise = t('about.expertise.items', { returnObjects: true }) || [];
  const proof = t('proof', { returnObjects: true }) || {};
  const faq = t('faq.questions', { returnObjects: true }) || [];
  const schemaLanguage = language === 'es' ? 'es' : 'en';
  const canonical = getCanonicalUrl();
  const localizedUrl = getLocalizedUrl(language);

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('header.nav.about'), item: `${SITE_URL}#about` },
      { '@type': 'ListItem', position: 2, name: t('header.nav.advisory'), item: `${SITE_URL}#advisory` },
      { '@type': 'ListItem', position: 3, name: t('header.nav.experience'), item: `${SITE_URL}#experience` },
      { '@type': 'ListItem', position: 4, name: t('header.nav.writing'), item: `${SITE_URL}#writing` },
      { '@type': 'ListItem', position: 5, name: t('header.nav.speaking'), item: `${SITE_URL}#speaking` },
      { '@type': 'ListItem', position: 6, name: t('header.nav.proof'), item: `${SITE_URL}#proof` },
      { '@type': 'ListItem', position: 7, name: t('header.nav.faq'), item: `${SITE_URL}#faq` },
      { '@type': 'ListItem', position: 8, name: t('header.nav.contact'), item: `${SITE_URL}#contact` }
    ]
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Martin Jurado Pedroza',
    url: SITE_URL,
    image: OG_IMAGE_URL,
    jobTitle: language === 'es' ? 'Asesor Ejecutivo' : 'Executive Advisor',
    description,
    sameAs: [SITE_HANDLE, 'https://medium.com/@martin.jurado.p'],
    knowsAbout: expertise.map((item) => item.title).filter(Boolean),
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Executive Advisor'
    },
    hasCredential: proof.credentials || [],
    subjectOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`
    }
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: 'Martin Jurado Pedroza',
    description: t('hero.description'),
    inLanguage: ['en', 'es'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${localizedUrl}#webpage`,
    url: localizedUrl,
    name: t('header.brand.line1') + ' ' + t('header.brand.line2'),
    description,
    inLanguage: schemaLanguage,
    isPartOf: { '@id': `${SITE_URL}#website` },
    breadcrumb: { '@id': `${SITE_URL}#breadcrumb` }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}#faqpage`,
    mainEntity: faq
      .filter((item) => item?.question && item?.answer)
      .map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [webSiteSchema, personSchema, webPageSchema, breadcrumb, faqSchema]
  };
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en';
    const seo = LANG_META[language];
    const t = i18n.getFixedT(language);
  const canonical = getCanonicalUrl();
  const localizedUrl = getLocalizedUrl(language);

    document.title = seo.title;
    document.documentElement.lang = language;

    upsertMetaTag('name', 'keywords', seo.keywords);
    upsertMetaTag('name', 'description', seo.description);
    upsertMetaTag('name', 'twitter:image:alt', t('seo.twitterImageAlt'));
    upsertMetaTag('name', 'twitter:description', seo.description);
    upsertMetaTag('property', 'og:title', seo.title);
    upsertMetaTag('property', 'og:description', seo.description);
    upsertMetaTag('property', 'og:locale', seo.ogLocale);
    upsertMetaTag('property', 'og:locale:alternate', language === 'es' ? 'en_US' : 'es_MX');
    upsertMetaTag('property', 'og:url', localizedUrl);
    upsertMetaTag('property', 'og:image', OG_IMAGE_URL);
    upsertMetaTag('name', 'twitter:image', OG_IMAGE_URL);
    upsertMetaTag('name', 'twitter:title', seo.title);
    upsertMetaTag('name', 'twitter:site', '@' + t('seo.socialHandle'));

    upsertLinkTag('canonical', {}, canonical);
    upsertLinkTag('alternate', { rel: 'alternate', hreflang: 'en' }, `${SITE_URL}?lang=en`);
    upsertLinkTag('alternate', { rel: 'alternate', hreflang: 'es' }, `${SITE_URL}?lang=es`);
    upsertLinkTag('alternate', { rel: 'alternate', hreflang: 'x-default' }, SITE_URL);

    upsertJsonLd('martin-person-jsonld', buildSchemaForLanguage(language, t));
  }, [i18n.resolvedLanguage]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Header />
      <main>
        {/* Hero: Full width */}
        <Hero />

        {/* Remaining sections: Contained */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <About />
          <Advisory />
          <Experience />
          <Writing />
          <Speaking />
          <ProofSignals />
          <FAQ />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
