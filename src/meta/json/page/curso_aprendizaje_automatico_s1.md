

El aprendizaje automático es un área de la computación que estudia la creación
de sistemas que toman decisiones basadas en la "experiencia". Por el momento,
estos sistemas no experimentan el mundo como nosotros, y más bien los
sometemos a una cantidad gigantesca de información para que aprendan la
estructura básica de un problema específico. Algunos ejemplos de problemas que
hoy se basan en soluciones con aprendizaje automático son:

* Clasificar nuestro correo en spam y no spam
* En una fotografía [identificar rostros](http://youtu.be/l4Rn38_vrLQ)
* [Transcribir lo que alguien dice](http://youtu.be/fDX-RVCmfWU)

Conceptos básicos
=================

Hay varios elementos que considerar en un sistema de aprendizaje automático.
Uno esencial es la *técnica* que se usará para abordar el problema. Existen
varias opciones de donde escoger;  por ejemplo, para los problemas anteriores
algunas de las técnicas posibles son:

* Spam o no spam: [Naive
Bayes](http://es.wikipedia.org/wiki/Clasificador_bayesiano_ingenuo)
* Reconocimiento de rostros:
[Eigenfaces](http://en.wikipedia.org/wiki/Eigenface)
* Reconocimiento de voz:
[HMMs](http://es.wikipedia.org/wiki/Modelo_oculto_de_M%C3%A1rkov)

La función de la técnica es la de crear un *modelo* basado en  *ejemplos* del
problema, para después usar este modelo en nuevos ejemplos como: un nuevo
correo, un nueva imagen con rostros o algo nuevo dicho por alguien.
Dependiendo del campo a las colecciones de ejemplos se les conoce como: _bases
de datos_, _corpus_ o simplemente _colección_.

Por otro lado, el rol del modelo es capturar la *arquitectura* del problema y
definir los *parámetros* sobre los elementos de esa arquitectura. El objetivo,
es que en conjunto arquitectura y parámetros sean suficientes para que ante un
nuevo ejemplo, el sistema de aprendizaje automático pueda tomar una decisión
de manera correcta.

La arquitectura define que elementos del problema son importantes y como se
relacionan entre ellos, por ejemplo en el problema del spam o no spam, los
elementos son las palabras y algo que se suele asumir es que no hay relación
entre las palabras. En el caso del reconocimiento de rostro, los elementos
básicos son los pixeles de un rostro y se busca mantener su relación espacial.
Finalmente, en el reconocimiento de voz, uno de los elementos básicos son los
fonemas y se establece una relación entre el fonema anterior y el siguiente.

Adicionalmente, la arquitectura define el formato de la  *entrada* y la
*salida* para que el  *algoritmo* asociado a la técnica de aprendizaje. Por lo
anterior, los ejemplos se tienen que adecuar para que puedan ser procesados
por los algoritmos, no le pasamos los correos, las imágenes o los audios
directamente. Sino una versión reducida de estos, por ejemplo:

* Spam o no spam: Palabras relevantes
* Reconocimiento de rostros: Características del rostro relevantes.
* Reconocimiento de voz: Características de la frecuencia de la voz.

La salida por su lado está definida por la decisión a tomar:

* Spam o no spam: Sí o no.
* Reconocimiento de rostros: Nombre de persona.
* Reconocimiento de voz: Secuencia de palabras dichas.

Con respecto a los parámetros, hay dos tipos: los asociados a la arquitectura
y los asociados al algoritmo.  Los parámetros asociados a la arquitectura son
propiamente lo que se aprende dado los ejemplos. Dependiendo de la técnica que
se escoge se determina la naturaleza de estos parámetros.  Los más comunes son
probabilidades o pesos, cuya intensión es capturar que tan buena es la
evidencia. Por ejemplo, en el caso del spam palabras como _vendo_ o
_promoción_ podrían ser buenos indicadores de que efectivamente se trata de
spam y por lo tanto estas palabras deberían tener parámetros asociados a ellas
con probabilidad o peso alto.

En el caso de parámetros asociados al algoritmos, éstos definen aspectos de
como el algoritmo aprende; por ejemplo, en algoritmos iterativos hay que
identificar cuantas iteraciones utilizar.

En resumen estos son los conceptos básicos que revisamos:

* Problema
* Técnica
* Ejemplos: base de datos, corpus o colección
* Modelo
* Arquitectura
* El tipo de entrada y salida
* Algoritmo
* Parámetros de la arquitectura
* Parámetros del algoritmo

¿Cómo sabemos que tenemos un buen modelo?
=========================================

El aprendizaje automático ha tenido un gran éxito en parte debido a la
estricta metodología asociada al campo. En particular, el objetivo en
aprendizaje automático es buscar en la medida de lo posible un buen modelo que
tome las decisiones correctas ante nuevos ejemplos. Para lograr esto se sigue
la siguiente metodología:

1. Se colectan ejemplos del problema
2. Se selecciona una técnica y se define una arquitectura para el problema
3. La colección de ejemplos se divide en tres partes de forma aleatoria:
*entrenamiento*, *desarrollo* y  *prueba*
4. Con los ejemplos de entrenamiento se crea un modelo
5. Se prueba el modelo con los ejemplos de desarrollo
6. Se evalúa el desempeño y si no es satisfactorio, se cambian parámetros del
algoritmo, o se propone una nueva arquitectura, o se cambia de técnica y se
regresa al paso 4
7. Cuando el desempeño es satisfactorio, se mide el desempeño con los ejemplos
de prueba

El desempeño con los ejemplos de prueba representa el desempeño que el sistema
tendrá con ejemplos reales.

Tipos de técnicas
=================

Hay varias formas de clasificar a las técnicas aprendizaje automático
dependiendo de varios factores, aquí algunos comunes:

Dada la naturaleza del problema
-------------------------------

A grandes rasgos existen cuatro tipos de problemas:

* [Regresión](http://en.wikipedia.org/wiki/Regression_analysis): el problema
consiste seguir el comportamiento de una variable continua, por ejemplo:
predecir los precios de la gasolina.
* [Agrupación](http://en.wikipedia.org/wiki/Cluster_analysis): el problema
consiste en identificar grupos similares, un ejemplo agrupar personas que se
parecen entre si
* [Clasificación](http://en.wikipedia.org/wiki/Regression_analysis): el
problema consiste en clasificar elementos, ejemplo: decidir si es spam o no
* [Predecir una
estructura](http://en.wikipedia.org/wiki/Structured_prediction): el problema
consiste en construir una predicción de una secuencia de decisiones, por
ejemplo: la transcripción de una oración, en donde cada palabra es una
decisión, y la oración final depende de éstas.

Dada la naturaleza de la técnica
--------------------------------

Como les comentaba existen muchas técnicas, algunas muy comunes son:

* [Redes neuronales](http://en.wikipedia.org/wiki/Artificial_neural_network)
* [Maquinas de soporte
vectorial](http://en.wikipedia.org/wiki/Support_vector_machines)
* [Árboles de decisión](http://en.wikipedia.org/wiki/Support_vector_machines)
* [Clustering](http://en.wikipedia.org/wiki/Cluster_analysis)
* [Redes bayesianas](http://en.wikipedia.org/wiki/Bayesian_network)
* [Aprendizaje por
refuerzo](http://en.wikipedia.org/wiki/Reinforcement_learning)

[Etcetera!](http://en.wikipedia.org/wiki/Machine_learning#Approaches)

Dado el campo
-------------

El aprendizaje automático ha revolucionado algunos campos de la computación y
hoy en día algunas técnicas se asocian directamente:

* Visión por computadora
* Procesamiento del lenguaje natural
* Bio-informática
* Reconocimiento y síntesis de la voz
* Procesamiento de señales
* Computación afectiva
* Sistemas de recuperación de información
* Robótica

Dado el tipo de ejemplos que usan
---------------------------------

* _Supervisado_ cuando los ejemplos de los que se aprenden consisten del
del una instancia del problema y de la decisión que el sistema tiene que
aprender
* _Sin supervisión_ cuando el ejemplo consisten únicamente de la instancia del
problema y no incluye la decisión
* _Semi-supervidado_ es una combinación de pocos ejemplos
supervisados y muchos sin supervisión

Actualmente técnicas _sin supervisión_ son de gran interés en la comunidad.

El futuro
=========

En el presente el aprendizaje automático se aplica a problemas muy ambiciosos:

* [Manejar un coche](http://youtu.be/csvt6JBAwBk)
* [Jugar ping-pong](http://youtu.be/SH3bADiB7uQ)
* [Cachar objetos](http://youtu.be/M413lLWvrbI)
* [A traducir
textos](http://edition.cnn.com/video/data/2.0/video/business/2013/05/09/make-create-innovate-machine-translation.cnn.html)
* [A traducir conversaciones](http://youtu.be/eu9kMIeS0wQ)


Sin embargo, todavía existen muchos problemas que resolver para los cuales el
aprendizaje automático es un gran candidato. Uno puede adaptar una técnica
conocida o mejorar el desempeño de un problema o aplicarla a un campo nuevo o
puede crear una nueva técnica; y de esta forma hacer investigación en el
campo.

Uno de los grandes retos en los que estamos interesados es que los sistemas
aprendan de una experiencia más similar a la nuestra, en particular sistemas
robóticos.
