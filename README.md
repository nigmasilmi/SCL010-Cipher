# RGP TheMasterTool


#### Justificación y contexto de la aplicación
En los juegos de rol (RPG:Role Play Games) tradicionales de mesa, tablero o "en persona", existe la figura del "Master" que es el creador de la historia que se va a jugar. Entre otras funciones, el Master se encarga tanto de crear el relato, como de presentar situaciones de crisis o de dificultad en las que los jugadores debe decidir qué curso tomar, además el resultado de estas acciones está determinada por la lanzada de dados y el resto de la historia que aún no haya sido revelada, de acuerdo al progreso en el juego.

El hecho de conocer la historia por adelantado por parte de un jugador, se considera un "spoiler" y crea ventaja sobre los demás jugadores, además de restarle emoción y sorpresa al juego.
De manera tradicional, el Master desarrolla su historia, sus reglas y sus apuntes y lleva un "cuaderno de Master", este cuaderno le acompaña durante toda la jornada, recurre a este cuaderno para guiarse en cuanto al progreso de la historia y los resultados de acuerdo a la lanzada de dados.
Dado la cercanía en espacio con los demás jugadores (en una mesa, o el suelo o cualquier otro entorno cercano), el Master debe cuidar muy bien su cuaderno y evitar que los jugadores -por voluntad o no- miren sus apuntes, dibujos o la historia misma.

La aplicación web "TheMasterTool" ofrece una herramienta para esconder la historia del resto de jugadores en aquellos casos en los que el Master decida mostrar algún dibujo, alguna referencia histórica o algún contenido en su computadora o dispositivo móvil sin correr el riesgo de exponer a los demás jugadores a "spoilers" y sorpresas que resten emoción del juego.

#### Definición del producto
Por redactar
#### Cómo descargar, instalar y ejecutar la aplicación
Por redactar
#### Interfaz de usuario (UI) y Decisiones de diseño
Por redactar

#### Arquitectura / Scripts / Archivos
Por redactar

El _boilerplate_ como punto de partida 

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```



Diseño de experiencia de usuario (User Experience Design):
Por redactar
- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:
Por redactar
- Decisiones, herramientas, iteraciones, procesos


## Checklist
Tareas completadas

### Parte Obligatoria
* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
