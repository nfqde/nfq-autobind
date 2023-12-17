<div id="top"></div>

# @nfq/autobind

[![EsLint](https://github.com/nfqde/nfq-autobind/actions/workflows/eslint.yml/badge.svg)](https://github.com/nfqde/nfq-autobind/actions/workflows/eslint.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


---

1. [Description](#description)
2. [Getting started](#getting-started)
    1. [Installation](#installation)
3. [Usage](#usage)
4. [Support](#support)

---

## Description: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The `@nfq/autobind` package provides a decorator function for automatically binding class methods to the instance of the class. This ensures the correct context (`this` value) is maintained, especially useful when passing methods as callbacks. It is designed to streamline method binding in JavaScript and TypeScript applications, particularly beneficial in React components and other class-based structures.

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Getting started

To install the package locally follow the next steps:

### Installation

To install the package run
```sh
npm install @nfq/autobind
```
if you are on yarn
```sh
yarn add @nfq/autobind
```
or on pnpm
```sh
pnpm install @nfq/autobind
```

---

## Usage

The @autobind decorator can be used in class components to ensure that methods are bound to the instance of the class. This is especially useful when passing methods as callbacks.

```ts
import {autobind} from '@nfq/autobind';

class MyClass {
  @autobind
  myMethod() {
    // This method is automatically bound to instances of MyClass.
  }
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

---

## Support

Christoph Kruppe - [https://github.com/ckruppe] - c.kruppe@nfq.de  

<p align="right">(<a href="#top">back to top</a>)</p>