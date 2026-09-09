# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Landing Page Responsiva**: Interface moderna em React 18 e Tailwind CSS voltada para conversão de alunos para aulas práticas de direção e superação do medo de dirigir (Instrutor Hélvio - Sapiranga/RS e região).
- **Integração com WhatsApp**: Links diretos formatados para contato rápido, agendamento de aulas e envio de propostas a partir dos serviços e simulador (`src/utils/whatsapp.js`).
- **Simulador Interativo de Aulas**: Componente (`Simulator.jsx`) para seleção de pacotes, cálculo dinâmico de investimento e geração de mensagem personalizada no WhatsApp.
- **Suporte a Internacionalização (i18n)**: Suporte aos idiomas Português (`pt-BR`) e Inglês (`en`) com `i18next`, `react-i18next` e `i18next-browser-languagedetector`.
- **Notificações Sociais (Toast)**: Notificações rotativas de prova social (`Toast.jsx`) configuráveis por constante de tempo.
- **Otimizações de SEO**: Inclusão de meta tags sociais (Open Graph), `sitemap.xml`, `robots.txt` e estrutura semântica HTML5.
- **Suíte de Testes Automatizados**: Testes unitários e de integração configurados com Vitest, Happy DOM, `@testing-library/react` e `@testing-library/jest-dom`.
- **Pipelines de CI/CD (GitHub Actions)**:
  - Workflow de verificação de linter (`lint.yml`).
  - Workflow de execução de testes e build (`test.yml`).
  - Workflow de deploy automatizado no Firebase Hosting.
- **Padronização de Código e Lint**: Configuração do ESLint 9 com Prettier, plugins do React e remoção de imports não utilizados.
- **Versionamento Automático (Semantic Release)**: Configuração do `semantic-release` com plugins de changelog, git e GitHub releases via Conventional Commits.
- **Exibição da Versão no Rodapé**: Exposição da variável global `__APP_VERSION__` via Vite `define` no `vite.config.js` e renderização discreta no `Footer.jsx`.
- **Workflow de Automação de Releases (`release.yml`)**: Pipeline no GitHub Actions para tagging e releases automáticos em envios para a branch `main`.

### Changed
- **Migração do ambiente de testes**: Alterado o ambiente de testes do Vitest de `jsdom` para `happy-dom` para melhor desempenho e menor consumo de recursos.
- **Centralização de Estilos**: Remoção de cores hardcoded no CSS e centralização das paletas de cores (`brand`, `navy`, `accent`) no `tailwind.config.js`.
- **Estruturação de Dados**: Centralização de textos, perguntas do FAQ, depoimentos e contatos em `src/data/content.js`.
- **Gatilho de Deploy do Firebase (`firebase-hosting-merge.yml`)**: Alterado para disparar exclusivamente mediante criação de tags de versão (`v*.*.*`).

### Fixed
- **Tags de Serviços**: Correção do mapeamento de valores e visualização das tags nos cards de serviços.
- **Ícones da Interface**: Substituição de ícones para garantir compatibilidade com a versão gratuita do Font Awesome.
- **Configuração de Botões e Links**: Ajustes na cor e direcionamento do botão do WhatsApp e link do Instagram.
