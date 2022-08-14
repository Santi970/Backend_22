
APUNTES!!

Cuando accedamos al puerto 3000 /users vamos a levantar el servidor user.js y products.js
aunque products.js y user.js esten en servidores diferentes, con proxy podemos centralizar.

------ -NGINX- --------
Para saber el estatus:
comando: systemctl status nginx 

Para pararlo:
sudo systemctl stop nginx

Para correrlo: 
sudo systemctl start nginx
sudo systemctl restart nginx
systemctl status nginx.service

(con curl podemos hacer peticiones http desde la terminal)

Cuando queramos modificar un archivo de nginx debemos hacerlo dentro de sites-enabled

ls -al /etc/nginx/sites-enabled/
cat /etc/nginx/sites-available/default

Para instalar node 
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

CREAMOS carpeta  "code":
entramos: ls 
cd code

inicializamos un npm dentro de note 
npm init -y node_app


ubuntu@ip-172-31-6-215:~/code$ rm package.json
ubuntu@ip-172-31-6-215:~/code$ cd node_app
ubuntu@ip-172-31-6-215:~/code/node_app$ npm init -y



instalamos:
npm install express

Creamos archivos con vim:
comando: vim 

1:34

//PARA VER EL HTML 
 curl http://localhost
ls -al /var/www/html

 PARA LEER ARCHIVOS:
// cat /etc/nginx/nginx.conf

Para modificar ARCHIVO O CODIGO  tiene que ser dentro de:
sites-available

COMANDO PARA ENTRAR:
cat /etc/nginx/sites-available/default

navegamos hasta el index:
cd ubuntu/code/node_app

para abrir el archivo HTML:
cat /var/www/html/index.nginx-debian.html

Comando para cambiar el root:
sudo vim /etc/nginx/sites-available/default


min 1:30

Para correr:
ej1: pm2 start index.js --name="node app 1" -- 8081
ej2: mp2 start index.js --name="node app 2" --8082

// --- REPASON
Creamos carpeta publica: 
a - mkdir public
Creamos index:
b - vim index.html
Restart:
c - sudo systemctl restart nginx

d- curl localhost
