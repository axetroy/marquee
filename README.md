[![Build Status](https://travis-ci.org/axetroy/marquee.svg?branch=master)](https://travis-ci.org/axetroy/marquee)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=7.6-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/%40axetroy%2Fmarquee.svg)](https://badge.fury.io/js/%40axetroy%2Fmarquee)
![Size](https://github-size-badge.herokuapp.com/axetroy/marquee.svg)

### Marquee component for Vue & React

[Online Demo](https://axetroy.github.io/marquee)

### Installation

```bash
npm install @axetroy/marquee
```

### Usage

Using with Vue

```vue
<template>
  <v-marquee style="width: 300px">
    Parcel can take any type of file as an entry point, but a HTML or JavaScript
    file is a good place to start. If you link your main JavaScript file in the
    HTML using a relative path, Parcel will also process it for you, and replace
    the reference with a URL to the output file.
  </v-marquee>
</template>

<script>
import Marquee from "@axetroy/marquee/vue";

export default {
  components: {
    "v-marquee": Marquee
  }
};
</script>
```

Using in React

```jsx
import React from "react";
import Marquee from "@axetroy/marquee/react";

class App extends React.Component {
  render() {
    return (
      <Marquee style={{ width: 300 }}>
        Parcel can take any type of file as an entry point, but a HTML or
        JavaScript file is a good place to start. If you link your main
        JavaScript file in the HTML using a relative path, Parcel will also
        process it for you, and replace the reference with a URL to the output
        file.
      </Marquee>
    );
  }
}
```

### Props

| Prop         | Description             | Defaults |
| ------------ | ----------------------- | -------- |
| pauseOnHover | pause when hover on it. | `false`  |

### Methods

| Method  | Description                  |
| ------- | ---------------------------- |
| pause() | pause Marquee component.     |
| start() | (re)start Marquee component. |

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

> **IE11** require polyfill ``Object.assign()``

> **IE10** require polyfill ``new Set()`` and ``new Map()``

## License

The [MIT License](https://github.com/axetroy/marquee/blob/master/LICENSE)
