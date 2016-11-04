
La estructura de una tesis en computación y en particular en aprendizaje
automático está muy estandarizada. Estas son algunas partes comúnes en una
tesis en este campo:

* Introducción
* Trabajo anterior/Revisión de la literatura/Estado del arte
* Metodología
* Corpus o bases de datos usados
* Experimentos y resultados
* Conclusiones
* Apéndices

<center>
<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/tesis_flow.jpg'
title="Organización de la tesis"/>
</center>



Introducción
============

Esta parte generalmente es capítulo inicial y en el que se presenta al trabajo
en términos de qué se trata, qué problema se resuelve, la motivación de
resover dicho problema y cual es la idea principal para resolverlo. Este es
sin lugar a dudas el capítulo más difícil de escribir, dado que se tiene que
hablar de todo pero sin recurrir a mucho detalle ya que este capítulo está
dirigido a cualquier persona que tenga interés en nuestro trabajo pero no es
necesario que sea experto en el tema.  Nuestro objetivo es que el lector sepa
cual es el punto inicial, el final y cual es el camino a recorrer, pero
también tenemos que explicar por qué es un camino interesante a estudiar. Este
capítulo no pretende convencer que esta es una buena forma de recorrer el
camino, pero si que dar una idea de que es razonable, la evidencia sobre la
validez de nuestro trabajo será presentada en el resto de los capítulos
posteriores.


Trabajo anterior
================

Esta parte generalmente es el segundo capítulo y en él se presenta un resumen
del trabajo relacionado a nuestra tesis. No tenemos que hablar de todo el
trabajo anterior sino sólo debemos incluir trabajos en los que se basa nuestra
solución o trabajos que presentan soluciones alternativas a nuestro problema.
Este conocimiento que es relevante a nuestro trabajo lo denominamos como
*estado del arte*. El capítulo es muy conciso, pero no es una lista, tienen
que hilarse los trabajos y demostrarse que tenemos un conocimiento pleno de
éstos.  Podemos imaginarnos que estamos describiendo un mapa en dónde están
localizados estos trabajos y las relaciones que guardan entre sí.
Adicionalmente, deseamos que quede claro donde quedará ubicado nuestro trabajo
en comparación al resto.  En este capítulo se tiene que ser muy honesto pero
crítico sobre lo que proponen los otros trabajos.

Metodología
===========

Esta parte en realidad pueden ser uno o más capítulos. Si nuestro trabajo se
basa en alguna metodología establecida, agregamos un capítulo que hable a
detalle de esta metodología. Lo recomendable en este caso es que el capítulo
sea didáctico, como si se tratara de notas para una clase la esta metodología.
El uso de ejemplos es muy recomendado, una estrategia es tomar un ejemplo
sencillo e irlo construyendo durante el capítulo.  Al terminar el lector debe
tener una idea clara de los elementos que compone la metodología y porque esta
metodología es solida. Esto último no se hace justificando la metodología,
sino explicándola y citando la evidencia que la respaldan (artículos, sistemas
equivalentes, etc).

El siguiente o los siguientes capítulos explican las adecuaciones o uso de la
metodología para nuestro problema particular o si es una nueva metodología la
explican a detalle. En este caso si es importante justificar y demostrar que
los puntos de decisión que tomamos son razonables y bajo nuestras suposiciones
son adecuados. Por ende este capítulo es más argumentativo y riguroso. Podemos
seguir una estrategia didáctica, o describir nuestra posición de forma formal.

Corpus
======

Si tu tesis es en aprendizaje automático, muy probablemente uses una base de
datos, corpus o colección para demostrar tu metodología. Para describir esta
se puede usar el espacio de un capítulo, o se puede incluir en forma de una
sección en alguno de los capítulos de trabajo anterior, de metodología o como
parte del siguiente capítulo. Todas las opciones son posibles, y dependerá del
hilo de  tu tesis que opción es adecuada. La descripción tiene que ser concisa
estilo reporte, hay que describir el recurso y por qué es adecuado para tu
trabajo.  Estadísticas sobre el recurso ayudan a dar una imagen más completa
sobre éste.

Experimentos
============

Este parte es muy importante, primero hay que describir en general los
experimentos a realizar y porque son adecuados para tu trabajo, sobretodo
porque los posibles resultados apoyan la solución propuesta. Uno puede escoger
dos formas de presentar experimentos y resultados. La primera opción es
separar todas las descripciones de los experimentos de los resultados, esto
hace muy fácil a la luz de los resultados hablar de forma general como estos
resultados apoyan a las conclusiones principales pero dificulta lectura ya que
experimento y resultado no están inmediatos. La segunda opción, es
intercalarlos cada experimento propuesto está seguido de sus resultados, esto
facilita la lectura, pero requiere que haya una sección especifica para
recapitular los resultados y describir el efecto de estos en su conjunto en
alcanzar las conclusiones del trabajo.  Lo deseable es que el lector al
finalizar este capítulo tenga una idea clara de que experimentos se hicieron,
como se relacionan entre si y como los resultados contribuyen a entender la
solución propuesta.

En trabajos muy extensos es posible separar este capítulo en dos: experimentos
y resultados; o aún más si hay una evolución de los experimentos.

Conclusiones
============

Está es la última parte de la tesis, y se presenta como un capítulo que
recapitula los puntos más importante de la tesis. Retoma los puntos descritos
en la introducción y lo relaciona con los resultados de tal forma que
argumenta como estos últimos apoyan a determinar que nuestra solución al
problema fue adecuada. Una vez hecho esta recapitulación podemos discutir cual
es el impacto del nuevo conocimiento que generamos y a partir de esta que
otras investigaciones podríamos hacer. En resumen este capítulo es concreto
cuando hablamos del trabajo hecho, y especulativo cuando mencionamos el
trabajo futuro (para más detalle revisa [este post](/#/post/como_escribir_la_tesis_conclusion)


Apéndices
=========

Aspectos muy específicos de nuestro trabajo pueden incluirse como apéndices.
Estos representa detalle que contribuye a la validez de nuestros argumentos,
pero que son muy tediosos para su lectura en el cuerpo principal de la tesis.
Algunos aspectos comunes que se incluyen como apéndices son:

* Código
* Deducciones matemáticas
* Figuras o esquemas muy detallados como mapas


Partes extras
=============

Además de las partes anteriores es común incluir:

* Una portada con los datos de título, nombre de autor, institución y otros
aspectos formales.
* Un indice de los capítulos, secciones y subsecciones de la tesis
* Un indice de las figuras y tablas
* Una hoja con una dedicatoria
* Una hoja con un agradecimientos
* Un resumen corto de la tesis


Longitud de la tesis
====================

Una tesis generalmente está arriba de 50 cuartillas en su totalidad, en
cómputo las tesis son algo extensas llegando hasta más de cien hojas. La
introducción es corta en el sentido que se extiende de 4 a 8 cuartillas. La
conclusiones pueden ser todavía más cortas o más extensas dependiendo si se
hace una discusión a detalle, de 2 a 10 cuartillas. El resto de los capítulos
son de alrededor de 10 a 25 cuartillas.