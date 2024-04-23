# example-v6

Este proyecto de **React Native** proporciona la base para aplicaciones móviles dentro del ecosistema example, sirviendo potencialmente como base para las aplicaciones **exampleTINE** y **exampleRELIEF**. Aprovecha **Expo** para una experiencia de desarrollo optimizada.

## Empezando

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm instalado en tu sistema

Puedes descargarlos desde [https://nodejs.org/en](https://nodejs.org/en).

### Configuración del Proyecto

1. Clona este repositorio usando Git.
2. Navega al directorio del proyecto: `cd example-v6`
3. Instala las dependencias: `npm install`

## Ejecutando la Aplicación

### Modo Desarrollo

- Inicia el servidor de desarrollo con Live Reloading: `npm start`

### Compilaciones Específicas de Plataforma

- Compila la aplicación Android: `npm run android` (Requiere un dispositivo o emulador Android)
- Compila la aplicación iOS: `npm run ios` (Requiere una Mac con Xcode)
- Compila una versión web independiente: `npm run web` (Se puede ejecutar en un navegador web)

## Variables de Entorno

El proyecto aprovecha las variables de entorno utilizando `babel-plugin-inline-dotenv`. Crea un archivo `.env` en la raíz del proyecto para definir variables específicas del entorno (por ejemplo, claves de API).

## Pruebas

Las pruebas unitarias se escriben con **Jest**. Para ejecutar pruebas: `npm test`

## Implementación (Opcional)

Para implementaciones de producción, consulta la documentación de Expo para tiendas de aplicaciones y otros métodos de distribución en [Documentación de Expo](https://docs.expo.dev/).

## Scripts Adicionales (Para una Estructura Multi-App Potencial)

### SCRIPTS

- `start:dev:exampletine`
- `start:dev:examplerelief`
- `build:exampletine`
- `build:examplerelief`

Ajusta la variable de entorno `APP` (`cross-env APP=exampleTINE expo start`) para apuntar a la aplicación específica.
