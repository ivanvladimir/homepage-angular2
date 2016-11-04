


El [Procesamiento del Lenguaje
Natural](https://es.wikipedia.org/wiki/Procesamiento_de_lenguajes_naturales)
(PLN) es una diciplina de la computación que se enfoca a desarrollar algoritmos
para la manipulación computacional del lenguaje (natural/humano). Existen
varios razones por las cuales es deseable que las computadoras manipulen el
lenguaje como lo es el análisis de datos o identificar el significado de lo que
se dice o escribe. Existen varias aplicaciones de PLN como lo son la traducción
automática, el análisis de sentimientos, etc.



Instalación de NLTK
===================

[NLTK](http://www.nltk.org/) es una librería de PLN para python. Para el
correcto funcionamiento además instalaremos
[pip](https://pypi.python.org/pypi/pip) pensando que lo haremos desde una
distribución [Ubuntu](www.ubuntu.com):


``` bash
sudo apt-get install python-pip
sudo sudo pip install -U nltk
```

Datos
=====

Para comenzar a trabajar el lenguaje necesitamos un conjunto de datos. Para
esto utilizaremos datos del proyecto [Gutenberg](https://www.gutenberg.org) que
ofrece una coleción de libros historicos. El catálogo en español está
disponible [aquí](https://www.gutenberg.org/browse/languages/es). En esta
ocasión estaremos usando el
[Quijote](http://www.gutenberg.org/cache/epub/2000/pg2000.txt) para bajarlo
pueden usar la siguiente instrucción:

``` bash
wget http://www.gutenberg.org/cache/epub/2000/pg2000.txt
```

Importando las librerias
========================

Para importar la librería solo hay que hacer:

``` python
from __future__ import division  # Python 2 users only
import nltk, re, pprint
from nltk import word_tokenize
```

Leyendo los datos
=================

Para leer los datos utilizamos instrucciones normales de python:

``` python
raw = open('pg2000.txt').read().decode('utf8')
print type(raw)
print len(raw)
```

La primera línea abre el archivo y lo pasa a
[unicode](https://en.wikipedia.org/wiki/Unicode). La siguiente línea nos
imprime el tipo de archivo, y finalmente la última imprime la cuenta de
caracteres en todo el archivo.


Extrayendo tokens
=================

Tokens son la nomenclatura que le damos a las palabras presentes en el texto.
Usamos _token_ en lugar de palabra porque lo que obtenemos es algo más técnico.
Un token es distinto aunque sea la misma palabra, por ejemplo: _caballo_ y
_caballos_ cuentan como la misma palabra, mientras que son dos tokens
diferentes. También algunos elementos que no consideramos palabras son contados
como _tokens_, por ejemplos fechas en formato seguido, por ejemplo:
_09/11/1978_ es un sólo _token_; direcciones URL, cantidades, etc son
considerados tokens.

``` python
tokens = word_tokenize(raw)
print type(tokens)
print len(tokens)
print tokens[:10]
```

La primera línea, convierte el archivo en tokens, la segunda imprime el tipo de
_tokens_, la tecera imprime el total de tokens, y la cuarta línea imprime los
primeros diez _tokens_. Si marca un error que no encontró el tokenizer es
necesario instalarlo, para eso hay que ejecutar _python_, y en modo terminal
ejecuar el siguiente código

``` python
import nltk
nltk.download()
```

Se abrirá una ventana, hay que escoger la opción de _Models_ y la de _punkt_ y
oprimier el botón _download_ que instalará el paquete deseado. Hay que cerrar
_python_ y volver a intentarlo.

Creación de objeto texto
========================

El objeto _Text_ provee una interfaz para el acceso de varias funciones de
texto.

``` python
text = nltk.Text(tokens)
print type(text)
print text[1000:1020]
```

La primera línea obtiene el objeto _text_, en la segunda línea imprimimos el
tipo y finalmente imprimimos 20 tokens apartir del _token_ 1000. Si marca un
error, hay que ejecutar _download_, en esta ocasión se escoje la opción de
_corpus_  y el recurso de _stopwords_.


Estadísticas básicas
====================

Es hora de obtener algunas estadísticas básicas:

``` python
print len(set(text))
print text.count('Sancho')
fd = nltk.FreqDist(text)
print fd['Dulcinea']
print fd.keys()[0:50]
print fd.plot(50,cumulative=False)
lengths= [len(w) for w in text]
fd2= nltk.FreqDist(lengths)
fd2.tabulate()
```

La primera línea el número de palabras únicas, la segunda imprime cuantas veces
aparece la palabra _Sancho_. En la tercera creamos el objeto tipo _FreqDist_
que cotiene cuantas veces aparece cada _token_. En la cuarta línea averiguamos
cuantas veces aparece la palabra _Dulcinea_. En la quinta palabra imprimimos
las 50 palabras más comunes, en la sexta línea se dibuja un gráfico con las
fecuencia de estos términos. En la septima línea vemos las longitudes de cada
palabra, para lo cual se crea otro objeto de tipo _FreqDist_ que contiene
cuantas veces ocurren las longitudes de las palabras, que finalmente se
tabulan.

Colocaciones
============

Colocaciones son secuencias de palabras que ocurren comúnmente en el texto.
Para calcularlas ejecutar la siguiente instrucciones:

``` python
print text.collocations()
```

N-gramas
========

Continuando con el tema de secuencias de palabras, n-gramas son secuencias de n
palabras siendo las más comunes:

* unigrama, n=1, secuencias de una soloa palabra, osea _tokens_
* bigrama, n=2, secuencias de dos palabras
* trigrama, n=3, secuencias de tres palabras

Para calcularlas se puede ejecutar el siguiente código:

``` python
from nltk.util import ngrams
bigrams = ngrams(sentence.split(), 2)
fd3= nltk.FreqDist(bigram)
trigrams = ngrams(sentence.split(), 3)
fd4= nltk.FreqDist(trigram)
sixgrams = ngrams(sentence.split(), 6)
fd5= nltk.FreqDist(sixgram)
print fd3.most_common(20)
print fd3.most_common(20)
print fd3.most_common(20)
```