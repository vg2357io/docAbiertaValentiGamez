# Mecánica de personajes

*(Compatibles con SDR 5e, Fate y sistemas híbridos)*

## Atributos base

Todo personaje dispone de los siguientes atributos numéricos:

* **HP** – Vida
* **AD** – Daño de ataque físico
* **AP** – Daño mágico
* **DEF** – Defensa física
* **MR** – Defensa mágica

**Valores mínimos según contexto:**

* Si el personaje **no usa magia**:

  * `AP = 2`
  * `MR = 2`
* En entornos donde la magia es habitual, lo normal es un mínimo de:

  * `AP ≥ 5`
  * `MR ≥ 5`

**Límites de atributo:**

* Personajes estándar: hasta **235**
* Deidades: hasta **2357**
* Primigenios: hasta **235710**

## Acciones, habilidades y afinidad

### Afinidad

* Cada personaje tiene una **afinidad específica** para **cada acción o habilidad**.
* La afinidad se expresa con un valor entre **0 y 2357**.
* Existen **infinitas acciones y habilidades posibles**.

**Referencias de valor:**

* **23** → Puede realizarla raramente (≈ 1 de cada 100 veces). Es el mínimo funcional.
* **235** → Nivel habitual de competencia de un personaje en situaciones comunes.

### Tipo de aptitud

Cada acción o habilidad define **qué tipo de aptitud utiliza**:

* **Física**
* **Mágica**
* **Cuántica**

Reglas:

* Las habilidades **mentales** se consideran siempre de **aptitud cuántica**.
* La **aptitud cuántica** se calcula así:

  * Se suman la aptitud física y la mágica
  * El resultado se divide entre 2

### Afinidad final

La **afinidad final** se obtiene así:

1. Toma la afinidad base del personaje para esa acción o habilidad.
2. Suma el valor de la aptitud correspondiente (física, mágica o cuántica).
3. El resultado es la **afinidad final**, que se usa para resolver la acción.

## Definición de habilidades del personaje

Un personaje **no tiene todas las acciones y habilidades definidas**.

* Solo se definen aquellas que:

  * Le pertenecen de forma **personal**
  * O le son propias de forma **colectiva** (cultura, gremio, especie, etc.)

Número recomendado de habilidades definidas por personaje:

* **2, 3, 5 o 7**, según el nivel de profundidad deseado.

### Habilidades no definidas y resolución cónica

* El resto de acciones y habilidades se resuelven mediante **lógica cónica de distancia**.
* Cada personaje posee un **cono de habilidades implícito**, no escrito ni numerado, que representa su mapa de competencias.
* Este cono se organiza de forma **subconsciente** por parte del jugador con la ayuda del director si hace falta:

  * En el **núcleo del cono** se sitúan las habilidades en las que el personaje es especialmente competente. Las acciones subconscientes como respirar, bombear sangre, etc forman parte del núcleo.
  * A medida que una acción se aleja de ese núcleo, su ejecución resulta progresivamente menos eficaz.
  * El núcleo puede estar más cerca o lejos de la punta del cono, un bebé empieza con el núcleo en la capa más ancha del mismo. Durante la vida de un personaje el nuclo se mueve arriba y abajo, al morir suele estar en 2/3 de altura del cono.
  * Las acciones más automáticas o menos conscientes que hace el personaje deben estar lo más cerca posible del núcleo.

Cuando un personaje intenta una acción o habilidad no definida:

1. Determina en qué **posición del cono** se encuentra esa acción en relación con las habilidades principales del personaje.
2. Cuanto **más cerca esté del núcleo** (sus mejores habilidades), **mejor será el resultado esperado**.
3. Cuanto **más periférica** sea la acción dentro del cono, **menor será su afinidad efectiva**.

En partida:

* La resolución debe ser **instantánea**.
* **No está permitido detener la partida** para calcular o revisar estadísticas.
* El director solo necesita conocer **la afinidad estimada** de la acción según su posición en el cono.

El director puede resolver la acción de dos formas:

* **Con azar**:

  * Tirando un **dado de 6 caras**.
* **Sin azar**:

  * Aplicando la fórmula como si el resultado del dado fuera **3**.

## Resolución de acciones y multiplicadores

### Cálculo del multiplicador cónico

1. Divide la **afinidad final** entre **2357**.

   * Se obtiene un valor decimal entre **0 y 1**.
2. Multiplica el resultado:

   * Por **3**, o
   * Por el resultado del **dado de 6 caras**, si se usa azar.
3. Redondea **siempre hacia arriba**.

El valor obtenido es el **resultado final de la acción**.

### Resultados posibles

* **0** → Fracaso.
* **1** → Resultado abierto, depende de la narración.
* **2** → Éxito.
* **3** → Éxito crítico.

  * Máximo daño o máxima efectividad.
* **5** → Éxito sintónico.

  * La acción encaja armónicamente con el entorno o la narrativa.
* **7** → Éxito natural.  

  * Inevitable, absoluto.

> Los primigenios suelen tener afinidades que oscilan exactamente entre **2 y 2357** en la mayoría de aspectos, por lo que estos resultados extremos son comunes para ellos.

## Acción excepcional: rezar al master

Existe una acción excepcional llamada **rezar al master**.

* Solo debe usarse en **situaciones límite**.
* Cuando no existe una salida narrativa razonable y el desastre es inminente.

Procedimiento:

1. El director de juego determina quién lanza el dado.
2. Se aplican los mismos resultados posibles: **0, 1, 2, 3, 5 y 7**.
3. Se narra la **clausura del escenario**.
