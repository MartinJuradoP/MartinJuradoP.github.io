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

function Contact() {
  const { t } = useTranslation();
  const emailAddress = 'martin.jurado.p@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <section id="contact" className="space-y-8 py-20 lg:py-32">
      <motion.div
        className="space-y-6 max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gold-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              {t('contact.label')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold lg:text-5xl">
            {t('contact.title')}
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed text-slate-300"
        >
          {t('contact.paragraph1')}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base leading-relaxed text-slate-300"
        >
          {t('contact.paragraph2')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 pt-4 sm:flex-row"
        >
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t('contact.emailButton')}
          </a>
          <a href="https://www.linkedin.com/in/martin-jurado-pedroza-678205182/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            {t('contact.linkedinButton')}
          </a>
        </motion.div>

        <motion.p variants={itemVariants} className="text-sm text-slate-400">
          {t('contact.emailFallbackPrefix')} <a className="text-gold-500 hover:text-gold-400" href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Contact;
