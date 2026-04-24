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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: custom * 0.1 }
  })
};

function Advisory() {
  const { t } = useTranslation();
  const advisoryCards = t('advisory.cards', { returnObjects: true });
  const advisoryStats = t('advisory.stats', { returnObjects: true });

  return (
    <section id="advisory" className="relative space-y-16 py-20 lg:py-32">
      {/* Header */}
      <motion.div
        className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              {t('advisory.label')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold lg:text-5xl">
            {t('advisory.title')}
          </h2>
        </div>

        <div className="self-center space-y-3">
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base leading-relaxed text-slate-300"
          >
            {t('advisory.intro')}
          </motion.p>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm leading-relaxed text-slate-400"
          >
            {t('advisory.activationLine')}
          </motion.p>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.05,
          delayChildren: 0.1
        }}
      >
        {advisoryCards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className="group glass p-6 hover:bg-slate-900/60 transition-all duration-300 hover:border-gold-500/30"
          >
            <div className="space-y-3">
              <div className="text-3xl">{card.icon}</div>
              <h3 className="text-lg font-semibold text-slate-50 group-hover:text-gold-500 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 gap-8 pt-8 lg:grid-cols-4 border-t border-slate-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {advisoryStats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="space-y-2"
          >
            <div className="text-3xl font-semibold text-gold-500">{stat.value}</div>
            <div className="text-sm text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Advisory;
