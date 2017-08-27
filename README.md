# @deveodk/vue-router-axios

[![npm](https://img.shields.io/npm/v/@deveodk/vue-router-axios.svg)](https://www.npmjs.com/package/@deveodk/vue-router-axios) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Elegant plugin for cancelling axios request automatically on page change. Support wildcard paths for easy exclude

## Installation

#### Npm

```bash
npm install --save @deveodk/vue-router-axios
```

```js
import Vue from 'vue'
import vueRouterAxios from '@deveodk/vue-router-axios'

Vue.use(vueRouterAxios)
```
#### Browser
```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="@deveodk/vue-router-axios/dist/@deveodk/vue-router-axios.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/@deveodk/vue-router-axios"></script>
```


### Usage

```js
import vueRouterAxios from '@deveodk/vue-router-axios'
Vue.use(vueRouterAxios, {
    axios: axios,
    router: router,
    excludePaths: [
        '/users/identity',
        '/auth/google/token',
        // this is a wildcard for excluding every path that has /inquiries/
        '/inquiries/*'
    ]
})
```