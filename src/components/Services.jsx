import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Lightbulb, Handshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <HardHat size={40} className="text-brand-blue" />,
      title: 'Qualidade Superior',
      description:
        'Utilizamos materiais de primeira linha e mão de obra qualificada para garantir a durabilidade e a segurança de cada construção.',
    },
    {
      icon: <Lightbulb size={40} className="text-brand-blue" />,
      title: 'Inovação Constante',
      description:
        'Estamos sempre em busca de novas tecnologias e processos para otimizar a construção, reduzir custos e aumentar a eficiência.',
    },
    {
      icon: <Handshake size={40} className="text-brand-blue" />,
      title: 'Parceria e Confiança',
      description:
        'Acreditamos que a base de um grande projeto é a parceria. Trabalhamos com transparência total e foco na satisfação do cliente.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-brand-white section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-blue font-semibold">Nossos Pilares</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mt-2 mb-4">
            A Base do Nosso Sucesso
          </h2>
          <p className="text-lg text-neutral-gray mb-12">
            Nossos valores fundamentais guiam cada decisão e ação, assegurando
            que entregamos sempre o melhor para nossos clientes e parceiros.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-neutral-light p-8 rounded-xl shadow-subtle hover:shadow-strong transition-shadow duration-300 flex flex-col"
              variants={cardVariants}
            >
              <div className="mb-6 bg-blue-100 p-4 rounded-full w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-gray flex-grow">
                {service.description}
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="#contato"
                  className="font-semibold text-brand-blue hover:text-blue-600 transition-colors"
                >
                  Saber mais &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
