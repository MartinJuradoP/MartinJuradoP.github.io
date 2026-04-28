import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Advisory from './components/Advisory';
import Experience from './components/Experience';
import Writing from './components/Writing';
import Speaking from './components/Speaking';
import Contact from './components/Contact';

const SITE_URL = 'https://martinjuradop.github.io/';
const OG_IMAGE_URL = `${SITE_URL}og-image.png`;

const SEO_BY_LANGUAGE = {
  en: {
    title: 'Martin Jurado Pedroza | Executive Advisor',
    description:
      'Executive advisor in technology, data, and AI. Martin Jurado Pedroza helps leadership teams align strategy, architecture, and execution for measurable business impact.',
    ogLocale: 'en_US'
  },
  es: {
    title: 'Martin Jurado Pedroza | Asesor Ejecutivo',
    description:
      'Asesor ejecutivo en tecnologia, datos e IA. Martin Jurado Pedroza ayuda a equipos directivos a alinear estrategia, arquitectura y ejecucion para impacto medible.',
    ogLocale: 'es_MX'
  }
};

function upsertMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en';
    const seo = SEO_BY_LANGUAGE[language];

    document.title = seo.title;
    document.documentElement.lang = language;

    upsertMetaTag('name', 'description', seo.description);
    upsertMetaTag('property', 'og:title', seo.title);
    upsertMetaTag('property', 'og:description', seo.description);
    upsertMetaTag('property', 'og:url', SITE_URL);
    upsertMetaTag('property', 'og:image', OG_IMAGE_URL);
    upsertMetaTag('property', 'og:locale', seo.ogLocale);
    upsertMetaTag('name', 'twitter:title', seo.title);
    upsertMetaTag('name', 'twitter:description', seo.description);
    upsertMetaTag('name', 'twitter:image', OG_IMAGE_URL);
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
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
