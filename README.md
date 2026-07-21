# ⚖️ Site Institucional – Advogado Rannyef Barbosa de Sousa

Site institucional desenvolvido para apresentação profissional, divulgação das áreas de atuação e geração de contatos através de WhatsApp e e-mail.

O projeto foi concebido seguindo uma abordagem **MVP (Minimum Viable Product)**, priorizando desempenho, simplicidade, SEO e facilidade de manutenção.

---

# Objetivos

- apresentar o advogado e sua atuação;
- transmitir credibilidade e profissionalismo;
- facilitar o contato do cliente;
- possuir excelente desempenho;
- possuir alto índice de SEO;
- ser totalmente responsivo;
- servir como base para futuras evoluções.

---

# Status do Projeto

🚧 Em desenvolvimento

Estimativa atual:

- Front-end: aproximadamente **80%**
- MVP geral: aproximadamente **70%**

---

# Arquitetura do Projeto

Nesta primeira versão foi adotada uma arquitetura totalmente estática.

```
site-advogado-rannyef/
│
├── index.html
│
├── static/
│   ├── css/
│   ├── js/
│   ├── img/
│   ├── assets/
│   └── doc/
│
└── templates/
```

A decisão foi tomada para reduzir complexidade, acelerar a entrega e permitir uma futura migração para Spring Boot sem necessidade de reescrever o front-end.

---

# Tecnologias

## HTML5

- HTML5 Semântico
- Estrutura acessível
- SEO Friendly

## CSS

- Bulma CSS Framework
- CSS personalizado apenas onde necessário
- Mobile First

## JavaScript

JavaScript Vanilla para:

- menu mobile
- scroll suave
- pequenas interações
- futuras validações

## Ícones

- Font Awesome

## Fontes

- Google Fonts
- Inter

---

# Princípios adotados

- Mobile First
- HTML Semântico
- Performance
- Código limpo
- Reutilização
- CSS mínimo
- Responsividade
- SEO

---

# Estrutura das páginas

## Header

- Logo
- Navegação
- Botão Contato

## Hero

- Foto do advogado
- Chamada principal
- Botão CTA

## Quem Somos

- Apresentação
- História
- Foto

## Áreas de Atuação

- Cards
- Ícones
- Descrição

## Consultoria

- Serviços
- Atendimento
- WhatsApp
- E-mail

## Footer

- Contatos
- Links rápidos
- Direitos autorais

---

# Recursos do MVP

- Hero responsivo
- Navegação fixa
- Layout responsivo
- WhatsApp
- E-mail
- Scroll suave
- Ícones FontAwesome
- SEO básico
- Estrutura preparada para expansão

---

# SEO

O projeto foi desenvolvido pensando em:

- HTML semântico
- headings corretos
- imagens com alt
- URLs limpas
- performance
- acessibilidade
- responsividade

Posteriormente serão adicionados:

- sitemap.xml
- robots.txt
- Open Graph
- Twitter Cards
- JSON-LD
- Meta Tags avançadas

---

# Responsividade

O layout segue abordagem Mobile First.

Breakpoints principais:

- Mobile
- Tablet
- Desktop
- Wide Screen

---

# Organização do CSS

```
style.css

Variáveis Globais

Hero

Apresentação

Serviços

Consultoria

Footer

Responsivo
```

---

# Organização do JavaScript

```
script.js

Navbar

Scroll

Menu Mobile

Eventos

Utilidades
```

---

# Estrutura de documentação

```
static/doc/

checklist.md

estrutura.md

technologies.md
```

---

# Roadmap

## MVP

- [x] Estrutura HTML
- [x] Hero
- [x] Navbar
- [x] Sessões
- [ ] Ajustes finais do Hero
- [ ] SEO
- [ ] Conteúdo definitivo
- [ ] Deploy

---

## Próxima versão

- Spring Boot
- Thymeleaf
- Formulário funcional
- Envio de e-mail
- Painel administrativo
- CMS simples

---

# Futuro da Arquitetura

Após validação do MVP, o projeto poderá evoluir para:

HTML
↓

Spring Boot

↓

Thymeleaf

↓

SMTP

↓

Painel Administrativo

↓

Banco de Dados

↓

CMS

Sem necessidade de reconstruir o layout.

---

# Autor

**Rodrigo Barbosa De Sousa**

Desenvolvedor Java Full Stack

GitHub:
https://github.com/rodrigobsjava

---

# Cliente

**Rannyef Barbosa de Sousa**

Advogado