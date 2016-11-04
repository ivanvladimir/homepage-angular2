
Decidir el tipo de formato de tu tesis tiene un efecto directo y duradero en
la forma en que trabajarás durante la escritura de ésta. Mi consejo siempre
es:

* Escribir la tesis con las herramientas que estés acostumbrado a escribir
documentos: Word, libre office, block de notas... (esta última en broma ;-).

Sin embargo, yendo en contra de mi consejo es buena idea, al menos por el
transcurso de este post, considerar escribir/programar la tesis usando
[LaTeX](http://en.wikibooks.org/wiki/LaTeX) (Latex de aquí en adelante.) Latex
es un lenguaje  *markup*, es decir a través de marcas en el texto definimos el
contenido y el formato del documento. Ejemplos de lenguajes *markup* son:
HTML, Markdown, XML, etc.  En particular Latex es muy popular entre la gente
de computo para crear documentos, no solo porque es programático sino porque
realmente los documentos generados quedan bonitos.

<center>
<img class='center'
src='http://turing.iimas.unam.mx/~ivanvladimir/images/philosoraptor.jpg'
title="Respalda ante todo"/>
</center>



Archivos fuente
===============

Literalmente nuestro documento está contenido en uno o varios archivos fuente
como si fuera un programa.  Por usos y costumbres estos documentos tienen la
extensión *.tex*. Dentro de ellos escribimos el texto y las marcas que definan
las partes y secciones de nuestro documento. Un archivo muy básico en Latex
luce de la siguiente forma:

``` tex
\documentclass[11pt,spanish]{report}
\usepackage[spanish,mexico]{babel}
\usepackage[utf8]{inputenc}

\begin{document}

\title{Estructura básica de una tesis}
\author{Ivan Vladimir Meza Ruiz\\
IIMAS-UNAM}
\date{19 de septiembre de 2014}

\maketitle

\tableofcontents

\chapter{Este es un capítulo}

Este es el contenido de mi tesis.

\section{Esta es una sección}

Aquí va más contenido dentro de una sección.

\subsection{Esta es una subsección}

Este sigue siendo contenido muy especifico dentro de una subsección.

\appendix

\chapter{Este es un apéndice}

Este el contenido de la tesis

\end{document}
```

La línea 1 define el formato general del texto, fuente base y estilo reporte.
Las siguientes dos líneas cargan librerías, existen muchísimas de estas, que
agregan opciones a nuestro texto o controlan ciertos aspectos de la
generación.  Estas dos librerías permiten escribir documentos en español y que
aparezcan lo mejor posible. En la línea 5 empezamos propiamente el documento.
Entre línea 7 y 9 se definen parámetros que son utilizados cuando se genera la
portada con la instrucción en la línea 12. La línea 14 genera el índice de
nuestro documento. Finalmente en la línea 16 comenzamos a escribir el
contenido del documento. Latex tiene múltiples instrucciones para organizar
nuestro contenido, aquí vemos *chapter*, *section* y *subsection*.  En la
línea 26 cambiamos la naturaleza de esos comandos indicándole que a partir de
ahora se trata de apéndices, finalmente la linea 34 termina nuestro documento.

[//] # (El documento fuente y generado usando el comando _pdflatex_ si encuentran
aquí:

* [Documento fuente]({{url_for('static',filename="files/latex_basico.tex")}})
* [PDF generado]({{url_for('static',filename="files/latex_basico.pdf")}})
)


Actualmente existen varias liberias y recursos para que la tesis sea en el
formato adecuado de varias facultades y universidades:

* [Facultad de Ciencias-UNAM](http://tezcatl.fciencias.unam.mx/latex/)
* [Facultad de Ingeniería-UNAM](https://github.com/Tepexic/Tesis-FI-UNAM)
* [UNAM](http://www.ctan.org/tex-archive/macros/latex/contrib/unamthesis)
* [UAM](http://mcyti.izt.uam.mx/index.php/guias-y-templetes-)
* [IPN](http://www.upiita.ipn.mx/index.php/descargas/category/28-latex)

La curva de aprendizaje de Latex es bastante empinada y puede llevarte un buen
rato acostumbrarte al ciclo de: edición y compilación. Para tener una idea de
las instrucciones disponibles recomendamos que veas el wikibook:

* [Latex](http://en.wikibooks.org/wiki/LaTeX)

Donde se muestran entre otras cosas:

* Como incluir figuras.
* Como crear tablas.
* Como citar e incluir las referencias.
* Como formatear el texto.
* Como incluir hyperligas.
* Como hacer referencias a partes del documento.
* Como incluir: algoritmos, código y fórmulas.

El editor
=========

Un aspecto que puede facilitar el uso y la programación de tu texto usando
Latex es utilizar un editor adecuado. Muchos editores e IDEs de programación
incluyen extensiones para Latex. De los más comunes en ambiente Linux son:

* Vim
* Emacs
* Eclipse

Para Windows existen [múltiples
soluciones](https://www.google.com/search?q=latex+editor+windows). Además de
soluciones en línea como: [ShareLatex](https://www.sharelatex.com/).

Ante esta situación regreso a mi recomendación original:

* Escribir la tesis con las herramientas que estés acostumbrado a *programar*
;-)

