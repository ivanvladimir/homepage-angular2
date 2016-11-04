
<script type="text/x-mathjax-config">
MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript"
src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

_Scikit-learn_ es una librería que contiene varias implementaciones de
algoritmos de aprendizaje automático. En particular nosotros nos vamos a
enfocar en los denominados clasificadores: Maquinas de soporte vectorial (SVM,
_support vector machine_) y Bosques aleatorios (RF, _Random Forest_).



## Instalacón de scikit-learn

Si ya tienen instalado _pip_ es muy fácil:

#!bash
pip install -U scikit-learn

## Datos para audio

El objetivo de clasificación es crear un modelo basado en la representación de
un fenómeno de forma vectorial (es decir como un vector) y su clase
correspondiente. Este modelo será usado después para dado un vector
desconocido determinar su clase. En términos de sonido con MFCCs estamos muy
cerca de la representación vectorial del sonido. MFCC nos da $13$ valores por
cada ventana; una opción es tratar de clasificar la clase de un sonido usando
esos $13$ valores; sin embargo, la secuencialidad del sonido es muy
importante.

Aunque existen métodos que se fijan es este aspecto, la primera aproximación
que podemos seguir es tomar un segmento de MFCCs y promediarlos.  Entonces en
lugar de tener $13$ valores por el tamaño del segmento terminamos con trece
valores. Promediarlos es muy básico, pero podemos sacar otras estadísticas por
ejemplo: desviación estándar, cuartiles, etc. Podemos pensar que usando esta
estrategia estamos *describiendo* estadísticamente  a todos nuestros valores.
Por el momento vamos a seguir esta estrategia, aunque sencilla es muy popular.

## Cargando datos de un archivo CSV

Los archivos CSV (comma separeted value) son archivos de texto que podemos
usar para guardar nuestros ejemplos. Una forma de interpretar estos archivos
es la siguiente: cada renglón representa una línea; y cada por lo regular
columna representa una dimensión del vector, en general la última representa a
la clase. Los renglones están separados por un salto de línea y las columnas
por una columna. Un ejemplo ilustrativo sería el siguiente:

#!bash
feat_1,feat_2,label
10,20,0
11,21,1
12,22,0
30,22,1

Para cargar un archivo se puede ejecutar el siguiente código:

#!python
import numpy as np

data=np.loadtxt('turdus.csv',delimiter=',')
data.shape

Al final de este código la variable _data_ contiene nuestros datos, en
particular _turdus.csv_ contiene datos de segmentos de cantos de aves. Unos
corresponden a canto del ave _Turdus migratorius_ (clase 1) y otros a ruido de
fondo u otras aves (clase 0). Cada renglón representa al fenómeno, canto o no
del ave, y en total estos datos cuentan con $236$ dimensiones correspondientes
a diferentes estadísticas de las MFCCs de segmentos de cantos de audio. Además
se calculó la primera y segunda derivada de estos valores.

## Separando en datos de entrenamiento y prueba

Para poder aprender un modelo, necesitamos seguir la metodología presentada al
principio. No la vamos a poder seguir al pie de la letra en este ejercicio,
pero vamos hacer lo posible por hacer nuestro modelo lo mejor. Para esto, lo
primero es esconder algunos ejemplos para considerarlos como de prueba.
_scikit learn_ prefiere los datos separados entre dimensiones y classes.
Entonces vamos hacer eso primero:

#!python
X=data[:,:113]
Y=data[:,-1]

La primera línea trae $113$ dimesiones de nuestros vectores (en este caso
estamos ignorando las derivadas de estos datos) y la guardamos en la variable
$X$. En $Y$ guardamos las clases (todos los renglones, última columna).

_scikit learn_ contiene una función que permite separar los datos de
entrenamiento de los de prueba, esto es hecho de forma automática y revuelve
los datos de forma aleatoria que apoyan a nuestra metodología. El siguiente
código hace está separación:

#!python
from sklearn.cross_validation import train_test_split
train_x, test_x, train_y, test_y = train_test_split(X, Y, train_size=0.5)

Tenemos cuatro conjuntos, dos versiones de los datos de las dimensiones que
generalmente llamamos _features_ y dos versiones de las clases. Una versión es
para entrenar (_train_), y otra para probar (_test_). Las versiones de _train_
tienen la mitad de los datos originales, mientras que test la otra mitad.


## Visualizando los datos

Como la dimensión de nuestros datos es muy alta, es muy difícil lograr una
visualización de como están las clases. Sin embargo, podemos hacer un truco de
reducir la dimensionalidad usando una técnica llamada PCA (Principal
Components Analysis). El código es el siguiente:

#!python
import pylab as plt
from sklearn.decomposition import PCA
pca = PCA(n_components=2)
train_x_pca = pca.fit_transform(train_x)
plt.scatter(train_x_pca[:,0],train_x_pca[:,1],c=train_y)


Las primeras dos líneas cargan las librerías que estamos usando. La tercera
línea crea un objeto PCA, el truco es aquí decirle que PCA de alguna forma
tiene que reducir mis datos de $113$ dimensiones a $2$. En la cuarta línea le
pedimos que encuentre la forma de reducir la dimensión y haga la reducción
sobre los _features_ en _train_. La quinta línea dibuja esos el resultado.

Si hacen ejecutan notarán que los datos no están bien separados y al contrario
están algo encimados, esto hace a nuestro problema bastante difícil.

## Primer modelo: SVM

En nuestro primer modelo vamos usar una técnica llamada _support vector
machine_. Los pasos a seguir son los siguientes:

1. Cargar librerias
2. Crear objeto del tipo de modelo
3. Crear modelo con datos _train_
4. Predecir respuesta usando modelo con datos _test_
5. Evaluar

El siguiente código hace estos pasos:

#!python
from sklearn.svm import SVC
svc = SVC(kernel='rbf')
svc.fit(train_x,train_y)
preds=svc.predict(test_x)
svc.score(test_x,test_y)

La función _score_, nos da la métrica de  _accuracy_ que son los aciertos que
tenemos.

## Segundo modelo: RF

En este modelo vamos a usar la técnica llamada _random forest_. Y los pasos
son muy parecidos como se muestra en el código

#!python
from sklearn.ensemble import RandomForestClassifier as RFC
rfc = RFC()
rfc.fit(train_x,train_y)
preds=rfc.predict(test_x)
rfc.score(test_x,test_y)

Como se pueden dar cuenta, los dos códigos se parecen mucho entre ellos. Pero
hay una diferencia en el desempeño.

## Más evaluaciones

Además de la función _score_ _scipy learn_ contiene el módulo con varias
funciones métricas. El siguiente código imprime un reporte basado en las
métricas _precision_, _recall_ y _f-score_:

#!python
from sklearn import metrics
print metrics.classification_report(test_y,preds)

Precisión (_precision_) nos dice de las predicciones que dimos cuantas les
atinamos, recall (_covertura_) nos dice cuantas de las que teníamos que decir
dijimos bien; y _f-score_ es una mezcla de ambas métricas.

El siguiente código nos muestras las proporciones que nos confundimos:

#!python
print metrics.confusion_matrix(test_y,preds)

La matriz de confusión que imprime nos dice como se clasificaron las clases,
idealmente nos debería dar una matriz diagonal, es decir únicamente con
valores en la diagonal y ceros en el resto de la matriz.

## Como mejorar los modelos

En nuestra metodología una opción es proporcionar más datos, pero antes de
hacer eso podemos jugar con los parámetros de los dos métodos. Para saber los
parámetros podemos pedir ayuda de la siguiente forma:

#!python
help(svc)
help(rfc)

Modificando algunos de los valores por _default_ pueden mejorar el desempeño
del algoritmo.

--

# Material extra

* [Machine Learning with Scikit
Learn (part 1)](https://www.youtube.com/watch?v=80fZrVMurPM)
* [Machine Learning with Scikit
Learn (part 2)](https://www.youtube.com/watch?v=Ud-FsEWegmA)
* [Random Forest](https://www.youtube.com/watch?v=3kYujfDgmNk)
* [Support Vector Machine](https://www.youtube.com/watch?v=1NxnPkZM9bc)
* [Maquinas de soporte vectorial](https://www.youtube.com/watch?v=_nu_vY_UAnU)