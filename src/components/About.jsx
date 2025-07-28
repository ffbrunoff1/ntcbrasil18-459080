import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Building className="h-8 w-8 text-brand-blue" />,
      title: 'Excelência em Construção',
      description:
        'Compromisso com os mais altos padrões de qualidade em cada etapa do projeto, da fundação ao acabamento.',
    },
    {
      icon: <Target className="h-8 w-8 text-brand-blue" />,
      title: 'Soluções Inovadoras',
      description:
        'Utilizamos tecnologias e métodos construtivos de ponta para entregar projetos eficientes, sustentáveis e modernos.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />,
      title: 'Confiança e Transparência',
      description:
        'Construímos relacionamentos sólidos com nossos clientes, baseados na comunicação clara e no cumprimento de prazos.',
    },
  ];

  return (
    <section className="bg-neutral-light section-padding">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="text-brand-blue font-semibold">Quem Somos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mt-2 mb-6">
              Inovação e excelência em cada projeto
            </h2>
            <p className="text-neutral-gray text-lg mb-6">
              A NTC Brasil é uma empresa dedicada à excelência no setor de
              construção. Com uma equipe experiente e um portfólio de sucesso,
              nosso foco é entregar obras que não apenas atendam, mas superem as
              expectativas dos nossos clientes.
            </p>
            <p className="text-neutral-gray text-lg">
              Nossa missão é construir o futuro, com projetos que aliam design,
              funcionalidade e durabilidade, sempre com um profundo respeito
              pelo meio ambiente e pela comunidade.
            </p>
          </motion.div>

          <motion.div className="space-y-8" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  {feature.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-neutral-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-neutral-gray">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
