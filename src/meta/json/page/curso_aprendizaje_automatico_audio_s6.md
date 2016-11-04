
<script type="text/x-mathjax-config">
MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript"
src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>


¿Cuando escuchamos un audio, qué es lo que hace que suene de cierta forma
familar?

Para hacer un sistema que identifique el género de música de una canción
tenemos que solucionar el problema de como comparar dos sonidos entre si. Sin
embargo, hemo visto que el audio en la señal de amplitud es muy varible y que
realmente lo que se codifica ahí es el volumen de ésta. En el dominio de la
frecuencia empezamos a ver una secuencia de patrones con respecto a las
frecuencias pero todavía es muy variable.

## Extracción de características

Una alternativa para resolver este problema con respecto a la alta
variabilidadconsiste en transformar la señal en algo que incluya únicamente
las partes relevantes. En particular en audio una de estas formas de extraer
características es a través de la fransformación de MFCC. Antes de proceder
con está, hablaremos un poco más de la librería de Numpy.

## Operaciones con Numpy

Numpy es una librería para el manejo de operaciones matemáticas. Contiene
muchas funciones matemáticas que operan sobre los arreglos/matrices de numpy
de forma eficiente. A continuación revisaremos algunas caracteristicas que nos
serán de utilidad.

### Shape

_shape_ nos regresa la forma de nuestro arreglo, y para llamarlo sólo tenemos
que hacer llamar la instrucción como se muestra a continuación:

#!python
import numpy as np
import scikits.audiolab as audiolab
sound=audiolab.sndfile('prueba.wav')
data=sound.read_frames(sound.get_samplerate())
data.shape

En este caso se abre un archivo prueba que tiene dos canales, la función que
lee los datos nos regresá un arreglo de _numpy_. Al llamar al parámetro
_shape_ nos regresa  la siguiente información:

#!python
(44100,2)

El primer valor nos dice cuantos _renglones_ en este caso como está muestreado
a $44100$ muestras por segundo, dado que le pedimos leer esa cantidad de
muestras, nos regresa esa cantidad, equivale a que si le pidieramos el primer
segundo de audio. El $2$ nos dice que tiene dos columnas, una por canal.


### Slicing

Slicing (acceso a través de indices) nos permiten extraer segmentos de
nuestros datos de forma eficiente. Se parece mucho a acceder elementos de una
lista, pero en este caso en lugar del elemento queremos extraer un segmento.
Algunos ejemplos son los siguientes:

#!python
data[:,1].shape
data[:22050,].shape
data[22050:,0].shape
data[4410:-4410,0].shape

La coma separa la especificación entre renglones y columnas. Los dos puntos
pueden leerse como '...'. El primer ejemplo pide cualquier renglón (es decir
todos) y la columna uno; esta instrucción nos trae todos los renglones del
canal 2. La segunda insturcción nos pide de los renglones del principio hasta
el renglon $22050$ esto equivale la primera mitad de un segundo, como el canal
no se especifica, nos regresa dos. En el tercer ejemplo pedimos a apartir del
valor $22050$ hasta el final, es decir la segunda mitad de un segundo, en este
caso si le especificamos un canal: el primero. En el cuarto caso, le pedimos
un segmento de nuestro audio que comienza en el valor $4410$ ($0.1$ de un
segundo) hasta antes de los últimos $4410$ ($0.9$ del un segundo), de este
segmento queremos la columna $0$ es decir la primera.

Como se pueden dar cuenta de los ejemplos existe una disparidad en la forma de
accesar los datos ya que usualmente queremos referirnos a ellos en tiempo,
pero los datos vienen en muestras, por lo que siempre hay que estar haciendo
la transformación dado nuestro muestreo. La siguiente regla de tres ayuda a
identificar el valor de muestra (M) para un tiempo (T en segundos) dado que
que muestreamos a una cantidad específica (SR):

$M = T\times SR$


### Transpuesta

Muchas veces el formato en el que vienen nuestros datos no son los adecuados,
y quisieramos que los renglones fueran columnas y las columnas fueran
renglones. Afortunadamente _numpy_ tiene la función $.T$ que hace esta
tranformación por nosotros.

#!python
data_n=data.T
data_n.shape

En este caso ahora nuestra información para nuestro archivo de audio tiene
$44100$ columnas ($1$ segundo de información) y dos $renglones$ (dos canales).

### Funciones matemáticas

_numpy_ y las librerias de _scipy_ tienen múltiples funciones matemáticas que
nos ayudan a extraer para ver la variedad aquí hay unos links:

* [Funciones
matemáticas](http://docs.scipy.org/doc/numpy/reference/routines.math.html)
* [Transformada de
Fourier](http://docs.scipy.org/doc/numpy/reference/routines.fft.html)
* [Funciones
financieras](http://docs.scipy.org/doc/numpy/reference/routines.financial.html)
* [Algebra
lineal](http://docs.scipy.org/doc/numpy/reference/routines.linalg.h)

## Receta para extraer MFCCs

Los MFFCs comprimen la señal en frecuencia, por lo que el primer paso es
extraer el espectrograma, después se pasa el espectrograma por unos filtros
que denominamos MEL que simulan como el oido escucha, para finalmente
aplicarle una compresión. A continuación la receta que hace este calculo dada
una señal en el tiempo de audio:

1. Dividir la señal en ventanas del mismo tamaño (ejemplo 1024 muestras), se
recomienda que estén intercaladas (ejemplo 512)
2. De preferencia se pasa cada ventana por una ventana de Hamming (para
suavisar)
3. Para cada ventana calcular la transformada discreta de Fourier
4. Con los valores de la transformada de Fourier calcular el *periodograma*
que representa la energía por cada valor de frecuencia.
5. Filtrar las frecuencias y energías del periodograma usando un banco de
filtros Mel.
6. Calcular el logaritmo de la energía por cada uno de los filtros.
7. Calcular la transformada coseno discreta de las energías
8. Quedarse con los valores 1 a 13 de esta transformada, que representan a los
13 coeficientes MFCCs


## Paso 0

Antes de comenzar vamos a graficar la señal del primer canal de un audio
estereo. Si la señal de audio tiene solo un canal, la linea de
_data=data[:,0]_ se elimina:

#!python
import numpy as np
import scikits.audiolab as audiolab
import pylab as plt
sound=audiolab.sndfile('prueba.wav')
data=sound.read_frames(sound.get_samplerate())
data=data[:,0]
plt.plot(data)
plt.xticks([i*0.1*sound.samplerate for i in range(11)],["%2.2fs"%(i*.1) for i in range(11)])
plt.show()


## Paso 1

Como habíamos establecido dado que nuestra señal de audio no es periódica no
es posible calcular sus componentes en frecuencia para toda ella. Por lo que
se procede calcular los componentes para segmentos de esta. A estos segmentos
se le conocen como ventanas. Podemos pensar que lo que hacemos es suponer que
lo que está en la ventana representa a una función periódica, por lo que
podemos aplicar la matemática que nos permite saber los componentes para una
función periódica.

Una vez que tenemos los componentes para una ventana nos podemos mover a
la siguiente ventana en el tiempo y calcular los componentes para esa
nueva ventana. De manera práctica obtendremos una secuencia de como
evolucionan los componentes en el tiempo.

En este proceso hay que definir dos parámetros, el primero es el tamaño de la
ventana (ejemplo 1024) y el segundo la cantidad de muestras a brincar entre
ventanas (ejemplo 512).  Lo que queremos es que la ventana cubra suficientes
muestras de tal forma que absorba la riqueza de componentes en frecuencia y
que el brinco sea lo suficientemente pequeño que capture un continuo en los
componentes, pero que nos permita reducir el número de muestras.

El siguiente código dibuja la primera y segunda ventana de nuestra grabación
de manera continua con diferentes colores.

#!python
# Primera ventana
win1=data[:1024]
# Segunda ventana desplazada
win2=np.zeros(1536,'double')
win2[512:1536]=data[512:1536]
# Las dibujamos
plt.plot(win1)
plt.plot(win2)
plt.show()


Como pueden observar ambas ventanas se sobre imponen y de hecho comparten
valores entre sí, del 512 al 1024.

## Paso 2

La ventana Hamming nos ayuda ha hacer *smooth* la información en la ventana de
la señal original, esto ayudará a filtrar frecuencias espurias que aparecen
por cortar abruptamente la señal. La siguiente figura muestra la ventana
Hamming, una ventana de nuestra señal y la señal después de pasarla por la
ventana Hamming:

#!python
ham=np.hamming(1024)
win=data[:1024]
f,ax=plt.subplots(3)
ax[0].plot(ham)
ax[1].plot(win)
ax[2].plot(win*ham)
f.show()


# Paso 3 y 4

La transformada discreta de Fourier es la operación que nos permite calcular
los componentes en el dominio de la frecuencia.
Desafortunadamente, la transformada nos da componentes en el dominio de los
números imaginarios, que son los que utilizamos para representar información
sobre la amplitud de las funciones periódicas por grupos de frecuencias. Sin
embargo en lo que estamos interesados es en la energía en esas frecuencias,
por lo que elevamos al cuadrado la información real e imaginaría para extraer
la magnitud de la energía.  Con esta información, podemos sacar el
*periodograma* para esa ventana de la siguiente forma:

#!python
# Paso 3
s=np.fft.rfft(win*ham,512)
# Paso 4
p=(s.real**2+s.imag**2)/len(win)
plt.plot(p)
plt.show()

Como vemos primero se calcula la transformada de Fourier rápida para
números reales y luego se eleva al cuadrado tanto la parte real como
imaginaría y se normaliza por el tamaño de la ventana. En particular se
pide que la frecuencias se alojen en 512 recipientes/bins, pudimos elegir algo
más granular pero 512 es común en aplicaciones.

## Paso 5 y 6

Un filtro Mel es un filtro triangular que ayuda a obtener información de
una banda de frecuencia.  Estas bandas están basadas en la percepción del
oído humano, en donde frecuencias bajas son más granulares y con mayor
peso y frecuencias altas más amplias pero con menor pes pero con menor
peso. La siguiente figura muestra las bandas para nuestras 257 recipientes
de frecuencias:

#!python
import mel
plt.plot(mel.MELfilterbank_speech)
plt.show()

El módulo para calcular el filtro MEL lo pueden encontrar
[aquí](https://raw.githubusercontent.com/ivanvladimir/cursoML/master/sesion6_audio/mel.py).
Copienlo en su directorio para que puedan importarlo como se muestra en el
código.

<img class='center'

src='http://turing.iimas.unam.mx/~ivanvladimir/images/mfcc_fig5.png' title="Energía en 26 bandas de frecuencias"/>

Como se puede apreciar un filtro MEL se concentra en las frecuencias bajas
y abarca pocas frecuencias, conforme crece las frecuencias comienza
abarcar más frecuencias pero la altura del filtro disminuye. Esta forma de los
filtros tienen que ver como percibimos el volumen en frecuencias altas contra
el volumen en frecuencias bajas. En el ejemplo se presentan un total de 26
filtros/bandas. Cada filtro se va a utilizar para concentrar las energías en
la banda en un solo valor, de esta forma después de aplicar el filtro
obtendremos 26 valores. Pero además vamos a modificar la escala de la energía
por una logarítmica  que nos va a alizar los valores y hacer más manejables.
Adelante se muestra el efecto de este proceso en una ventana de la señal.


#!python
f,ax=plt.subplots(3)
ax[0].plot(p)
ax[1].plot(np.dot(p,mel.MELfilterbank_speech).clip(1e-5,np.inf))
ax[2].plot(np.log(np.dot(p,mel.MELfilterbank_speech).clip(1e-5,np.inf)))
f.show()



## Paso 7
----------------------------

De hecho es la escala  *log* del la energía de los coeficientes MEL lo que
convierte a esta señal en un coeficiente *cepstral*.  El prefijo "*ceps*"
es el inverso de "*spec*" (de espectral) y lo que señala es que podemos
tratar dicha señal como si fuera una señal en amplitud. Por eso, el
siguiente paso es aplicar una transformada de coseno a las coeficientes
MEL. La intuición desde paso es desde el punto de vista de procesamiento
de señales, que nos va a permitir comprimir dicha señal en elementos más
informativos. De hecho de años de experiencia en el campo de
reconocimiento de voz, de esta transformada coseno nada más vamos a
conservar del segundo al treceavo valor, el resto es ignorado.  El siguiente
código calcula esta compresión para una ventana, compara la escala log de los
coeficiente Mel con los MFFCs para esa ventana :

#!python
from scipy.fftpack import dct
mlog=np.log(np.dot(p,mel.MELfilterbank_speech).clip(1e-5,np.inf))
d=dct(mlog)
f,ax=plt.subplots(2)
ax[0].plot(mlog)
ax[1].plot(d)
f.show()


## Paso 8

Finalmente extraemos los valores de 1 a 13 del paso anterior.

#!python
mfcc=mlog[1:13]

## Poniendo todo junto

El código anterior se ejecuta para una sola ventana, para hacerlo sobre todas
las ventanas podemos usar el siguiente código:




## Notas finales

De esta forma es posible calcular los MFCCs para una señal. En resumen el
procedimiento fue: por ventana, identificar la energía para los
componentes en el dominio de la frecuencia, filtrar estos componentes con
un modelo de la percepción humana y comprimir estos valores aun más. Los
coeficientes resultantes pueden ser utilizados para tareas de aprendizaje
automático en donde se les denominará como los *features*/características
de la señal.

#!python
import numpy as np
import scikits.audiolab as audiolab
import pylab as plt
import mel
from scipy.fftpack import dct
sound=audiolab.sndfile('prueba.wav')
data=sound.read_frames(sound.get_samplerate())
data=data[:,0]
mfccs=[]
for i in range(len(data)/512-1):
win=data[512*i:512*i+1024]
s=np.fft.rfft(win*ham,512)
p=(s.real**2+s.imag**2)/len(win)
m=np.log(np.dot(p,mel.MELfilterbank_speech).clip(1e-5,np.inf))
d=dct(m)
mfcc=d[1:13]
mfccs.append(mfcc)
plt.imshow(np.array(mfccs).T)
plt.show()

---
Material extra

<a id="referencias"></a>


