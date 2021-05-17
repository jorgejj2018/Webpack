#1 instalar webpack como dependecias de desarrollo
1- webpack
2- webpack-cli

#1.5 Manejar entry output-path 
Ejemplo: * --entry ./foo/src/index.js --output-path ./foo/dist *
Esto nos permite por obligacion generar los metodos de desarrollo
En este caso los metodos de desarrolo son (Production,develoment)
Adicional tenemos que crear una carpeta *foo* en este caso donde iran dos subcarpetas llamas:
1- src : Donde va nuestro punto de entrada (*Entry*)
2- dist : Donde va nuestro punto de salida (*output-path*)

#2 instalar babel 
Nos permitira compilar codigo *js nuevo* a codigo *js viejo*. 
En pocas palabra codigo que sea soportado por nuestro navegadores viejos.

para eso tenemos que instalar en nuestro proyecto los siguites cargadores (*Loader*):

$npm i -D babel-loader @babel/core @babel/preset-env 

De igual manera lo instalamos como dependencias de desarrollo (*-D*)

Tenemos que crear posteriormente un archivo con extesion .babelrc 
En este archivo exportaremos un nuevo modulo donde ira un objeto con nuestros *preset* En este caso:

*"presets": ["@babel/preset-env"]*

#3 Crear nuestro archivo de configuracion de webpack

Para ello tenemos que crear un archivo llamado : webpack.config.js

Este archivo lleva la configuracion necesaria que son:

1- Archivos de prueba
2- Archivo o  carpetas excluidas
3- uso : en esto alojamos nuestro cargador babel-loader

#4 Inyeccion de JS a HTML
Instalaren nuestra terminal
$ npm i -D html-loader html-webpack-plugin 


