# RPG TheMasterTool


#### Justificación y contexto de la aplicación
En los juegos de rol (RPG:Role Play Games) tradicionales de mesa, tablero o "en persona", existe la figura del "Master" que es el creador de la historia que se va a jugar. Entre otras funciones, el Master se encarga tanto de crear el relato, como de presentar situaciones de crisis o de dificultad en las que los jugadores debe decidir qué curso tomar, además el resultado de estas acciones está determinada por la lanzada de dados y el resto de la historia que aún no haya sido revelada, de acuerdo al progreso en el juego.

El hecho de conocer la historia por adelantado por parte de un jugador, se considera un "spoiler" y crea ventaja sobre los demás jugadores, además de restarle emoción y sorpresa al juego.
De manera tradicional, el Master desarrolla su historia, sus reglas y sus apuntes y lleva un "cuaderno de Master", este cuaderno le acompaña durante toda la jornada, recurre a este cuaderno para guiarse en cuanto al progreso de la historia y los resultados de acuerdo a la lanzada de dados.
Dado la cercanía en espacio con los demás jugadores (en una mesa, o el suelo o cualquier otro entorno cercano), el Master debe cuidar muy bien su cuaderno y evitar que los jugadores -por voluntad o no- miren sus apuntes, dibujos o la historia misma.

La aplicación web "TheMasterTool" ofrece una herramienta para esconder la historia del resto de jugadores en aquellos casos en los que el Master decida mostrar algún dibujo, alguna referencia histórica o algún contenido en su computadora o dispositivo móvil sin correr el riesgo de exponer a los demás jugadores a "spoilers" y sorpresas que resten emoción del juego.

#### Definición del producto
Interfaz sencilla que permite cifrar una historia en preoceso de un juego de rol, para ocultarla de los jugadores o mostrarla al master del juego, controlando la visualización con los botones de cifrar y descifrar.
#### Cómo descargar, instalar y ejecutar la aplicación
Aplicación web, que no requiere descargar, sólo ejecutar en un browser.
De interacción directa y sencilla, el usuario inserta un texto, muestra o no a través del cifrado de su contenido.

#### Interfaz de usuario (UI) y Decisiones de diseño
Diseño limpio, simple, colores asociados a los juegos de rol en gamas frías, entorno de tonos opacos para recordar el ambiente de cabernas y escudos en los que se ambienta imaginativamente un juego de rol.

#### Arquitectura / Scripts / Archivos
Está basada en el _boilerplate_ inicial, con además una carpeta de imágenes conteniendo la imagen de wireframe y la imagen que sirve de logo para la la aplicación web,

 _boilerplate_ 

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
    └── imgs      
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```



Diseño de experiencia de usuario (User Experience Design):
Por redactar


<img src="https://raw.githubusercontent.com/nigmasilmi/SCL010-Cipher/master/src/imgs/caesarCipher_Prototipado1-01.jpg" alt="Wireframe con iteraciones de desarrollo propuestas">

- Testeo e Iteración
No fue posible compaginar las condiciones iniciales del test con las funcionalidades extra para este sprint.
Forma parte de las mejoras al producto.

Desarrollo Front-end:

- Decisiones, herramientas, iteraciones, procesos
Siguiendo los requerimientos del proyecto, con una estructura preestablecida, la versatilidad posible tuvo que ver meramente con el entorno visual y el acercamiento a la experimentación con la experiencia de usuario.

Trasciende en la experiencia la necesidad de priorizar los tests unitarios desde las primeras etapas del desarrollo.

Fue necesaria una investigación acerca de la aritmética modular y más específicamente acerca de las clases y equivalencias de congruencia, base de la ecuación del cifrado César aplicado en este proyecto.


## Checklist
Tareas completadas

### Parte Obligatoria
* [X] `README.md` incluye info sobre proceso y decisiones de diseño.
* [X] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [X] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [X] Usa VanillaJS.
* [X] No utiliza `this`.
* [X] Implementa `cipher.encode`.
* [X] Implementa `cipher.decode`.
* [X] Pasa linter con configuración provista.
* [X] Pasa pruebas unitarias.
* [X] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [X] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [X] Interfaz permite escribir un texto para ser cifrado.
* [X] Interfaz muestra el resultado del cifrado correctamente.
* [X] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra / pero no correctamente, el resultado del descifrado.

### Parte Opcional: "Hacker edition"
* [X] Cifra/a veces descifra minúsculas
* [X] Cifra/no descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar / no descifra con un `offset` negativo.
