Este proyecto está dividido en dos partes, el Back-End y el Front-End. La parte del back-end  que se encuentra en la carpeta browser_travel_back fue trabajado con Laravel y la version 8.1 de PHP, se levanta como un proyecto normal de Laravel. Está funcionando con una base de datos en PostgreSql llamada browser, se puede levantar el servicio normal de laravel. 
```
php artisan serve 
```
 
Con el back-end funcionando solo queda levantar el fornt-end, este se encuentra en browser_travel_front esta creado en ReactJS por lo que se debe ejecutar el comando: 
```
npm install  
```
para instalar las librerías requeridas, una vez instalado se ejecuta el comando  
```
npm start 
```
Para iniciar el servidor. Actualmente el proyecto se encuentra configurado para escribir y leer peticiones en la url http://127.0.0.1:8000/api/v1 la cual pertenece al proyecto de back que levantamos previamente. 