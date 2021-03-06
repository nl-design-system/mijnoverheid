# MijnOverheid Design System

**This project is very much WORK IN PROGRESS and all components are released as _alpha_ version. Always define the exact version you want to use, and test for breaking changes before upgrading to a newer alpha release.**

**Applying design elements from this project is strictly prohibited for organisations that are not part of the central Government of The Netherlands.**

This project is part of a community iniative to use [NL Design System](https://designsystem.gebruikercentraal.nl) components for projects that need to adhere to Rijkshuisstijl. Organisations from the central Government of the Netherlands (for example: [Belastingdienst](https://www.belastingdienst.nl/), [DUO](https://www.duo.nl), [Logius](http://logius.nl), [SVB](https://www.svb.nl/)), as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.

## License

This project contains both proprietary and free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md).

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).

### Logo and style guide

Copyright applies to the Rijkshuisstijl logo and Rijkhuisstijl brand identity. Use of logo and brand identity is strictly prohibited for any other use than developing websites and apps for the central Government of The Netherlands.

### Fonts

[Fonts used for the Rijkshuisstijl](https://www.rijkshuisstijl.nl/basiselementen/basiselementen-online/webfonts) are [designed specifcally for the central Government of The Netherlands](https://www.rijkshuisstijl.nl/basiselementen/documenten/verzamelingen-afbeeldingen/2014/06/01/achtergrondartikel-rijkshuisstijl-webfonts) and are not open source. Before applying the web fonts to your project, ensure you have permission from the Rijkshuisstijl. Until you have permission, use fallback fonts instead, such as the system fonts Arial, Verdana or Times New Roman.

## Permission

When you are developing a website for the central Government of the Netherlands, you request permission by [contacting the Ministry of General Affairs](https://www.rijkshuisstijl.nl/contact).

## Getting started

Include the Design Token CSS variables:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@mijnoverheid/design-tokens/dist/index.css" />
```

Combine it with the latest Web Components from the NL Design System community, for example:

```html
<script
  src="https://unpkg.com/@mijnoverheid/web-components-stencil/dist/mijnoverheid/mijnoverheid.esm.js"
  type="module"
></script>
```

### Avoid automatic upgrades to a new version with breaking changes

For all dependencies, see what the version is you use while developing and update the URL without version to include a version number, and ensure your page keeps working even when new versions are released:

For _alpha_, _beta_ and _rc_ versions:

```text
https://unpkg.com/@mijnoverheid/design-tokens/dist/index.css
```

Above should become:

```text
https://unpkg.com/@mijnoverheid/design-tokens@1.0.0-alpha.10/dist/index.css
```

For stable versions it would become:

```text
https://unpkg.com/@mijnoverheid/design-tokens@^1.0.0/dist/index.css
```

## Contributing

### Install prerequisites

You need to have the following tools installed to run Storybook locally:

- Git
- [Node.js and npm](https://nodejs.org/en/)

Open a terminal and run the following commands to check:

- `git --version`: a relatively recent version should be installed (Git 2.28 or later)
- `node -v`: should be at least the version defined in the `engines` section of [`package.json`](./package.json)
- `npm -v`: should be at least the version defined in the `engines` section of [`package.json`](./package.json)

### Install code editor

You can use any editor you'd like, but in case you use [Visual Studio Code](https://code.visualstudio.com/) we recommend the following extensions that are useful for this project:

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)

### Run Storybook on your computer

1. Open Terminal.
2. Clone this Git repository to `directory/of/your/choosing`
3. `cd directory/of/your/choosing`
4. `git checkout main` to switch to the main branch, if you previously worked in this repository.
5. `git pull` to get to the latest version of the main branch
6. `npm install` to download and install all the dependencies
7. `npm run storybook` to start Storybook
8. Your main browser opens automatically with your local storybook.
9. Press `Control+C` in your terminal to stop Storybook.

### Debugging Storybook

First check the logs in the terminal if any error is displayed, if something doesn't work as expected.

Secondly check the JavaScript logs in your browsers developer tools if there are errors or warnings.

You can run the code checks with `npm run lint` to see if any code errors can be detected.

You can also check the build logs of the design tokens for errors, if you have changed Style Dictionary JSON files, by building those separately:

1. `cd proprietary/design-tokens/`
2. `npm run build`

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.
