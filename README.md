## Principio Responsabilidad Única

Consiste básicamente en que cada clase y modulo tenga responsabilidad solo en una parte del código y todo el sistema. Por ejemplo,la clase producto tenga la responsabilidad de registrar el encabezado. La clase detalle de producto tenga la responsabilidad de solo asociar detalles a los productos. Donde la responsabilidad debe estar encapsulada en su totalidad.

## Código Limpio

Que no tenga comentarios demasiado largos o código basura y adicional que no se realicen consultas innecesarias que se pueda realizar una sola vez para todo el ámbito de la función modulo, etc. El código debe estar bien identado, para hacer su lectura correcta por parte de otros programadores. Además debe ser lo más fácil y simplificado posible porque debemos pensar en el peso del archivo en el servidor y der ser conscientes de distribuir las cosas y responsabilidades entre los diferentes componentes.

## Ejecutar asi:

npm test -- --coverage
npm run cypress:open
npm run fake-api
npm run start
