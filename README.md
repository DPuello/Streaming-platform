# Proyecto de Plataforma de Streaming

Este proyecto es un aplicativo web desarrollado con React JS, Firebase, react-router-dom y universal-cookie. Permite a los usuarios visualizar contenido multimedia tipo videos.

## Componentes Principales

El proyecto contiene los siguientes componentes principales:

- `Login`: Implementa la lógica de validación de campos vacíos y caracteres permitidos para el campo de email.
- `Home`: Contiene 5 cards que representan las categorías a las cuales el usuario logueado tendrá acceso y un navbar básico.
- `ContentCategory`: Presenta, por filas, todo el contenido relacionado a la categoría seleccionada desde el componente 'Home'.
- `ContentDetails`: Visualiza el contenido multimedia seleccionado desde el componente ContentCategory e información relacionada.

Además, hay una carpeta de componentes generales con algunos de los componentes que se repiten en varios componentes, como un botón de volver, una tabla que recibe las listas de los programas o películas de las categorías o de la búsqueda. También hay un componente de búsqueda que se puede acceder en la sección search con el botón de búsqueda en el header de navegación.

## Datos

Los datos de los programas y películas, usuarios y categorías se guardan en archivos json en una carpeta de data. Cuando se tiene acceso a la colección de Firebase se cargan los usuarios y las contraseñas, que permiten hacer el login.

## Funcionamiento

El login funciona en 2 pasos. Primero, se ingresa el correo. Si no se tiene acceso a Firebase, se valida si el email está en el archivo users.json. Si se tiene acceso a Firebase, se valida si el email está registrado en la base de datos. Si el email se encuentra en Firebase o en el archivo users.json, se pasa al paso 2, donde el usuario debe ingresar la misma contraseña que está asociada a ese usuario. Si se tiene acceso al Firebase y no se encuentra el usuario registrado, el paso 2 consiste en crear una contraseña para ese email y se guardan los datos en la base de datos.

En la página de inicio (Home), se muestran 5 cards (Animación, Documental, Comedia, Drama y Ciencia ficción). Al hacer clic en una card, se redirecciona a la sección que muestra las películas o series de la categoría correspondiente.

En ContentCategory, se muestra el nombre de la categoría que se está mostrando y una lista con los datos de título de la película o serie, tipo de contenido y año de lanzamiento. Cuando se hace clic en un elemento, se redirecciona al detalle de ese contenido.

En ContentDetails, se muestra un iframe con un video de YouTube según la categoría que se encuentre en el contenido que se está viendo. También se lista el nombre, los géneros y el casting de la película o serie.

## Instalación

Para instalar y correr este proyecto, primero clona el repositorio, luego en la carpeta del proyecto ejecuta:

```bash
npm install
npm start
