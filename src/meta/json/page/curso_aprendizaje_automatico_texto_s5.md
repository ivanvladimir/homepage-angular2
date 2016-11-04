


Una tarea común del [Procesamiento del Lenguaje
Natural](https://es.wikipedia.org/wiki/Procesamiento_de_lenguajes_naturales)
(PLN) es la de clasificar textos. Esto es dado un segmento de texto decidir una
categoría para éste, por ejemplo: si es poesía o es narrativa; si es spam o no
lo es; o qué obra pertenece dicho texto. En este último caso, la obra
representa una clase. A continuación se presentan los principales componentes
para lograr esto usando una metodología de [aprendizaje
automático](https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico).

## Datos

Para la metodología de aprendizaje automático necesitamos un conjunto de
ejemplos de como lucen textos para cierta obra y como lucen textos de otras
obras. A continuación un par de segmentos del principio y el final del
[Quijote](http://www.gutenberg.org/cache/epub/2001/pg2000.txt):

> y no se pueda vender sin ella . Y , para que dello conste , di la presente en
> Valladolid , a veinte días del mes de deciembre de mil y seiscientos y cuatro
> años . Juan Gallo de Andrada . TESTIMONIO DE LAS ERRATAS Este libro no tiene
> cosa digna que no corresponda a su original ; en testimonio de lo haber
> correcto , di esta fee . En el Colegio de la Madre de Dios de los Teólogos de
> la Universidad de Alcalá , en primero de diciembre de 1604 años . El
> licenciado Francisco Murcia de la Llana . EL REY Por cuanto por parte de vos
> , Miguel de Cervantes , nos fue fecha relación que habíades

> , y tres y ciento ; dígolo porque mi señora la duquesa a fee que no va en
> zaga a mi ama la señora Dulcinea del Toboso . Volvióse don Quijote a la
> duquesa y dijo : -Vuestra grandeza imagine que no tu vo caballero andante en
> el mundo escudero más hablador ni más gracioso del que yo tengo , y él me
> sacará verdadero si algunos días quisiere vuestra gran celsitud servirse de
> mí . A lo que respondió la duquesa : -De que Sancho el bueno sea gracioso lo
> estimo yo en mucho , porque es señal que es discreto ; que las gracias y los
> donaires , señor don Quijote , como vuesa merced bien sabe , no

Que al compararlo con otras otros segmentos de otra obra como
[Capaccuna](http://www.gutenberg.org/files/25705/25705-8.txt) es posible notar
algunas diferencias:

> mismo códice L j 5 de la biblioteca del Escorial que guarda anónima la
> _Segunda parte de la crónica del Perú_ de Cieza de Leon , y que el célebre
> historiador norte-americano recibiria probablemente con otro traslado de esa
> segunda parte , endosada por quien lo sacó de los papeles del lord
> Kingsborough á Juan de Sarmiento , y remitido de Lóndres por Mr. Rich ; y á
> la copia del libro de Betánzos existente en el Escorial , le falta mucho ,
> por desgracia , para estar completa . Por lo ménos , tal como yo la hallé el
> verano de 1875 en un grueso volúmen encuadernado largos años atrás y con

Para que una máquina aprenda a diferenciar las obras, es necesario presentarle
varios ejemplos de como se ven segmentos de una obra y como los de la otra.
Para lograr lo anterior haremos lo siguiente:

1. Tomar una obra y cortarla en segmentos. Cada segmento será un ejemplo de
cómo luce el lenguaje usado en esa obra.
2. Los segmentos se cortan entrelazados, es decir el final se un segmento, en
el siguiente se convierte en el principio.
3. A los segmentos de esa obra se les considera de una clase
4. Se hace lo anterior por cada segmento.

Para ver un ejemplo de como se lograría eso, puedes analizar este
[código](https://raw.githubusercontent.com/ivanvladimir/cursoML/master/sesion5_text/create_segments.py)
para ejecutarlo escribe el siguiente código con dos obras de proyecto
[Gutenberg](https://www.gutenberg.org)

``` bash
python create_segments.py ARCHIVO1 ARCHIVO2 ...
```

Dónde $ARCHIVO1$ y $ARCHIVO2$ son las obras y pueden haber cuantas se deseen.
Este _script_ de _python_ genera dos archivos _train.txt_ y _text.txt_ el
primer archivos son ejemplos de entrenamiento, mientras que el segundo archivo
son ejemplos de prueba. Más adelante clarificaremos esto. Si abren estos
archivos verán que viene el texto y al final viene un número, todos los
segmentos que comparten el mismo número pertenecen a la misma obra.


## Instalacón de scikit-learn

[skelarn](http://scikit-learn.org/) es una librería de _python_ que nos
permitirá crear los modelos de aprendizaje. Para instalarla sólo hay que
ejecutar lo siguiente:

``` bash
pip install -U scikit-learn
```

## Representación de los ejemplos

Hay diferentes alternativas para poder manipular los segmentos de texto de
forma computacional. Una muy común es la representación _vectorial_ en dónde
cada palabra se considera una dimensión del vector y el valor en esa dimisión
es la cantidad de veces que aparece la palabra (_frecuencia_).  Para representar
un conjunto de segmentos es necesarios considerar todos las palabras de esos
segmentos y se genera un vector por segmento.

Por ejemplo para los siguiente "segmentos"

* hola mundo
* hola mundo hola mundo
* hola Edmundo
* hola mundo cruel

Se pueden generar los siguientes vectores:

* $[1,1,0,0]$
* $[2,2,0,0]$
* $[1,0,1,0]$
* $[1,0,1,1]$

En dónde la primera dimensión es para la presencia de la palabra _hola_; la
segunda para _mundo_, la tercera para _Edmundo_, y finalmente la cuarta para
_cruel_. Cada uno de los vectores representa uno de los texto, y en formato de
vector nuestros algoritmos basados en propiedades matemáticas pueden lucir y
hacer su magia.

### Vectores de prueba

Un objetivo que queremos hacer con sistemas basados en aprendizaje automático
es que lo que modelen lo hagan para situaciones reales. Por ejemplo si tenemos
un detector de caras, no sólo funcione para las caras con los que lo entrenamos
sino con cualquiera. Para lograr eso tenemos que estimar que tan bueno es
nuestro sistema. Para lo anterior nuestra metodología prevé separar un conjunto
de ejemplos de prueba que el sistema nunca ve, y nos servirá para ver que tan
bueno es nuestro modelo.

Una consecuencia de separar ejemplos para prueba es que si hay palabras
contenidas que no estaban presentes en las pruebas, estas son invisibles al
modelo, ya que los vectores no tendrán asignada una dimensión para estas.
Aunque parezca un error, no lo es y es una consecuencia de lo estricto que es
nuestra metodología. Por ejemplo para los siguientes vectores:

* hola luna
* adios luna

Se generarían los siguientes vectores respectivamente:

* $[1,0,0,0]$
* $[0,0,0,0]$


### Vectores de texto en _sklearn_

_sklean_ pone a nuestra disposición una clase que transforma una lista de
textos
([CountVectorizer](http://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.CountVectorizer.html)),
en dónde cada elemento de la lista es un segmento, a una matriz de vectores que
representan estos textos:

``` python
from sklearn.feature_extraction.text import CountVectorizer
count_vect = CountVectorizer()
X_train    = count_vect.fit_transform(X_train)
X_test     = count_vect.transform(X_test)
```

La primera línea importa esta función, la segunda crea el objeto de esta clase,
la tercera línea lee los datos de entrenamiento, y crea los vectores con las
dimensiones basadas en los datos de entrenamiento. Finalmente, la cuarta línea
usando las dimensiones encontradas en la línea anterior crea los nuevos
vectores para prueba.

## Modelo SVM

En nuestro primer modelo vamos usar una técnica llamada _support vector
machine_. Afortunadamente _sklearn_ nos provee una clase para este algoritmo de
aprendizaje:

``` python
from sklearn.svm import SVC
clf = SVC()
clf.fit(X_train, Y_train)
print(clf.score(X_test,Y_test))
```

La primer línea importa esta clase, en la segunda creamos el objeto para este
algoritmo, y la tercera línea la usamos para crear el modelo basado en nuestros
datos. Noten que como entrada recibe, los vectores de entrenamiento calculados
en la sección anterior y las etiquetas (es decir las clases, las obras) a las
que pertenece cada ejemplo. De tal forma que aprende a mapear de un segmento a
la clase. Finalmente, la cuarta línea se usa para estimar que tan bueno es
nuestro modelo, para eso le pasamos los datos de prueba y estima un resultado,
entre más cercano a $1$ es mejor.

Para saber un poco más sobre este algoritmo puedes ver el siguiente video.

<center>
<iframe width="853" height="480"
src="https://www.youtube.com/embed/_nu_vY_UAnU" frameborder="0"
allowfullscreen></iframe>
</center>

## Evaluación

La línea final nos presenta una evaluación de que tan bueno es nuestro sistema
pero no da mucha información. Para tener un reporte más completo podemos usar
la función:

``` python
from sklearn.metrics import classification_report
print(clf.score(X_test,Y_test))
print(classification_report(Y_test, Y_pred))
```

La primer línea importa la función, la segunda línea obtiene una predicción
para los datos de prueba, y en la tercera evaluamos esta predicción.

>             precision    recall  f1-score   support
>
>          0       0.95      1.00      0.97       531
>          1       1.00      0.53      0.70        60
>
> avg / total       0.95      0.95      0.95       591

_Precision_ nos cuantas de las predicciones que hizo el sistema, sobre a que
obra pertenecía la obra, fueron correctas dadas las que teníamos que predecir.
_Recall_ nos dice cuantas fueron correctas dado las que teníamos que decir
correctas. Y _f1-score_ es una mezcla geométrica de ambos valores.


## Todo junto

Todo el flujo antes descrito se puede observar
[aquí](https://raw.githubusercontent.com/ivanvladimir/cursoML/master/sesion5_text/train_test.py).
Para ejecutarlo sólo basta escribir el siguiente comando:

``` bash
python train_test.py train.txt test.txt
```