
Robots de servicio
==================

Golem-II+ es un robot de servicio, este tipo de robots son objeto de estudio en
el área de robótica con el objetivo de crear los mayordomos del futuro. En un
principio puede parecer un objetivo superficial, sin embargo construir y
programar un robot que pueda resolver los problemas que implican hacer las
tareas que realizamos en la casa o fuera de esta es un problema que
involucra a muchas áreas de estudio tanto dentro de la computación o como
fuera de esta.  Por ejemplo:
<ul>
<li><strong>Adentro:</strong> Aprendizaje Automático, Inteligencia
Artificial, Visión computacional, Procesamiento del Lenguaje Natural,
etc</li>
<li><strong>Fuera:</strong> Ingeniería, Lingüística, Neurociencias,
Sociología, etc, </li>
</ul>

Dada la complejidad de construir un mayordomo que pueda hacer todo lo que
un mayordomo humano hace, y el estado del arte en el que nos encontramos
sobre el conocimiento del funcionamiento de la mente humana. Una
estrategia que hemos adoptado es la de enfocarnos en tareas específicas,
por ejemplo:
<ul>
<li>ordenar a un cuarto,</li>
<li>acompanar a un pesona de compras,</li>
<li>jugar a la gallinita ciega</li>
</ul>
Sin embargo, esto no significa tener un robot por cada tarea. El objetivo
es que en el mismo robot sea capaz de ejecutar todas las tareas, pero no
esperamos en un principio, que mientras hace una tarea el robot pueda
cambiarse a otra, o hacer algo nuevo.

El robot Golem
==============

Un eje central que el Grupo Golem propone para alcanzar el objetivo de
robots de servicio es el análisis de la interacción que necesita hacer el
robot con sus usuarios y con el ambiente para resolver la tarea. En este
sentido, el punto de contacto que tiene el robot con sus usuarios y con el
ambiente es a través de los sensores y actuadores del robot. Los sensores
le permiten al robot percibir su entorno o a sus usuarios, por otro lado
los actuadores le permiten al robot modificar al ambiente o comunicar sus
intensiones a los usuarios.

Esta es la  lista de sensores que tiene el robot Golem-II+:
<ul>
<li>Tres arreglos de sonares con ocho sensores cada uno</li>
<li>Dos sensores IR al frente</li>
<li>Dos arreglos de sensores al tacto con cinco sensores cada uno</li>
<li>Cámara Microsoft Kinect</li>
<li>Webcam QuickCam Pro 9000</li>
<li>Láser Hokuyo UTM-30LX</li>
<li>Tres micrófonos omnidirectional Shure Base</li>
<li>Micrófono direccional RODE VideoMic</li>
</ul>

Esta es la  lista de actuadores que tiene el robot Golem-II+:
<ul>
<li>Sistemas de ruedas direccionales</li>
<li>LAIDETEC-IIMAS brazos robóticos</li>
<li>Dos bocinas Infinity 3.5-Inch Two-Way</li>
<li>Sistema de cuello</li>
</ul>

Además de los sensores y actuadores, el robot Golem-II+ tiene una estructura
robótica que sería su "esqueleto" y "cuerpo". Esta estructura le ayuda a
sostener los diferentes dispositivos y trasmitir su personalidad a sus
usuarios.

Habilidades
===========

Adicionalmente, a los dispositivos y estructura el robot tiene un "cerebro" que
consisten de dos computadoras. Es en estas computadoras donde programamos
las habilidades del robot. Las habilidades son actividades que puede hacer
el robot independiente de la tarea, es decir, que estas podrán ser
utilizadas en diferentes tareas si las ejecutamos de manera adecuada.
Algunos ejemplos de habilidades que puede realizar el robot son:
<ul>
<li>Caminar entre diferentes puntos de un lugar</li>
<li>Entender el lenguaje hablado</li>
<li>Escuchar de donde viene un fuente de sonido</li>
<li>Agarrar objetos con sus brazos</li>
<li>Identificar cierto objeto de la mesa</li>
<li>Reconocer personas que ha visto antes</li>
<li>Seguir a una persona</li>
</ul>

Campos de estudio
=================

Las habilidades son muy importantes para el robot, hacerlas bien es una
constante de investigación en el campo de la robótica, y forman algunos de
los campos de estudio, por ejemplo:
<ul>
<li><strong>Navegación</strong>: investiga las técnicas y métodos que le
permiten a un robot moverse de un punto a otro sin chocar o poner en
peligro a los humanos.</li>
<li><strong>Visión</strong>: investiga las técnicas y métodos que le
permiten ver al robot.</li>
<li><strong>Lenguaje</strong>: investiga las técnicas y métodos que le
permiten comunicase con los seres humanos</li>
<li><strong>Manipulación</strong>: investiga las técnicas y métodos que le
permiten tomar y dejar objetos.</li>
<li><strong>Audio</strong>: investiga las técnicas y métodos que le
permiten saber que ocurre interpretando señales de audio.</li>
</ul>
Como pueden imaginarse existe convergencia entre los campos, es difícil
imaginar estudiar la manipulación de objetos sin que se usen el
conocimiento de visión computacional.

Tareas
======

Generalmente las habilidades son monolíticas en su objetivo, por ejemplo,
tomar un objeto es un problema muy complejo, pero un robot que únicamente
tome objetos no es muy interesante como mayordomo. En el área de robots de
servicio  es necesario combinar estas habilidades para resolver objetivos
más complejos. Estos objetivos los denominamos tareas y generalmente para
resolverlos implica la combinación de varios habilidades.  Por ejemplo, un
robot que ordene los objetos después de una fiesta no solo requiere tomar
los objetos, sino la  habilidad de saber de que tipo es ese objeto y donde
debe estar ubicado, distinguirlo de objetos que sigues siendo útiles,
caminar hacia donde debe estar el objeto, dejar el objeto, etc.

Como describíamos al principio, el eje central para el grupo es la
interacción que el robot tiene que hacer con el ambiente que lo rodea y
con sus usuarios.  Las tareas van a regir como el robot tiene que
interactuar con el ambiente y el usuario, como tenemos que coordinar las
habilidades para alcanzar el objetivo de la tarea, que a su vez van a
depender de algoritmos y programas de los diferentes campos de estudios,
que para funcionar van a requerir de señales de los sensores o que los
actuadores realicen ciertas acciones. El objetivo central del curso es
como programar estas tareas en el robot Golem-II+.


<div class="row">
<div class="large-12 columns">
<div class="large-6 columns">
<a class="button" href="curso_programacion_golem.html">&larr; Página curso</a>
</div>
<div class="large-6 text-right columns">
<a class="button" href="curso_programacion_golem_s2.html">Siguiente sesión&rarr;</a>
</div>
</div>
</div>

