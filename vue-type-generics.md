# Vue v3.3.0 - Generically Typed SFCs.
 
Vue v3 continues to provide excellent type support, and in v3.3.0, it'll be expanding on this with allowing generic types to be used in your components. Let's dive in and see how this works, and what benefits it can bring.

## Getting Started

We're going to create a Select component using the [headlessUI Listbox](https://headlessui.com/vue/listbox).

If you want to skip setting up the basic project and installing dependencies, you can grab the starter code from the `starter` branch here and skip to the next section.

Firstly, I'm going to create a new Vue 3 + Vite project.

```bash
npm create vite@latest vue-type-generics
```

And select the following options:

```
√ Select a framework: Vue
√ Select a variant: Customize with create-vue
√ Add TypeScript? Yes
√ Add JSX Support? No
√ Add Vue Router? No
√ Add Pinia? No
√ Add Vitest? No
√ Add an End-to-End Testing Solution? No
√ Add ESLint for code quality? Yes
√ Add Prettier for code formatting? No
```

At the time of writing, Vue v3.3.0 is still in beta, so we'll need to explicitly install it. For all the package installations, if using npm you'll need to add the `--legacy-peer-deps` flag to to peer dependencies being broken when using Vue v3.3.0.

```bash
cd vue-type-generics && npm install vue@3.3.0-beta.3
```

We'll also install headlessUI and tailwindcss:

```bash
npm install @headlessui/vue --legacy-peer-deps
npm install -D tailwindcss postcss autoprefixer --legacy-peer-deps
```

To [configure tailwindcss](https://tailwindcss.com/docs/guides/vite#vue):

```bash
npx tailwindcss init -p
```
```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [], // [!code --]
  content: [ // [!code ++]
    "./index.html", // [!code ++]
    "./src/**/*.{vue,js,ts,jsx,tsx}", // [!code ++]
  ], // [!code ++]
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```css
/* src/assets/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Your package.json should look something like this:

```json
{
  "name": "vue-type-generics",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check build-only",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  },
  "dependencies": {
    "@headlessui/vue": "^1.7.13", // [!code ++]
    "vue": "^3.2.47" // [!code --]
    "vue": "^3.3.0-beta.3" // [!code ++]
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.2.0",
    "@tsconfig/node18": "^2.0.0",
    "@types/node": "^18.16.3",
    "@vitejs/plugin-vue": "^4.2.1",
    "@vue/eslint-config-typescript": "^11.0.3",
    "@vue/tsconfig": "^0.3.2",
    "autoprefixer": "^10.4.14", // [!code ++]
    "eslint": "^8.39.0",
    "eslint-plugin-vue": "^9.11.0",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.4.23", // [!code ++]
    "tailwindcss": "^3.3.2", // [!code ++]
    "typescript": "~5.0.4",
    "vite": "^4.3.4",
    "vue-tsc": "^1.6.4"
  }
}
```

We can remove everything in the `src/components`, as well as `src/assets/base.css` and `src/assets/logo.svg`. Finally, we can change the content of `src/App.vue` to simply:

```vue
<script setup lang="ts">
</script>

<template>
  <main>Hello, Vue 3.3 TS Generic Components!</main>
</template>
```
