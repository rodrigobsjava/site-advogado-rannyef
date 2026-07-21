# 🔍 SEO

> Estratégia de SEO adotada para o MVP do projeto **Site Advogado Rannyef**.

---

# Objetivo

Desenvolver um site institucional com boas práticas de SEO desde o início, facilitando a indexação pelos mecanismos de busca e preparando a evolução do projeto.

---

# Tecnologias

- HTML5 Semântico
- Bulma CSS
- CSS personalizado
- JavaScript

---

# Estrutura Semântica

O site deve utilizar elementos semânticos do HTML5.

```html
<header>
<nav>
<main>
<section>
<footer>
```

---

# Hierarquia de títulos

Cada página deve possuir apenas um `<h1>`.

Exemplo:

```text
H1
 ├── H2
 │     ├── H3
 │     └── H3
 └── H2
```

---

# Meta Tags

Cada página deve possuir:

- `<title>`
- `description`
- `viewport`
- `charset`

---

# Imagens

Todas as imagens devem possuir:

- nome descritivo;
- atributo `alt`;
- tamanho otimizado.

Exemplo:

```html
<img
src="static/img/rannyef_1_2.png"
alt="Advogado Rannyef Barbosa de Sousa">
```

---

# Performance

Boas práticas adotadas:

- CSS externo
- JavaScript externo
- imagens otimizadas
- carregamento rápido
- estrutura simples

---

# Responsividade

O projeto segue a abordagem:

- Mobile First
- Tablet
- Desktop

---

# URLs

Arquivos organizados em:

```text
index.html

static/
    css/
    img/
    js/
```

---

# Checklist

## HTML

- [ ] HTML5 semântico
- [ ] Apenas um H1
- [ ] Hierarquia correta de títulos

## Meta Tags

- [ ] Title
- [ ] Description
- [ ] Viewport
- [ ] Charset

## Imagens

- [ ] Nome descritivo
- [ ] Alt
- [ ] Tamanho otimizado

## Performance

- [ ] CSS externo
- [ ] JavaScript externo
- [ ] Imagens otimizadas

## Responsividade

- [ ] Mobile
- [ ] Tablet
- [ ] Desktop

---

# Evolução

Após a entrega do MVP serão adicionados:

- Open Graph
- Twitter Cards
- sitemap.xml
- robots.txt
- Schema.org
- Google Search Console
- Google Analytics
- Lighthouse 95+