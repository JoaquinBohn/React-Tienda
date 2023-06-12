# Tienda online de libros

Tienda desplegada: [ir al sitio](https://react-tienda-tau.vercel.app/)

Este es un proyeto de ecommerce desarrollado con la finalidad de aprender las bases fundamentales de react.
Forma parte de mi entrega final para un curso de CoderHouse y por lo tanto gran parte del mismo fue desarrollado durante dicho curso. A pesar de ello sigo trabajando en este proyecto agregando nuevas funcionalidades para hacerlo más completo a la vez que incorporo conocimiemto sobre react y demás librerías.

**Tabla de Contenidos**

[TOCM]

[TOC]

# Configurar variables de entorno

Para poder levantar el proyecto, debes configurar en un archivo .env las siguientes variables:

- REACT_APP_API_KEY
- REACT_APP_AUTH_DOMAIN
- REACT_APP_PROJECT_ID
- REACT_APP_STORAGE_BUCKET
- REACT_APP_MESSAGING_SENDER_ID
- REACT_APP_APP_ID

Los valores de estas variables se deben obtener de tu base de datos.

# Configuracion de la base de datos firebase

Para la correcta integración de los datos obtenidos de tu base de datos de firestore, debes ordenar y nombrar tus colecciones de la siguiente manera:

### Colección productos

Formato de los documentos:

- Campo: autor, Tipo: string
- Campo: categoria, Tipo: string
- Campo: descripcion, Tipo: string
- Campo: id-autor, Tipo: string
- Campo: img, Tipo: string
- Campo: nombre, Tipo: string
- Campo: precio, Tipo: int
- Campo: stock, Tipo: int
- Campo: vendidos, Tipo: int

### Colección orders

Formato de los documentos:

- Campo: buyer, Tipo: map -> contiene dos campos: (email y phone ambos de tipo string)
- Campo: date, Tipo: timestamp
- Campo: items, Tipo: array -> contiene docs de tipo map: (categoria, id, img y nombre de tipo string; precio, quantity y stock de tipo int)
- Campo: total, Tipo: int

### Colección users

Formato de los documentos:

- Campo: email, Tipo: string
- Campo: nombre, Tipo: string
- Campo: password, Tipo: string
- Campo: rol, Tipo: string

## NPM

![](https://res.cloudinary.com/drdgu83bp/image/upload/v1678719003/Assets/npm_logo_k9cjrx.png)
npm (Node Package Manager) es, como su propio nombre indica, el gestor de paquetes, módulos o librerías que nos proporciona Nodejs. Se trata de una herramienta que nos facilita el trabajo con librerías permitiéndonos instalar, actualizar y eliminar librerías de forma relativamente sencilla y automatizar la gestión de dependencias.

Para comenzar a trabajar con npm utilizaremos npm cli, el módulo que gestiona la consola de npm y desde la que correremos los comandos que necesitemos. Este módulo viene incorporado con Nodejs, por lo que al instalar Nodejs adquiriremos también NPM.

Para comprobar si tenemos instalado Nodejs podemos escribir en nuestra consola el siguiente comando:

```
node -v
```

Para comprobar si ya tenemos npm instalado correremos un comando similar:

```
npm -v
```

En caso de que no tengamos instalado npm o Nodejs, procederemos a instalar Node.js para obtener ambos.
Recomiendo seguir los pasos de instalación indicados en el sitio oficial:
[Node.js.org](https://nodejs.org/en/download/package-manager/#windows-1)

# Correr proyecto

Una vez instalado npm, siga estos sencillos pasos:

- Utilizar el comando cd en la consola para ubicarte la nueva carpeta donde ubicaremos el proyecto.
- Clonar repositorio escribiendo en la consola el siguiente script:

```
git clone https://github.com/JoaquinBohn/React-Tienda.git
```

- Escribir el siguiente código para instalar todas las dependencias:

```
npm install
```

- Finalmente correr el proyecto escribiendo:

```
npm start
```

# Acerca de The Book Shop

Hasta la fecha del 13/3/2023 el sitio cuenta con las siguiente funcionalidades:

- Catálogo y filtrado de productos: podes ver todos los libros en venta con información básica o elegir una de las cuatro categorías - novelas, cuentos, académicos, e infantiles - para ver una lista filtrada de productos.
- Detalles del producto: cada producto cuenta con un botón que permite ver la información detallada del libro junto con la opción de agregarlo al carrito.

- Carrito: se visualizan todos los productos previamente agregados junto con detalles como la cantidad y el precio, y la opción de quitar el producto del carrito. También cuenta con botones para vaciarlo y para continuar con la compra. Por el momento no cuenta con persistencia de datos, por lo que al actualizar la página se eliminan los productos agregados al carrito.

- CheckOut: una vez se continúa con la compra de los productos agregados al carrito el sitio te dirige a un pequeño formulario donde deberás indicar tu email y número de telefono. Al continuar se finaliza la compra y muestra el id de la orden de compra.
