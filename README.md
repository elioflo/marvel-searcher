# Marvel Challenge

- Live Site: [vercel](https://marvel-searcher-two.vercel.app/)

Para ejecutarlo de forma local clona este repositorio en tu máquina local utilizando el siguiente comando:

```
git clone https://github.com/elioflo/marvel-searcher
```

Instala las dependencias:

```
npm install
```

Para ejecutar:

```npm start

```

Para que pueda realizar las peticiones a la [API de Marvel](https://developer.marvel.com/) es necesario registarse para obetener las credenciales. Una vez obtenida las credenciales crear una archivo **.env** (utilizar el .env_example como template). Seguir las [intrucciones](https://developer.marvel.com/documentation/authorization) de la API de Marvel para crear el hash.

```
#Ejemplo de .env para este proyecto
REACT_APP_TS=1 #Es un valor por defecto 
REACT_APP_PUBLIC_KEY=21s3d2as1df3sdf3a2sd1fsadf # Guardar tu public key
REACT_APP_PRIVATE_KEY=1a3sd2f1asd32f1asd3fas5d4a5df # Guardar tu private key
# Armar el hash como indica se indica en la API de Marvel
REACT_APP_HASH=11a3sd2f1asd32f1asd3fas5d4a5df21s3d2as1df3sdf3a2sd1fsadf 
REACT_APP_MD5HASH=79455a7e84fff49796f19606656573a7 # Obtener este hash mediante un generador de MD5
```
