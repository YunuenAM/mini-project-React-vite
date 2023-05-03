### Mini proyecto: React issues👩‍💻


Este proyecto de clase toma en cuenta el repositorio de github de React, existe una sección

 dónde se muestran los issues del proyecto [https://github.com/facebook/react/issues]() .

En este mini proyecto de clase se desarrolla un programa en React con componentes que consulte la API de los issues del proyecto de REACT y muestre un listado de los issues en pantalla. Con las siguientes características:

Al cargar la página, se mostrará el listado de issues, donde cada ítem del listado muestra:

-ID del issue

-Título del issue

-Nombre del usuario que abrió el issue

-Al dar click en el título se manda el enlace que tiene el detalle del issue en github

PLUS:

Mostrar los labels a los que pertenece cada issue, ejemplo: (Status, unconfirmed, React 18 etc)

Elaborar una barra de búsqueda, que permita filtar los resultados traídos por la API


#### Consideraciones

1. Las llamadas a API deberán estar dentro del hook de React de useEffect()
2. El endpoint a utilizar con la información de los issues es [https://api.github.com/repos/facebook/react/issues]()
