# Vue 3 Lottie Animation Player

![Alt Text](https://raw.githubusercontent.com/nguyenshort/vue-lottie/master/demo.gif)

## Installation
```
npm i @nguyenshort/vue-lottie 
```

## Initialization

Include in it either globally (in main.js) or a Vue component.

Global:

```js
// main.ts, main.js
import Vue from "vue";
import VueLottie from '@nguyenshort/vue-lottie'

app.use(VueLottie)
```

Component:

```js
import { VueLottiePlayer } from '@nguyenshort/vue-lottie'
export default {
    components: {
       VueLottiePlayer
    }
}
```

## Usage

```vue
<script>
import { VueLottiePlayer } from '@nguyenshort/vue-lottie'
export default {
  name: "MyComponent",
  components: {
    VueLottiePlayer
  }
};
</script>

<template>
  <div>
    <vue-lottie-player
        width='250px'
        height='200px'
        loop
        path="https://assets8.lottiefiles.com/packages/lf20_7jnffdxl.json"
    />
  </div>
</template>
```
