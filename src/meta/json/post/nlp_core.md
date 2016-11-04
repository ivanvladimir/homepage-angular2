

<br/>
<p class="panel">
Estas notas se basan en la versión 3.5.0 del toolkit
</p>

[Stanford CoreNLP](http://nlp.stanford.edu/software/corenlp.shtml) es un
toolkit de herramientas para el procesamiento del lenguaje natural basada en
modelos estadístico. Actualmente es muy interesante para nosotros porque poseé
herramientas para el español.

Requerimientos
==============

Requiere del JDK versión _1.8_. Para verificar si tienen esta versión
ejecutar:

``` bash
$ java -version
java version "1.8.0_31"
Java(TM) SE Runtime Environment (build 1.8.0_31-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.31-b07, mixed mode)
```

Si la respuesta no coincide con la versión  _1.8_ sigue las instrucciones
[aquí](http://tecadmin.net/install-oracle-java-8-jdk-8-ubuntu-via-ppa/)

Instalación
===========

Primero bajar el archivo con el código fuente de
[aquí](http://nlp.stanford.edu/software/stanford-corenlp-full-2014-10-31.zip)

Después descomprimir _.zip_:

``` bash
$ unzip stanford-corenlp-full-2014-10-31.zip
$ mv stanford-corenlp-full-2014-10-31 corenlp
```

Finalmente bajar los  _jars_ adicionales y ponerlos en el directorio
_corenlp_:

* Modelos para el
[español](http://nlp.stanford.edu/software/stanford-spanish-corenlp-2014-10-23-models.jar)
* Modelos para el
[parser](http://nlp.stanford.edu/software/stanford-srparser-2014-10-23-models.jar)

Pruebas con español
===================

Primero crear un archivo con frases en español, por ejemplo: _test.txt_.

Después, ejecutar la siguiente línea:

``` bash
$ java -cp "*" -Xmx2g edu.stanford.nlp.pipeline.StanfordCoreNLP\
-annotators tokenize,ssplit,pos,parse -outputFormat "text" \
-parse.model edu/stanford/nlp/models/srparser/spanishSR.ser.gz \
-tokenize.language es
```

El significado de los parámetros son:

* Que cargue todos los paquetes de java _-cp "*"_
* Que ejecute el programa principal StanfordCoreNLP
* Que encadene una secuencia de tareas _-annotatorstokenize,ssplit,pos,parse_
:
* tokenize: identificar las palabras
* ssplit: identificar la oraciones
* pos: asignar a cada palabra su categoria gramatical
* parse: identificar la estrucutra sintáctica principal
* Que el formato de la salida sea texto _-outputFormat "text"_
* Que para el parser use el modelo de español _-parse.model_
_edu/stanford/nlp/models/srparser/spanishSR.ser.gz_
* Que para separar las palabras se base en español _-tokenize.language es_

Una vez ejecutada la línea aparecerá un prompt _NLP>_ puedes escribir un texto
en español y te debe regresar el análisis sintáctico:

``` bash
NLP> esta es una oración de prueba
Sentence #1 (6 tokens):
esta es una oración de prueba
[Text=esta CharacterOffsetBegin=0 CharacterOffsetEnd=4 PartOfSpeech=FW]
[Text=es CharacterOffsetBegin=5 CharacterOffsetEnd=7 PartOfSpeech=FW]
[Text=una CharacterOffsetBegin=8 CharacterOffsetEnd=11 PartOfSpeech=FW]
[Text=oración CharacterOffsetBegin=12 CharacterOffsetEnd=19
PartOfSpeech=FW] [Text=de CharacterOffsetBegin=20 CharacterOffsetEnd=22
PartOfSpeech=FW] [Text=prueba CharacterOffsetBegin=23
CharacterOffsetEnd=29 PartOfSpeech=FW] (ROOT
(sentence
(sn
(spec
(grup.cc (FW esta) (FW es))
(FW una))
(grup.nom (FW oración)
(s.a
(grup.a (FW de)))))
(FW prueba)))
```

Material Extra
==============

* [Artículo describiendo el
sistema](http://nlp.stanford.edu/pubs/StanfordCoreNlp2014.pdf)
* [Página con más software](http://nlp.stanford.edu/software/index.shtml)