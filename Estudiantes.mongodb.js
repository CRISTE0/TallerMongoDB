use("Taller");

// db.createCollection(
//     "Estudiantes",
//     {
//       validator: {
//         $jsonSchema: {
//           bsonType: "object",
//           required: ["nombre", "edad", "direccion", "tel", "materias"],
//           properties: {
//             nombre: {
//               bsonType: "string",
//               description: "debe ser una cadena y es requerido",
//             },
//             edad: {
//               bsonType: "int",
//               minimum: 0,
//               maximum: 120,
//               description: "debe ser un número entero entre 0 y 120",
//             },
//             direccion: {
//               bsonType: "string",
//               description: "debe ser una cadena y es requerido",
//             },
//             tel: {
//               bsonType: "int",
//               description: "debe ser un número entero",
//             },
//             materias: {
//               bsonType: "array",
//               minItems: 1,
//               uniqueItems: true,
//               items: {
//                 bsonType: "string",
//                 description: "debe ser una cadena",
//               },
//               description: "debe ser un array de materias con al menos un elemento",
//             },
//           },
//         },
//       },
//     }
//   );

// INSERTANTO UN DATO
//   db.Estudiantes.insertOne({
//     nombre: "Juan",
//     edad: 13,
//     direccion: "Calle 12",
//     tel: 245224,
//     materias: ["Algebra", "Matematicas", "Historia"],
//   });

// INSERTANTO Datos
db.Estudiantes.insertMany([

// AAAAAAAAAAAAAAAAAAAAAA
  {
    nombre: "Ana",
    edad: 25,
    direccion: "Calle 1",
    tel: 123456,
    materias: ["Ingles", "Historia"],
  },
  {
    nombre: "Pedro",
    edad: 22,
    direccion: "Avenida 2",
    tel: 234567,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Luis",
    edad: 20,
    direccion: "Calle 3",
    tel: 345678,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "María",
    edad: 23,
    direccion: "Avenida 4",
    tel: 456789,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Laura",
    edad: 24,
    direccion: "Calle 5",
    tel: 567890,
    materias: ["Ingles"],
  },
  {
    nombre: "Carlos",
    edad: 21,
    direccion: "Avenida 6",
    tel: 678901,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "David",
    edad: 19,
    direccion: "Calle 7",
    tel: 789012,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Sofía",
    edad: 18,
    direccion: "Avenida 8",
    tel: 890123,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Elena",
    edad: 26,
    direccion: "Calle 9",
    tel: 901234,
    materias: ["Ingles"],
  },
  {
    nombre: "Javier",
    edad: 27,
    direccion: "Avenida 10",
    tel: 123123,
    materias: ["Ingles"],
  },
  {
    nombre: "Diego",
    edad: 28,
    direccion: "Calle 11",
    tel: 234234,
    materias: ["Matematicas"],
  },
  {
    nombre: "Miguel",
    edad: 29,
    direccion: "Avenida 12",
    tel: 345345,
    materias: ["Matematicas"],
  },
  {
    nombre: "Lucia",
    edad: 30,
    direccion: "Calle 13",
    tel: 456456,
    materias: ["Matematicas"],
  },
  {
    nombre: "Sara",
    edad: 31,
    direccion: "Avenida 14",
    tel: 567567,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Marina",
    edad: 32,
    direccion: "Calle 15",
    tel: 678678,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Pablo",
    edad: 33,
    direccion: "Avenida 16",
    tel: 789789,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Lorenzo",
    edad: 34,
    direccion: "Calle 17",
    tel: 890890,
    materias: ["Ingles", "Historia"],
  },
  {
    nombre: "Rosa",
    edad: 35,
    direccion: "Avenida 18",
    tel: 901901,
    materias: ["Ingles", "Historia"],
  },
  {
    nombre: "Antonio",
    edad: 36,
    direccion: "Calle 19",
    tel: 112112,
    materias: ["Ingles", "Historia"],
  },
  {
    nombre: "Eva",
    edad: 37,
    direccion: "Avenida 20",
    tel: 223223,
    materias: ["Ingles", "Historia"],
  },

  
]);
