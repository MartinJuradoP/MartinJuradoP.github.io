import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'advisory', href: '#advisory' },
    { key: 'experience', href: '#experience' },
    { key: 'writing', href: '#writing' },
    { key: 'speaking', href: '#speaking' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold-500/70 text-2xl font-serif text-slate-50">
            MJ
          </div>
          <div className="leading-none">
            <div className="text-lg tracking-wide text-slate-100">{t('header.brand.line1')}</div>
            <div className="text-lg tracking-wide text-slate-100">{t('header.brand.line2')}</div>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              className="text-sm text-slate-200 transition-colors hover:text-gold-500"
              whileHover={{ y: -2 }}
            >
              {t(`header.nav.${item.key}`)}
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher />

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="btn-outline-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('header.cta')}
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label={t('header.mobileMenuAria')}
        >
          <svg
            className="h-6 w-6 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="border-t border-slate-800 bg-slate-900/95 px-6 py-4 lg:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="space-y-3">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block text-sm text-slate-400 transition-colors hover:text-gold-500"
                onClick={() => setIsOpen(false)}
              >
                {t(`header.nav.${item.key}`)}
              </a>
            ))}
            <LanguageSwitcher className="pt-2" />
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-outline-gold w-full justify-center text-center">
              {t('header.cta')}
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;
