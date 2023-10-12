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

// INSERTANTO 40 DATOS
db.Estudiantes.insertMany([
  {
    nombre: "Carlos",
    edad: 18,
    direccion: "Calle 22",
    tel: 245224,
    materias: ["Algebra", "Matematicas"],
  },

  {
    nombre: "María",
    edad: 16,
    direccion: "Calle 25",
    tel: 234567,
    materias: ["Matematicas", "Algebra"],
  },

  {
    nombre: "Pedro",
    edad: 55,
    direccion: "Calle 34",
    tel: 8904563,
    materias: ["Historia", "Matematicas"],
  },

  {
    nombre: "Laura",
    edad: 25,
    direccion: "Calle 36",
    tel: 1345670,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Ana",
    edad: 90,
    direccion: "Calle 76",
    tel: 1678900,
    materias: ["Historia"],
  },

  {
    nombre: "Luis",
    edad: 56,
    direccion: "Calle 13",
    tel: 7865643,
    materias: ["Matematicas"],
  },

  {
    nombre: "Marta",
    edad: 56,
    direccion: "Calle 90",
    tel: 8900087,
    materias: ["Historia"],
  },

  {
    nombre: "Marta",
    edad: 56,
    direccion: "Calle 90",
    tel: 8900087,
    materias: ["Historia"],
  },

  {
    nombre: "David",
    edad: 17,
    direccion: "Calle 100",
    tel: 123456,
    materias: ["Algebra"],
  },

  {
    nombre: "Elena",
    edad: 20,
    direccion: "Calle 21",
    tel: 3678901,
    materias: ["Historia"],
  },

  {
    nombre: "José",
    edad: 20,
    direccion: "Carrera 21",
    tel: 890745,
    materias: ["Matematicas"],
  },

  {
    nombre: "Isabel",
    edad: 78,
    direccion: "Carrera 12",
    tel: 765432,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Miguel",
    edad: 23,
    direccion: "Carrera 17",
    tel: 789000,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Sofía",
    edad: 45,
    direccion: "Carrera 77",
    tel: 567890,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 75,
    direccion: "Carrera 99",
    tel: 345678,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Lucía",
    edad: 55,
    direccion: "Carrera 1",
    tel: 765432,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Alejandro",
    edad: 12,
    direccion: "Carrera 10",
    tel: 987654,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Carmen",
    edad: 55,
    direccion: "Carrera 15",
    tel: 145678,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Daniel",
    edad: 45,
    direccion: "carrera 15",
    tel: 876543,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Paula",
    edad: 45,
    direccion: "carrera 89",
    tel: 678543,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Jorge",
    edad: 37,
    direccion: "calle 89",
    tel: 123456,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Jorge",
    edad: 90,
    direccion: "calle 55",
    tel: 3456789,
    materias: ["Historia"],
  },

  {
    nombre: "Sara",
    edad: 30,
    direccion: "calle 32",
    tel: 13458900,
    materias: ["Algebra"],
  },

  {
    nombre: "Javier",
    edad: 30,
    direccion: "calle 21",
    tel: 123456,
    materias: ["Historia"],
  },

  {
    nombre: "Raquel",
    edad: 49,
    direccion: "calle 15",
    tel: 123456,
    materias: ["Matematicas"],
  },

  {
    nombre: "Francisco",
    edad: 57,
    direccion: "calle 75",
    tel: 890324,
    materias: ["Historia"],
  },

  {
    nombre: "Martina",
    edad: 25,
    direccion: "calle 34",
    tel: 456789,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Antonio",
    edad: 10,
    direccion: "carrera 21",
    tel: 678906,
    materias: ["Matematicas", "Algebra"],
  },

  {
    nombre: "Beatriz",
    edad: 25,
    direccion: "carrera 45",
    tel: 134598,
    materias: ["Matematicas", "Algebra"],
  },

  {
    nombre: "Manuel",
    edad: 25,
    direccion: "carrera 55",
    tel: 556780,
    materias: ["Matematicas", "Historia"],
  },
  
  {
    nombre: "Claudia",
    edad: 25,
    direccion: "carrera 35",
    tel: 678900,
    materias: ["Algebra", "Historia", "Matematicas"],
  },

  {
    nombre: "Alberto",
    edad: 29,
    direccion: "calle 55",
    tel: 556780,
    materias: ["Algebra", "Historia", "Matematicas"],
  },

  {
    nombre: "Andrea",
    edad: 85,
    direccion: "carrera 89",
    tel: 456789,
    materias: ["Algebra", "Historia", "Matematicas"],
  },

  {
    nombre: "Fernando",
    edad: 25,
    direccion: "carrera 55",
    tel: 556780,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Manuel",
    edad: 14,
    direccion: "calle 75",
    tel: 890067,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Natalia",
    edad: 55,
    direccion: "calle 25",
    tel: 678921,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Sergio",
    edad: 95,
    direccion: "calle 35",
    tel: 123456,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Manuel",
    edad: 25,
    direccion: "carrera 55",
    tel: 556780,
    materias: ["Historia"],
  },

  {
    nombre: "Victoria",
    edad: 16,
    direccion: "calle 79",
    tel: 456700,
    materias: ["Algebra"],
  },

  {
    nombre: "Adrián",
    edad: 48,
    direccion: "calle 45",
    tel: 876543,
    materias: ["Matematicas"],
  },
]);
