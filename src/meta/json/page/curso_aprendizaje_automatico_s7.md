
Resumiendo de las dos últimas sesiones:

* Podemos representar una cara usando descriptores de HOG
* Y usando esa representación podemos aprender un modelo que aprende a
diferenciar imágenes que son caras de las que no.

Sin embargo, todo lo anterior funciona hasta este momento para imágenes que
tengan un tamaño definido, el de 48x48. Ahora vemos como podemos aplicar
nuestro modelo a cualquier imagen.

OpenCV al rescate
=================

La implementación de OpenCV viene equipada con un detector que hace el trabajo
de buscar la cara en cualquier imagen. Para lograr esto, usa la siguiente
estrategia:

* Desliza una ventana del tamaño de nuestro descriptor sobre toda la imagen,
con la esperanza que una de esas ventanas corresponda a una cabeza una vez que
se la presenta a nuestro modelo
* Lo anterior es muy optimista, por lo que lo siguiente que hace es escalar la
imagen para volver a pasar la ventana.
* Continua deslizando y escalando la imagen hasta que es menor que nuestra
ventana.

En resumen, seguimos una estrategia de fuerza bruta donde pasamos el
descriptor sobre la imagen múltiple veces. Al final de este procedimiento,
OpenCV nos regresa una lista con las coordenadas en la imagen, nuestro modelo
dio positivo de encontrar una cara.

El siguiente código ejemplifica este proceso y además dibuja un rectángulo
sobre la región positiva:

#!python
#!/usr/bin/env python
import numpy as np
import cv2
import argparse

def inside(r, q):
rx, ry, rw, rh = r
qx, qy, qw, qh = q
return rx > qx and ry > qy and rx + rw < qx + qw and ry + rh < qy + qh

def draw_detections(img, rects, thickness = 1):
for x, y, w, h in rects:
# the HOG detector returns slightly larger rectangles than the real objects.
# so we slightly shrink the rectangles to get a nicer output.
pad_w, pad_h = int(0.15*w), int(0.05*h)
cv2.rectangle(img, (x+pad_w, y+pad_h), (x+w-pad_w, y+h-pad_h), (0, 255, 0), thickness)


if __name__ == '__main__':
p = argparse.ArgumentParser("detectarcabezas.py")
p.add_argument("imagen",default=None,
action="store", help="image to detect")
p.add_argument("-m","--model",default="model.svm",
action="store", help="Modelo de SVM")
opts = p.parse_args()


hog = cv2.HOGDescriptor((48,48),(16,16),(8,8),(8,8),9)

vals=[]
for line in open(opts.model):
line=line.strip()
bits=line.split()
for bit in bits:
vals.append(float(bit))
vals=np.array(vals)
hog.setSVMDetector(vals)

img = cv2.imread(opts.imagen)

found, w = hog.detectMultiScale(img,
hitThreshold = 1.4,
winStride=(8,8),
padding=(0,0),
scale=1.04)
found_filtered = []
for ri, r in enumerate(found):
for qi, q in enumerate(found):
if ri != qi and inside(r, q):
break
else:
found_filtered.append(r)
draw_detections(img, found)
draw_detections(img, found_filtered, 3)
print '%d (%d) found' % (len(found_filtered), len(found))
cv2.imshow('img', img)
ch = 0xFF & cv2.waitKey()
cv2.destroyAllWindows()

Este es uno de los códigos más complicados, pero es nada más porque está
haciendo cosas de más:

* Creamos nuestro descriptor HOG equivalente al que entrenamos (Línea 26)
* Cargamos nuestro modelo (ver sección sobre adecuando el modelo, Línea 28-34)
* Conectamos nuestro modelo a nuestro descriptor (Línea 35)
* Cargamos la imagen (Línea 37)
* Buscamos hits positivos de nuestro modelo en la imagen (Línes 39-43)
* Dado que algunas regiones pueden estar contenidas en otras, filtramos todas
las regiones contenidas en otras (Líneas 45-50)
* Sobre la imagen dibujamos rectángulos donde las regiones son localizadas
(Líneas 51-52)
* Mostramos la imagen (Líneas 54)


Adecuando el modelo
===================

Un problema técnico por el momento, es que el modelo que crea la
implementación de SVM en OpenCV no corresponde al  formato que espera la
implementación de HOG, por lo que es necesario adecuarlo. Básicamente en lugar
de entregar los vectores de soporte se entrega un descriptor primal que
corresponde a los pesos para tomar la decisión de si es o no es cara. El
siguiente código resuelve este problema, creando un archivo con los valores
esperados:

#!python
#!/usr/bin/env python
import argparse

from yaml import load
try:
from yaml import CLoader as Loader
except ImportError:
from yaml import Loader

def get_primal_form(svm):
count = len(svm['support_vectors'])
df = svm['decision_functions']
alphas= df[0]['alpha']
rho = df[0]['rho']
var_count=svm['var_count']
support_vector=[0.0 for i in range(var_count)]
for r in range(count):
myalpha = alphas[r]
vec=svm['support_vectors'][r]
for j,v in enumerate(vec):
support_vector[j]+=(-myalpha)*(v)
support_vector.append(rho)
return support_vector

if __name__ == '__main__':
p = argparse.ArgumentParser("convert_format.py")
p.add_argument("model",default="model.svm",
action="store", help="Original model SVM")
opts = p.parse_args()

lines=[]
for line in  open(opts.model, 'r'):
line=line.replace(":",": ")
line=line.replace("!!opencv-ml-svm","")
line=line.replace("!!opencv-matrix","")
lines.append(line)
lines="".join(lines[1:])
data=load(lines)


svm_descriptor=get_primal_form(data['my_svm'])
for line in svm_descriptor:
print line


Entrenamiento duro
==================

Nuestro sistema funciona de manera adecuada, sin embargo, podemos aumentar su
desempeño si le enseñamos a aprender de sus errores. Esta estrategia se llama
entrenamiento duro:

* Pasar al sistema imágenes que sabemos que no tienen caras
* Detectar los errores y crear una base de datos de ejemplos negativos
* Volver a correr el entrenamiento con base de datos:
de ejemplos positivos, de negativos (aleatorio) y negativos errores

El sistema mejora de manera significativa.
