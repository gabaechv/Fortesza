# Fortezsa
## Parte 2: Pruebas automatizadas - Gabriela Echeverría

Todos las pruebas automatizadas se encuentran dentro de un mismo archivo llamado 'fortesza.js'.
Para correr las pruebas automatizadas es muy importante tener previamente 
configurado el entorno, instalando 
1. node.js
2. npm 
3. npx
4. cypress

Luego de clonar la carpeta 'test-gabriela' deberá correr los siguientes comandos
dentro de una terminal o cmd, para ejecutar las pruebas automatizadas: 

`npm install`

`npx cypress open`

Este último comando, abrirá una ventana de cypress en el que se muestra el archivo 'fortesza.js'. Solo será necesario hacer clic sobre el enlace del archivo y las pruebas comenzarán su ejecución. 

Dentro del archivo 'fortesza.js' se encuentran las pruebas con los siguientes nombres: 
1. Register user
2. Edit user 
3. Edit telefono
4. Edit mail
5. Sign out

<h2> Nota: </h2> 
<p> Si no tiene instalado cypress, el comando 'npx cypress open' hará lo necesario para instalar el framework y, posteriormente, abrir la ventana para la ejecución de pruebas automatizadas. </p>
