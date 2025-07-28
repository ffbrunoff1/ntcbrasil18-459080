import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753723300669_0.png';
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#servicos', label: 'Nossos Pilares' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <motion.footer
      className="bg-neutral-dark text-neutral-light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <a href="#inicio">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-14 w-auto bg-white p-2 rounded-md"
              />
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-blue">
              Navegação
            </h3>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-brand-blue transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-blue">Contato</h3>
            <ul className="space-y-2">
              <li>+55 44 99104 0774</li>
              <li>ffbrunoff@yahoo.com.br</li>
              <li>Padre Lebret 801, G05 Bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-neutral-gray text-sm">
            &copy; {currentYear} NTC Brasil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
