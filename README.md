# Marvel Guide Unlimited

**APK**: https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40alejandromoises02/marvel_guide-a28cc640e7aa4b229ba7ef4ccb91977b-signed.apk

**Video Demo**
[Demonstration web](./assets/demo/marvelGuideVideoDemo.gif)


*Marvel Guide Unlimited* es una guia de personajes, comics, series y eventos Marvel, desarrollado bajo React Native.

Realizado por: Alejandro Fernandez [github](https://github.com/alejandromoises02)

### CARACTERISTICAS

- Consume principalmente la [MarvelAPI](https://developer.marvel.com/) para obtener listado y caracteristicas de personajes, comics, series y eventos.
- Filtrado por **categorías** de items.
- Login con Auth **Firebase**.
- Logout para cerrar sesión.
- Uso de **sql** para almacenar items que el usuario seleccione como **favoritos** haciendo uso de icono que puede ser pulsado tanto para incluir como excluir el item, con cambio de forma en base a si se encuentra agregado o no en la base de datos.
- Uso de **listHeaderComponent** para generar una lista horizontal en la cabecera de la lista principal para seleccionar items destacados.
- Uso de **redux thunk** para todos los listados e items consultados y consumidos.
- Icono para **búsqueda** de items relacionados a lo que el usuario desee tipear, en caso de no hacer match indica que no fue exitosa la búsqueda.
- Uso de **onEndReached** para generar una especie de paginación o carga de mas items a medida que el usuario hace scroll en la lista de items mostrados.
- Búsqueda de comics relacionados al item seleccionado en detalle.


### HERRAMIENTAS UTILIZADAS 

- **React Natibe**
- **Marvel API**
- **Firebase** 
- **SQL** 
- **Redux-Thunk**

### COMO LO PRUEBO?

Puedes descargar el [APK](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40alejandromoises02/marvel_guide-a28cc640e7aa4b229ba7ef4ccb91977b-signed.apk) e instalarlo en tu celular o simulador 


Si quieres probar el repo sin instalar el APK puedes seguir los siguientes paso:

- Clonar el repositorio
- Desde la terminal, situado en la carpeta de pryecto ejecutar el comando **npm i**
- Cuando termine, utiliza el comendo: **npm start**
- Se iniciara el dashboard de expo en el navegador, teniendo el simualdor activo clickear en 
**Run on Android**
**Run on ios**
**Run on web**
Dependiendo el caso

Gracias por tu vista! 

