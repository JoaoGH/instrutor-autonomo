/**
 * Script Principal - Landing Page Instrutor Hélvio
 * Integração total com data/content.js (Textos, WhatsApp, Instagram e Localização)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Carrega os dados centrais do arquivo data/content.js
  const CONTENT = typeof SITE_CONTENT !== 'undefined' ? SITE_CONTENT : {
    contact: {
      whatsappNumber: '5551996562126',
      instructorName: 'Instrutor Hélvio',
      defaultMessage: 'Olá, Instrutor Hélvio! Gostaria de informações sobre as aulas práticas em Sapiranga e região.'
    },
    toastActivities: [
      '👏 <strong>Mariana F. (Sapiranga)</strong> agendou treino para habilitados há 8 min.',
      '🚗 <strong>Lucas R. (Novo Hamburgo)</strong> garantiu reforço para exame do Detran há 15 min.',
      '🎉 <strong>Carla M. (Campo Bom)</strong> foi aprovada no exame prático do Detran/RS hoje!',
      '🌟 <strong>Rodrigo S. (Sapiranga)</strong> reservou horário de sábado pela manhã.',
      '🔑 <strong>Patricia T. (Nova Hartz)</strong> superou o medo de rodovia na RS-239!'
    ]
  };

  // =========================================================================
  // 1. GERADOR DE LINK DO WHATSAPP
  // =========================================================================
  function getWhatsAppUrl(customMessage) {
    const text = encodeURIComponent(customMessage || CONTENT.contact.defaultMessage);
    return `https://wa.me/${CONTENT.contact.whatsappNumber}?text=${text}`;
  }

  // Atualiza todos os botões com a classe .js-whatsapp-link
  function refreshWhatsAppLinks() {
    const links = document.querySelectorAll('.js-whatsapp-link');
    links.forEach(link => {
      const customMsg = link.getAttribute('data-message') || CONTENT.contact.defaultMessage;
      link.href = getWhatsAppUrl(customMsg);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  }
  refreshWhatsAppLinks();

  // =========================================================================
  // 2. MENU MOBILE RESPONSIVO
  // =========================================================================
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  function toggleMenu(isOpen) {
    if (isOpen) {
      mobileMenu?.classList.remove('hidden');
      mobileMenuOverlay?.classList.remove('hidden');
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu?.classList.add('hidden');
      mobileMenuOverlay?.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      toggleMenu(isHidden);
    });

    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', () => toggleMenu(false));
    }

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // =========================================================================
  // 3. SIMULADOR INTERATIVO / GERADOR DE MENSAGEM WHATSAPP
  // =========================================================================
  const serviceOptions = document.querySelectorAll('.service-option-card');
  const studentNameInput = document.getElementById('student-name');
  const studentPeriodSelect = document.getElementById('student-period');
  const studentTransmissionSelect = document.getElementById('student-transmission');
  const btnGenerateWhatsApp = document.getElementById('btn-whatsapp-generator');
  const messagePreview = document.getElementById('whatsapp-message-preview');

  let selectedService = 'Treinamento para Habilitados (Perder o Medo de Dirigir em Sapiranga/região)';

  function updateWhatsAppPreview() {
    const name = studentNameInput?.value.trim() || 'futuro(a) aluno(a)';
    const period = studentPeriodSelect?.value || 'Horário a combinar';
    const transmission = studentTransmissionSelect?.value || 'Carro com duplo comando';

    const composedMessage = `Olá, Instrutor Hélvio! Meu nome é *${name}*.\n\n` +
      `📍 *Região:* Sapiranga / Vale do Sinos - RS\n` +
      `📌 *Interesse:* ${selectedService}\n` +
      `⏰ *Disponibilidade:* ${period}\n` +
      `🚗 *Preferência:* ${transmission}\n\n` +
      `Gostaria de saber valores de pacotes e datas livres na sua agenda!`;

    if (messagePreview) {
      messagePreview.innerText = `"${composedMessage}"`;
    }

    if (btnGenerateWhatsApp) {
      btnGenerateWhatsApp.href = getWhatsAppUrl(composedMessage);
      btnGenerateWhatsApp.target = '_blank';
      btnGenerateWhatsApp.rel = 'noopener noreferrer';
    }
  }

  serviceOptions.forEach(card => {
    card.addEventListener('click', () => {
      serviceOptions.forEach(c => c.classList.remove('selected', 'border-brand-600', 'bg-brand-50'));
      card.classList.add('selected', 'border-brand-600', 'bg-brand-50');
      selectedService = card.getAttribute('data-service-title') || 'Aulas práticas de direção';
      updateWhatsAppPreview();
    });
  });

  if (studentNameInput) studentNameInput.addEventListener('input', updateWhatsAppPreview);
  if (studentPeriodSelect) studentPeriodSelect.addEventListener('change', updateWhatsAppPreview);
  if (studentTransmissionSelect) studentTransmissionSelect.addEventListener('change', updateWhatsAppPreview);

  updateWhatsAppPreview();

  // =========================================================================
  // 4. FAQ ACORDEÃO INTERATIVO
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    if (button) {
      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-button');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // =========================================================================
  // 5. NAVBAR SCROLL EFFECT (Sombra e Blur ao rolar)
  // =========================================================================
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('shadow-md', 'bg-white/95');
      header?.classList.remove('bg-white/80');
    } else {
      header?.classList.remove('shadow-md', 'bg-white/95');
      header?.classList.add('bg-white/80');
    }
  });

  // =========================================================================
  // 6. ATUALIZAÇÃO AUTOMÁTICA DO ANO NO RODAPÉ
  // =========================================================================
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 7. TOAST NOTIFICATION DE PROVA SOCIAL LOCALIZADA
  // =========================================================================
  const toastNotification = document.getElementById('conversion-toast');
  const toastText = document.getElementById('conversion-toast-text');
  const toastClose = document.getElementById('conversion-toast-close');

  const activities = CONTENT.toastActivities || [
    '👏 <strong>Mariana F. (Sapiranga)</strong> agendou aula há 8 min.',
    '🚗 <strong>Lucas R. (Novo Hamburgo)</strong> garantiu reforço Detran há 15 min.',
    '🎉 <strong>Carla M. (Campo Bom)</strong> aprovada no Detran/RS hoje!'
  ];

  let toastIndex = 0;
  function showNextToast() {
    if (!toastNotification || !toastText) return;
    toastText.innerHTML = activities[toastIndex];
    toastNotification.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toastNotification.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toastNotification.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      toastNotification.classList.remove('translate-y-0', 'opacity-100');
    }, 6000);

    toastIndex = (toastIndex + 1) % activities.length;
  }

  setTimeout(() => {
    showNextToast();
    setInterval(showNextToast, 24000);
  }, 4000);

  if (toastClose && toastNotification) {
    toastClose.addEventListener('click', () => {
      toastNotification.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      toastNotification.classList.remove('translate-y-0', 'opacity-100');
    });
  }
});
