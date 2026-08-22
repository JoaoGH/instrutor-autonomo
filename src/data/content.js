/**
 * Arquivo Central de Textos e Conteúdos
 * Landing Page - Instrutor Hélvio (Autoescola & Habilitados)
 * Localização: Sapiranga / RS e Região
 */

export const SITE_CONTENT = {
  // =========================================================================
  // 1. INFORMAÇÕES DE CONTATO E CONFIGURAÇÃO GERAL
  // =========================================================================
  contact: {
    instructorName: "Instrutor Hélvio",
    roleTitle: "Instrutor de Trânsito Credenciado DETRAN/RS",
    whatsappNumber: "5551996562126", // 55 (Brasil) + 51 (DDD RS) + 996562126
    phoneFormatted: "(51) 99656-2126",
    phoneTel: "+5551996562126",
    instagramHandle: "@intrutor.helvio",
    instagramUrl: "https://instagram.com/intrutor.helvio",
    city: "Sapiranga",
    state: "RS",
    locationDisplay: "Sapiranga / RS e Região",
    coveredRegions: "Sapiranga, Campo Bom, Novo Hamburgo, Nova Hartz, Araricá, Taquara e Vale do Sinos / RS",
    operatingHours: "Segunda a Sábado: 06h30 às 20h30 | Domingos a combinar",
    defaultMessage: "Olá, Instrutor Hélvio! Vi sua página e gostaria de informações sobre aulas práticas de direção em Sapiranga e região."
  },

  // =========================================================================
  // 2. BARRA DE ANÚNCIO (TOPO)
  // =========================================================================
  announcement: {
    badge: "Agenda Aberta",
    text: "Aulas práticas em Sapiranga/RS e região • Vagas abertas para esta semana e fins de semana",
    detranBadge: "Instrutor Credenciado DETRAN/RS"
  },

  // =========================================================================
  // 3. SEÇÃO HERO (CABEÇALHO PRINCIPAL)
  // =========================================================================
  hero: {
    badge: "🏆 Instrutor Credenciado DETRAN/RS • Sapiranga e Vale do Sinos",
    titleMain: "Conquiste sua CNH e volte a dirigir com",
    titleHighlight: "tranquilidade, paciência e segurança em Sapiranga e região!",
    subtitle: "Aulas práticas personalizadas para quem vai tirar a 1ª Habilitação, precisa de reforço focado para o exame prático do Detran/RS ou quer vencer o medo de dirigir (perde-medo) no trânsito real. Aprenda sem broncas, no seu ritmo e com quem tem paciência de verdade.",
    ctaPrimary: "Agende sua Aula pelo WhatsApp",
    ctaSecondary: "Ver Serviços e Pacotes",
    socialProof: "4.9/5 (+500 alunos aprovados)",
    feature1: "Carro com Duplo Comando & Ar",
    feature2: "Horários Flexíveis",
    floatingBadge1: {
      title: "98% APROVAÇÃO",
      subtitle: "no exame prático Detran/RS"
    },
    floatingBadge2: {
      title: "Paciência Absoluta",
      subtitle: "especialista em alunos ansiosos"
    },
    card: {
      status: "Atendimento Online",
      badgeResponse: "Resposta Rápida",
      title: "Sua CNH Sem Mistério",
      description: "Didática focada na superação de bloqueios e confiança na direção prática do dia a dia.",
      pill: "Zero estresse e zero broncas",
      checks: [
        { strong: "Baliza sem complicação:", text: " Macetes visuais simples para você estacionar de primeira." },
        { strong: "Domínio da embreagem:", text: " Nunca mais deixe o carro morrer em subidas e ladeiras." },
        { strong: "No seu carro ou no nosso:", text: " Aulas práticas no veículo com duplo comando ou no seu próprio carro." }
      ],
      buttonText: "Tirar Dúvidas no WhatsApp"
    }
  },

  // =========================================================================
  // 4. BARRA DE MÉTRICAS (PROVA NUMÉRICA)
  // =========================================================================
  metrics: [
    { number: "+25 Anos", label: "De Experiência no Ensino Prático" },
    { number: "+500", label: "Alunos Aprovados" },
    { number: "98%", label: "Índice de Aprovação Prática Detran/RS" },
    { number: "100%", label: "Atenção e Didática Individualizada" }
  ],

  // =========================================================================
  // 5. SEÇÃO DE BENEFÍCIOS & SERVIÇOS
  // =========================================================================
  services: {
    badge: "Serviços Sob Medida",
    title: "Como posso te ajudar a conquistar sua independência no volante?",
    subtitle: "Treinamentos práticos personalizados em Sapiranga/RS e cidades vizinhas, focados na sua segurança e no seu ritmo.",
    items: [
      {
        id: "perde-medo",
        icon: "fa-solid fa-heart-circle-check",
        tag: "Especialidade Principal",
        tagColor: "text-brand-700 bg-brand-100",
        title: "Treinamento para Habilitados (Perde-Medo)",
        description: "Tem a CNH guardada na gaveta por medo ou insegurança? Trabalhamos a raiz do bloqueio emocional com metodologia progressiva, sem pressão e com muita calma.",
        bullets: [
          "Treino nos seus trajetos reais (sua casa, trabalho, rodovia, ladeiras e acessos)",
          "Controle seguro de embreagem em subidas íngremes e trânsito intenso",
          "Aulas no carro com duplo comando da autoescola ou no seu próprio carro",
          "Manobras em garagens apertadas, shoppings e estacionamentos"
        ],
        ctaText: "Quero Vencer o Medo de Dirigir",
        whatsappMessage: "Olá, Instrutor Hélvio! Tenho CNH mas sinto medo/insegurança para dirigir em Sapiranga e região. Gostaria de saber sobre o treinamento para habilitados."
      },
      {
        id: "reforco-detran",
        icon: "fa-solid fa-flag-checkered",
        tag: "Mais Procurado",
        tagColor: "text-amber-700 bg-amber-100",
        isPopular: true,
        title: "Reforço Focado no Exame Prático Detran/RS",
        description: "Reprovou ou está inseguro para a prova prática? Fazemos o treino cirúrgico exatamente nos trajetos de prova e nos pontos onde os alunos costumam perder pontos.",
        bullets: [
          "Baliza de Precisão: Pontos de referência visuais infalíveis",
          "Treinamento focado no percurso e exigências da banca do Detran/RS",
          "Simulado real cronometrado idêntico à avaliação oficial",
          "Técnicas de controle emocional e respiração para o dia do exame"
        ],
        ctaText: "Garantir Reforço para o Detran",
        whatsappMessage: "Olá, Instrutor Hélvio! Gostaria de fazer aulas de reforço para o exame prático do Detran/RS em Sapiranga/região e garantir minha aprovação."
      },
      {
        id: "primeira-habilitacao",
        icon: "fa-solid fa-id-card",
        tag: "Para Iniciantes",
        tagColor: "text-blue-700 bg-blue-100",
        title: "Acompanhamento para 1ª Habilitação",
        description: "Nunca encostou a mão no volante? Aprenda do zero absoluto com um método calmo, didático e sem nenhuma pressão psicológica.",
        bullets: [
          "Passo a passo detalhado: pedais, câmbio, embreagem e sincronia suave",
          "Desenvolvimento de visão periférica e reflexos de direção defensiva",
          "Carro confortável, com ar-condicionado e direção leve",
          "Construção de hábitos corretos e seguros desde a primeira aula"
        ],
        ctaText: "Iniciar Minha 1ª Habilitação",
        whatsappMessage: "Olá, Instrutor Hélvio! Quero tirar minha 1ª Habilitação do zero em Sapiranga/região. Pode me passar os valores e informações?"
      }
    ],
    banner: {
      tag: "Opções Flexíveis",
      title: "Precisa de aulas avulsas ou pacotes fechados?",
      description: "Trabalhamos tanto com aulas avulsas quanto com pacotes de 5, 10 ou 15 aulas em Sapiranga e região, com condições facilitadas no Pix e Cartão.",
      buttonText: "Consultar Tabela de Pacotes",
      whatsappMessage: "Olá, Instrutor Hélvio! Gostaria de consultar a tabela de preços de aulas avulsas e pacotes para Sapiranga e região."
    }
  },

  // =========================================================================
  // 6. DIFERENCIAIS
  // =========================================================================
  diferenciais: {
    badge: "Por que treinar comigo?",
    title: "O método que transforma insegurança em independência",
    subtitle: "Diga adeus ao medo de errar, aos instrutores impacientes e às aulas engessadas. Aprenda a dirigir de verdade.",
    items: [
      {
        icon: "fa-solid fa-hand-holding-heart",
        title: "Paciência Absoluta & Zero Broncas",
        description: "Você tem todo o direito de errar enquanto aprende. Nosso ambiente é acolhedor e calmo para que você ganhe confiança sem ansiedade."
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Carro com Duplo Comando Homologado",
        description: "Pedais de freio e embreagem do lado do instrutor. Se qualquer imprevisto acontecer, a segurança é total e imediata."
      },
      {
        icon: "fa-solid fa-calendar-days",
        title: "Horários Flexíveis",
        description: "Aulas pela manhã, tarde, noite e aos fins de semana. Encaixe seus treinos facilmente na sua rotina de trabalho ou família."
      },
      {
        icon: "fa-solid fa-map-location-dot",
        title: "Atendimento em Sapiranga e Região",
        description: "Ponto de encontro flexível em Sapiranga, Campo Bom, Novo Hamburgo e cidades vizinhas conforme combinado prévio."
      },
      {
        icon: "fa-solid fa-route",
        title: "Treino no Trânsito da Vida Real",
        description: "Prática em situações reais do dia a dia: rodovia, morros da região, garagens apertadas, cruzamentos e troca de faixas."
      },
      {
        icon: "fa-solid fa-sack-dollar",
        title: "Taxas Acessíveis e Sem Pegadinhas",
        description: "Preço justo, transparente e direto com o instrutor, sem burocracias ou taxas extras escondidas. Pagamento facilitado no Pix ou Cartão."
      }
    ]
  },

  // =========================================================================
  // 7. SIMULADOR INTERATIVO DE ATENDIMENTO
  // =========================================================================
  simulator: {
    badge: "Agendamento Rápido",
    title: "Monte seu atendimento personalizado",
    subtitle: "Selecione o tipo de aula que você precisa e gere sua mensagem pronta para enviar no WhatsApp com 1 clique.",
    step1Title: "1. Qual é o seu objetivo principal?",
    step2Title: "2. Seu Nome (opcional)",
    step3Title: "3. Melhor Período",
    step4Title: "4. Preferência de Veículo",
    options: [
      { id: "habilitados", icon: "fa-solid fa-heart-pulse", title: "Perder o Medo", subtitle: "Já tenho CNH", service: "Treinamento para Habilitados (Perder o Medo de Dirigir)" },
      { id: "reforco", icon: "fa-solid fa-flag-checkered", title: "Reforço Detran/RS", subtitle: "Passar no Exame", service: "Reforço Focado no Exame Prático Detran/RS" },
      { id: "primeira", icon: "fa-solid fa-id-card", title: "1ª Habilitação", subtitle: "Começar do zero", service: "1ª Habilitação do Zero" }
    ],
    periods: [
      { value: "Manhã (horário flexível)", label: "Manhã" },
      { value: "Tarde (horário flexível)", label: "Tarde" },
      { value: "Noite (após o trabalho)", label: "Noite (após o trabalho)" },
      { value: "Finais de semana (Sábado/Domingo)", label: "Finais de Semana" }
    ],
    transmissions: [
      { value: "Carro com Duplo Comando da Autoescola", label: "Carro com Duplo Comando" },
      { value: "No meu próprio veículo", label: "No meu próprio carro" }
    ],
    buttonText: "Enviar Solicitação Direto no WhatsApp"
  },

  // =========================================================================
  // 8. SOBRE O INSTRUTOR
  // =========================================================================
  about: {
    badge: "Conheça Seu Instrutor",
    title: "Mais de duas décadas ajudando pessoas a conquistarem sua autonomia no trânsito",
    text1: "Olá! Sou o Instrutor Hélvio. Atuo com formação e aperfeiçoamento de motoristas em Sapiranga/RS e em toda a região do Vale do Sinos. Ao longo de mais de 25 anos de profissão, entendi que o maior desafio de quem quer dirigir não é mecânico, mas sim a pressão e a ansiedade geradas por métodos impacientes.",
    text2: "Por isso, desenvolvi uma didática humanizada, progressiva e acolhedora. Seja para vencer o medo de rodovias e nas subidas da região, dominar a baliza perfeita ou conquistar a aprovação de primeira no Detran/RS, meu compromisso é te entregar segurança e autonomia passo a passo.",
    quote: "Dirigir não é dom exclusivo de alguns: é uma habilidade que qualquer pessoa desenvolve com a orientação certa e no tempo certo.",
    cardHighlights: [
      {
        icon: "fa-solid fa-brain",
        title: "Controle Emocional & Ansiedade",
        description: "Técnicas de respiração e foco para manter a tranquilidade no trânsito e na prova prática."
      },
      {
        icon: "fa-solid fa-car",
        title: "Direção Defensiva Prática",
        description: "Antecipação de riscos para você rodar com total segurança pelas ruas e rodovias da região."
      }
    ],
    buttonText: "Conversar com o Instrutor Hélvio",
    whatsappMessage: "Olá, Instrutor Hélvio! Li sobre o seu método e gostaria de bater um papo sobre as aulas práticas."
  },

  // =========================================================================
  // 9. DEPOIMENTOS DE ALUNOS
  // =========================================================================
  testimonials: {
    badge: "Avaliações Reais",
    title: "Histórias de quem superou o medo e conquistou a CNH",
    subtitle: "Veja o relato de quem passou pelas mesmas inseguranças que você em Sapiranga e região e hoje dirige com liberdade.",
    items: [
      {
        name: "Mariana R.",
        initials: "MR",
        tag: "Habilitada há 8 anos",
        tagColor: "bg-emerald-100 text-emerald-800",
        service: "Treinamento para Habilitados • Sapiranga",
        rating: 5,
        review: "Minha CNH estava guardada na gaveta há 8 anos por puro pânico. Bastava sentar no banco do motorista para o coração disparar. Com o Hélvio fiz aulas focadas no meu trajeto de Sapiranga para Novo Hamburgo pela RS-239. A calma dele foi tudo! Hoje vou e volto dirigindo tranquilamente."
      },
      {
        name: "Lucas Santos",
        initials: "LS",
        tag: "Aprovado Detran/RS",
        tagColor: "bg-amber-100 text-amber-800",
        service: "Reforço para Exame Prático • Vale do Sinos",
        rating: 5,
        review: "Eu já tinha reprovado duas vezes na baliza do Detran. Contratei o reforço com o Hélvio e ele me ensinou pontos de referência visuais muito fáceis. O simulado que fizemos foi idêntico à prova. Passei de primeira sem perder nenhum ponto!"
      },
      {
        name: "Cláudia Albuquerque",
        initials: "CA",
        tag: "1ª Habilitação",
        tagColor: "bg-blue-100 text-blue-800",
        service: "1ª Habilitação do Zero • Campo Bom / Sapiranga",
        rating: 5,
        review: "Nunca tinha ligado um carro na vida e sou extremamente ansiosa. O Hélvio explicou cada detalhe sem nunca levantar a voz ou reclamar. Ele transmite uma segurança surreal. Recomendo de olhos fechados para quem tem medo de instrutor estressado!"
      }
    ],
    googleRatingText: "Nota 4.9 de 5.0 nas avaliações de alunos satisfeitos",
    trainedCountText: "+500 motoristas preparados em Sapiranga e região"
  },

  // =========================================================================
  // 10. PERGUNTAS FREQUENTES (FAQ)
  // =========================================================================
  faq: {
    badge: "Tire suas Dúvidas",
    title: "Perguntas Frequentes",
    subtitle: "Tudo o que você precisa saber antes de agendar sua primeira aula prática em Sapiranga e região.",
    items: [
      {
        question: "Tenho pavor de dirigir ou travo só de pensar em ladeiras e em rodovias. Esse método funciona para mim?",
        answer: "Sim! O treinamento para habilitados é desenvolvido exatamente para quem sofre com bloqueios emocionais e ansiedade ao volante. Começamos em ruas bem calmas de Sapiranga e avançamos no seu ritmo, até você dominar o controle de embreagem em ladeiras e rodar com segurança nas rodovias."
      },
      {
        question: "As aulas são feitas no carro da autoescola ou no meu próprio carro?",
        answer: "Você pode escolher! Para quem ainda está muito inseguro(a), iniciamos no nosso veículo oficial equipado com duplo comando (pedais de segurança no lado do instrutor). Quando você estiver mais confiante, podemos migrar para o seu próprio carro para você se acostumar com o seu dia a dia."
      },
      {
        question: "Como funciona o reforço para quem vai fazer a prova prática do Detran/RS?",
        answer: "Focamos 100% nos critérios avaliados pela banca examinadora do Detran/RS: percurso oficial, baliza de precisão com referências fáceis, controle de embreagem sem solavancos e simulados reais cronometrados para você não ser surpreendido(a)."
      },
      {
        question: "Quantas aulas eu preciso fazer?",
        answer: "Depende do seu objetivo e do seu nível de confiança atual. Na primeira aula fazemos uma avaliação prática. Para reforço do Detran, geralmente de 5 a 8 aulas costumam ser suficientes. Para quem tem muito medo, pacotes de 10 ou mais aulas oferecem uma evolução sólida e permanente."
      },
      {
        question: "Você atende quais cidades além de Sapiranga?",
        answer: "Atendemos Sapiranga, Campo Bom, Novo Hamburgo, Nova Hartz, Araricá, Taquara e cidades vizinhas do Vale do Sinos / Encosta da Serra. Combinamos o local de início conforme sua conveniência."
      },
      {
        question: "Quais são as formas de pagamento aceitas?",
        answer: "Aceitamos Dinheiro (com condições especiais), Pix e Cartão de Crédito com parcelamento facilitado em pacotes de aulas."
      }
    ]
  },

  // =========================================================================
  // 11. CTA FINAL
  // =========================================================================
  cta: {
    urgencyBadge: "Vagas Semanais Limitadas em Sapiranga e Região",
    titleMain: "Pronto para assumir o volante e conquistar a sua",
    titleHighlight: "liberdade",
    subtitle: "Não adie mais o seu sonho de dirigir. Envie uma mensagem agora mesmo no WhatsApp para tirar dúvidas, consultar horários e garantir sua aula prática em Sapiranga e cidades vizinhas.",
    buttonText: "Falar Diretamente com o Instrutor Hélvio",
    guaranteeText: "Atendimento direto e sem intermediários • Resposta rápida no WhatsApp",
    whatsappMessage: "Olá, Instrutor Hélvio! Gostaria de agendar minhas aulas práticas em Sapiranga/região."
  },

  // =========================================================================
  // 12. RODAPÉ & AVISO LEGAL
  // =========================================================================
  footer: {
    brandDescription: "Instrução prática veicular especializada para 1ª Habilitação, reforço para exames práticos do Detran/RS e superação do medo de dirigir no trânsito real de Sapiranga e região.",
    legalDisclaimer: "Atividade realizada em total conformidade com o Código de Trânsito Brasileiro (Lei nº 9.503/1997) e resoluções do CONTRAN/DETRAN-RS para formação e aperfeiçoamento de condutores habilitados.",
    rights: "Instrutor Hélvio - Todos os direitos reservados."
  },

  // =========================================================================
  // 13. NOTIFICAÇÕES SUTIS DE PROVA SOCIAL (TOAST DINÂMICO LOCAL)
  // =========================================================================
  toastActivities: [
    '👏 <strong>Mariana F. (Sapiranga)</strong> agendou treino para habilitados há 8 min.',
    '🚗 <strong>Lucas R. (Novo Hamburgo)</strong> garantiu reforço para prova do Detran há 15 min.',
    '🎉 <strong>Carla M. (Campo Bom)</strong> foi aprovada no exame prático do Detran/RS hoje!',
    '🌟 <strong>Rodrigo S. (Sapiranga)</strong> reservou horário de sábado pela manhã.',
    '🔑 <strong>Patricia T. (Nova Hartz)</strong> superou o medo de rodovia na RS-239!'
  ]
};

export default SITE_CONTENT;
