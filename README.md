# 🚗 Landing Page - Instrutor Hélvio (Autoescola & Treinamento para Habilitados)
📍 **Atendimento:** Sapiranga / RS e Região (Campo Bom, Novo Hamburgo, Nova Hartz, Araricá, Taquara e Vale do Sinos)  
📱 **WhatsApp:** (51) 99656-2126 (`5551996562126`)  
📸 **Instagram:** [@intrutor.helvio](https://instagram.com/intrutor.helvio)  

---

## 🎯 Visão Geral do Projeto

Landing page moderna desenvolvida em **React 18**, **Tailwind CSS** e **Vite**, focada em conversão, autoridade e experiência do usuário para aulas práticas de direção, 1ª Habilitação e superação do medo de dirigir em Sapiranga e região.

---

## 📁 Estrutura do Projeto

```bash
helvio-instrutor/
├── index.html                  # Ponto de entrada HTML com fontes e Font Awesome
├── package.json                # Dependências do projeto e scripts npm
├── vite.config.js              # Configuração do Vite com plugin @vitejs/plugin-react
├── tailwind.config.js          # Configuração Tailwind CSS (paletas brand, navy, accent)
├── postcss.config.js           # Processamento PostCSS
├── src/
│   ├── main.jsx                # Ponto de inicialização do React (createRoot)
│   ├── App.jsx                 # Componente principal que orquestra as seções
│   ├── index.css               # Estilos globais Tailwind e animações personalizadas
│   ├── data/
│   │   └── content.js          # 📝 ARQUIVO CENTRAL DE TEXTOS, CONTATOS E LOCALIZAÇÃO
│   ├── utils/
│   │   └── whatsapp.js         # Utilitário de formatação de links para o WhatsApp
│   └── components/
│       ├── Announcement.jsx    # Barra superior de status/agenda aberta
│       ├── Header.jsx          # Cabeçalho sticky com menu responsivo e navegação
│       ├── Hero.jsx            # Seção principal com chamada de impacto e cards visuais
│       ├── Metrics.jsx         # Faixa de métricas (+10 anos, +500 alunos, 98% aprovação)
│       ├── Services.jsx        # Cards dos serviços principais e banner de pacotes
│       ├── Diferenciais.jsx    # 6 diferenciais do método humanizado
│       ├── Simulator.jsx       # Simulador interativo com geração de mensagem no WhatsApp
│       ├── About.jsx           # Biografia, credenciamento Detran/RS e metodologia
│       ├── Testimonials.jsx    # Depoimentos reais de alunos e nota do Google Reviews
│       ├── Faq.jsx             # FAQ interativo com animação acordeão e acessibilidade
│       ├── Cta.jsx             # Chamada final de conversão, contatos e Instagram
│       ├── Footer.jsx          # Rodapé com conformidade legal do Detran e ano dinâmico
│       ├── FloatingWhatsApp.jsx# Botão flutuante fixo no canto inferior com tooltip
│       └── Toast.jsx           # Notificações sutis de prova social rotativas
└── README.md                   # Documentação do projeto
```

---

## 📝 Como Editar os Textos e Informações do Site

Todos os textos, títulos, perguntas do FAQ, depoimentos, número de WhatsApp e links estão centralizados em:
👉 `src/data/content.js`

Para alterar qualquer texto ou informação, basta editar o objeto correspondente dentro de `src/data/content.js`.

---

## 🚀 Como Executar o Projeto Localmente

### 1. Instalar as dependências
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```

### 3. Gerar a versão de produção (Build)
```bash
npm run build
```

### 4. Visualizar o build de produção localmente
```bash
npm run preview
```
