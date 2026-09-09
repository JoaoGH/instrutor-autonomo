# 🚗 Landing Page - Instrutor Hélvio (Autoescola & Treinamento para Habilitados)

> Landing page moderna e de alta conversão desenvolvida em **React 18**, **Vite** e **Tailwind CSS**, projetada para apresentação dos serviços de instrutor de trânsito credenciado pelo Detran/RS, agendamentos via WhatsApp, simulação de pacotes de aulas e superação do medo de dirigir em Sapiranga/RS e região.

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Scripts Disponíveis](#-scripts-disponíveis)
  - [Desenvolvimento](#-desenvolvimento)
  - [Linter e Padronização](#-linter-e-padronização)
  - [Testes Automatizados](#-testes-automatizados)
  - [Build e Produção](#-build-e-produção)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Edição de Textos e Conteúdos](#-edição-de-textos-e-conteúdos)
- [Integração Contínua (CI/CD) e Deploy](#-integração-contínua-cicd-e-deploy)
- [Licença](#-licença)

---

## 🎯 Visão Geral

O projeto foi construído focando em excelente experiência do usuário (UX), acessibilidade, performance e SEO. 
Ele atende alunos de Sapiranga, Campo Bom, Novo Hamburgo, Nova Hartz, Araricá, Taquara e Vale do Sinos.

### Principais Recursos
- **Integração com WhatsApp**: Botão flutuante fixo e links diretos pré-formatados em todos os pontos de conversão.
- **Simulador Interativo**: Calculadora para estimativa de valores e envio direto de proposta personalizada para o WhatsApp.
- **Internacionalização (i18n)**: Suporte para Português (`pt-BR`) e Inglês (`en`).
- **Prova Social Rotativa**: Componente de Toast que exibe notificações periódicas para aumentar a taxa de conversão.
- **Garantia de Qualidade**: Suíte de testes unitários/integração com Vitest + Happy DOM e análise estática de código com ESLint.
- **Deploy Automatizado**: Pipeline via GitHub Actions que executa verificações e realiza o deploy no Firebase Hosting a cada merge na branch principal.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [React 18](https://react.dev/), [Vite 5](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Autoprefixer
- **Internacionalização**: [i18next](https://www.i18next.com/), `react-i18next`, `i18next-browser-languagedetector`
- **Testes**: [Vitest](https://vitest.dev/), Happy DOM, Testing Library (`@testing-library/react`, `@testing-library/jest-dom`)
- **Qualidade de Código**: [ESLint 9](https://eslint.org/), [Prettier](https://prettier.io/)
- **CI/CD & Deploy**: GitHub Actions, [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js**: Versão recomendada **`>= 20.x`** (Compatível com Node.js 18, 20, 22 ou superiores).
- **Gerenciador de pacotes**: `npm` (incluído no Node.js).
- *(Opcional)* **Gerenciador de Versão do Node**: O projeto possui arquivo `.tool-versions` configurado para ser utilizado com [asdf](https://asdf-vm.com/) ou [mise](https://mise.jdx.dev/).

Para verificar suas versões instaladas, execute:

```bash
node -v
npm -v
```

---

## 🚀 Instalação e Configuração

Siga os passos abaixo para clonar o repositório e preparar o ambiente local:

### 1. Clonar o Repositório

```bash
git clone https://github.com/JoaoGH/instrutor-autonomo.git
cd helvio-instrutor
```

### 2. Instalar as Dependências

```bash
npm install
```

---

## 📜 Scripts Disponíveis

Todos os scripts são executados via `npm run <script>` a partir da raiz do projeto.

### 💻 Desenvolvimento

Inicia o servidor de desenvolvimento local com Hot Module Replacement (HMR).

```bash
npm run dev
```

Por padrão, a aplicação estará acessível em `http://localhost:5173`.

### 🧹 Linter e Padronização

Executa a verificação estática de código com o ESLint.

```bash
# Executa a verificação do linter
npm run lint

# Executa o linter corrigindo automaticamente falhas de formatação/estilo corrigíveis
npm run lint:fix
```

### 🧪 Testes Automatizados

A suíte de testes utiliza o **Vitest** em conjunto com **Happy DOM** e **React Testing Library**.

```bash
# Executa a suíte de testes uma única vez (utilizado no CI)
npm test

# Executa os testes em modo interativo (Watch Mode) para desenvolvimento
npm run test:watch

# Gera o relatório de cobertura de testes (Coverage Report)
npm run test:coverage
```

### 📦 Build e Produção

Gera e valida o pacote otimizado para produção.

```bash
# Compila a aplicação para a pasta dist/
npm run build

# Executa um servidor HTTP local para testar a versão contida em dist/
npm run preview
```

---

## 📁 Estrutura de Pastas

Abaixo está a organização principal dos arquivos do projeto:

```bash
helvio-instrutor/
├── .github/
│   └── workflows/                      # Pipelines do GitHub Actions
│       ├── ci-cd.yml                   # Esteira unificada de testes e Semantic Release
│       ├── firebase-hosting-merge.yml  # Deploy automático no Firebase Hosting ativado por tags (v*.*.*)
│       └── lint.yml                    # Pipeline de verificação de linter em PRs/commits
├── public/                             # Arquivos estáticos servidos diretamente na raiz
│   ├── hero.webp                       # Imagem principal da seção Hero
│   ├── logo.webp                       # Logotipo oficial
│   ├── robots.txt                      # Regras para rastreadores de busca
│   └── sitemap.xml                     # Mapa do site para SEO
├── src/
│   ├── __tests__/                      # Testes de integração de alto nível (ex: App.test.jsx)
│   ├── assets/                         # Recursos de mídia importados via JavaScript
│   ├── components/                     # Componentes React reutilizáveis da interface
│   │   ├── __tests__/                  # Testes unitários de componentes (ex: Simulator.test.jsx)
│   │   ├── About.jsx                   # Seção "Sobre mim" e credenciais do Detran
│   │   ├── Announcement.jsx            # Barra superior de avisos/status da agenda
│   │   ├── Cta.jsx                     # Chamada de conversão final e dados de contato
│   │   ├── Diferenciais.jsx            # Cards com diferenciais do método humanizado
│   │   ├── Faq.jsx                     # Perguntas frequentes interativas com acordeão
│   │   ├── FloatingWhatsApp.jsx        # Botão flutuante de atendimento via WhatsApp
│   │   ├── Footer.jsx                  # Rodapé com dados legais e copyright dinâmico
│   │   ├── Header.jsx                  # Cabeçalho de navegação sticky com menu responsivo
│   │   ├── Hero.jsx                    # Seção de impacto inicial
│   │   ├── LanguageSwitcher.jsx        # Seletor de idioma (pt-BR / en)
│   │   ├── Metrics.jsx                 # Estatísticas de atendimento e resultados
│   │   ├── Services.jsx                # Cards de serviços oferecidos e pacotes
│   │   ├── Simulator.jsx               # Simulador interativo de aulas e propostas
│   │   ├── Testimonials.jsx            # Depoimentos reais de alunos e notas do Google
│   │   └── Toast.jsx                   # Notificações rotativas de prova social
│   ├── data/
│   │   └── content.js                  # Centralizador de textos, contatos e informações
│   ├── locales/                        # Arquivos de tradução (pt-BR.json e en.json)
│   ├── utils/                          # Funções utilitárias (ex: formatação de WhatsApp)
│   │   └── __tests__/                  # Testes unitários dos utilitários
│   ├── App.jsx                         # Componente raiz orchestrador
│   ├── i18n.js                         # Configuração do i18next
│   ├── index.css                       # Diretivas do Tailwind CSS e estilos globais
│   ├── main.jsx                        # Ponto de entrada da aplicação React
│   └── setupTests.js                   # Setup do Vitest (extensões de matchers do jest-dom)
├── .firebaserc                         # Configuração do projeto Firebase
├── .gitignore                          # Arquivos ignorados pelo Git
├── .tool-versions                      # Definição da versão do Node.js (asdf/mise)
├── CHANGELOG.md                        # Registro de alterações e histórico de versões
├── eslint.config.js                    # Configuração do ESLint
├── firebase.json                       # Configuração do Firebase Hosting
├── index.html                          # Documento HTML principal
├── package.json                        # Dependências, scripts e versão do projeto
├── postcss.config.js                   # Configuração do PostCSS
├── README.md                           # Documentação do projeto
├── tailwind.config.js                  # Configuração do Tailwind CSS
└── vite.config.js                      # Configuração do bundler Vite
```

---

## 📝 Edição de Textos e Conteúdos

Para alterar contatos, preços, depoimentos, perguntas frequentes ou qualquer texto exibido no site:

1. Acesse o arquivo [`src/data/content.js`](src/data/content.js).
2. Edite as constantes desejadas (ex: `SITE_CONTENT.whatsappNumber`, `SERVICES`, `FAQS`).
3. Para alterações em traduções específicas, edite os arquivos em [`src/locales/`](src/locales/).

---

## 🔄 Integração Contínua (CI/CD) e Deploy

O repositório possui fluxos de trabalho automatizados com **GitHub Actions**:

- **CI/CD Pipeline & Release (`ci-cd.yml`)**: Esteira unificada (Node.js 22) que executa linter, testes automatizados e validação de build a cada Push/PR na branch `main`. Quando acionada por `push` na branch `main`, executa de forma encadeada o `semantic-release` para gerar novas tags e releases.
- **Firebase Deploy (`firebase-hosting-merge.yml`)**: Workflow acionado **exclusivamente com a criação de novas tags de versão (`v*.*.*`)**, executando a validação final e o deploy no **Firebase Hosting**.
- **Lint Check (`lint.yml`)**: Valida o padrão de código no envio de Pull Requests e branches auxiliares.


