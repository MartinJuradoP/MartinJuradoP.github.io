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

function About() {
  const { t } = useTranslation();
  const paragraphs = t('about.paragraphs', { returnObjects: true });
  const expertiseItems = t('about.expertise.items', { returnObjects: true });

  return (
    <section id="about" className="space-y-12 py-20 lg:py-32">
      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              {t('about.label')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold lg:text-5xl">
            {t('about.title')}
          </h2>
        </motion.div>

        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={itemVariants}
            className="max-w-3xl text-base leading-relaxed text-slate-300"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      {/* Expertise Areas */}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        {expertiseItems.map((area, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass p-6"
          >
            <h3 className="text-lg font-semibold text-gold-500 mb-2">{area.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;
