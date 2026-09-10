<div align="center">

<img height=200px src="assets/stylelintrc-generator-logo.png" alt="Project logo">

</div>

<h1 align="center">stylelintrc-generator</h1>

 <p align="center">
    A simple CLI tool to create .stylelintrc.json file perfectly compatible with your project and code formatter Prettier written in TypeScript
    <br />
    Answer some simple questions and get your RC file as well as all the packages installed
    <br />
    <a href="https://www.npmjs.com/package/stylelintrc-generator">NPM Package</a>
    ·
    <a href="https://github.com/DeeshanSharma/stylelintrc-generator/issues">Report Bug</a>
    ·
    <a href="https://github.com/DeeshanSharma/stylelintrc-generator/issues">Request Feature</a>
  </p>

<div align="center">

[![npm](https://img.shields.io/npm/v/stylelintrc-generator?color=success&label=npm%20package&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/stylelintrc-generator)
![Status](https://img.shields.io/badge/status-unmaintained-lightgrey.svg?logo=statuspal&style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues/DeeshanSharma/stylelintrc-generator?logo=github&style=for-the-badge)](https://github.com/DeeshanSharma/stylelintrc-generator/issues)
[![GitHub forks](https://img.shields.io/github/forks/DeeshanSharma/stylelintrc-generator?logo=github&style=for-the-badge)](https://github.com/DeeshanSharma/stylelintrc-generator/network)
[![GitHub stars](https://img.shields.io/github/stars/DeeshanSharma/stylelintrc-generator?logo=github&style=for-the-badge)](https://github.com/DeeshanSharma/stylelintrc-generator/stargazers)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/DeeshanSharma/stylelintrc-generator?logo=github&style=for-the-badge)](https://github.com/DeeshanSharma/stylelintrc-generator/pulls)
[![GitHub License](https://img.shields.io/github/license/DeeshanSharma/stylelintrc-generator?color=sucess&logo=gnu%20privacy%20guard&logoColor=white&style=for-the-badge)](https://github.com/DeeshanSharma/stylelintrc-generator/blob/main/LICENSE)

</div>

<hr />
<br />

<div align="center">

![Project Demo Gif](assets/stylelintrc-generator-demo.gif)

</div>

<hr />

<p align="center">Stylelintrc-Generator is a simple but time-saving command-line tool that will help you help you setup your project and code formatter with all the style configuration you want. You just have to answer some really simple questions and this tool will do all the heavy lifting for you creating the file according to config and installing all the packages.</p>

## ⚠️ Unmaintained since 2021

Still functional: Stylelint reads `.stylelintrc.json` today exactly as it did in
2021, so unlike its ESLint sibling this generator is not broken by a format
change. It simply has not been touched since, and the package versions it
installs are four years old.

## 💡 Features

1. Perfectly compatible with
   - Scss
   - CSS
   - Prettier, wired in through `stylelint-prettier/recommended`
1. Optional BEM plugin. Answering yes installs `stylelint-selector-bem-pattern`
   and registers it under `plugins`, but the generated `rules` block is left
   empty, so nothing is enforced until you write a
   `plugin/selector-bem-pattern` rule yourself
1. Ask questions and creates config based on your choice
1. You have complete control over the configuration
1. Checks for package.json file and `npm init -y` if not found
1. Installs all required packages as dev dependency as per the config
1. Uses your preferred package manager

## ⛏️ Built with

- Inquirer
- Listr
- Execa

## 🏁 Getting Started

Follow all these instructions and learn the best way to take benefits from this package.

### 📚 Prerequisite

- Node
- npm/yarn

### 🧰 Installation

1. Global installation (preferred way)

   ```bash
   npm i stylelintrc-generator -g
   ```

   > _**Note:** Global installation is not possible with yarn v2 as far as I know, (please guide me if I am wrong). If you are using yarn v1 then use `yarn global add stylelintrc-generator`. But I recommend using the global method_

1. Per project installation

   ```bash
   npm i stylelintrc-generator -D

               or

   yarn add stylelintrc-generator -D
   ```

1. Command to generate RC file

   ```bash
   npx generate-stylelintrc

            or

   generate-stylelintrc
   ```

## 🎈 Usage

The sole motive of this package is to improve Developer Experience. The package is made to save time configuring **Style Pattern** and **Prettier**, with your project. The tool will ask you certain questions, prepare a config and required packages list based on your answers, install all the packages and create the RC file perfectly compatible with your project as well as Prettier. You just need to focus on building your awesome project.

## ✍️ Authors

- [@DeeshanSharma](https://www.github.com/DeeshanSharma) - Idea & Initial Work

## 📖 Contributing

**_"In real open source, you have the right to control your own destiny."_** _- Linus Torvalds_

Contributions are what makes the open-source community an amazing place. Any contributions you make are **greatly appreciated**.

## 💳 License

Distributed under the MIT License. See [`LICENSE`](LICENCE) for more information.

## 🧬 Resources

- [Stylelint Docs](https://stylelint.io)
- [NPM Docs - Creating Node.js modules](https://docs.npmjs.com/creating-node-js-modules)
- [Twilio Guide - How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)

## 🎉 Acknowledgement

- [Shields.io](https://shields.io)
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [Chalk](https://github.com/chalk/chalk)
- [Listr](https://github.com/SamVerschueren/listr)
- [Execa](https://github.com/sindresorhus/execa)
- [Center Align](https://github.com/jonschlinkert/center-align)
- [Figlet.js](https://github.com/patorjk/figlet.js)
- [Clear](https://github.com/bahamas10/node-clear)

## 👋 EndNote

Star this project so you don't miss it when you need it and avoid wasting time Googling the stuff and just focus on the build.
