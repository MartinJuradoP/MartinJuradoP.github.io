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

function FAQ() {
  const { t } = useTranslation();
  const faqs = t('faq.questions', { returnObjects: true }) || [];

  return (
    <section id="faq" className="space-y-8 py-20 lg:py-32">
      <motion.div
        className="space-y-6 max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              {t('faq.label')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold lg:text-5xl">
            {t('faq.title')}
          </h2>
          <p className="max-w-3xl text-base text-slate-300">{t('faq.intro')}</p>
        </motion.div>

        <motion.dl
          className="space-y-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={`${faq.question}-${index}`}
              variants={itemVariants}
              className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5"
            >
              <dt className="text-lg font-semibold text-gold-500">{faq.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-300">{faq.answer}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}

export default FAQ;
