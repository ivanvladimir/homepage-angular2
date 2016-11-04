
<script type="text/x-mathjax-config">
MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript"
src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>


¿Cuando vemos a una escena, qué es lo que hace a un objeto?
Por ejemplo a una silla:

* [Imagenes de
sillas](https://www.google.com/search?q=images+sillas&client=ubuntu&hs=1rU&channel=fs&tbm=isch&tbo=u&source=univ&sa=X&ei=Tb-1U6CyFsiRyASn94EQ&ved=0CB0QsAQ&biw=1700&bih=927#channel=fs&q=sillas&tbm=isch)

Para hacer un sistema que identifique objetos en una escena (imagen) tenemos
primero que solucionar el problema de comparar dos imágenes entre si, lo cual
no es tan fácil dada la gran variabilidad que existe.  Por ejemplo, en una
imagen de 48x48 pixeles usando tres bytes para representar los colores
(24bits) existen $16,777,216$ posibles colores que pudieran usarse por cada
pixel de la imagen de 48x48:

* $16777216^{2304}=2^{24*2304}=2^{55296}$

Que es un número de más o menos dieciocho mil dígitos!! Dentro de este total
de imágenes tenemos que identificar objetos similares.  Por ejemplo, si
ordenamos todas estas fotos en base a su color, y si en estas imágenes existen
dos fotos de sillas donde lo único que varia es el color estamos hablando que
ya son notablemente diferentes entre ellas y en este ordenamiento están
separadas por millones de otras imágenes.

Extracción de características
-----------------------------

Una alternativa para resolver este problema exponencial es extraer
características. Básicamente consiste en transformar la imagen en algo que
incluya únicamente las partes relevantes. Por ejemplo, de una silla nos
interesa identificar que tenga patas, que tenga un respaldo, etc. Existen
muchas opciones para el caso de imagenes:

* [Extracción de caracteristicas en
wikipedia](http://en.wikipedia.org/wiki/Feature_detection_(computer_vision))

Extracción de características es posible también para otros campos:

* [De la voz](/#/post/MFCC)}})
* [De texto](https://github.com/ivanvladimir/authorid)

Hoy uno de los campos prominentes del aprendizaje automático es aprender a
extraer las características de forma automática:

* [Aprendizaje profundo](http://en.wikipedia.org/wiki/Deep_learning)

En muchos aspectos extraer características es parecido a comprimir
información, en el sentido que queremos conservar la información importante
para reconstruir la información original.

Histogram of Oriented Gradients
===============================

Los Histogramas de Orientaciones de Gradientes (HOG) son una forma de
transformar una imagen a componentes "básicos" que representen a la imagen
original.  Consiste en tres etapas:

* Calcular los vectores de los gradientes
* Calcular los histogramas sobre las orientaciones de los gradientes
* Normalizar los gradientes

En lugar de reducir toda la imagen de un jalón, HOG lo hace de forma iterativa
en bloques de 16x16 pixeles, es decir 256 pixeles serán reducidos a una
cantidad menor de información. Pero si brincamos de 16 en 16 en la imagen no
se incluye la continuidad propia de la imagen, por lo que en lugar se brinca
de 8 en 8 en la imagen. En una imagen de 48x48, estaremos dividiendo la imagen
en 6x6 celdas intercaladas entre ellas.

La receta
---------

Los gradientes miden el cambio relativo entre dos puntos. Si nos posicionamos
en un pixel, podemos medir el cambio entre el pixel de la izquierda y el de la
derecha. Además de este cambio, existe otro cambio entre el pixel de arriba y
el de abajo.  Estos dos cambios nos sirven para definir la siguiente
información por pixel:

* $[\Delta_x, \Delta_y]$

Un momento... ahora tenemos por cada pixel dos valores, en lugar de reducir la
cantidad de información la hemos aumentado al doble! Para comprimir la
información, se trata a esta información como vector y se obtiene su magnitud
y orientación:

* $Magnitude = \sqrt{\Delta_x^2+\Delta_y^2}$
* $Angle = arctan (\Delta_y/\Delta_x)$


Para ver como luce un gradiente en una imagen, pueden ejecutar el código
localizado en el siguiente link:

* [Calculando
gradiente](https://github.com/ivanvladimir/cursoML/blob/master/sesion5/calculando_gradiente.py)

En este caso, el código usan los operadores de OpenCV para transformar la
imagen, en particular:
[Lapacian](http://docs.opencv.org/doc/tutorials/imgproc/imgtrans/laplace_operator/laplace_operator.html)
y
[Sobel](http://docs.opencv.org/doc/tutorials/imgproc/imgtrans/sobel_derivatives/sobel_derivatives.html)
que calculan un gradiente más suave y resistente al ruido.


Hasta ahora todavía sigue siendo el doble de información, por lo que se hace
después es hacer un histograma basado en las orientaciones por bloque (16x16).
Es decir agrupamos los vectores en un bloque en grupos con ángulos similares.
Una configuración común es dividirlos en segmentos de 20 grados cada uno, de
tal forma que nos quedan 9 valores por cada bloque ya que ignoramos el signo
del ángulo. De esta forma, los 256 valores del bloque quedan reducidos a 9
valores.

Lo que contienen los grupos del histograma es la suma de las magnitudes de los
vectores en el bloque. Sin embargo, para lidiar con efectos multiplicativos,
normalizamos las magnitudes por celda, que es una división extra de los
bloques de nuestra imagen.

Una vez que tenemos todos estos valores para nuestros bloques, los
concatenamos en un vector, al cual denominamos descriptor HOG de nuestra
imagen.

La siguiente página ofrece una visualización del descriptor HOG para una
imagen:

* [HOG en
skimage](http://scikit-image.org/docs/dev/auto_examples/plot_hog.html)


HOG en OpenCV
-------------

Afortunadamente para nosotros OpenCV incluye una interfaz para calcular el
descriptor HOG de una imagen. El código asociado para esto es el siguiente:

#!python
# Se cargan módulos
import cv2
import argparse
import os.path

# Se configura los argumentos de la línea de comandos
p = argparse.ArgumentParser("mostrandoimagen.py")
p.add_argument("directorio",default=None,
action="store", help="directorio de archivo a procesar")
opts = p.parse_args()

# Se lista el contenido de un directorio
listing=os.listdir(opts.directorio)

# Se filtra del directorio todo lo que no sea imagen (jpg o png)
listing=["{0}/{1}".format(opts.directorio,namefile)
for namefile in listing if
namefile.endswith('jpg')
or
namefile.endswith('png')]

# Se configura al descriptor
hog = cv2.HOGDescriptor((48,48),(16,16),(8,8),(8,8),9)

# Por cada archivo en el directorio
for filename in listing:
# Se abre la imagen
img = cv2.imread(filename)

# Se calcula el descriptor
des=hog.compute(img)

# Se imprime información del descriptor
print "La imagen se redujo a",des.size

Las dos líneas importantes aquí son la 21 y 29. La primera especifica las
características del descriptor

* Para imágenes de 48x48
* Para bloques de 16x16
* Desplazándose en 8x8
* Normalizando en celdas de 8x8
* Y el histograma dividido en 9 segmentos

Finalmente, la segunda línea calcula el descriptor por imagen.


Material extra
==============

* [HOG en
wikipedia](http://en.wikipedia.org/wiki/Histogram_of_oriented_gradients)
* [Otra implementación de
HOG (Skimage)](http://scikit-image.org/docs/dev/auto_examples/plot_hog.html)