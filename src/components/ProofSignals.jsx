import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

function ProofSignals() {
  const { t } = useTranslation();
  const metrics = t('proof.metrics', { returnObjects: true }) || [];
  const credentials = t('proof.credentials', { returnObjects: true }) || [];

  return (
    <section id="proof" className="space-y-8 py-20 lg:py-32">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              {t('proof.label')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold lg:text-5xl">{t('proof.title')}</h2>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300">{t('proof.intro')}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <div
              key={`${metric.label}-${index}`}
              className="rounded-lg border border-slate-800/60 bg-slate-900/45 p-4"
            >
              <p className="text-3xl font-semibold text-gold-500">{metric.value}</p>
              <p className="text-sm text-slate-300">{metric.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {credentials.map((item, index) => (
            <li key={`${item}-${index}`} className="glass p-4 text-sm text-slate-200">
              {item}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default ProofSignals;
