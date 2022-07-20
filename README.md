<div align="center">
  <p align="center">
    <img src="src/assets/img/gif-next-theme.gif" alt="Nextjs TS DaisyUI Themes" />
  </p>
 <h1>Nextjs | Typescript | TailwindCSS | Daisyui</h1>
 <h3>Projeto base para projetos utilizando Nextjs, Typescript, com multi temas da lib daisyUI TailwindCSS<h3>
</div>


### 1. `Criando a aplicação Nextjs com template typescript`
```
$ yarn create next-app nextjs-typescript-daisyui-multi-theme --typescript
```

### 2. `Instalando TailwindCSS`
```bash
$ yarn add -D postcss autoprefixer tailwindcss
```

### 3. `Inicializando o TailwindCCS que resultará no arquivo tailwind.config.js`
```
$ npx tailwindcss init -p
```

### 4. `Instalando DaisyUI`
```
$ yarn add -D postcss daisyui
```

### 5. `Configuração da pasta tailwind.config.js com daisyui`
```
const themes = require("./src/Themes/index");
module.exports = {
  content: ["{pages,src}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true, 
  theme: ["dark"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{ ...themes }],
  },
};
```
