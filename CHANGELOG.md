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
- **Esteira Unificada de CI/CD (`ci-cd.yml`)**: Pipeline integrada no GitHub Actions com Node.js 22 que executa linter, testes automatizados, validação de build e aciona o `semantic-release` de forma encadeada (`needs: test`).
- **Remoção de Workflows Obsoletos**: Exclusão dos arquivos redundantes `test.yml` e `release.yml`.
- **Gatilho de Deploy do Firebase (`firebase-hosting-merge.yml`)**: Ajustado para utilizar Node.js 22 e disparar exclusivamente mediante publicação de tags de versão (`v*.*.*`).

### Fixed
- **Tags de Serviços**: Correção do mapeamento de valores e visualização das tags nos cards de serviços.
- **Ícones da Interface**: Substituição de ícones para garantir compatibilidade com a versão gratuita do Font Awesome.
- **Configuração de Botões e Links**: Ajustes na cor e direcionamento do botão do WhatsApp e link do Instagram.
