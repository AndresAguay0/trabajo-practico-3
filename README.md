# TRABAJO PRÁCTICO 3 - GRUPO 18

#### Integrantes:

> - Fabricio Maida
> - Andrés Aguayo
> - Ailén Villalba
> - Valentina Vitale
> - Alesio Cragno

## Equipo:

# back-end(repositorio-tp-3):

---Realizado por Valentina Vitale y Alesio Cragno.

_equipoController.js:_ Este archivo usa `fs` para leer el archivo `equipo.json` y trabajar con los datos de los equipos. La función `getEquipo` devuelve todos los equipos guardados en el JSON, mientras que `getEquipoById` busca y devuelve un equipo específico según el `id` recibido por la URL. Ambas funciones usan `async/await` para manejar la lectura del archivo de forma asincrónica y tienen manejo de errores para responder correctamente si ocurre algún problema o si no se encuentra el equipo solicitado.

_equipo.json:_ Este JSON guarda cada integrante del equipo con sus respectivos datos.

_servidor.js:_ Se agrego `this.app.use('/equipo', require('../routes/equipoRoutes'))`

_equipoRoutes.js:_ Se creo `equipoRoutes.js`

# front-end(repositorio-tp-1):

_equipo.js:_ Este código obtiene el contenedor de tarjetas del HTML y crea la función `cargarEquipo`, que se encarga de pedir los datos del equipo al backend usando `fetch`. Mientras llegan los datos, muestra un loader de carga. Luego convierte la respuesta a JSON y recorre el arreglo recibido con `forEach`, creando dinámicamente una tarjeta para cada integrante del equipo con su imagen, nombre, puesto y descripción. Finalmente, agrega cada tarjeta al contenedor en la página. Si ocurre un error, lo muestra en la consola.

_equipo.html:_ Se eliminaron las tarjetas de cada integrate del equipo ya que son creadas dinamicamente en `equipo.js`.
