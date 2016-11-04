

Git-flow son un conjunto de sugerencias para trabajar en un proyecto
colaborativo que reduce algunos de los problemas potenciales de tener muchos
desarrolladores en un proyecto. Afortunadamente, existen varias herramientas
que estandarizan dichas sugerencias y facilitan sus funciones. En este caso
revisamos el _workflow_ de desarrolladores que contribuyen con _features_ al
proyecto.

Instalación
===========

Una de las herramienta populares es: _git-flow_ para instalarla en Ubuntu, se
hace lo siguiente:

``` bash
apt-get install git-flow
```

Para otras versiones de [linux](https://github.com/nvie/gitflow/wiki/Linux),
[macs](https://github.com/nvie/gitflow/wiki/Mac-OS-X ) y
[winddows](https://github.com/nvie/gitflow/wiki/Windows).


Branches
========

Git-flow propone utilizar los siguientes _branches_

* _master_ contiene únicamente información de los release
* _develop_ contiene todo la historia de desarrollo
* _feature-*_ son branches temporales para creación de _features_

Ejemplo: authorprof
===================

El siguiente ejemplo muestra como un desarrollador de _features_ puede
contribuir a un proyecto que use la propuesta de _Git-flow_.

Clonar el código
----------------

En este caso el código radica de manera central en
[github](http://github.com), pero lo necesitamos en nuestra máquina para
comenzar a _hackear_.  Para esto clonamos el código de nuestra cuenta a
nuestra máquina con la siguiente instrucción:

``` bash
git clone https://github.com/ivanvladimir/authorprof.git
```

En este caso asumimos que somos colaboradores del proyecto en cuestión ya que
está sobre la plataforma [github](http://github.com). De otra forma habría que
darle la vuelta con _forks_ y _pull-requests_o poniendo una plataforma
independiente para nuestro repositorio.


Inicializar código
-----------------

Para crear los _brach_ que propone _Git-flow_ podemos hacer lo siguiente en el
directorio de nuestro proyecto (_authorprof_):

``` bash
git flow init
```

Y contestar las preguntas a nuestras preferencias. Muy probablemente _master_
y _develop_ ya estén incluidas en el repositorio.


Comenzar un _feature_
----------------------

Con nuestra copia y en el _branch_ de desarrollo, podemos comenzar a trabajar
en nuestro _feature_, con la siguiente instrucción:

``` bash
git flow feature start NOMBREFEATURE
```

Codificar mi tarea
------------------

En este momento podemos a trabajar en nuestra tarea con toda confianza y
libertad. Podemos hacer las operaciones normales de ir programando nuestro
código, y hacer las operaciones con _git_ que necesitemos.

``` bash
git status
git commit
git add
```

Una intrudicción rápida a _git_ puedes encontrarla
[aquí](/#/post/git_basico).

Una vez que hayamos finalizado con nuestro _feature_ lo podemos finalizar con
la siguiente instrucción:

``` bash
git flow feature finish NOMBREFEATURE
```

Esta es la etapa en la que estaremos la mayor parte del tiempo.

Compartir mi tarea
------------------

Una vez terminada con mi tarea, podemos compartir nuestro código, para que sea
integrado a la _branch_ de _develop_:

``` bash
git flow feature publish NOMBREFEATURE
```


Mas allá
========

Lo anterior es el ciclo del desarrollador, además existe el ciclo del
encargado de hacer _releases_ y de arreglar _bugs_ (hotfixes).


Material Extra
==============

* [Filosofía de
Git-flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
* [Proyecto de git-flow y documentación](https://github.com/nvie/gitflow)
* [Cheatsheet de
Git-flow](http://danielkummer.github.io/git-flow-cheatsheet/)
* [Comenzando con Git-flow](http://yakiloo.com/getting-started-git-flow/)
* [Instalación de
_git-flow_](https://github.com/nvie/gitflow/wiki/Installation)
* [Complemento de _git-flow_ para