# 1.0.0 (2026-09-09)


### Bug Fixes

* **ci:** corrigir versão do node ([6a4a252](https://github.com/JoaoGH/instrutor-autonomo/commit/6a4a252f3ecd931265abbb6d732f0cb132930f3b))
* corrigir branch de alvo ([9fd68e1](https://github.com/JoaoGH/instrutor-autonomo/commit/9fd68e169a2720333625f05767327b1c8b47e2fe))
* corrigir cor do botão do whatsapp ([59c8fc1](https://github.com/JoaoGH/instrutor-autonomo/commit/59c8fc1d501b5edcf398b965480779f413db5d09))
* corrigir horario de trabalho ([e7b38d8](https://github.com/JoaoGH/instrutor-autonomo/commit/e7b38d88a86050ad0c38a63fc916f9118fdf751a))
* corrigir icone para um da versão gratuita do fa ([ff27cd0](https://github.com/JoaoGH/instrutor-autonomo/commit/ff27cd06d0dc81f5bc85ddc1f7c55ca448f81bda))
* corrigir incone para um da versão gratuita ([a4151ed](https://github.com/JoaoGH/instrutor-autonomo/commit/a4151ed54975a170cb0df1768529bdbe1c203a31))
* corrigir url para usar a constante já definida ([f2aa7d6](https://github.com/JoaoGH/instrutor-autonomo/commit/f2aa7d69cc88901d79ccf11a490e99f2fb6dfe07))
* corrigir usuario instagram ([c781f34](https://github.com/JoaoGH/instrutor-autonomo/commit/c781f34555fce4627f039b2782c67930c18b2057))
* corrigir valores das tags dos cards de serviços ([8a07e49](https://github.com/JoaoGH/instrutor-autonomo/commit/8a07e49600da4d02567c74521b6f8b00f8ea3f6c))
* **docs:** atualizar readme e changelog ([93aa0a6](https://github.com/JoaoGH/instrutor-autonomo/commit/93aa0a6f459ee496b61a4f442e309629cf11e83d))
* resolver problemas lint ([8dcf6f9](https://github.com/JoaoGH/instrutor-autonomo/commit/8dcf6f99562f6d71f13a80406a1563e444b51157))


### Features

* add lint into project ([2540fb5](https://github.com/JoaoGH/instrutor-autonomo/commit/2540fb5a002041d021fbfa1374cc985518ba5794))
* adiciona i18n e limpa SITE_CONTENT de content.js ([974a18d](https://github.com/JoaoGH/instrutor-autonomo/commit/974a18d53305903a38f8d54bd9a87954a5b962ab))
* adiciona suporte a internacionalizacao (i18n) pt-BR e en ([0a68740](https://github.com/JoaoGH/instrutor-autonomo/commit/0a68740ab57cb431177cf2444c5f6a4334ede366))
* adicionar botão de intagram ([fcb80ed](https://github.com/JoaoGH/instrutor-autonomo/commit/fcb80eddd8ba22c76c9830ec0e71508ebe640383))
* adicionar mais testemunhos ([ba22dd6](https://github.com/JoaoGH/instrutor-autonomo/commit/ba22dd65aca34d92d69a2b2cd3065f075d1a1697))
* ativiar toast conforme atributo ([620bcda](https://github.com/JoaoGH/instrutor-autonomo/commit/620bcda86d2e92afb2b15da5e004fed149c9e115))
* **ci:** implementar semantic-release e exibicao de versao no rodape ([928ae6b](https://github.com/JoaoGH/instrutor-autonomo/commit/928ae6bb0a0b7bc87623e0ace53af0f8b46c2558))
* implementar testes ([41e27e4](https://github.com/JoaoGH/instrutor-autonomo/commit/41e27e4981afc78c342e07754f4e7a57341c6fa4))
* melhorar seo da pagina ([cf1ff98](https://github.com/JoaoGH/instrutor-autonomo/commit/cf1ff9852f07b544161ec327d3540181f01cfec8))

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
