

Como estableciemos el audio son variaciones de la presión en el aire, y el
trabajo de un archivo de audio es capturar estas variaciones. En las primeras
versiones de archivos para audio, y que todavía son muy comunes, la
información del archivo es exactamente eso, una secuencia de números que
capturan la forma de la onda. Sin embargo existen muchas configuraciones que
hacen posible que una señal de audio se guarde en archivo.

## Frecuencia de muestreo

Para guardar la forma de la señal debemos guardar dónde va ésta cada
determinado tiempo. El micrófono tiene un elemento mécanico que es sensible a
la variación de la presión del aire y dada esa variación se conviente en
energía eláctrica. Entonces el micrófono pasa la señal de variaciones en la
presión a variaciones en energía electrica. Después la tarjeta de sonido de
nuestra compudatora, celular o grabadora digitaliza esa información.

El número de veces por segundo que se pide por dónde va la señal se le conoce
como _frecuencia de muestreo_. Esta *frecuencia* es diferente en naturalezaa
las frecuencias que van presente en una señal a audio, pero guardan una
relación muy importante. Si recuerdan entre más grande la frecuencia la onda
es más corta, por lo tanto si muestreamos a cierta frecuencia todas las
frecuencias más altas las perdemos, porque ocurren entre muestras y no nos
enteramos que existen. De hecho como la onda tiene una cresta y un valle,
necesitamos almenos dos muestreas para poder recuperar la onda. Por lo tanto,
una frecuencia de muestreo $X$ solo puede capturar hasta la mitad de
frecuencias, es decir $X/2$ todas las demas frecuencias son invisibles. Es
como si fuera un filtro.

## Bits/Cuantización

Una vez que sabemos cuantas muestras tomar por segundo queda por definir como
codificar la amplitud de la onda. El propósito es transformar la amplitud en
un número, pero dado a que estamos limitados por los bits de las computadoras
existe un número máximo que podremos capturar, por lo que habrá una amplitud
máxima, el resto de las amplitudes serán perdidas. Si usamos 8 bits,
tendresmos 256 valores para representar las amplitudes, si usamos 16 bits,
tendremos 32,767, y si usamos 32-bits, 2,147,483,647. De tal forma que entre
más bits tenemos una mejor resolución. Lo que queda es definir que amplitud
corresponde a que valor, a esto se le denomina cuantización.

## Canales

En sistemas modernos de audio es posible enviar más de una señal de audio, que
usualemente se le conoce como canal. En particular aprovecamos esto para
modelar audio estero, en donde un canal enviamos la información que va la
bocina izquierda, y en otra a la bocina derecha. Sistemas más complejos de
audio usan hasta 5 o 7 canales, y tratan de hacer el sonido más inmersivo.

## Compresión

La información anterior genera una gran candidad de información, por ejemplo
grabando una cancioón de 3 minutos: grabados a 44100 muestras por segunto,
usando 32-bits corresponde a:

$3min \times 60 seg/min \times 40100 frames/segs \times 3 bytes \times 2
channels = 47628000 bytes = 45 MB$

Pero actualmente nuestra experiencia es que los archivos de música de 3
minutos son de menor tamaño. Este es porque usamos métodos de compression. Hay
de dos tipos con: con perdida y sin perdida. El formato MP3 es con perdida y
trata de manipular el audio de tal forma que lo simplifica pero sigue sonando
a nosotros de forma natural, tiene un procedimiento similar al de los jpegs
tan comunes en las imágenes. Por otro lado, los algoritmos de compresión sin
perdida hacen un trabajo similar al formato .zip que cuando descomprimimos el
archivo nuestra información no está modificada.


## Audio en python

Python tiene varias librerías y herramientas para trabajar con
audio[<sup>1</sup>](#footnotes). En este caso nos enfocaremos a
[Audiolab][AudioLab]. Esta es un librería que puede leer de muchos formatos y
que nos entrega una estructura `numpy`! Numpy es una libreria de python que
nos permite trabajar con vectores y matrices de manera eficiente. Una lista de
python podría ser suficiente para guardar la señal, desafortunadamente, la
lista es una estructura lenta ya que es para uso general. Pero como sabemos
que sólamente tendremos números en la lista es posible usar numpy que es más
eficiente cuando se trata sólamente de números.


## Instalación en linux

Requisitos:

* NumPy, libsndfile, libasound


En ubuntu podemos instalar este software de la siguiente manera:

:::bash
sudo apt-get install python-dev python-numpy python-setuptools
sudo apt-get install libsndfile-dev libasound2-dev


La instalación la podemos hacer con `easy_install` ya que se instaló
`python-setuptools` de la siguiente forma:

:::bash
sudo easy_install scikits.audiolab

Alternativamente se puede bajar el paquete e instalarlo de la siguiente
forma:

:::bash
tar -xzvf scikits.audiolab-0.11.0.tar.gz
cd scikits.audiolab-0.11.0/
python setup.py build
sudo python setup.py install


## Instalación en windows (cortesía de Esaú)

1. Descargar la librería libsndfile, archivo ejecutable para versión de 32 o 64 bits.

2. Crear Variable en el path de libsndfile (A continuación los pasos):

A Ir a Equipo, botón derecho propiedades.

B Configuración avanzada del sistema, Variables de entorno.

C Buscar en Variables del sistema "Path" y Editar.

D Agregar url de libsndfile (C:\Program Files\Mega-Nerd;) OJO TIENE QUE ABRIR Y CERRA LA URL CON PUNTO Y COMA ";"

3. Dirigirse al repositorio http: http://www.lfd.uci.edu/~gohlke/pythonlibs/#scikits.audiolab

4. Descargar scikits.audiolab‑0.11.0‑cp27‑none‑win_amd64.whl o de 32bit

5. Abrir la terminal de windows, direccionarse a donde se encuentra el archivo .whl

6. Teclear: pip install scikits.audiolab‑0.11.0‑cp27‑none‑win_amd64.whl

## Ejemplo

Para el siguiente ejemplo se necesita un archivo de audio con más de un
segundo de duración, sino tienes uno a la mano puedes bajar uno de nuestro canal de
[SoundCloud]( https://soundcloud.com/golem-audio ). En el siguiente código
nos vamos a referir al archivo como `audio.wav` si tu archivo no se llama
así sustituye por el nombre correcto.

La idea del ejemplo es dibujar el
[espectograma]( http://es.wikipedia.org/wiki/Espectrograma ) del primer
segundo del archivo `audio.wav`, para lo cual será necesaria la librería
[*matplotlib*]( http://matplotlib.org/ ). El código lo puedes copiar y
ejecutar como un script de python o de manera interactiva con `ipython`.

#!python
import numpy as np
import matplotlib.pyplot as plt
import scikits.audiolab as audiolab

sound=audiolab.sndfile('audio.wav','read')
data=sound.read_frames(sound.get_samplerate())
spectogram=plt.specgram(data)
plt.show()
sound.close()

En el momento de ejecutarse `plt.show()` se desplegará el espectograma,
para terminar basta con cerrar la imagen. Un ejemplo de imagen a esperar
es:

<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/audio_en_python_fig1.png'
title="Espectograma de un segundo de audio"/>
</a>

Vamos a revisar línea por línea del código. La línea

:::python
import numpy as np

carga la librería `numpy` y le asigna el alias de `np`,

:::python
import matplotlib.pyplot as plt

carga la librería `matplotlib` y le asigna el alias de `plt`,

:::python
import scikits.audiolab as audiolab

finalmente, esta línea carga la librería `scikits.audiolab` y le asigna el
alias de `audiolab`.

:::python
sound=audiolab.sndfile('audio.wav','read')

Una vez con las librerías cargadas, se sbre el archivo de audio para
lectura y guarda la referencia en la variable `sound`.

:::python
data=sound.read_frames(sound.get_samplerate())

Esta línea, lee del archivo el equivalente a [sample rate](
http://en.wikipedia.org/wiki/Sampling_rate ) de muestras. El sample rate
dice cuantas muestras de audio se tomaron por segundo, como pedimos exactamente ésta
cantidad, únicamente leéremos el primer segundo del archivo. Esta
información se guarda en la variable `data`.

:::python
spectogram=plt.specgram(data)

Generamos el spectograma con la información guardadá en la variable `data`

:::python
plt.show()

Mostramos el espectograma.

:::python
sound.close()

Y finalmente, se cierra el archivo.

Y listo, de esa forma podemos abrir archivos de audio en python y
procesarlos con *numpy*.


- - -

<a id="footnotes"></a><sup>1</sup> Estos son algunos sitios donde pueden
encontrar una lista de las
librerías y herramientas disponibles [Wiki audio in
Python]( http://wiki.python.org/moin/Audio ) y [Music software written in
Python]( http://wiki.python.org/moin/PythonInMusic )

[AudioLab]: http://projects.scipy.org/scikits/wiki/AudioLab "Audiolab"
[AudioLab2]:  http://www.ar.media.kyoto-u.ac.jp/members/david/softwares/audiolab/index.html "Audiolab"
[download]: https://pypi.python.org/pypi/scikits.audiolab/ "librería"
[libsndfile]: http://www.mega-nerd.com/libsndfile/ "libsndfile"
[scikits]: http://projects.scipy.org/scikits/ "scikits"
[david]: http://www.ar.media.kyoto-u.ac.jp/members/david/index.html  "desarrollador"
[doc]:  http://www.ar.media.kyoto-u.ac.jp/members/david/softwares/audiolab/sphinx/index.html "documentación"

