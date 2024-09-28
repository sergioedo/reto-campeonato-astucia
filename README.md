# Reto: Campeonato de astucia

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

   * [⏳ Agenda](#-agenda)
   * [🛠️ ¿De qué va el reto?](#-de-que-va-el-reto)
   * [📋 Requisitos de la aplicación](#-requisitos-de-la-aplicacion)
   * [👩‍💻 ¿Cómo participas en el reto?](#-como-participas-en-el-reto)
   * [🤗 Mecenazgo](#-mecenazgo)

<!-- TOC end -->

<!-- TOC --><a name="reto-campeonato-de-astucia"></a>

> 🎯 Propósito: Crear una aplicación que te avise cuando el producto baja de precio y programar lo más astutamente posible

![image](https://github.com/user-attachments/assets/3271f6b3-e019-4d9f-a701-6994f9c13486)
‎ 
‎
<!-- TOC --><a name="-agenda"></a>
## ⏳ Agenda

1. Arrancamos reto: 18 de Septiembre
2. Directo para ayudarte a definir el proyecto: 26 de Septiembre (19:00 CEST)
3. 🎁 Sorpresa entre medias ;)
4. Gran final: 10 de Octubre (19:00 CEST)
‎

‎ ‎
<!-- TOC --><a name="-de-que-va-el-reto"></a>
## 🛠️ ¿De qué va el reto?

Hay que crear una aplicación que te avise cuando el producto de Amazon que deseas con todas tus fuerzas baje de precio.

Puedes hacerlo en cualquier lenguaje de programación, no es obligatorio tenerlo en una web. 

Ya, ya, pero...
‎

**¿Por qué es un campeonato de astucia?**

Por dos motivos:

1. Porque vas a conseguir el producto más barato que el resto del mundo
2. Porque la idea es que uses los asistentes de IA todo lo que quieras

¿Quién gana el campeonato?

El más astuto o la más astuta ;)

![image](https://github.com/user-attachments/assets/de291780-e219-427d-ad2a-b3d8b320f9cd)
‎

‎ ‎
<!-- TOC --><a name="-requisitos-de-la-aplicacion"></a>
## 📋 Requisitos de la aplicación

🎧 Describimos los retos mínimos en ["Cómo planificar un proyecto antes de empezar a programarlo"](https://premium.danielprimo.io/podcast/premium/como-planificar-proyecto-antes-programarlo)

No necesitamos mucho para monitorizar el precio de un producto...

- Elegir el producto de Amazon
- Monitorizar el precio x veces día (mediante [API](https://webservices.amazon.com/paapi5/documentation/) o haciendo scraping)
- Guardar los cambios de precio en base de datos o fichero de texto
- Marcar umbral de precio para que salte la notificación
- Enviar notificación (email o telegram o cualquier medio)
- Desactivar monitorización / cambiar producto

Respecto a la interfaz, surgieron varias ideas, puede quedarte con la que más te guste:
1. Una web 
2. Un CLI (terminal)
3. Una API
4. Un bot de telegram
5. Lo que se te ocurra

🎧 En el WRP 312 explicamos más cosas sobre la API y las condiciones para poder darte de alta en ella. Resumen: es más fácil hacer scraping.
‎

‎ ‎
<!-- TOC --><a name="-como-participas-en-el-reto"></a>
## 👩‍💻 ¿Cómo participas en el reto?

1️⃣  Puedes hacerlo en el lenguaje de programación que quieras.

2️⃣ Usa la IA todo lo que quieras

3️⃣ Échale diversión, ¡no es un examen!

🧨 [Envías tu solución como una issue en este mismo repo ](https://github.com/webreactiva-devs/reto-campeonato-astucia/issues/new)con l**a URL del código del proyecto** antes del 10 de Octubre a las 19:00

🥳 Y día 10 de Octubre, Jueves, a las 19:00 CET compartimos la experiencia.

🏆 ¡Habrá premios malandriners entre los participantes!
‎

‎ ‎
<!-- TOC --><a name="-mecenazgo"></a>
## 🤗 Mecenazgo
Este reto se realiza por y para la [Comunidad Malandriner][5]

❤️


# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
