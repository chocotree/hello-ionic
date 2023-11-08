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

3. 不要加入 tailwindcss preflight

  移除 @tailwind base;

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