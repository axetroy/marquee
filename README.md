
[![Build Status](https://travis-ci.org/axetroy/marquee.svg?branch=master)](https://travis-ci.org/axetroy/marquee)
[![Coverage Status](https://coveralls.io/repos/github/axetroy/marquee/badge.svg?branch=master)](https://coveralls.io/github/axetroy/marquee?branch=master)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=7.6-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/%40axetroy%2Fmarquee.svg)](https://badge.fury.io/js/%40axetroy%2Fmarquee)
![Size](https://github-size-badge.herokuapp.com/axetroy/marquee.svg)


### Marquee component for Vue & React

[online demo](https://axetroy.github.io/marquee)

### Usage

Use with Vue

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

Use in React

```jsx
import React from "react";
import Marquee from "@axetroy/marquee/react"

class App extends from React.Component{
  render () {
    return <Marquee style={{width: 300}}>
      Parcel can take any type of file as an entry point, but a HTML or
      JavaScript file is a good place to start. If you link your main
      JavaScript file in the HTML using a relative path, Parcel will also
      process it for you, and replace the reference with a URL to the output
      file.
    </Marquee>
  }
}
```

## License

The [MIT License](https://github.com/axetroy/marquee/blob/master/LICENSE)