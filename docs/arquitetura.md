# Arquitetura do Projeto

## Visão Geral

O projeto é um site institucional estático desenvolvido com HTML5 semântico, Bulma CSS Framework, CSS personalizado e JavaScript, priorizando SEO, desempenho e facilidade de manutenção.

---

## Arquitetura em Camadas

                Usuário
                   │
                   ▼
            Navegador Web
                   │
                   ▼
              index.html
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 style.css      Bulma CSS    script.js
      │            │            │
      └────────────┼────────────┘
                   ▼
               Componentes
      Header • Hero • Sobre
      Serviços • Contato • Footer
                   │
                   ▼
          Recursos Estáticos
       imagens • ícones • fontes

---

## Estrutura Física

site-advogado-rannyef/
│
├── README.md
├── CHANGELOG.md
├── LICENSE
├── index.html
│
├── docs/
│   ├── arquitetura.md
│   ├── checklist.md
│   ├── deploy.md
│   ├── identidade-visual.md
│   ├── roadmap.md
│   └── tecnologias.md
│
└── static/
    ├── css/
    │   └── style.css
    │
    ├── img/
    │   ├── banner_hero_solid2.png
    │   ├── ...
    │
    ├── js/
    │   └── script.js
    │
    └── assets/

---

## Fluxo da Aplicação

Usuário
    │
    ▼
index.html
    │
    ├── style.css
    ├── Bulma CSS
    ├── Font Awesome
    ├── Google Fonts
    └── script.js
             │
             ▼
      Manipulação do DOM

---

## Responsabilidades

HTML5
- Estrutura semântica
- SEO
- Conteúdo

Bulma CSS
- Grid
- Layout
- Responsividade
- Componentes

CSS
- Identidade visual
- Ajustes específicos
- Hero
- Responsividade complementar

JavaScript
- Menu Mobile
- Scroll
- Interações
- Atualização do ano do footer

---

## Evolução da Arquitetura

MVP
HTML + Bulma + CSS + JavaScript

↓

Versão 2

Spring Boot
Thymeleaf
SEO Server Side

↓

Versão 3

Painel Administrativo

↓

Versão 4

CMS
Blog
Agendamento Online