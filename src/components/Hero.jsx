import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profileImage from '../assets/martijp.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut', delay: 0.4 }
  }
};

function Hero() {
  const { t } = useTranslation();
  const badges = t('hero.badges', { returnObjects: true });

  return (
    <section className="relative min-h-screen overflow-hidden pt-40 lg:pt-44">
      {/* Accent gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_55%_40%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_28%,rgba(2,6,23,0)_62%)]" />
      <div className="pointer-events-none absolute right-[-6rem] top-40 hidden h-[34rem] w-[34rem] rounded-full border border-gold-500/20 lg:block" />
      <div className="pointer-events-none absolute right-[-3rem] top-56 hidden h-[25rem] w-[25rem] rounded-full border border-gold-500/10 lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 lg:items-center">
          {/* Left: Text Content */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Accent line */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                  {t('hero.eyebrow')}
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-5xl font-semibold lg:text-7xl leading-tight">
                {t('hero.name.first')}
              </h1>
              <h1 className="text-5xl font-semibold lg:text-7xl leading-tight text-gold-500">
                {t('hero.name.last')}
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <p className="text-xl font-semibold text-gold-500 uppercase tracking-wide">
                {t('hero.category')}
              </p>
              <p className="text-4xl font-medium text-gold-500/95 uppercase tracking-wider leading-tight">
                {t('hero.role')}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base leading-relaxed text-slate-300"
            >
              {t('hero.description')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-sm leading-relaxed text-slate-400"
            >
              {t('hero.proofLine')}
            </motion.p>

            {/* Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-0 text-sm text-slate-400"
            >
              {badges.map((badge, index) => (
                <div key={`${badge}-${index}`} className="contents">
                  {index > 0 && <span className="mx-4 hidden h-4 w-px bg-slate-700/80 sm:block" />}
                  <div className="flex items-center gap-2 py-2">
                    <span className="text-gold-500">◌</span>
                    <span>{badge}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                {t('hero.ctaPrimary')}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#experience" className="btn-secondary">
                {t('hero.ctaSecondary')}
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Portrait Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative hidden min-h-[42rem] lg:flex lg:items-end lg:justify-end"
          >
            {/* Atmospheric glow behind portrait */}
            <div className="absolute right-12 top-8 -z-10 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="absolute right-16 bottom-20 -z-10 h-64 w-64 rounded-full bg-navy-500/25 blur-3xl" />
            <div className="absolute right-0 top-16 -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.06)_42%,rgba(2,6,23,0)_68%)]" />

            <div className="relative translate-x-12">
              <img
                src={profileImage}
                alt={t('hero.imageAlt')}
                className="w-full max-w-[42rem] xl:max-w-[48rem] object-contain object-bottom drop-shadow-[0_26px_70px_rgba(0,0,0,0.65)]"
              />

              {/* Bottom fade to blend with section background */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
