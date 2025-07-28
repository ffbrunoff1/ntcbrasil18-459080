import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative bg-brand-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative container mx-auto section-padding min-h-screen flex items-center">
        <motion.div
          className="max-w-3xl text-center mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-dark mb-6"
            variants={itemVariants}
          >
            Construindo o futuro, com{' '}
            <span className="gradient-text">qualidade</span> e{' '}
            <span className="gradient-text">confiança</span>.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-neutral-gray max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            A NTC Brasil transforma seus sonhos em realidade. Oferecemos
            soluções inovadoras e de alta qualidade para cada projeto,
            garantindo excelência do início ao fim.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <a
              href="#contato"
              className="btn btn-primary inline-flex items-center justify-center group"
            >
              Realizar um Orçamento
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="btn btn-secondary inline-flex items-center justify-center"
            >
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              #e2e8f0 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
