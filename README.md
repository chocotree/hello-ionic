## Requirements

1. [doc: environments setup](https://capacitorjs.com/docs/getting-started/environment-setup)
2. vscode
3. ionic extension
4. node version >= 18
5. install cli
```bash
$ npm install -g @ionic/cli
```

- android

  1. install needed sdk (by sdk manager)
  2. install virtual device (by device manager?)

## Development

1. please open the ionic extension menu
2. enable live reload in setting
3. add ios or android project
3. build the project
4. sync the project
5. run the ios or android

## Production

TODO

## How to add tailwindcss

1. install

  因為是使用 `vite`
  因此參考 [doc: Install Tailwind CSS with Vite (using vue)](https://tailwindcss.com/docs/guides/vite#vue)

2. update postcss.config

  加上

  ```js
  {
    'tailwindcss/nesting': {},
  }
  ```

<!-- 3. 不要加入 tailwindcss preflight

  移除 @tailwind base; -->

4. 設定 dark mode 模式

  在 tailwind.config.js 加上

  ```js
  {
    darkMode: 'class',
  }
  ```

4. 調整 ionic 預設 variable.css

  移除 `@media (prefers-color-scheme: dark) {`

  有關 dark 的樣式，全部加上 `.dark` 的 prefix

## eslint component 強制使用 ParselCase 

  https://eslint.vuejs.org/rules/component-name-in-template-casing.html

  ```json
  {
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          "registeredComponentsOnly": true,
          "ignores": []
        }
      ]
  }
  ```

## How to auto import ionic component

  [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)