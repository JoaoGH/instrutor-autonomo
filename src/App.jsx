import React from 'react';
import Announcement from './components/Announcement';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Services from './components/Services';
import Diferenciais from './components/Diferenciais';
import Simulator from './components/Simulator';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Toast from './components/Toast';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-500 selection:text-white">
      {/* 1. Barra de Anúncio / Status */}
      <Announcement />

      {/* 2. Cabeçalho / Navbar Sticky */}
      <Header />

      <main>
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Barra de Métricas */}
        <Metrics />

        {/* 5. Serviços e Pacotes */}
        <Services />

        {/* 6. Diferenciais */}
        <Diferenciais />

        {/* 7. Simulador Interativo */}
        <Simulator />

        {/* 8. Sobre o Instrutor */}
        <About />

        {/* 9. Depoimentos */}
        <Testimonials />

        {/* 10. Perguntas Frequentes (FAQ) */}
        <Faq />

        {/* 11. CTA Final */}
        <Cta />
      </main>

      {/* 12. Rodapé */}
      <Footer />

      {/* 13. Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* 14. Toast Notificação de Prova Social */}
      <Toast />
    </div>
  );
}
