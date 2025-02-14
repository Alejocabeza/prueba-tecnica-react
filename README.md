# FlickFinder

## Introduccion

Crear una aplicacion web que permita a los usuarios buscar, explorar y visualizar detalles de peliculas utilizando una API externa. La aplicacion debe desarrollarse en react con typescript, haciendo uso intensivo de hooks para gestionar el estado y los cliclos de vida e integrando una libreria de componentes (como Material-UI o Boostrap) para lograr una interfaz de usuario moderna y responsiva.

- Lenguaje y Framework: React + Typescript
- Hooks: uso obligatorio de useState y useEffect para el manejo del estado y la carga de datos, ademas de otros hooks como useCallback y useMemo para la optmizacion segun convenga.
- Librerias Externas:
  - Axios: para realizar llamadas a al API de peliculas.
  - Libreria UI: Material-UI o Bootstrap o alguna otra para mejorar la presentación y experiencia de usuario.
- Estructura y Tipado: Definir interfaces o tipos para la informacion de las peliculas
- Organizar el codigo en componentes reutilizables.

### Descripción de la Tarea

- [x] Interfaz de Busqueda.
  - [x] Incluir un campo de entrada (input) donde el usuario pueda escribir el nombre o parte del titulo de una pelicula.
  - [x] Añadir un boton o activar la busqueda al presionar enter para enviar la consulta.
- [ ] Consumo de la Api:
  - [ ] Al realizar la busqueda, utlizar axios en conjunto con useEffect para consultar la API externa y obtener un listado de peliculas que coincidan con el termino ingresado.
  - [ ] Manejar de forma adecuada los estados de carga, error y exito en la consulta.
- [x] Visualización de Resultado.
  - [x] Mostrar los resultados en una cuadricula o lista, presentando la imagen (poster). titulo, fecha de estreno y una breve description.
  - [x] Implementar un diseño responseivo utilizando la libreria de UI Seleccionada.
- [ ] Detalle de la Pelicula:
  - [ ] Sinopsis.
  - [ ] Valoracion.
  - [ ] elenco.
  - [ ] otros detalles.
  - [ ] uso de react router.
- [ ] Extras Optionales.
  - [ ] Implementar paginacion o scroll infinito.
  - [ ] incluir filtros o opciones de ordenamiento (por ejemplo, ordenar por fecha de estreno o valoracion).

## Instalacion

1. Clonar el repositorio.

```bash
git clone git@github.com:Alejocabeza/prueba-tecnica-react.git
```

2. Instalar las dependencias.

```bash
npm run install

```

3. Ejecutar el proyecto.

```bash
npm run dev

```
