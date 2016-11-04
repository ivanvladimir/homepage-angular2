

<script type="text/x-mathjax-config">
MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript"
src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

Supongamos el siguiente escenario: un personaje misterioso, pero sospechoso,
se encuentra echando volados, siempre apuesta _sol_ y parece muy afortunado
con su decisión. En los diez volados que hemos visto esto fue lo que le salió:

* Sol, sol, sol, águila, sol, sol, águila, águila, sol, sol

Con estos resultados, lleva ganado siete de diez volados.

¿Si quisiéramos imitar la decisión qué el toma con que qué evidencia cuentas?


Planteamiento
=============

El problema es dada una moneda sospechosa, como determinar que elegir la
siguiente vez que se lanza la moneda. Nuestros ejemplos en este caso son los
volados que hasta ahora se han lanzado.


Primera aproximación: probabilidades
====================================

Una primera y muy válida opción es modelar la moneda como un evento
probabilístico. De esta forma si podemos determinar la probabilidad de las
caras de la moneda, básicamente estaríamos definiendo el modelo de ésta.
Basado en ese modelo y la probabilidad más alta, podremos tomar la decisión de
que escoger la siguiente vez. Bajo está "técnica", la arquitectura corresponde
a dos probabilidades:

<ol>
<li>$ P(x=sol)$</li>
<li>$ P(x=aguila), P(x=aguila)=1-P(x=sol)$</li>
</ol>

Sin embargo, la probabilidad de _águila_ queda establecida una vez que se
define la de _sol_. Con esto en mente, nuestro problema solo tiene un
parámetro: la probabilidad de que caiga sol.

Para estimar este valor, podemos seguir una metodología frecuentista y dividir
el numero de soles entre el número de volados.
<ol>
<li>$ P(x=sol)=n_{sol}/n_{volados}=7/10=0.7$</li>
</ol>

De esta forma predecimos que de cada diez volados, siete serán soles, por lo
tanto lo que tenemos que hacer es siempre apostar _sol_, como lo hace nuestro
personaje sospechoso.

Segunda aproximación: Perceptrón promedio
=========================================

Otra opción, es usar una técnica más sofisticada. En este caso utilizaremos el
perceptrón promedio (Averaged perceptron). En el corazón de este algoritmo
esta poner a prueba nuestro modelo y corregirlo si es necesario.  Para lograr
lo anterior se usa el modelo para predecir uno de los volados ejemplo, si hay
un error, se le castiga al modelo modificando sus parámetros.  El pseudo
código lo pueden ver aquí:

#!python
def avg(model=0.5,data,iters=100,punishment=0.10):
model=0.5
for i in range(iters):
for e in data:
actual=tira(model)
if actual != e:
if e=="s":
model+=punishment
else:
model-=punishment
return sum(models)/len(models))


El algoritmo necesita como entrada un modelo, los ejemplos, el número de veces
que estará iterando, y la cantidad de corrección a hacer. ¡Pero el modelo es
el que queremos calcular! ¿Cómo podemos dárselo al sistema si es lo que
buscamos?  En realidad lo que espera el algoritmo es un modelo inicial que ira
cambiando conforme sus predicciones se comparan con los ejemplos. Una opción
de modelo inicial es asumir máxima ignorancia, y decir que _sol_ y _águila_
son igualmente probables.

<ol>
<li>$ P(x=sol)=0.5$</li>
</ol>

Usando este modelo, simulemos un primer volado e imaginemos que obtenemos
_águila_. Al compararlo con nuestro primer ejemplo vemos que esperábamos
_sol_.  Quiere decir que nuestro modelo está mal, por lo que tenemos que
corregirlo, para que _sol_ sea más probable. Por lo que lo corregimos con el
valor de corrección, resultado en el siguiente modelo.

<ol>
<li>$ P(x=sol)=0.6$</li>
</ol>

Ahora, volvemos a simular un segundo lanzamiento utilizando nuestro modelo, en
esta ocasión cae _sol_ y esperamos _sol_ en nuestro segundo ejemplo. No
corregimos.  Volvemos a simular un tercer lanzamiento, y en esta ocasión sale
un _águila_, como nuestra tercera moneda esperada es _sol_. Corregimos nuestro
modelo:

<ol>
<li>$ P(x=sol)=0.7$</li>
</ol>

A continuación se presenta la secuencia de otras tres simulaciones:

4. Cuarto volado, cae  _sol_, esperamos _águila_, se corrige $P(x=sol)=0.6$
5. Quinto volado, cae  _sol_, esperamos _sol_, no se corrige $P(x=sol)=0.6$
6. Sexto volado, cae  _aguila_, esperamos _sol_, se corrige $P(x=sol)=0.7$

Así consecutivamente, hasta acabar con los ejemplos, y luego volvemos a iterar
sobre los ejemplos, hasta cubrir el número de iteraciones del algoritmo.

Una vez que el algoritmo termina,  en lugar de entregar como resultado el
último modelo, el algoritmo regresa el promedio de todos los modelos. Por
ejemplo en una simulación con $100$ iteraciones y una corrección de $0.1$ el
modelo promedio fue:

<ol>
<li>$ P(x=sol)=0.7$</li>
</ol>

Que es un modelo similar al calculado de manera explicita con probabilidades.

En particular, en esta técnica el algoritmo sí tiene parámetros: el número de
iteraciones y el cantidad de la corrección. A continuación se presentan
algunos resultados variando estos valores y el modelo que produce:

* Iteraciones 1, castigo 0.1, $P(x=sol)=0.66 $
* Iteraciones 10, castigo 0.1, $P(x=sol)=0.621 $
* Iteraciones 100, castigo 0.1, $P(x=sol)=0.6935 $
* Iteraciones 200, castigo 0.1, $P(x=sol)=0.6953 $
* Iteraciones 500, castigo 0.1, $P(x=sol)=0.69468 $
* Iteraciones 1000, castigo 0.1, $P(x=sol)=0.69517 $
* Iteraciones 100, castigo 0.01, $P(x=sol)=0.66159 $
* Iteraciones 100, castigo 0.02, $P(x=sol)=0.70314 $
* Iteraciones 100, castigo 0.03, $P(x=sol)=0.68615 $
* Iteraciones 100, castigo 0.05, $P(x=sol)=0.7065 $
* Iteraciones 100, castigo 0.20, $P(x=sol)=0.6696 $
* Iteraciones 100, castigo 0.30, $P(x=sol)=0.6851 $
* Iteraciones 100, castigo 0.50, $P(x=sol)=0.6975 $


Algo está mal
=============

Una vez con nuestro análisis, nos acercamos al personaje misterioso y
sospechoso. Le decimos que apostamos con él, pero nosotros escogemos _sol_. El
por supuesto rechaza nuestra apuesta, pero nos cuenta que en realidad su
moneda saca ocho soles por cada diez volados. Nuestro modelo tiene un error de
$10%$ ¿Qué hicimos mal?


Este ejercicio está diseñado para destacar que el número de ejemplos son muy
pocos. Con más datos sobre volados y sus resultados, podríamos tener una mejor
estimación de la moneda en cuestión. Aquí los resultados de una simulación si
hubiéramos visto 100 volados:

$ P(x=sol)=0.82$


Material extra
==============

* El uso de AVP para calcular el modelo de una moneda es demasiado exagerado,
AVP ha sido utilizado en múltiples problemas con miles de variables con mucho
éxito. En particular jugó un papel muy importante en la creación de [parsers
estadísticos](http://www.cs.columbia.edu/~mcollins/papers/finalacl2002.ps).

* Para saber más sobre que errores que se pueden producir cuando se trabaja
con aprendizaje automático les recomiendo la plática: [Advice for applying
machine learning](http://see.stanford.edu/materials/aimlcs229/ML-advice.pdf)


Material extra
==============

* [Video](http://ivanvladimir.github.io/content/teach/curso_aprendizaje_automatico_s2.html)
