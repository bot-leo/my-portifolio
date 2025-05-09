
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  active: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ active }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient flex items-center">
        <Mail className="mr-2" /> Contato
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-6 text-futuristic-lightpurple">Entre em contato</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-futuristic-purple/50"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-futuristic-purple/50"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-futuristic-purple/50"
                placeholder="Sua mensagem..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-futuristic-purple hover:bg-futuristic-purple/90 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center w-full"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Enviando...</span>
              ) : (
                <>
                  <Send size={18} className="mr-2" /> Enviar mensagem
                </>
              )}
            </button>
          </form>
        </div>

        <div className="animate-delay-100">
          <h3 className="text-xl font-bold mb-6 text-futuristic-lightpurple">Informações de contato</h3>

          <div className="space-y-6">
            <div>
              <p className="text-gray-300 mb-1">Email:</p>
              <a href="mailto:leonardo02lima@gmail.com" className="text-futuristic-purple hover:text-futuristic-lightpurple transition-colors">
                leonardo02lima@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-300 mb-1">Localização:</p>
              <p className="text-white">São Paulo, Brasil</p>
            </div>

            <div>
              <p className="text-gray-300 mb-3">Redes sociais:</p>
              <div className="flex space-x-4">
                <a
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 border border-white/10 rounded-full p-3 text-futuristic-lightpurple hover:text-futuristic-purple hover:border-futuristic-purple/50 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 border border-white/10 rounded-full p-3 text-futuristic-lightpurple hover:text-futuristic-purple hover:border-futuristic-purple/50 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/30 border border-white/10 rounded-full p-3 text-futuristic-lightpurple hover:text-futuristic-purple hover:border-futuristic-purple/50 transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/5">
              <h4 className="text-futuristic-lightpurple font-medium mb-2">Disponível para oportunidades</h4>
              <p className="text-gray-300">
                Estou aberto a oportunidades de freelance e projetos desafiadores.
                Se você tem um projeto interessante, não hesite em entrar em contato!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
