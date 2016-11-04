

[Git](http://git-scm.com/) es un sistema de control de versiones sumamente
poderoso, ees una de las herramientas básicas que un buen programador debe
usar, y para mi es sin lugar a dudas uno de los aspectos que hacen a un
excelente programador.

_Git_ es una herramienta que nos ayuda a tener un registro de las diferentes
versiones de nuestro código. Pero además hace muy fácil y transparente
compartir nuestros proyectos y de paso respaldarlos.Y en especial con
servicios como [GitHub](www.github.com) ha hecho de programar y compartir algo
universal. En este tutorial vamos a ver como usar _git_ en conjunto como
_GitHub_

Instalando _Git_ en Linux
=========================

Solo hay que ejecutar

``` bash
sudo apt-get install git
```

Y listo!

Instalando _Git_ en windows
==========================


Versión original _git_
----------------------

Uno puede instalar  _git__ bajándola de este link:

* [_Git_ para windows](http://git-scm.com/download/win)

Simplemente uno lo baja y sigue las instrucciones en pantalla (con escoger las
opciones por _default_ es suficiente).

Esta versión ofrece una interfaz un poco limitada y algo confusa (_Git GUI_),
o una interfaz de línea de comandos (_Git bash_).  Pero uno puede bajar
diferentes versiones gráficas para mejorar la experiencia:

* [GUIs para _Git_](http://git-scm.com/download/win)

Usando _Git_ con _GitHub_
==========

El ciclo normal de _git_ para trabajar con un proyecto establecido en _GitHub_
es:

* Clonar el proyecto (_clone_)
* Hacer modificaciones en código
* Empacar las modificaciones (_commit_)
* Actualizar el código (_pull_)
* Compartir dichas modificaciones (_push_)


Clonar un proyecto
------------------

Para clonar un proyecto y por lo tanto tener su código fuente (más toda la
historia de versiones) solo falta ejecutar el siguiente comando:

``` bash
git clone URL
```

La URL puede ser obtenida de un proyecto en particular. Por ejemplo, estos son
los proyectos que tengo:

* https://github.com/ivanvladimir

En cualquier de estos pueden entrar, y conseguir la dirección en la parte que
dice "*HTTP* clone URL". Por ejemplo para mi proyecto sobre el curso de
aprendizaje automático esta dirección es:

* https://github.com/ivanvladimir/cursoML.git

Una vez terminada la clonación, aparecerá un directorio _cursoML_ en donde
está el código clonado.

Para explorar los proyectos hospedados en _GitHub_ puedes visitar el siguiente
link:

* [Proyectos en GitHub](https://github.com/explore)

Hacer modificaciones
--------------------

Uno puede modificar el código como uno desee. Para estar atento de las
modificaciones que uno ha hecho, uno puede ejecutar el siguiente comando:

``` bash
git status
```

Si uno desea agregar un nuevo archivo al control de versiones, uno puede
ejecutar el siguiente comando:

``` bash
git add path
```

Esto agregará el archivo que refiere _path_ y empezará a seguirlo para
mantener el historial de cambios en ellos.

Empacar modificaciones
----------------------

Una vez que tiene al código en un estado con el que uno está contento, éste se
puede empacar con el siguiente comando:

``` bash
git commit -m MENSAJE path
```

_Mensaje_ es un comentario sobre que significa estos cambios, y _path_ es el
código del que queremos empacar nuestras últimas modificaciones. Si uno
modificó muchos archivos puede usar la opción _-a_ y evitar el _path_ para
empacar automáticamente todos los archivos recientemente modificados.

``` bash
git commit -am MENSAJE
```


Actualizar nuestro proyecto
---------------------------

Mientras nosotros hacemos cambios puede haber una nueva versión de los
archivos hecha por algún colaborador.  Para actualizar nuestro proyecto ante
estas nuevas versiones podemos ejecutar el siguiente comando:

``` bash
git pull
```

Esto actualizará nuestro proyecto de la dirección que clonamos.


Compartir nuestra modificaciones
--------------------------------

Hasta ahora las modificaciones que nosotros hemos hecho al código son locales,
pero si necesitamos compartirla con alguien más podemos actualizar el código
del proyecto clonado usando la siguiente instrucción:

``` bash
git push
```

Nada más hay que tener en cuenta que uno tiene que tener las credenciales
adecuadas para que sea esto posible. En _github_ esto significa tener una
cuenta y ser _contribuidor_.

Independizando el código en GitHub
----------------------------------

Si uno no quiere pasar por el código original o simplemente quiere tener
independencia creativa en el proyecto. Uno puede hacer un _fork_ del código.
Esto le permite crear una copia del proyecto pero bajo nuestra
responsabilidad.  En _github_ esto consiste en oprimir el ícono de _fork_ en
el sitio del proyecto que queremos. Después de esto podemos clonar el proyecto
con la dirección asociada a nuestro usuario, y listo!

Creando nuestro propio proyecto
-------------------------------

Por supuesto, uno no tiene que partir de un proyecto, y puede comenzar de uno
vacío. Para crear un archivo y asociarlo a _GitHub_ uno puede usar la opción
en la página:

* [Crear un nuevo proyecto](https://github.com/new)

Uno llena los datos y escoge las opciones, y después ejecuta las siguiente
opciones:

``` bash
touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin URL
git push -u origin master
```

Material extra
==============

* [Documentación GitHub](https://help.github.com/)
* [Guía para
principiantes](http://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide)
* [Forking en github](https://help.github.com/articles/fork-a-repo)





