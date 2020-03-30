# curso-platzi-react-avanzado ⚛️

Repositorio con el código del [Curso Avanzado de React de Platzi](https://platzi.com/cursos/react-avanzado/)

URL project on [now](https://cursoreactavanzado.now.sh/)

## instalando weback
 Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con: npm i webpack wepack-cli --save-dev.
Paso 1: Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un console.log('Empezamos el curso!').
Paso 2: Crearemos en el root de nuestro proyecto un archivo webpack.config.js el cual tendrá toda la configuración de webpack
Paso 3: Instalaremos html-webpack-plugin con: npm i html-webpack-plugin --save-dev.
Paso 4: Instalaremos webpack-dev-server con: npm i webpack-dev-server --save-dev.
Paso 5: Añadiremos un nuevo script llamado dev: "dev": "webpack-dev-server"

```python
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
        output: {
                filename: 'app.bundle.js'
        },
        plugins: [
                new HtmlWebpackPlugin()
        ]
}
```

## instalando React y Babel

En esta clase vamos a configurar React instalando las dependencias npm i react react-dom y Babel para poder transpilar código jsx a JavaScript Vanilla con: npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev.

Ahora añadiremos en nuestro webpack.config.js lo siguiente:

```python
// webpack.config.js
{/*...*/}
module.exports = {
        {/*...*/}
        module: {
                rules: [
                        {
                                test: /\.js$/,
                                exclude: /node_modules/,
                                use: {
                                        loader: 'babel-loader',
                                        options: {
                                                presets: [
                                                        '@babel/preset-env',
                                                        '@babel/preset-react'
                                                ]
                                        }
                                }
                        }
                ]
        }
}
```


## Linter, extensiones y deploy con Now
En esta clase haremos que el desarrollo sea más ágil y correcto siguiendo los siguientes pasos:

Vamos a instalar StandardJS como dependencia de desarrollo con: npm i standard --save-dev. StandardJS nos va a servir de Linter para una mejor escritura de JavaScript/React.
Agregaremos un nuevo script en nuestro package.json: ""lint"": ""standard"".
Ahora vamos a ignorar aquellos archivos que no queremos que el Linter arregle, añadiremos en nuestro package.json lo siguiente:
```python
""standard"": [
	""ignore"": [
		""/api/**""
	]
]
```
Ahora, queremos que nuestro Linter nos detecte los errores a medida que vamos escribiendo, para hacer esto añadimos lo siguiente a nuestro package.json:
```python
""eslintConfig"": {
	""extends"": [
		""./node_modules/standard/eslintrc.json""
	]
}
```
Ahora debemos tener lo siguiente en nuestro editor de código para que funcione todo al pie de la letra:
Tener instalada la extensión ESLint
Si quieres que al guardar los cambios se formatee tu código deberás tener instalada la extensión Prettier
Tener las siguientes configuraciones en VSCode:
Format On Save: false
Prettier: Eslint Integration: true
Eslint: Auto Fix On Save: true
Ahora utilizaremos Now para hacer el deploy de nuestro proyecto.
Descargaremos e instalaremos Now para que nos registre de una manera mucho más fácil los tokens de acceso y podamos continuar con el curso.
Entraremos a la carpeta de api y notaremos que ya tiene un archivo now.json que preparamos para ti con toda la configuración necesaria para hacer el deploy.
Para desplegar el proyecto del backend haremos lo siguiente en nuestra terminar:
cd api
Cambiamos el name de la aplicación en el now.json
Finalmente ejecutamos now
Ahora para desplegar nuestro front haremos lo siguiente:
Crearemos un archivo now.json en el root de nuestro proyecto con lo siguiente:
```python
{
	""version"": 2,
	""name"": ""petgram"",
	""builds"": [
		{
			""use"": ""@now/static-build"",
			""src"": ""package.json""
		}
	],
	""routes"": [
		{
			""src"": ""(.*).js"",
			""dest"": ""/$1.js""
		},
		{
			""src"": ""(.*).json"",
			""dest"": ""/$1.json""
		},
		{
			""src"": ""/.*"",
			""dest"": ""index.html""
		}
	]
}
```
En nuestro package.json añadiremos el siguiente script: ""now-build"": ""npm run build"".
Finalmente en la raíz de nuestro proyecto ejecutaremos now para que nos dé una URL en la que se verá nuestro proyecto."

para Styled components, npm install styled-components -save --dev

## Creando una lista de Categorias y estilos globales
Para crear nuestros estilos globales con styled-components haremos lo siguiente:

```phton

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%; 
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
```

## Usando React Icons PhotoCard

npm install react-icons --save

Usaremos [React-icons](https://react-icons.netlify.com/#/) para darle una propuesta visual mucho más amigable a nuestro proyecto con íconos como Font Awesome, Ionicons, Material Design Icons y mucho más que podremos usar.



## Creando nuestro LOGO

Usamremos 
[maketext](https://maketext.io/)

[jakearchibald](https://jakearchibald.github.io/svgomg/) para generar el SVG

[PlayGround SVGR](https://react-svgr.com/playground/) para crear nuesto componente a partir del svg creado