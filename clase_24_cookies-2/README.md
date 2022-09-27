READIS: 
brew services start redis.

TODO EN LA CONSOLA:

PARA ver si esta corriendo: 
redis-cli ping .

PARA pararlo:
brew services stop redis.

PARA inicializar el servidor:
redis-server.

PARA guardar en redis:
SET first "Mi primera llave de redis".

PARA obtenerlos:
GET first.
get sess:SusKDeGePej24bFnNmYVdVAATMWMAQwJ


PARA poner expiracion:
SET secondKey "Mi segunda llave de redis" EX 60.

PARA chequear el tiempo de vida:
TTL secondKey

PARA obtener todas las llaves :
KEYS *

DAME todas las llaves que empiezen con first:
KEYS  first*

DAME todas las llaves que terminen con first:
KEYS  *first

PARA VER EL TTL:
ttl sess:SusKDeGePej24bFnNmYVdVAATMWMAQwJ

PARA CONECTARNOS A UN RADIS REMOTO:
 redis-cli -u redis://default:acavaelpsw@redis-16746.c83.us-east-1-2.ec2.cloud.redislabs.com:16746

