

El sonido es un fenómeno natural que consiste de perturbaciones en la presión
del aire. Aunque no lo parezca vivimos de forma similar que una ballena azul
que vive en un océano de agua, nosotros  en un océano de aire. Éste océano de
aire lo conocemos como la atmósfera y tiene funciones muy especiales para
nuestro ecosistema como:

* Absorber la luz ultravioleta
* Controla cambios de temperatura entre día y noche
* Y está compuesto de químicos que sustentan la vida

Pero además tiene la propiedad que es el medio por el cual se trasmite el
*sonido*.

## Velocidad del sonido

La experiencia diaria de los sonidos es muy natural a nosotros, día con día
escuchamos diferentes sonidos, sin embargo es un fenómeno elusivo cuando
intentamos imaginar qué es exactamente lo que está detrás de ellos. En
particular la velocidad con la que ocurre el fenómeno es una de las
características que los hace elusivos.  El sonido a nivel del mar viaja a una
velocidad de $340.3$ $m/s$ (i.e., $1,225$ $km/h$). Esto es esa perturbación a
la que nos referimos es capaz de recorren aproximadamente $3$ estadios de
fútbol en un segundo. Si lo comparamos con el [humano más
veloz](https://en.wikipedia.org/wiki/Usain_Bolt#Average_speed) que alcanzó una
velocidad de $12.4$ $m/s$ estamos una dimensión de velocidades diferente. Es
por esta velocidad que es el método preferido por nuestras madres cuando nos
piden arreglar nuestro cuarto ;-)

## ¿Qué es el sonido?

El sonido son cambios en la presión atmosférica que viajan a través del aire.
Estos cambios viajan como ondas, se puede decir que el sonido es la onda, la
onda sonora.

<center>
<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/sine_wave.gif'
title="Onda
senoidal"/>
</center>

Sin embargo no es la onda como nos la imaginamos, en particular no como las
ondas que vemos en la superficie del agua. Como estamos inmersos en el medio,
la onda en el aire corresponde a una acumulación de partículas de aire
(aumento de presión). Como las partículas se acumulan en un punto en otro se
dejan de acumular (disminución de presión). Entre la acumulación y el espacio
libre se genera un patrón de onda que se le conoce como onda longitudinal:

<center>
<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/lonwav.gif'
title="Onda
longitudinal"/>
<p>
Tomado de:<a
href="http://hyperphysics.phy-astr.gsu.edu/hbase/sound/tralon.html#c1">Sound
waves in air</a></p>
</center>

## La onda idea

Describir al sonido como una onda trae muchas ventajas. En particular si la
definimos como una *onda ideal* podemos tomar ventaja de su caracterización
matemática como una función sinodal o cosinodal. En particular este tipo de
ondas decimos que tienen las siguientes propiedades:

* Son repetitivas (el par valle-cresta se repiten infinitamente)
* Tiene una longitud (distancia entre dos puntos de repetición
* Tiene una frecuencia (número de repeticiones por segundo)
* Tiene un periodo (tiempo que dura una repetición)
* Tiene una amplitud (distancia entre valle y cresta)

Dado que la velocidad del sonido es constante, estas propiedades se entrelazan
entre si. Que la velocidad sea constante quiere decir que no importan que
valor tengan entre si las propiedades, la onda de sonido viajará a $340.3$ $m$
en un segundo. Así que si suponemos que sabemos que la longitud de la onda es
de $1m$, entonces podemos saber que su frecuencia es de $340.3$ repeticiones
por segundo, esto por qué sabemos que tiene que ocurrir esa cantidad en un
segundo. Además podemos saber que su periodo es de $2.9$ milisegundos, es
decir una repetición de la onda ocurre en aproximadamente en tres milésimas de
segundo. Por otro lado, la amplitud no tiene ningún rol con las otras
características, es independiente de estas y puede tomar cualquier valor.
Algunas de las relaciones matemática que se sostienen son:

* $L=\frac{340.3}{L}$
* $F=\frac{340.3}{L}$
* $P=\frac{1}{F}$
* $F=\frac{1}{P}$
* $L=340.3 \times P$

Es importante notar que a diferencia de nuestra experiencia cotidiana
caminando, en donde si nosotros aumentamos la frecuencia de paso llegamos más
rápido a un lugar, esto no ocurre con el sonido. Si aumenta la frecuencia del
sonido seguirá recorriendo los mismos $340.3$ por segundo porque la amplitud
se hará más chica. O por ejemplo, si aumentamos la fuerza de nuestros pasos
puede que nos candemos pronto, esto no ocurre con el sonido a mayor amplitud
(fuerza en el paso) la onda de sonido seguirá recorriendo los mismos $340.3$
por segundo.

*Nota* La frecuencia se mide en _hertz_ ($hz$) que representan
representaciones por segundo.

## Ejemplos de sonidos *puros*

La siguiente tabla contiene ejemplos de sonidos *puros* es decir sonidos que
en su comportamiento siguen la forma de una onda ideal (solo les falta ser
infinitas).  Si oprimes el botón puedes escuchar un tono en la frecuencia y
con la longitud que se indica. Por ejemplo para un piano su nota más baja
tiene una frecuencia de $32.7$ $hz$  que implica que tiene una longitud de
$10.5$ $m$, es decir que mientras escuchas ese tono a través de tus oídos está
pasando una onda ¡de $10.5$ $m$ y se repite $32.7$ veces cada segundo!

<center>
<table>
<thead>
<tr>
<th>Sonido</th>
<th>Longitud</th>
<th>Frecuencia</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Piano nota baja</td>
<td>10.5m</td>
<td>32.7</td>
<td>
<button onclick="toneGenerator.startTone(32.7);">Iniciar</button>
<button onclick="toneGenerator.stopTone(32.7);">Parar</button>
</td>
</tr>
<tr>
<td>Celo nota baja</td>
<td>5.4m</td>
<td>65.41</td>
<td>
<button onclick="toneGenerator.startTone(65.41);">Iniciar</button>
<button onclick="toneGenerator.stopTone(65.41);">Parar</button>
</td>
</tr>
<tr>
<td>Viola nota baja</td>
<td>2.6m</td>
<td>130.81</td>
<td>
<button onclick="toneGenerator.startTone(130.81);">Iniciar</button>
<button onclick="toneGenerator.stopTone(130.81);">Parar</button>
</td>
</tr>
<tr>
<td>Piano do medio</td>
<td>1.3m</td>
<td>261.63</td>
<td>
<button onclick="toneGenerator.startTone(261.63);">Iniciar</button>
<button onclick="toneGenerator.stopTone(261.63);">Parar</button>
</td>
</tr>
<tr>
<td>Nota más baja piccolo</td>
<td>66cm</td>
<td>523.26</td>
<td>
<button onclick="toneGenerator.startTone(523.26);">Iniciar</button>
<button onclick="toneGenerator.stopTone(523.26);">Parar</button>
</td>
</tr>
<tr>
<td>Nota más alta mujer</td>
<td>33cm</td>
<td>1046.50</td>
<td>
<button onclick="toneGenerator.startTone(1046.50);">Iniciar</button>
<button onclick="toneGenerator.stopTone(1046.50);">Parar</button>
</td>
</tr>
<tr>
<td>Nota más alta flauta</td>
<td>16cm</td>
<td>2093</td>
<td>
<button onclick="toneGenerator.startTone(2093);">Iniciar</button>
<button onclick="toneGenerator.stopTone(2093);">Parar</button>
</td>
</tr>
<tr>
<td>Nota más alta piano</td>
<td>8cm</td>
<td>4186</td>
<td>
<button onclick="toneGenerator.startTone(4186);">Iniciar</button>
<button onclick="toneGenerator.stopTone(4186);">Parar</button>
</td>
</tr>
<tr>
<td></td>
<td>4cm</td>
<td>8372</td>
<td>
<button onclick="toneGenerator.startTone(8372);">Iniciar</button>
<button onclick="toneGenerator.stopTone(8372);">Parar</button>
</td>
</tr>
<tr>
<td>Nota televisión CRT</td>
<td>2cm</td>
<td>16744</td>
<td>
<button onclick="toneGenerator.startTone(16744);">Iniciar</button>
<button onclick="toneGenerator.stopTone(16744);">Parar</button>
</td>
</tr>
</tbody>
</table>
</center>

<script
src='http://turing.iimas.unam.mx/~ivanvladimir/js/webAudioTools.js'></script>
<script
src='http://turing.iimas.unam.mx/~ivanvladimir/js/toneGenerator.js'></script>
<script type="text/javascript">
(function (global) {
window.onload = function () {
global.toneGenerator = new global.ToneGenerator();
toneGenerator.init();
};
}(this));
</script>


## No todo es la onda

Aunque la onda ideal nos sirve para caracterizar propiedades del sonido, en
realidad los sonidos a nuestro alrededor no son ondas perfectas, sino más bien
muy variables. Por ejemplo la siguiente figura representa las variaciones de
presión, que produce un ave al cantar
([fuente](/#/post/MFCC)}}'))

<center>
<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/mfcc_fig1.png'/>
</center>

Esto parecería malas noticias para nuestra caracterización del sonido con
ondas ideales, sin embargo otra razón por que las ondas ideales son _ideales_
para caracterizar el sonido es que ondas con formas más complejas se pueden
componer sumando dos ondas simples.  Esto se ilustra en la siguiente figura
donde la onda roja ya no es tan ideal, pero se compone de la suma de la verde
con las negra:

<center>
<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/sum_waves.png' title="Onda
senoidal"/>
</center>

Lo composición de ondas de esta forma tiene dos consecuencia: la primera es
que las amplitudes de las ondas se entrelazan, la amplitud de la nueva onda
depende de las amplitudes de las ondas que la componen. La segunda
consecuencia, es que la onda resultante tiene múltiples frecuencias! Las
frecuencias de las ondas que la componen se siguen manifestando en la nueva
onda.

*Nota* Existen combinaciones especiales en donde una frecuencia se puede
suprimir. Si ponemos dos ondas de la misma frecuencia y la desfasamos de tal
forma que las amplitudes de ambas se contraponen, la frecuencia de estas dos
componentes desaparece, ya que ambas ondas se cancelan.

## La licuadora inversa

La propiedad de tener varias ondas ideales y sumarlas para obtener otra más
compleja es interesante, pero en su forma natural el sonido ya viene con una
forma compleja ¿cómo saber sus componentes? Este proceso de tener una mezcla e
intentar saber sus componentes es equivalente a tener una licuadora a la cual
le metemos nuestro licuado y nos regresa los ingredientes.

<center>
<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/reversemixer.gif'
title="Onda senoidal"/>
</center>


Aunque suene descabellado matemáticamente existe una herramienta que hace
exactamente esto, se le conoce como la transformada de Fourier. Esta operación
hace exactamente el análisis de una onda compuesta y nos da las ondas base.
Sin embargo presupone que la onda compuesta es también infinita.

## Espectrograma

La trasformada de Fourier no resuelve nuestro problema porque presupone que la
señal es infinita. Sin embargo, no significa que no podamos usarlo para
encontrar los componentes de nuestras ondas de sonido natural. Esto lo hacemos
haciendo un _hack_. El _hack_ consiste en tomar segmentos de nuestra onda,
segmentos pequeños y suponer que se repiten de forma infinita, este nuevo
pequeño segmento ya cumple con las condiciones para aplicarle la transformada
de Fourier por lo que podemos encontrar que ondas la componen. Cada componente
como son una componente ideal significa que tiene una frecuencia particular, y
como resultado extra lo que obtenemos son las componentes en frecuencias de
nuestro segmento.

Si hacemos lo anterior para segmentos iguales de nuestro sonido podemos
generar un mapa de como varían las frecuencias del sonido a través del tiempo.
Una representación de esta información se le conoce como: espectrograma. El
siguiente es el espectrograma para la imagen del canto de ave

<center>
<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/spectrogram_bird.png'
title="Onda senoidal"/>
</center>

## Material extra

* [Slides](http://turing.iimas.unam.mx/~ivanvladimir/slides/aprendizaje_automatico_sonido/waves.html#/)




