# Techqueria's Podcast website

Techqueria and Points of Presence Media have come together to create a podcast featuring in-depth narrative stories, interviews and business advice about and from the perspective of the Latinx tech community. This website should serve as an introduction to the content, facilitate finding it, sharing, sponsoring and supporting the effort.


## Code of Conduct

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

More details can be found at this project's [code of conduct](.github/CODE_OF_CONDUCT.md).

## Contributing

To get started...
1. [Report a bug or request a feature](https://github.com/techqueria/website/issues/new/choose)! 😊
2. 🍴 [Fork](https://github.com/techqueria/website#fork-destination-box) this repository
3. 🔨 View our [contributing guidelines](.github/CONTRIBUTING.md)
4. 🎉 [Open a new pull request](https://github.com/techqueria/podcast-website/compare) and get it approved!

## 🚀 Quick start

0. **Clone**

If `git` is available in your computer, clone the repo following this command:

```
git clone git@github.com:techqueria/podcast-website.git
```

If you need help cloning or getting git on your machine, ping us in slack for some coaching, we're happy to help!

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd podcast-website/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `podcast-website` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!


### Content

Currently we're following [this guide](https://dev.to/ashleemboyer/build-a-multi-page-gatsby-site-from-json-3kp) to manage the content,
it assumes there's a json file that is navigated by `gatsby-node.js` to create pages in the graph that gatsby turns into real pages in the deployment process.

This however is open to change.

To add other additional pages, like `/about/` or `/404` follow the [Gatsby Documentation](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/) for more information.


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

