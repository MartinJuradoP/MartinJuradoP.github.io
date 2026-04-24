import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

function Experience() {
  const { t } = useTranslation();
  const bullets = t('experience.bullets', { returnObjects: true });

  return (
    <section id="experience" className="space-y-8 py-20 lg:py-32">
      <motion.div
        className="space-y-6 max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              {t('header.nav.experience')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold lg:text-5xl">{t('experience.title')}</h2>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base leading-relaxed text-slate-300">
          {t('experience.intro')}
        </motion.p>

        <motion.ul variants={itemVariants} className="space-y-3 text-sm text-slate-300">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-gold-500">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default Experience;
