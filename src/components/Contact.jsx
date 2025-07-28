import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-brand-blue" />,
      text: '+55 44 99104 0774',
    },
    {
      icon: <Mail className="h-6 w-6 text-brand-blue" />,
      text: 'ffbrunoff@yahoo.com.br',
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-blue" />,
      text: 'Padre Lebret 801, G05 Bloco 03',
    },
  ];

  return (
    <section className="bg-neutral-light section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">
            Entre em Contato
          </h2>
          <p className="text-lg text-neutral-gray mt-4">
            Pronto para começar seu próximo projeto? Fale conosco.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 bg-brand-white p-8 md:p-12 rounded-xl shadow-strong">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-neutral-dark mb-6">
              Vamos Conversar
            </h3>
            <p className="text-neutral-gray mb-8">
              Preencha o formulário ao lado ou utilize um dos nossos canais de
              contato direto. Nossa equipe está pronta para atender você.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-neutral-dark text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-dark mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-dark mb-2"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-dark mb-2"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-light rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin h-5 w-5" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center gap-2 text-green-600 bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <p>Mensagem enviada com sucesso! Agradecemos o contato.</p>
                </div>
              )}
              {submitError && (
                <div className="flex items-center gap-2 text-red-600 bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="h-5 w-5" />
                  <p>Erro: {submitError}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
