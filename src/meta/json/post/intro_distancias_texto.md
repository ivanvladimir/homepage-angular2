
Para entrar en ambiente comenzamos con
[Cake](http://en.wikipedia.org/wiki/Cake_(band)) y su éxito "The Distance" ;-)


<center>
<iframe width="640" height="480" src="//www.youtube.com/embed/F_HoMkkRHv8"
frameborder="0" allowfullscreen></iframe>
</center>

Ya ambientados proseguimos. Para cuantificar que tan cerca o lejos están dos
puntos usamos el concepto de distancia. En la vida cotidiana usamos distancias
sin detenernos a pensar mucho en ello, por ejemplo:

* La distancia entre las esquinas en un lado de una cancha de fútbol
internacional es entre 100-110 m.
* La distancia de la [UNAM](http://www.unam.mx) al centro histórico de la
Ciudad de México según el [Google Maps][unamch] es de 21.3km.
* La distancia de un maratón es de 42.195 km.
* La [distancia][tijuanatapachula] de Tijuana, una de las ciudades más al
norte de México, y Tapachula, otra ciudad muy al sur, es aproximadamente
de 3,837km.
* La distancia de la Tierra a la Luna es de  384,400km.
* La distancia del Sol a Neptuno es de 4 mil 500 millones de km.

De esta forma podemos intuir que esos dos banderines en las esquinas de
una cancha de fútbol están muy cerca en comparación de la UNAM al Centro
Histórico, o aún mucho mucho mucho más cerca que lo que está el Sol de
Neptuno.  Resulta que esa intuición de que dos puntos están cercanos o
lejanos los podemos calcular de distintas formas, sobretodo cuando los
puntos en cuestión son representados en vectores.

Vectores
--------

De manera muy laxa nos podemos imaginar a un vector como una
representación de un conjunto de cajas que solo pueden contener un cierto
tipo de objetos, por ejemplo como un ropero. En lo que estamos interesados
en representar es la cantidad de objetos que hay en cada caja.  Podemos
imaginarnos a un ropero 'muy ordenado' como un vector, si contamos la
cantidad de objetos en cada caja podríamos terminar con el "vector": pares
de zapatos, 12; corbatas y 6; playeras, 38.

Por supuesto, los vectores son una abstracción y no hacen referencias a
cajas reales y no necesitamos indicar de qué tipo es cada caja. Por
ejemplo, ese ropero lo podemos representar como [12,6,38]. De alguna forma
acordamos que la primera posición son los pares de zapatos, la segunda las
corbatas y las tercera las playeras. Ese orden no lo podemos cambiar entre
vectores que representen lo mismo, roperos en nuestro caso. Un ejemplo de
tipo de vectores muy común es el de coordenadas XY, estos son vectores con
dos componentes.  La primera posición representa la cantidad en X que hay que
avanzar para llegar a un punto, y la segunda posición la cantidad en Y.  De
tal forma que el vector [3,2] dice camina tres metros hacia X y dos hacia Y.

Regresando a nuestro ejemplo del ropero [12,6,38] podríamos decir que es un
ropero de muchas playeras a comparación de [7,5,12] y por lo tanto las
personas a las que perteneces son un tanto diferentes. Pero cuando lo
comparamos con el dueño del ropero [13,5,40] podemos imaginarnos que son
cercanos en algún aspecto.

Lo que vamos a ver a continuación es como representar **documentos de texto**
como vectores y cuantificar que tanto se parecen estos dada la distancia que
los separa, entre más cercanos, más se parecen; entre más lejanos, menos se
parecen.


Representación vectorial de texto
---------------------------------

Para representar a un texto como un vector vamos a contar ciertas
particularidades del texto, esas particularidades etiquetan a las "cajas" de
los vectores. Por ejemplo, algo muy común es contar las palabras de un texto,
cada palabra se convierte en un índice del vector y la cantidad de veces que
aparece esa palabra se le denomina el escalar del vector.

Para ejemplificar esta situación, teclea o pega un texto en el siguiente
cuadro. Una vez que estés listo oprime el botón de *Dibujar vector*, este va a
producir un matriz de las 100 palabras más comunes en el texto, entre más alta
sea su cuenta más brillante el color con que se representa en la celda.

<form name="texto1" action="" method="GET">
<p><emph>Escribe o pega un texto aquí<emph></p>
<textarea  id="tatexto1" rows="12"  style="width: 720px" name="inputbox"
value=""></textarea>
<p>
<input type="button" name="button" value="Dibujar vector..."
onClick="matrixtext(this.form,'#example1','text-example1',250,250,true)"></input>
</p>
</form>

<center>
<div id="example1"></div>
<div id='small'>
<div id="text-example1"></div>
</div>
</center>


Además de contar las palabras también podemos contar el número de pares de
palabras consecutivas, mejor conocido como bigramas; o en lugar de dos
palabras consecutivas, tres, es decir, trigramas, etc. También podemos contar
otros aspectos más específicos, como las palabras con mayúsculas, los signos
de puntuación, los nombres propios, las categorías de las palabras, patrones
sintácticos, etc. Cada una de estas es una representación diferente del texto,
y son tipos de vectores diferentes. En otro próximo post, platicaremos de
estás opciones, por lo pronto vamos a enfocarnos la forma de comparar dos
vectores, que en nuestro caso se traduce a comparar dos textos.


Distancias
----------

Una distancia representa de manera numérica la cercanía o lejanía de dos
puntos. En nuestro caso, esos "puntos" estarán representados por los vectores
de dos documentos. La forma de calcular esa distancia es a través de funciones
matemáticas que tomen como argumentos dos vectores y regresen un valor. Estas
funciones además tienen que cumplir con las siguientes condiciones:

<ol>
<li>$ D(X,Y) \geq 0 $</li>
<li>$ D(X,Y) = 0\ iff\  x=y$</li>
<li>$ D(X,Y) = D(Y,X) $</li>
<li>$ D(X,Z) \leq D(X,Y) + D(Y,Z)$</li>
</ol>


Si una función cumple con estas condiciones se le conoce como *métrica*. La
primera condición establece que las distancias siempre tienen que ser
positivas. La segunda condición asegura que la única vez que la distancia sea
cero sea porque son el mismo objeto. La tercera condición establece que no
importa la dirección en que se calcula la distancia, esta debe ser la misma
para dos objetos. Y finalmente, la cuarta condición establece  que la
distancia entre dos puntos no podrá ser menor a la suma de la distancias de
estos puntos con un tercero, a esta última se le conoce como la desigualdad
del triángulo. Si alguna métrica no cumple con alguna de estas condiciones, se
dice que estamos ante un *pseudo-métrica*.


Como podrán imaginarse existen varias formas de calcular la distancia entre
dos textos, dado que existen varias métricas para calcular estas distancias. A
continuación vamos a revisar algunas de éstas: _Jaccard_, _Sorensen_, _Masi_, _Ochai_, _h0_, _Euclidiana_ y _Coseno_.

En particular *Jacard*, *Masi*, *Sorensen*, y *Ochai* son distancias
binarias y no toman en cuenta a las cantidades representados en los vectores.
El resto son distancias pesadas y sí toman los toman en cuenta, aunque también
vamos a mostrar versiones pesadas de estas distancias. Adicionalmente, se
presenta *overlap* que no es una *pseudo-métrica*.

<center>
<a id="jaccard"></a>
**Jaccard**
</center>

Una idea central es medir que tantos elementos comparten ambos vectores.
La métrica Jaccard sigue esta intuición. La fórmula se representa de la forma
siguiente:

$$ D_{jaccard}(X,Y) = 1 - { \sum x_i \land  y_i  \over  \sum x_j \lor  y_j  }
$$

Esta fórmula indica que para la distancia entre los vectores $X$ y $Y$ hay que
calcular los índices en común, es decir índices de un escalar con valor mayor
a cero en ambos vectores; y dividirlos entre la cantidad de índices mayores a
cero, sin importar si en el otro vector ese índice es cero.  Este valor lo
restamos de uno para que $1$ represente que los dos valores están lejanos y
$0$ que los vectores están cercanos.

En términos de documentos, la métrica Jaccard consiste en dividir el
vocabulario común de los documentos, entre el vocabulario de la unión de
ambos documentos. En caso de documentos similares, el vocabulario común es
igual al vocabulario de ambos documentos, por lo tanto la distancia cero.
Pero en caso de ser distintos el vocabulario en común es cero, y por lo tanto
la distancia uno.

Para experimentar puedes pegar un segundo texto en la siguiente área de texto
y será comparado con el texto que pegaste anteriormente. Oprime el botón para
calcular la distancia.
<center>
<form name="texto2" action="" method="GET">
<p>Escribe o pega un texto aquí
</p>
<p>
<textarea id="tatexto2" rows="12" style="width: 720px"  name="inputbox"
value=""></textarea>
</p>
</form>
</center>

<form name="jaccard" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Jaccard"
onClick="jaccardf('tatexto1','tatexto2','jaccard-result')"></input>
</p>
</form>

<div id="jaccard-result"></div>


<center>
**Jaccard pesado** </center>

En la versión anterior de la distancia de Jaccard no se tomó en cuenta los
escalares de los vectores, sino solamente los índicesi (lo anterior porque
está basada en operaciones binarias *AND* y *OR*).  La siguiente definición de
la fórmula arregla esta situación:

$$ D_{wjacard}(X,Y) = 1 - { \sum min(x_i,y_i)  \over  \sum max(x_j,y_j)  } $$

En términos de texto, la métrica de Jaccard pesada es la relación que existe
de la cantidad de palabras compartidas en ambos documentos, entre la cantidad
potencial máxima que se pudieron haber compartido. Por ejemplo, si el
documento uno es "a b c c c" y documento dos es "a a b", las palabras
compartidas son 2 (a y b), pero la máxima que se pudo compartir es 2 as, 1 be
y 3 ces, igual a 6.

<form name="wjaccard" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Jaccard pesada"
onClick="wjaccardf('tatexto1','tatexto2','wjaccard-result')"></input>
</p>
</form>

<div id="wjaccard-result"></div>

<center>
<a id="sorensen"></a>
**Sorensen** </center>

Sorensen propone una relación parecida a Jaccard, pero ahora en relación a
la cantidad de índices involucrados, la fórmula luce así:


$$ D_{sorensen}(X,Y) = 1 - { 2* \sum x_i \land  y_i  \over  \sum x_j \land
1 + \sum y_k \land 1  } $$


Para documentos consiste en dividir la cantidad de vocabulario común,
incluimos tanto las palabras tipos del primer documento como los del
segundo documentos, como son las comunes entre vectores se repiten y por
eso multiplicamos por dos. Este valor lo dividimos entre todas las
palabras tipo de ambos ambos documentos. A diferencia de Jaccard, no
cuidamos que un índice aparezca una sola vez en la operación.

<form name="sorensen" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Sorensen"
onClick="sorensenf('tatexto1','tatexto2','sorensen-result')"></input>
</p>
</form>

<div id="sorensen-result"></div>


<center>
**Sorensen pesado** </center>

Si pensamos que las cantidades de los vectores se suman a una masa de
valores, Sorensen pesado se traduce en la relación que existe entre la
masa  compartida por ambos vectores entre el total de la masa de ambos
vectores.

$$ D_{sorensen}(X,Y) = 1 - {  \sum min(x_i,y_i) \over  \sum x_i + \sum y_j
} $$

En términos de documentos es la relación entre las palabras compartidas
por ambos documentos entre el total de palabras usadas por ambos
documentos.

<form name="wsorensen" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Sorensen pesada"
onClick="wsorensenf('tatexto1','tatexto2','wsorensen-result')"></input>
</p>
</form>

<div id="wsorensen-result"></div>

<center>
<a id="overlap"></a>
**Overlap**
</center>

Con Jaccard y Sorensen surge el problema que cuando uno de los vectores tiene
mucho más componentes que el otro causa que las distancia tienda a cero
independientemente si los valores en común sean muy parecidos.
Overlap trata de disminuir este problema dividiendo el número de valores
comunes entre el vector "más pequeño".

$$ D_{overlap}(X,Y) = 1 - { \sum x_i \land y_i  \over  min(\sum x_j \land 1,
\sum y_k \land 1) } $$

En términos de documentos corresponde a dividir el vocabulario común, entre el
vocabulario más pequeño correspondiente a uno de los documentos.

<form name="woverlap" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Overlap"
onClick="overlapf('tatexto1','tatexto2','overlap-result')"></input>
</p>
</form>

Sin embargo, esta formulación tiene el efecto que ya no se trata de una métrica
sino una pseudo-métrica. Porque cuando un documento está contenido en otro la
distancia es de cero, y esto va encontra de la segunda condición de la métricas
que establece que la distancia solo puede ser cero cuando se trata del mismo
documento.


<div id="overlap-result"></div>


<center>
**Overlap pesado** </center>

Regresando a nuestra intuición de masa, esta versión de overlap divide la masa
común entre vectores, entre la masa más pequeña correspondiente a uno de los
vectores.

$$ D_{overlap}(X,Y) = 1 - {  \sum min(x_i,x_i) \over  min(\sum x_j,\sum y_k) }
$$

En términos de documentos corresponde a la cantidad de palabras comunes, entre
la cantidad del documento más pequeño.

<form name="woverlap" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Overlap pesada"
onClick="woverlapf('tatexto1','tatexto2','woverlap-result')"></input>
</p>
</form>

<div id="woverlap-result"></div>


<center>
<a id="masi"></a>
**Masi** </center>

Masi (Measuring Agreement on Set-Valued Items) sigue un esquema similar al de overlap, pero considerá al vector "más
grande".

$$ D_{masi}(X,Y) = 1 - { \sum x_i \land  y_i  \over  max(\sum x_j \land 1,
\sum y_k \land 1) } $$

En términos de documentos corresponde a dividir el vocabulario común, entre el
vocabulario más grande correspondiente a uno de los documentos.

<form name="wmasi" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Masi"
onClick="masif('tatexto1','tatexto2','masi-result')"></input>
</p>
</form>

<div id="masi-result"></div>

<center>
**Masi pesado** </center>

De forma similar Masi divide la masa común entre vectores entre la masa del
vector con mayor masa.

$$ D_{masi}(X,Y) = 1 - {  \sum min(x_i,y_i) \over  max(\sum x_j,\sum y_k) }
$$


En términos de los documentos consiste en dividir la cantidad de palabras
compartidas entre las palabras del documento más grande.

<form name="wmasi" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Masi pesada"
onClick="wmasif('tatexto1','tatexto2','wmasi-result')"></input>
</p>
</form>

<div id="wmasi-result"></div>


<center>
<a id="h0"></a>
** h0 ** </center>

h<sub>0</sub> no tiene una versión binaria. Mezcla Sorensen y la intuición
de dividir la masa compartida y dividirla entre la masa potencialmente
compartida entre ambos vectores.


$$ D_{h_0}(X,Y) = 1 - { \sum min(x_i,y_i)  \over  \sum max(x_j,y_j) } $$

En término de documentos divide las palabras compartidas de los
documentos, entre la masa potencialmente compartida entre ambos
documentos.

<form name="wh0" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="h0"
onClick="wh0f('tatexto1','tatexto2','wh0-result')"></input>
</p>
</form>

<div id="wh0-result"></div>


<center>
<a id="euclidiana"></a>
** Euclidiana ** </center>

La distancia euclidiana es la que estamos acostumbrados y usamos
habitualmente. Corresponde a la longitud de una línea recta entre dos
vectores. En nuestra vida cotidiana estos vectores representan puntos en
el espacio 2D o 3D. Ésta definida por la fórmula:

$$ D_{euclidian}(X,Y) = 1 - { \sqrt { \sum (x_i-y_i) ^2 }  \over  { \sum
(x_j-x_j) ^2 }  } $$

En términos del documento es difícil imaginarse a que corresponde esta
distancia. Como me lo imagino, es que esta distancia codifica cuantos
cambios habría que hacer en un documento para llegar al otro. Sin embargo,
no hay que confundir con la distancia de edición (que exactamente mide
esos cambios pero en una secuencia de palabras).

<form name="weuclidian" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Euclidiana"
onClick="weuclidianf('tatexto1','tatexto2','weuclidian-result')"></input>
</p>
</form>

<div id="weuclidian-result"></div>

<center>
<a id="coseno"></a>
** Coseno **
</center>

Coseno es menos popular que la euclidiana pero también tiene su fundamento
en aspectos geométricos. Esta distancia codifica el ángulo entre vectores,
para ser específicos el coseno del ángulo.

$$ D_{coseno}(X,Y) = { \sum x_i*y_i   \over  { \sqrt { \sum x_j ^2 }}  {
\sqrt { \sum y_k ^2 }}  } $$

Otra vez, es difícil imaginarse desde el punto de vista del documento que
significa esta métrica entre el ángulo de documentos.

<form name="wcosine" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Coseno"
onClick="wcosinef('tatexto1','tatexto2','wcosine-result')"></input>
</p>
</form>

<div id="wcosine-result"></div>


<center>
<a id="ochai"></a>
**Ochai** </center>

La métrica Ochai se puede pensar como la versión binaria de la coseno.

$$ D_{ochai}(X,Y) = 1 - { \sum x_i \land  y_i  \over  \sqrt { \sum x_j
\land 1 \sum y_k \land 1 } }
$$

<form name="wochai" action="" method="GET">
<p>
Para calcular esta distancia entre los documentos oprime el botón:
<input type="button" name="button" value="Ochai"
onClick="ochaif('tatexto1','tatexto2','ochai-result')"></input>
</p>
</form>

<div id="ochai-result"></div>

Ejemplo
-------

Como ejemplo, tomé las versiones
[2](http://www.gnu.org/licenses/gpl-2.0.txt) y
[3](http://www.gnu.org/licenses/gpl-3.0.txt) de licencia GNU de software
libre estos son los resultados de la comparación para cada una de las
distancias:

* **Jaccard**: 0.5581
* **Jaccard pesado**: 0.5574
* **Sorensen**: 0.3871
* **Sorensen pesado**: 0.1452
* **Overlap**: 0.2122
* **Overlap pesado**: 0.0634
* **Masi**: 0.4984
* **Masi pesado**: 0.5438
* **h_0**: 0.4697
* **Euclidiana**: 0.0033
* **Coseno**: 0.0024
* **Ochai**: 0.3714

Podemos imaginar ambos documentos deben ser "cercanos" ya que uno es la
evolución del otro. Esta similitud se ve reflejada en los valores
relativamente bajos. Por supuesto, la pregunta que surge aquí es ¿Cuál es
la verdadera distancia? De hecho esa pregunta originó este post, y trabajo
anterior en el que tratamos de unificar las distancias con el fin de
identificar los autores de textos, bajo la hipótesis que documentos del
mismo autor están cercanos entre si.

Este post tiene su origen en el trabajo realizado con <a
href="http://www.clef-initiative.eu/documents/71612/61255b8a-2ca7-491d-bebd-3d874e54148a">
Paola Ledesma, Gibrán Fuentes, Gabriela Jasso y Ángel Toledo</a>.

---
Referencias

<a id="referencias"></a>

* [Espacios vectoriales](http://en.wikipedia.org/wiki/Vector_space)
* [Modelo de Espacio
vectorial](http://en.wikipedia.org/wiki/Vector_space_model)
* [Distancias en
Numpy](http://docs.scipy.org/doc/scipy/reference/spatial.distance.html)



[unamch]:https://www.google.com/maps/preview#!data=!4m18!3m17!1m1!1sCentro+Historico%2C+Mexico!1m5!1sUniversidad+Nacional+Aut%C3%B3noma+de+M%C3%A9xico%2C+Av.+Universidad+3000%2C+Ciudad+Universitaria%2C+Coyoac%C3%A1n%2C+04510+Ciudad+de+M%C3%A9xico%2C+Distrito+Federal%2C+Mexico!2s0x85ce00071fca0bad%3A0x6074a3db95bb232e!3m2!3d19.318951!4d-99.184306!3m8!1m3!1d39377!2d-99.1860896!3d19.3216945!3m2!1i1920!2i1004!4f13.1&fid=0
[tijuanatapachula]:https://www.google.com/maps/preview#!data=!4m18!3m17!1m5!1sTijuana%2C+Baja+California%2C+Mexico!2s0x80d93810036fbaf3%3A0xc0cd7a68bb7188f4!3m2!3d32.4888212!4d-116.9616941!1m1!1sTapachula%2C+Mexico!3m8!1m3!1d19183743!2d-108.0754122!3d26.1112765!3m2!1i1920!2i1004!4f13.1&fid=0
