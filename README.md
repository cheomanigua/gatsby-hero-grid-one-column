<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hero one column grid layout
</h1>

Project built upon original template *gatsby-starter-hello-world*.

Perfect implementation for Landing Pages:
- Fixed Navbar
- Smooth scrolling
- Responsive
- gatsby-image for content images
- gatsby-background-image for hero header image
- SEO component
- 99 score in Lighthouse

## Layout

It uses a simple one column grid layout with the following structure:

    ├── SEO
    ├── Helmet
    ├── Header
        ├── BackgroundImage
            ├── header
                ├── nav (flexbox)
    ├── main
        ├── sectionA
        ├── services
        ├── sectionB
        ├── about (flexbox)
        ├── sectionC
        ├── contact
    ├── Footer


## 🧐 File Structure

A quick look at the top-level files and directories you'll see in this project.

    ├── src
        ├── components
            ├── footer.js
            ├── header.js
            ├── images.js
            ├── layout.js
            ├── SEO.js
        ├── css
            ├── about.css
            ├── contact.css
            ├── header.css
            ├── navbar.css
            ├── services.css
            ├── style.css
        ├── images
            ├── aplicacionesmoviles.jpg
            ├── charts.png
            ├── desarrolloweb.png
            ├── header.jpg
            ├── marketingonline.jpeg
            ├── mobile.png
            ├── team-collab.png
        ├── pages
            ├── index.js
        ├── sections
            ├── about.js
            ├── contact.js
            ├── sectiona.js
            ├── sectionb.js
            ├── sectionc.js
            ├── services.js
        ├── static
            ├── favicon.ico
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser. In this project, this file contains the javascript code to transition the navbar from transparent to solid when scrolling down.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## Other directories and files

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
