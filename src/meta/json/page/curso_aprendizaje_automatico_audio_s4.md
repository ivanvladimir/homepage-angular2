

Python es un lenguaje de programación procedural con una sintaxis muy limpia y
bonita. Además tiene una gran cantidad de recursos que lo han convertido en
uno de los lenguajes de programación predilecto entre programadores. A
continuación presentaremos algunas de sus características esenciales.

Tipos
=====

Python cuenta con los tipos básicos comunes en otros lenguajes: boleanos,
enteros, flotantes y cadenas:

:::python
True
False
1
2
1.3
0.34
"hola"
"mundo"

En Python las variables no son tipificadas, son más bien contenedores y uno
puede re-asignarle cualquier tipo de valor en ellas:

:::python
variable=5
variable+1

variable="hola"
variable+" mundo"


Python cuenta con varias estructuras de datos a nuestra disposición. Las más
comunes son: listas, tuplas y diccionarios.

:::python
[1,2,3]
(1,2,3)
{"hola":1,"mundo":2,"!",3}


* [Más sobre tipos](https://docs.python.org/2.7/library/stdtypes.html)


Listas
------

Las listas son una estructura "mutable", esto quiere decir que pueden cambiar
durante la ejecución del código. Para hacer esto tienen asociadas a ellas
varias funciones:

:::python
lista=[1,2,3]
lista.append(4)
lista.append(5)
print lista
lista.pop()
print lista
print len(lista)

Las lista en Python pueden ser visualizados como arreglos y podemos acceder a
sus elementos a través de índices. La interfaz de la lista acepta indices
negativos y rangos.

:::python
print lista[0]
print lista[-1]
print lista[1:2]
print list2[:1]
print lista[-2:]
lista[1]=20
print lista

Las listas también son contenedores y el contenido de ésta puede ser de
cualquier tipo.

:::python
lista=["hola",1,"mundo"]
print lista
lista.append(True)
print lista

* [Más sobre
listas](https://docs.python.org/2/tutorial/datastructures.html#more-on-lists)

Tuplas
------

Las tuplas a diferencias de las listas son inmutables. Una vez definidos no es
posible cambiar sus valores o su contenido. Las tuplas también tienen una
interfaz de acceso similares a las listas.

:::python
tupla=(1,2,3)
print tupla[0]
print tupla[-1]
print tupla[1:2]
print tupla[:2]
print tupla[-2:]
print len(tupla)

* [Más sobre
tuplas](https://docs.python.org/2/tutorial/datastructures.html#tuples-and-sequences)


Diccionarios
------------

Los diccionarios son una estructura que permite el acceso  de un valor a
través de una llave. Por lo anterior, para construirlos les tenemos que pasar
ambos: llaves y valores. En este caso la única restricción es que la llave sea
un tipo 'hasheable', que son todos los tipos básicos.

:::python
diccionario={'hola':3,'mundo':2,'!':1}
print diccionario
print diccionario['mundo']
print diccionario.keys()
print diccionario.values()
print diccionario.items()

Los valores de estas estructuras no están limitadas a valores básicos y
podemos hacer cosas como las siguientes:

:::python
rara=[({'hola':1,"mundo":2},"hola mundo"),["hola","mundo"]]

* [Más sobre
diccionarios](https://docs.python.org/2/tutorial/datastructures.html#dictionaries)

Programas en Python
===================

Un programa en Python es una secuencia de instrucciones en un archivo de
texto; y generalmente nos gusta ponerles la extensión _.py_ para
identificarlos.

Para ejecutarlos, lo hacemos de la siguiente forma:

:::bash
python miprograma.py

Para marcar el final de la instrucción en nuestro programa usamos un _enter_.
Bloques de código se marcan a través de identación: instrucciones con la misma
identación pertenecen al mismo bloque.  *NOTA* Hay que tener cuidado entre
_TABs_ y espacios, aunque en la pantalla se vean con la misma identación,
_TABS_ y espacios son considerados diferentes bloques.

El inicio de un bloque se marca con _:_ en la línea anterior al comienzo del
bloque. Un programa en Python generalmente luce de la siguiente forma con
respecto a la identación:

:::python
instruccion1
instruccion2
instruccion_de_control:
instruccion_bloque_1
instruccion_bloque_2
instruccion_de_control:
instruccion_bloque_3
instruccion_bloque_4
instruccion_de_control:
instruccion_de_control:
instruccion_bloque_5
instruccion_bloque_6
instruccion_bloque_7
instruccion_bloque_8

* [Más sobre programas en
Python](https://docs.python.org/2.7/tutorial/interpreter.html)

Control
=======

Hay tres formas de control muy usadas en programas de Python: _if_, _for_ y
_while_.

_if_
-----

_Ifs_ en python son muy directos, es la palabra reservada _if_ seguida una
expresión que se evalué a un valor de verdad:

:::python
if variable>0:
print "Este valor fue mayor que cero"

Es posible asociar al _if_ un caso contrario a través de la palabra reservada
_else_:

:::python
if variable == 0:
print "Este valor es igual a cero"
else:
print "Este valor no es igual a cero"

Y para hacer _if_ consecutivos exclusivos (construcción _case_) podemos usar
_if_ y la palabra reservada _elif_

:::python
if variable == 0:
print "Este valor es igual a cero"
elif variable==1:
print "Este valor no es igual a uno"
elif variable==2:
print "Este valor no es igual a dos"
else:
print "Este valor no es cero, uno o dos"

* [Más sobre
_ifs_](http://anh.cs.luc.edu/python/hands-on/3.1/handsonHtml/ifstatements.html)

_for_
------

Una opción para hacer repeticiones de código es usar  _for_. El _for_ itera
sobre una lista o objeto _iterable_ y extrae los valores para usarlo en el
bloque de código que le sigue:

:::python
lista=['hola','mundo']
for w in lista:
print "Este es un elemento de la lista",w

Esto es diferente a otros lenguajes, donde se usa un contador. Para lograr un
efecto similar, se puede crear una lista con la ayuda de la función _range_
con el objetivo de contar de la siguiente forma:

:::python
lista=range(10)
print lista
for i in lista:
print "Contando...",i

Tuplas son iterativas:

:::python
tupla=(1,2,3)
print "Iterando una tupla",tupla
for i in tupla:
print i

Los diccionarios de manera directa no son iterativos, pero es posible llamar
un iterador (función _iteritems_)sobre ellos:

:::python
diccionario={"hola":1,"mundo":2}
print "Iterando el diccionario directamente",diccionario
for k,v in diccionario.itermitems():
print "Llave:",i
print "Valor:",v

Pero es posible iterar la lista de elementos de un diccionario, la diferencia
es que se crea una lista temporal para lograr la iteración (función _items_).

:::python
print "Iterando la listas de lementos de un diccionario",diccionario
for k,v in diccionario.items():
print "Llave:",i
print "Valor:",v


* [Más sobre
_fors_](https://docs.python.org/2/tutorial/controlflow.html#for-statements)

_while_
-------

Los _whiles_ son muy similares a otros lenguajes:

:::python
i=0
while i<10:
print "Contanndo con while...",i
i+=1


Además del control normal, Python ofrece la palabra reservada _break_ para
romper ciclos (_fors_ y _whiles_):

:::python
i=0
while True:
print "Contanndo con while...",i
if i==10:
break
i+=1

Y también podemos hacer ciclos infinitos:

:::python
while True:
pass #Esta instrucción no hace nada


Módulos
=======

Gran parte del éxito de Python es que viene con pilas incluidas... éstas son
una cantidad de módulos que podemos incorporar en nuestro código.

Para cargarlos usamos la palabra reservada _import_. Módulos importados de
esta forma conservan el '_namespace_' del módulo, por lo que para usar una de
las funciones del módulo tenemos que hacer referencia al módulo.

:::python
import time
print "Hola..."
time.sleep(1)
print "...mundo!"

Para saber más sobre el modulo podemos pedir que se imprima la ayuda:

:::python
help(time)


Si únicamente necesitamos importar una función podemos usar la construcción
_from_ ... _import_:

:::python
from math import log
print "Log of 100",log(100)


También podemos renombrar el módulo usando el modificador _as_:

:::python
import random as ra
print "Escogeré un valor", ra.choice(['one','two','three'])

* [Más sobre como usar
módulos](https://docs.python.org/2/tutorial/modules.html#standard-modules)

Funciones
=========

Por supuesto, algo que esperamos que un lenguaje de programación pueda hacer,
es dejarnos definir nuestras propias funciones:

:::python
def print_percentage(val):
per=val*100
print str(per)+"%"

Para que nuestra función regrese un valor usamos la palabra _return_:

:::python
def suma_lista(lista):
val=0
for l in lista:
val+=1
return val

Las funciones de Python son completas y nos permiten definir recursividad:

:::python
def fib(n):
if n < 2:
return n
return fib(n-2) + fib(n-1)

Una vez definidas las funciones podemos llamarlas en nuestro código:

:::python
print_percentage(0.1)
print_percentage(0.02)

print suma_lista(range(20))
print suma_lista(range(200))

fib(10)
fib(20)


* [Más sobre
funciones](https://docs.python.org/2/tutorial/controlflow.html#defining-functions)

Módulos propios
===============

Un módulo en Python en realidad es un programa en Python. Haciendo _import_ de
éste programa podemos tener acceso a las funciones definidas en el código.
Claro en términos organizaciones preferimos que los módulos únicamente
contengan definiciones de funciones y no código a ejecutarse.

Si ponemos las funciones definidas en la sección anterior en un archivo
llamado __mimodulo_ podemos hacer lo siguiente:

:::python
import mimodulo

mimodulo.print_percentage(0.1)
mimodulo.print_percentage(0.02)

mimodulo.suma_lista(range(20))
mimodulo.suma_lista(range(200))

mimodulo.fib(10)
mimodulo.fib(20)

* [Más sobre módulos](https://docs.python.org/2/tutorial/modules.html)

Archivos de texto
=================

Procesar archivos en Python es extremadamente fácil.

Para escritura
--------------

Primero se abre el archivo con la opción de escritura _w_, y luego usando la
instrucción _print_, podemos redireccionar la impresión de la pantalla al
archivo.  Una vez finalizado cerramos el archivo.

:::python
archivo=open('tmp','w')
for i in range(10):
print >> archivo, i, "hola mundo!"
archivo.close()


Para lectura
------------

Para lectura es un procedimiento similar:

:::python
archivo=open('tmp',"r")
for linea in archivo:
print linea
archivo.close()

El código anterior imprime espacios de más dado que la variable _linea_
contiene la cadena leída con un _enter_ al imprimirla con _print_ se incluye
éste. Para corregir esto se puede usar la función _strip_:

:::python
archivo=open('tmp')
for linea in archivo:
linea=linea.strip()
print linea
archivo.close()

Este es un ejemplo donde se procesa aún más la variable _linea_:

:::python
archivo=open('tmp')
for linea in archivo:
line=linea.strip()
bits=line.split()
print bits[-1]
archivo.close()


* [Más sobre
archivos](https://docs.python.org/2/tutorial/inputoutput.html#reading-and-writing-files)

Más sobre listas
================

Un patrón de programación muy utilizado, es utilizar una estructura para
construir otra estructura _paralela_. Python hace esto explícito a través del
uso de la construcción _comprehension lists_. Básicamente es un _for_ dentro
de una lista. En este caso cada elemento de la lista se usa para crear el
nuevo elemento de la nueva lista.  Este es el ejemplo para crear una lista con
los primeros 100 cuadrados:

:::python
lista_original=range(100)
nueva_lista=[i*i for i in lista_original]
print nueva_lista

La construcción también permite filtrar algunos elementos anexando una
clausula _if_:


:::python
nueva_lista=[i*i for i in lista_original if i%2==0]
print nueva_lista


* [Más sobre
listas](https://docs.python.org/2/tutorial/datastructures.html#list-comprehensions)

Templates para cadenas
======================

Muy parecido al "printf" de _C_, Python permite usar _templates_ para valores
en una cadena. La cadena usa indices para saber el orden de impresión de los
valores pasados a través de la función _format_ del template.  El siguiente
ejemplo, usamos el template para invertir el orden de los argumentos del
pasados al _format_:

:::python
lista=[(1,2),(2,3),(3,4),(4,5),(5,6)]
for val0,val1 in lista:
print "{1} {0}".format(val0,val1)


También es posible formatear la conversión de los parámetros:

:::python
lista=[(i*1.0/100,j*1.0/100) for i,j in lista]
for val0,val1 in lista:
print "{1:2.3f} {0:2.5f}".format(val0,val1)

Otra función muy útil de las cadenas es _join_ la cual toma como entrada una
lista de cadenas y genera una nueva cadena con todos los elementos
concatenados pero con el valor de la cadena original intercalado entre los
elementos:

:::python
lista=["{0:2.3f}".format(i) for i,j in lista ]
print ":".join(lista)


* [Más sobre formatear
cadenas](https://docs.python.org/2/tutorial/datastructures.html#list-comprehensions)

Funciones extra
===============

Una característica muy relevante de Python es que permite definir parámetros
opcionales en las funciones:

:::python
def count(palabra,ini=0,fin=20):
for i in range(ini,fin):
print palabra,i


La siguientes llamadas son válidas aunque parecieran incompletas:

:::python
count("Contando...",10,30)
count("Contando de nuevo...",15)
count("Contando de nuevo otra vez...")
count("Contando de nuevo...",ini=3,fin=8)
count("Contando de nuevo...",fin=5,ini=3)


* [Más sobre definición de
funciones](https://docs.python.org/2/tutorial/controlflow.html#more-on-defining-functions)

Uso argumentos de línea
=======================

Aunque hoy estamos acostumbrados a utilizar interfaces gráficas para
interactuar con nuestros programas, interactuar con la línea de comandos es
todavía una gran opción que durante el desarrollo de ciertas herramientas nos
facilita la experiencia. Python tiene una librería que facilita la creación de
opciones para líneas de comando:

:::python
import argparse

p = argparse.ArgumentParser("Ejemplo")
p.add_argument("Archivo_1",default=None,
action="store", help="Archivo Uno")
p.add_argument("Archivo_2",default=None,
action="store", help="Archivo Dos")
p.add_argument("-o", "--opcion1",default=None,type=str,
action="store", dest="op_1",
help="Opcion 2")
p.add_argument("", "--opcion2",default="Valor2",type=str,
action="store", dest="op_2",
help="Opcion 2")
p.add_argument("-n", "--nueva_opcion",default="Valor3",type=str,
action="store", dest="op_3",
help="Argumento")

opts = p.parse_args()


Esta declaración crea un programa que puede soportar las siguiente llamadas
desde línea de comando

:::bash
python programa.py
python programa.py -h
python programa.py archivo1 archivo2
python 12_linea_de_commandos.py -o 1 --opcion2 2 -n 3 archivo1 archivo2


* [Más sobre argumentos de línea de
comandos](https://docs.python.org/2/tutorial/controlflow.html#more-on-defining-functions)

Trabajando con errores
======================

Python tiene un sistema de excepciones que genera un mensaje de error cada vez
que se produce uno, pero que además para la ejecución normal de nuestro
código:

:::python
1/0

Inmediatamente python escribe en pantalla que tipo de error y la línea donde
se produce el error.

:::bash
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
ZeroDivisionError: integer division or modulo by zero

Aunque generalmente los errores son algo malo para nuestro código podemos
trabajar con ellos, usando la construcción _try_ y _except_. La primera le
dice que intente un código, pero si un error ocurre del tipo marcado por
_except_ se puede hacer una "reparación" y continuar trabajando:

:::python
lista=range(100)
residuos_3={}

for i in lista:
try:
residuos_3[i%3]+=1
except KeyError:
residuos_3[i%3]=1

En este ejemplo, queremos contar cuantas veces los residuos para tres aparecen
en los primeros 100 enteros. Para lograr esto, usamos un diccionario que va a
contener nuestras cuentas, pero existe la posibilidad de el indice del residuo
no este definido, lo que nos marcaría un error de no existencia de la llave en
el diccionario. Por esta razón metemos el incremento de nuestro contador en el
bloque del _try_, si hay un error y es del tipo _KeyError_ aprovechamos y
creamos el índice faltante inicializado a uno.


* [Más sobre excepciones](https://docs.python.org/2/tutorial/errors.html)

Material extra
==============

* [Video](https://www.youtube.com/watch?v=D-1p4KIvHOg)
* [Documentación oficial](https://docs.python.org/2/contents.html)
* [Documentación oficial en
español](http://docs.python.org.ar/tutorial/2/contenido.html)
* [Lista de tutoriales es
español](https://wiki.python.org/moin/SpanishLanguage)
* [Videos de cursos](https://www.youtube.com/watch?v=oKQMoxJR5uk)


