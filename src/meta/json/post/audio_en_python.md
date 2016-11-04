
Aunque hasta ahora me había resistido a trabajar con grabaciones de audio,
dado los proyectos en los que estamos trabajando en el [Grupo Golem](
http://golem.iimas.unam.mx ) he terminado con la necesidad de procesar una gran cantidad de
grabaciones. Ya sea para hacer scripts de evaluación, identificar
actividad o para extraer caracteristicas del audio. Como es esperarse en
mi caso he estado utilizando python, sobretodo por la necesidad de
automatizar las tareas.

Python tiene varias librerías y herramientas para trabajar con
audio[<sup>1</sup>](#footnotes). Uno de los requisitos que rápido surgió fue que la librería
debería ser compatible con *ScyPy* y *NumPy*, inmediatamente identificamos a
[Audiolab][AudioLab]. Esta es un librería que puede leer de muchos formatos y lo
más importante nos entrega una estructura `numpy` directamente!

A continuación describimos alguna información sobre la documentación, la
instalación y un ejemplo de uso que encontramos útil.

Documentación
-------------

En un principio estaba algo confundido sobre que era [Audiolab][AudioLab].

* [Audiolab][AudioLab] es un wrapper sobre la librería [libsndfile][]
originalmente escrita en *C*
* [Audiolab][AudioLab] es uno de los SciPy Toolkits mejor conocidos como
[scikits][]
* [Audiolab][AudioLab] fue desarrollado por [David Cournapeau][david]
* La documentación de [audiolab][AudioLab] puede ser localizada en [aquí][doc]
* [Audiolab][AudioLab] tiene una minipágina en el sitio de [Cournapeau][Audiolab2]
* La librería la pueden [descargar aquí][download]

Instalación
-----------

Requisitos:

* NumPy, libsndfile, libasound


En ubuntu podemos instalar este software de la siguiente manera:

``` bash
sudo apt-get install python-dev python-numpy python-setuptools
sudo apt-get install libsndfile-dev libasound2-dev
```

La instalación la podemos hacer con `easy_install` ya que se instaló
`python-setuptools` de la siguiente forma:

``` bash
sudo easy_install scikits.audiolab
```

Alternativamente se puede bajar el paquete e instalarlo de la siguiente
forma:

``` bash
tar -xzvf scikits.audiolab-0.11.0.tar.gz
cd scikits.audiolab-0.11.0/
python setup.py build
sudo python setup.py install
```

Ejemplo
-------

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

``` python
import numpy as np
import matplotlib.pyplot as plt
import scikits.audiolab as audiolab

sound=audiolab.sndfile('audio.wav','read')
data=sound.read_frames(sound.get_samplerate())
spectogram=plt.specgram(data)
plt.show()
sound.close()
```


En el momento de ejecutarse `plt.show()` se desplegará el espectograma,
para terminar basta con cerrar la imagen. Un ejemplo de imagen a esperar
es:

<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/audio_en_python_fig1.png'
title="Espectograma de un segundo de audio"/>
</a>

Vamos a revisar línea por línea del código. La línea

``` python
import numpy as np
```

carga la librería `numpy` y le asigna el alias de `np`,

``` python
import matplotlib.pyplot as plt
```

carga la librería `matplotlib` y le asigna el alias de `plt`,

``` python
import scikits.audiolab as audiolab
```

finalmente, esta línea carga la librería `scikits.audiolab` y le asigna el
alias de `audiolab`.

``` python
sound=audiolab.sndfile('audio.wav','read')
```

Una vez con las librerías cargadas, se sbre el archivo de audio para
lectura y guarda la referencia en la variable `sound`.

``` python
data=sound.read_frames(sound.get_samplerate())
```

Esta línea, lee del archivo el equivalente a [sample rate](
http://en.wikipedia.org/wiki/Sampling_rate ) de muestras. El sample rate
dice cuantas muestras de audio se tomaron por segundo, como pedimos exactamente ésta
cantidad, únicamente leéremos el primer segundo del archivo. Esta
información se guarda en la variable `data`.

``` python
spectogram=plt.specgram(data)
```

Generamos el spectograma con la información guardadá en la variable `data`

``` python
plt.show()
```

Mostramos el espectograma.

``` python
sound.close()
```

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
