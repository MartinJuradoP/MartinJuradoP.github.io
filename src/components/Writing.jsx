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

function Writing() {
  const { t } = useTranslation();
  const topics = t('writing.topics', { returnObjects: true });

  return (
    <section id="writing" className="space-y-8 py-20 lg:py-32">
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
              {t('writing.label')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold lg:text-5xl">
            {t('writing.title')}
          </h2>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base leading-relaxed text-slate-300">
          {t('writing.intro', { bookTitle: t('writing.bookTitle') })}
        </motion.p>

        <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {topics.map((topic) => (
            <div key={topic} className="glass p-4 text-sm text-slate-300">
              {topic}
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4 pt-2 sm:flex-row">
          <a
            href="https://medium.com/@martin.jurado.p"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {t('writing.ctaPrimary')}
          </a>
          <a
            href="https://medium.com/@martin.jurado.p"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            {t('writing.ctaSecondary')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Writing;
