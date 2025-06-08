import { SOCIAL_MEDIA_LINKS } from '../constants';
import logob1 from '../assets/logob1.png';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logob1}
          alt="compileTab Logo"
          width={200}
          className="my-20"
        />
      </div>

      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label || 'social media link'}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
