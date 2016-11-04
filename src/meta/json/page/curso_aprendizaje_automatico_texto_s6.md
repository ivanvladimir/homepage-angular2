
Una fuente invaluable de lenguaje _in the wild_ es
[Twitter](https://twitter.com/), una red social de  microbloging donde los
usuarios escriben mensajes de hasta 140 letras (caracteres?), aunque pareciera
que esta restricción fuera muy fuerte, [Twitter](https://twitter.com/) ha
crecido y se ha llegado a convertirse en una vía de comunicación preferida por
un gran sector de la población.  Un _"tuit"_ luce así (aunque [change is in
the air](https://blog.twitter.com/2016/doing-more-with-140-characters) ):

<blockquote class="twitter-tweet" data-lang="en"><p lang="es" dir="ltr">Este es
un ejemplo de &#39;tuit&#39;, tiene una mención <a
href="https://twitter.com/ivanvladimir">@ivanvladimir</a>, un hashtag <a
href="https://twitter.com/hashtag/hashtag?src=hash">#hashtag</a> e incluye una
imágen <a
href="https://t.co/pXn0OmrFBO">pic.twitter.com/pXn0OmrFBO</a></p>&mdash;
ivanvladimir (@ivanvladimir) <a
href="https://twitter.com/ivanvladimir/status/755588496606105601">July 20,
2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

El texto de los _tuits_ tiene asociado ciertos "metadatos":

* _Menciones_ son etiquetas que hacen alusión a otros usuarios en la red, se
marcan con el símbolo *_@_* seguido del identificador del usuario.
* _Hashtags_ son etiquetas que marcan un tema o un sentimiento de nuestro
_tuit_ se marcan con el símbolo: *_#_* y una etiqueta (palabra)
* Además en los _tuits_ pueden aparecer _links_, ya sea a páginas o, a imágenes
como es en el caso del ejemplo.

Dentro de la red social puede haber una "conversación" donde a un _tuit_ se le
responder (_reply_) como se muestra en el ejemplo anterior. Además los _tuits_
se les puede citar.

<blockquote class="twitter-tweet" data-lang="en"><p lang="es" dir="ltr">Esta es
una cita a un _tuit_ <a
href="https://t.co/shzGC5FoGd">https://t.co/shzGC5FoGd</a></p>&mdash;
ivanvladimir (@ivanvladimir) <a
href="https://twitter.com/ivanvladimir/status/755597426233188352">July 20,
2016</a></blockquote>

## API de twitter

[Twitter](https://twitter.com) pone a disposición una
[API](https://dev.twitter.com/rest/public) que permite acceder a sus datos de
forma responsable. Esta API se puede usar para crear aplicaciones de datos de
_twitter_, en nuestro caso vamos a usar esta API para recolectar datos. Para
experimentar con la API es necesario contar con una cuenta y registrar una
aplicación. Pero antes de continuar pueden visitar la consola y construir
algunas _peticiones_ a la api y ver que tipo de resultados nos entrega.

La consola la pueden localizar
[aquí](https://dev.twitter.com/rest/tools/console). Pueden usar el menú
interactivo para construir un _request_, por ejemplo para obtener los _tuits_
más recientes de un usuario se puede seleccionar la opción _user_timeline.json_
y llenando los argumentos solicitados, en particular el identificador y nombre
de usuario, se llega a la siguiente dirección:

```
https://api.twitter.com/1.1/statuses/user_timeline.json?count=2&user_id=ivanvladimir&screen_name=ivanvladimir
```

Esta _request_ pide la versión 1.1 de la API, la función de revisar el estado,
pide que se regresen dos _tuits_, del usuario _@ivanvladimir_. La interfaz de
consola nos da información de los argumentos que son necesarios y cual es el
objetivo de ellos. Al mandar la petición, la interfaz nos muestra el objeto
regresado de la petición a la API, contenido ahí viene un objeto _json_ con la
información de los últimos dos _tuits_, como podrán notar viene *toda*, *Toda*,
*TODA* la información asociada a ese _tuit_.

La documentación de la API se puede leer
[aquí](https://dev.twitter.com/rest/public)


### Restricciones de la API

La API pone restricciones de qué hacer con la información recuperada a través
de ella y de cuanta información se puede acceder. Información precisa sobre
como usar y las restricciones las pueden localizar en los siguientes links, es
muy importante respetarlas y seguir sus recomendaciones.

* [Límites](https://dev.twitter.com/rest/public/rate-limiting) 180 búsquedas
por 15 minutos
* [Directrices](https://dev.twitter.com/es/overview/terms/policy) de
desarrollos
* [Contrato de uso](https://dev.twitter.com/es/overview/terms/agreement)


### Tokens de identificación

Para tener acceso a las funciones de la API y para llevar un control de acceso
a nuestras aplicaciones Twitter requiere de tokens de acceso, estos son unos
números que nos identifican durante la interacción con la API y definen los
permisos que tenemos. Para cualquier aplicación y sobretodo para las peticiones
que están restringidas es necesario contar con esto tokens. Estos se pueden
solicitar en: [https://apps.twitter.com/](https://apps.twitter.com/)
registrando una app.

Existen dos _tokens_ asociados a nuestra aplicación:

* _Consumer Key (API Key)_
* _Consumer Secret (API Secret)_

La segunda es sumamente importante que se mantenga secreta y no se haga
disponible, de otra forma podrían abusar de ella y nuestra aplicación se vería
afectada.

Además es necesario tener _tokens_ de acceso, donde asociamos nuestra cuenta
con la aplicación (es decir nos suscribimos a nuestra aplicación). Esos tokens
también se pueden obtener en:
[https://apps.twitter.com/](https://apps.twitter.com/) en la sección de _access
tokens_. Igualmente son dos _tokens_ de nuestra identidad:

* __Access Token_
* _Access Token Secret_

## La API desde _python_

Existen varias opciones para acceder a Twitter desde _python_ esto es deseable
para crear procesos automáticos como: colectores de información, bots,
analizadores, etc. Una opción muy estable es la librería
[tweepy](http://www.tweepy.org/) (en
[github](https://github.com/tweepy/tweepy),
[documentación](http://tweepy.readthedocs.io/en/v3.5.0/) )

### Instalaciónde _tweepy_

Para instalar la librería sólo falta hacer:

```
pip install tweepy
```

Para versiones anteriores a las 2.7.9 de _python_ muy probablemente habrá que
seguir la siguientes
[instrucciones](http://stackoverflow.com/questions/29099404/ssl-insecureplatform-error-when-using-requests-package)

### Streaming

Una forma de acceder a los datos de _twitter_ es conectarse al
[_stream_](https://dev.twitter.com/streaming/overview). En un _stream_ se puede
seguir la actividad de un tema en tiempo "real" sobre un subset muy pequeño de
datos de _twiter_. El siguiente código con la librería _Tweepy_ ejemplifica
como conectarnos al _stream_ público y seguir ciertos términos:

``` python
from __future__ import division, print_function  # Python 2 users only
import tweepy
from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener
import time
import argparse
import string
import config
import json
import os

verbose = lambda *a: None
keepcharacters = (' ','.','_')

class Collector(StreamListener):

def __init__(self, output_dir, query="#ironia", lang="es"):
query_="".join(c for c in query if c.isalnum() or c in keepcharacters).rstrip()
self.outfile=os.path.join(output_dir,lang+"_"+query_+".txt")
verbose("Output file set to:", self.outfile)

def on_data(self, data):
try:
with open(self.outfile, 'a') as f:
f.write(data)
verbose(data)
return True
except BaseException as e:
print("Error on_data: %s" % str(e))
time.sleep(5)
return True

def on_error(self, status):
print(status)
return True


if __name__ == '__main__':
# Command line options
p = argparse.ArgumentParser("Twitter collector")
p.add_argument("-q", "--query", dest="query",nargs="+",
help="Query/Filter",default='#ironia')
p.add_argument("-l", "--lang", dest="lang",
help="Language",default='es')
p.add_argument("-d","--data-dir",dest="data_dir",
help="Output/Data Directory", default='.')
p.add_argument("-v", "--verbose",
action="store_true", dest="verbose",
help="Modo verbose [Off]")
p.add_argument('--version', action='version', version='create_segments 0.1')
opts = p.parse_args()

# Prepara función de verbose  -----------------------------------------
if opts.verbose:
def verbose(*args,**kargs):
print(*args,**kargs)
else:
verbose = lambda *a: None

auth = OAuthHandler(config.consumer_key, config.consumer_secret)
auth.set_access_token(config.access_token, config.access_secret)
api = tweepy.API(auth)

twitter_stream = Stream(auth, Collector(opts.data_dir, opts.query, opts.lang))
twitter_stream.filter(track=[x.decode('unicode-escape') for x in opts.query],languages=[opts.lang])
```


Notar que hay que crear un archivo _config.py_ con las variables adecuadas.Para ejecutarlo recomiendo:


``` bash
python twitter_collect.py -v -q "football"
```


### Búsqueda

Búsqueda a diferencia de _streaming_ no nos da los _tuist_ en "tiempo real"
sino los pasados. Otra diferencia, es que nos entrega páginas de estos
resultados, por lo que _tweepy_ ofrece el objeto _Cursor_ para hacer
transparente la interacción. El siguiente código ejemplifica como luce al
final.

```
with open(outfile, 'a') as f:
for tweet in tweepy.Cursor(api.search,
q=[x.decode('unicode-escape') for x in opts.query],
rpp=100,
result_type="recent",
languages=[opts.lang]).items(opts.nitems):
jtweet=json.dumps(tweet._json)
verbose(jtweet)
f.write(jtweet)
```

El código completo lo pueden localizar [aquí](https://github.com/ivanvladimir/cursoML/blob/master/sesion6_text/twitter_search.py). Para ejecutarlo recomiendo:


``` bash
python twitter_search.py -v -q "football"
```


# Ligas de interés

* [Las mejores prácticas de uso de twitter desde
tweepy](http://www.nirg.net/using-tweepy.html)