# TRABAJO PRÁCTICO 3 - GRUPO 18

#### Integrantes:

> - Fabricio Maida
> - Andrés Aguayo
> - Ailén Villalba
> - Valentina Vitale
> - Alesio Cragno

## "IL MOMO" Cafetería

El objetivo de esta cafetería es dar el mejor servicio a cada cliente.

## Metodologías Usadas

- Git/GitHub
- Metodología de trabajo de una rama por alumno

## División de trabajo

#### GET/servicios y GET/servicios/:id

- Andrés Aguayo

#### GET/equipo

- Alesio Cragno
- Valentina Vitale

#### GET/perfil, GET/perfil/:id, POST/login y GET/login/:id

- Fabricio Maida
- Ailén Villalba

## ARCHIVOS Y CARPETAS

- **controllers/** equipoController.js, loginController.js, perfilController.js, serviciosController.js
- **data/** equipo.json, perfil.json, servicios.json, serviciosDetalle.json
- **models/** servidor.js
- **routes/** equipoRoutes.js, loginRoutes.js, perfilRoutes.js, serviciosRoutes.js
- .gitignore, app.js, package-lock.json, package.json, README.md

## Servicios

---Realizado por Andrés Aguayo

### back-end(repositorio-tp-3):

- **_getServicios_**: La función asincrónica anónima de `getServicios` intenta buscar los datos del JSON `servicios.json` y guardarlos en una constante `data`. Luego parsea el JSON, lo guarda en una constante `servicios` y lo devuelve en la `res` de la función. Además, tiene un control de errores que devuelve un error 500 en caso de que algo falle.

- **_getServiciosById_**: La función asincrónica anónima de `getServiciosById` intenta buscar los datos del JSON `serviciosDetalle` y guardarlos en una constante `data`. Después parsea la información recibida y guarda la información del JSON que coincida en ID con la pasada por el cliente en el `req`. Si no es encontrada, se devuelve un error 404. Si se encuentra un objeto con esa ID, se retorna junto con un código 200 en el `res` de la función. Además, tiene un control de errores que devuelve un error 500 en caso de que algo falle.

### front-end (repositorio-tp-1):

- **_cargarServicios()_**: Esta función asincrónica primeramente carga un loader mientras se cargan los datos, o mientras las funciones no se logren ejecutar. Luego busca los datos de los servicios haciendo un `fetch` a la dirección del back-end. Una vez obtenidos los datos, los pasa a JSON. Antes que nada, se limpia el HTML del loader. Ahora, por cada objeto en el JSON crea un elemento div con su contenido interno basado en las tarjetas del TP-1 y los va agregando al elemento `cardContainer` del HTML. Además, a cada elemento le agrega un botón de "Más info" con una funcionalidad propia que llama a la función `servicioPorId()`. Esto también cuenta con un log de error por si lo anterior no se puede realizar.

- **_servicioPorId(id)_**: Esta función asincrónica primeramente carga un loader mientras se cargan los datos, o mientras las funciones no se logren ejecutar. Luego busca los datos del servicio con la ID pasada como parámetro haciendo un `fetch`. Una vez recibida la información del servicio, se convierte a JSON. Ahora se limpia el loader del HTML y se crea un elemento div para rellenar con los datos del servicio. Además, le agrega un botón para poder volver a la muestra de todos los servicios, que tiene una función que llama a la función `cargarServicios()`. También tiene un log de error por si no se puede realizar su funcionalidad.

### Estructura JSON:

- **_servicios.json_**: Contiene un arreglo de objetos que se componen por una id única, una dirección relativa de una imagen que se encuentra en el front-end, precio y el título del servicio.

- **_serviciosDetalle.json_**: Este json expande sobre el archivo anterior, teniendo id, dirección de imagen, precio y título del servicio. Además este archivo agrega una descripción detallada del servicio.

## Equipo

---Realizado por Valentina Vitale y Alesio Cragno

### back-end(repositorio-tp-3):

- **_equipoController.js:_** Este archivo usa `fs` para leer el archivo `equipo.json` y trabajar con los datos de los equipos. La función `getEquipo` devuelve todos los equipos guardados en el JSON. La funcion usa `async/await` para manejar la lectura del archivo de forma asincrónica y tiene manejo de errores para responder correctamente si ocurre algún problema o si no se encuentran los datos.

- **_equipo.json:_** Este JSON guarda cada integrante del equipo con sus respectivos datos.

- **_servidor.js:_** Se agrego `this.app.use('/equipo', require('../routes/equipoRoutes'))`

- **_equipoRoutes.js:_** Se creo `equipoRoutes.js`

### front-end(repositorio-tp-1):

- **_equipo.js:_** Este código obtiene el contenedor de tarjetas del HTML y crea la función `cargarEquipo`, que se encarga de pedir los datos del equipo al backend usando `fetch`. Mientras llegan los datos, muestra un loader de carga. Luego convierte la respuesta a JSON y recorre el arreglo recibido con `forEach`, creando dinámicamente una tarjeta para cada integrante del equipo con su imagen, nombre, puesto y descripción. Finalmente, agrega cada tarjeta al contenedor en la página. Si ocurre un error, lo muestra en la consola.

- **_equipo.html:_** Se eliminaron las tarjetas de cada integrate del equipo ya que son creadas dinamicamente en `equipo.js`.

### Estructura JSON:

- **_equipo.json_**: El json tiene 5 arreglos, cada uno estando hecho por: una id, una imagen de un miembro del equipo, el puesto el cual ocupa y una descripción del mismo.

## Perfil

---Realizado por Ailén Villalba y Fabricio Maida

### back-end(repositorio-tp-3):

- **_getPerfil y getPerfilById_**: Funciónes asincrónicas las cuales se encargan de mandarle al front-end un `array` con la información del JSON que el front-end quiere acceder, en este caso al archivo perfil.js.

### front-end (repositorio-tp-1):

- **_perfil()_**: Función asincrónica que obtiene la ID del usuario guardada previamente en `idPerfil` (en el login), para después pedirle al back-end la información del usuario que tenga dicha ID. Una vez los recibe, muestra dichos datos del usuario logueado en el HTML de manera dinámica.

## Login

---Realizado por Ailén Villalba y Fabricio Maida

## back-end(repositorio-tp-3):

- **_postLogin_**: Función asincrónica que se encarga de verificar que los datos de incio de sesión del usuario que fueron enviados desde el front-end coinciden con los almacenados en el archivo `perfil.json`.

- **_getLoginById_**: Función asincrónica que busca a un usuario en específico dentro del archivo `perfil.json` utilizando la ID que trae del front-end. Una vez encuentra al usuario, le manda dicha información específica al front-end.

### front-end (repositorio-tp-1):

- **_login.js_**: Archivo JS que se encarga de leer el input del usuario a la hora de iniciar sesión (dirección de `mail` y `contraseña` del mismo), para después enviarlo al back-end y verificar que dicho usuario existe dentro de la base de datos de la página web. Si es así, guarda la información de inicio de sesión (para después ser utilizada por el archivo perfil.js) y redirige al usuario a la página de perfil (`perfil.html`).

### Estructura JSON (de Perfil y Login):

- **_perfil.json_**: Arreglos compuestos de una ID, el nombre y la dirección email de un usuario, su respectiva contraseña la cual utiliza para iniciar sesión,
  la fecha en la que se registró, una foto que lo representa y sus últimos 3 pedidos mediante la página web de la cafetería.
