//CRUD

//Cracion Base de Datos
// use("Colegio");

//Creacion coleccion Estudiantes
// db.createCollection("Estudiantes");

//Insertando un dato
// db.Estudiantes.insertOne({
//   nombre: "Juan",
//   edad: 13,
//   direccion: "Calle 12",
//   tel: 245224,
//   materias: ["Algebra", "Matematicas", "Historia"],
// });

// Insert Many
db.Estudiantes.insertMany([
  {
    nombre: "Carlos",
    edad: 18,
    direccion: "Calle 22",
    tel: 245224,
    materias: ["Algebra", "Matematicas", "Ingles"],
  },

  {
    nombre: "Maria",
    edad: 16,
    direccion: "Calle 25",
    tel: 234567,
    materias: ["Matematicas", "Algebra", "Ingles"],
  },

  {
    nombre: "Pedro",
    edad: 55,
    direccion: "Calle 34",
    tel: 8904563,
    materias: ["Historia", "Matematicas", "Ingles"],
  },

  {
    nombre: "Laura",
    edad: 25,
    direccion: "Calle 36",
    tel: 1345670,
    materias: ["Matematicas", "Historia", "Geografia"],
  },

  {
    nombre: "Ana",
    edad: 90,
    direccion: "Calle 76",
    tel: 1678900,
    materias: ["Historia", "Geografia"],
  },

  {
    nombre: "Luis",
    edad: 56,
    direccion: "Calle 13",
    tel: 7865643,
    materias: ["Matematicas", "Geografia"],
  },

  {
    nombre: "Marta",
    edad: 56,
    direccion: "Calle 90",
    tel: 8900087,
    materias: ["Historia", "Geografia"],
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
    materias: ["Algebra", "Geografia"],
  },

  {
    nombre: "Elena",
    edad: 20,
    direccion: "Calle 21",
    tel: 3678901,
    materias: ["Historia", "Geografia"],
  },

  {
    nombre: "Jose",
    edad: 20,
    direccion: "Carrera 21",
    tel: 890745,
    materias: ["Matematicas", "Geografia"],
  },

  {
    nombre: "Isabel",
    edad: 78,
    direccion: "Carrera 12",
    tel: 765432,
    materias: ["Algebra", "Matematicas", "Historia", "Geografia"],
  },

  {
    nombre: "Miguel",
    edad: 23,
    direccion: "Carrera 17",
    tel: 789000,
    materias: ["Algebra", "Matematicas", "Historia", "Ingles"],
  },

  {
    nombre: "Carolina",
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
    materias: ["Algebra", "Matematicas", "Historia", "Geografia"],
  },

  {
    nombre: "Lucia",
    edad: 55,
    direccion: "Carrera 1",
    tel: 765432,
    materias: ["Algebra", "Matematicas", "Historia", "Ingles"],
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
    materias: ["Algebra", "Matematicas", "Historia", "Ingles"],
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
    nombre: "Adrian",
    edad: 48,
    direccion: "calle 45",
    tel: 876543,
    materias: ["Matematicas"],
  },

  {
    nombre: "Carlos",
    edad: 18,
    direccion: "Calle 22",
    tel: 245224,
    materias: ["Algebra", "Matematicas"],
  },

  {
    nombre: "Maria",
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
    nombre: "Carla",
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
    materias: ["Algebra", "Ingles"],
  },

  {
    nombre: "Elena",
    edad: 20,
    direccion: "Calle 21",
    tel: 3678901,
    materias: ["Historia", "Ingles"],
  },

  {
    nombre: "Jose",
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
    nombre: "Sofia",
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
    nombre: "Lucia",
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
    nombre: "Adrian",
    edad: 90,
    direccion: "calle 55",
    tel: 3456789,
    materias: ["Historia"],
  },

  {
    nombre: "Antonela",
    edad: 30,
    direccion: "calle 32",
    tel: 134589,
    materias: ["Algebra", "Ingles"],
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
    materias: ["Matematicas", "Ingles"],
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
    nombre: "Luisa",
    edad: 19,
    direccion: "Carrera 20",
    tel: 456789,
    materias: ["Algebra", "Ingles"],
  },

  {
    nombre: "Miguel",
    edad: 21,
    direccion: "Calle 30",
    tel: 567890,
    materias: ["Algebra", "Ingles"],
  },

  {
    nombre: "Sara",
    edad: 18,
    direccion: "Carrera 10",
    tel: 678901,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Carlos",
    edad: 20,
    direccion: "Avenida 3",
    tel: 789012,
    materias: ["Algebra", "Matematicas", "Historia", "Ingles"],
  },

  {
    nombre: "Lucas",
    edad: 22,
    direccion: "Calle 25",
    tel: 890123,
    materias: ["Algebra", "Ingles"],
  },

  {
    nombre: "Laura",
    edad: 24,
    direccion: "Carrera 18",
    tel: 901234,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Diego",
    edad: 25,
    direccion: "Calle 32",
    tel: 123456,
    materias: ["Algebra", "Matematicas", "Historia", "Geografia", "Ingles"],
  },

  {
    nombre: "Elena",
    edad: 26,
    direccion: "Avenida 8",
    tel: 234567,
    materias: ["Algebra", "Matematicas", "Historia", "Geografia", "Ingles"],
  },

  {
    nombre: "Sofia",
    edad: 27,
    direccion: "Carrera 12",
    tel: 345678,
    materias: ["Algebra", "Matematicas", "Historia", "Geografia", "Ingles"],
  },

  {
    nombre: "Pablo",
    edad: 28,
    direccion: "Calle 40",
    tel: 456789,
    materias: ["Algebra", "Matematicas", "Historia", "Geografia", "Ingles"],
  },

  {
    nombre: "Carlos",
    edad: 29,
    direccion: "Avenida 5",
    tel: 567890,
    materias: ["Algebra", "Matematicas", "Historia", "Geografia", "Ingles"],
  },

  {
    nombre: "Lucas",
    edad: 30,
    direccion: "Carrera 30",
    tel: 678901,
    materias: ["Algebra", "Matematicas", "Historia", "Ingles"],
  },

  {
    nombre: "Laura",
    edad: 31,
    direccion: "Calle 15",
    tel: 789012,
    materias: ["Algebra", "Matematicas", "Historia", "Ingles"],
  },

  {
    nombre: "Diego",
    edad: 32,
    direccion: "Avenida 10",
    tel: 890123,
    materias: ["Algebra", "Matematicas", "Historia", "Ingles"],
  },

  {
    nombre: "Elena",
    edad: 33,
    direccion: "Carrera 7",
    tel: 901234,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Sofia",
    edad: 34,
    direccion: "Calle 20",
    tel: 123456,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 35,
    direccion: "Avenida 12",
    tel: 234567,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 36,
    direccion: "Carrera 25",
    tel: 345678,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Javier",
    edad: 37,
    direccion: "Calle 35",
    tel: 456789,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Lucas",
    edad: 38,
    direccion: "Carrera 15",
    tel: 567890,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Ana",
    edad: 39,
    direccion: "Avenida 10",
    tel: 678901,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Maria",
    edad: 40,
    direccion: "Carrera 12",
    tel: 789012,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Miguel",
    edad: 41,
    direccion: "Calle 18",
    tel: 890123,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Sara",
    edad: 42,
    direccion: "Avenida 5",
    tel: 901234,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Johan",
    edad: 43,
    direccion: "Carrera 30",
    tel: 123456,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Lucas",
    edad: 44,
    direccion: "Calle 25",
    tel: 234567,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Laura",
    edad: 45,
    direccion: "Avenida 12",
    tel: 345678,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Diego",
    edad: 46,
    direccion: "Calle 30",
    tel: 456789,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Elena",
    edad: 47,
    direccion: "Avenida 3",
    tel: 567890,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Sofia",
    edad: 48,
    direccion: "Carrera 10",
    tel: 678901,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 49,
    direccion: "Calle 40",
    tel: 789012,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Andrea",
    edad: 50,
    direccion: "Avenida 5",
    tel: 890123,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Lucas",
    edad: 51,
    direccion: "Carrera 30",
    tel: 901234,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Laura",
    edad: 52,
    direccion: "Calle 15",
    tel: 123456,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Diego",
    edad: 53,
    direccion: "Avenida 10",
    tel: 234567,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Elena",
    edad: 54,
    direccion: "Carrera 7",
    tel: 345678,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Sofia",
    edad: 55,
    direccion: "Calle 20",
    tel: 456789,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 56,
    direccion: "Avenida 12",
    tel: 567890,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Carlos",
    edad: 57,
    direccion: "Carrera 25",
    tel: 678901,
    materias: ["Algebra", "Matematicas", "Historia", "Geografia", "Ingles"],
  },

  {
    nombre: "Javier",
    edad: 58,
    direccion: "Calle 35",
    tel: 789012,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Lucas",
    edad: 59,
    direccion: "Carrera 15",
    tel: 890123,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Ana",
    edad: 60,
    direccion: "Avenida 10",
    tel: 901234,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Maria",
    edad: 61,
    direccion: "Carrera 12",
    tel: 123456,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Miguel",
    edad: 62,
    direccion: "Calle 18",
    tel: 234567,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Sara",
    edad: 63,
    direccion: "Avenida 5",
    tel: 345678,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Pepito",
    edad: 64,
    direccion: "Carrera 30",
    tel: 456789,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Lucas",
    edad: 65,
    direccion: "Calle 25",
    tel: 567890,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Laura",
    edad: 66,
    direccion: "Avenida 12",
    tel: 678901,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Diego",
    edad: 67,
    direccion: "Calle 30",
    tel: 789012,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Elena",
    edad: 68,
    direccion: "Avenida 3",
    tel: 890123,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Julieta",
    edad: 69,
    direccion: "Carrera 10",
    tel: 901234,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 70,
    direccion: "Calle 40",
    tel: 123456,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Carlos",
    edad: 71,
    direccion: "Avenida 5",
    tel: 234567,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Lucas",
    edad: 72,
    direccion: "Carrera 30",
    tel: 345678,
    materias: ["Algebra", "Matematicas", "Historia"],
  },

  {
    nombre: "Laura",
    edad: 73,
    direccion: "Calle 15",
    tel: 456789,
    materias: ["Ingles", "Geografia"],
  },

  {
    nombre: "Diego",
    edad: 74,
    direccion: "Avenida 10",
    tel: 567890,
    materias: ["Ingles", "Matematicas"],
  },

  {
    nombre: "Elena",
    edad: 75,
    direccion: "Carrera 7",
    tel: 678901,
    materias: ["Geografia"],
  },

  {
    nombre: "Sofia",
    edad: 76,
    direccion: "Calle 20",
    tel: 789012,
    materias: ["Algebra", "Ingles", "Geografia"],
  },

  {
    nombre: "Pablo",
    edad: 77,
    direccion: "Avenida 12",
    tel: 890123,
    materias: ["Ingles"],
  },

  {
    nombre: "Antonio",
    edad: 78,
    direccion: "Carrera 25",
    tel: 901234,
    materias: ["Geografia"],
  },
  {
    nombre: "Javier",
    edad: 79,
    direccion: "Calle 35",
    tel: 123456,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Lucas",
    edad: 80,
    direccion: "Carrera 15",
    tel: 234567,
    materias: ["Algebra", "Geografia"],
  },

  {
    nombre: "Ana",
    edad: 81,
    direccion: "Avenida 10",
    tel: 345678,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Maria",
    edad: 82,
    direccion: "Carrera 12",
    tel: 456789,
    materias: ["Geografia", "Matematicas", "Historia"],
  },

  {
    nombre: "Miguel",
    edad: 83,
    direccion: "Calle 18",
    tel: 567890,
    materias: ["Algebra", "Matematicas", "Ingles"],
  },

  {
    nombre: "Sara",
    edad: 84,
    direccion: "Avenida 5",
    tel: 678901,
    materias: ["Ingles", "Geografia", "Historia"],
  },

  {
    nombre: "Carlos",
    edad: 85,
    direccion: "Carrera 30",
    tel: 789012,
    materias: ["Ingles", "Historia"],
  },

  {
    nombre: "Lucas",
    edad: 86,
    direccion: "Calle 25",
    tel: 890123,
    materias: ["Geografia"],
  },

  {
    nombre: "Laura",
    edad: 87,
    direccion: "Avenida 12",
    tel: 901234,
    materias: ["Geografia"],
  },
  {
    nombre: "Diego",
    edad: 88,
    direccion: "Calle 30",
    tel: 123456,
    materias: ["Ingles"],
  },

  {
    nombre: "Maria",
    edad: 16,
    direccion: "Calle 25",
    tel: 234567,
    materias: ["Matematicas", "Algebra", "Ingles"],
  },
  {
    nombre: "Laura",
    edad: 25,
    direccion: "Calle 36",
    tel: 1345670,
    materias: ["Matematicas", "Ingles"],
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
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Miguel",
    edad: 23,
    direccion: "Carrera 17",
    tel: 789000,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Sara",
    edad: 30,
    direccion: "Calle 32",
    tel: 13458900,
    materias: ["Algebra"],
  },
  {
    nombre: "Javier",
    edad: 30,
    direccion: "Calle 21",
    tel: 123456,
    materias: ["Matematicas", "Ingles"],
  },
  {
    nombre: "Laura",
    edad: 24,
    direccion: "Carrera 18",
    tel: 901234,
    materias: ["Algebra", "Matematicas"],
  },
  {
    nombre: "Diego",
    edad: 25,
    direccion: "Calle 32",
    tel: 123456,
    materias: ["Ingles"],
  },
  {
    nombre: "Laura",
    edad: 22,
    direccion: "Carrera 19",
    tel: 456789,
    materias: ["Ingles"],
  },
  {
    nombre: "Diego",
    edad: 24,
    direccion: "Avenida 7",
    tel: 567890,
    materias: ["Historia", "Matematicas", "Ingles"],
  },
  {
    nombre: "Laura",
    edad: 22,
    direccion: "Calle 42",
    tel: 123456,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Diego",
    edad: 19,
    direccion: "Calle 55",
    tel: 567890,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Sofia",
    edad: 20,
    direccion: "Avenida 8",
    tel: 678901,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Javier",
    edad: 22,
    direccion: "Carrera 14",
    tel: 789012,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Laura",
    edad: 20,
    direccion: "Avenida 7",
    tel: 345678,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Diego",
    edad: 19,
    direccion: "Calle 15",
    tel: 456789,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Laura",
    edad: 20,
    direccion: "Avenida 80",
    tel: 789012,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Elena",
    edad: 20,
    direccion: "Avenida 33",
    tel: 987654,
    materias: ["Matematicas"],
  },
  {
    nombre: "Luis",
    edad: 19,
    direccion: "Calle 14",
    tel: 554433,
    materias: ["Matematicas"],
  },
  {
    nombre: "Ana",
    edad: 20,
    direccion: "Avenida 7",
    tel: 998877,
    materias: ["Matematicas"],
  },
  {
    nombre: "Laura",
    edad: 19,
    direccion: "Calle 15",
    tel: 334455,
    materias: ["Matematicas"],
  },
  {
    nombre: "Juan",
    edad: 20,
    direccion: "Avenida 8",
    tel: 554433,
    materias: ["Matematicas"],
  },
  {
    nombre: "Maria",
    edad: 18,
    direccion: "Calle 30",
    tel: 223344,
    materias: ["Matematicas"],
  },
  {
    nombre: "Pedro",
    edad: 21,
    direccion: "Avenida 12",
    tel: 667788,
    materias: ["Matematicas"],
  },
  {
    nombre: "Ana",
    edad: 22,
    direccion: "Calle 18",
    tel: 112233,
    materias: ["Matematicas"],
  },
  {
    nombre: "Carlos",
    edad: 19,
    direccion: "Avenida 5",
    tel: 889900,
    materias: ["Matematicas"],
  },
  {
    nombre: "Lucia",
    edad: 20,
    direccion: "Calle 25",
    tel: 445566,
    materias: ["Matematicas"],
  },
  {
    nombre: "Miguel",
    edad: 18,
    direccion: "Avenida 10",
    tel: 556677,
    materias: ["Matematicas"],
  },
  {
    nombre: "Sofia",
    edad: 21,
    direccion: "Calle 35",
    tel: 778899,
    materias: ["Ingles"],
  },
  {
    nombre: "Diego",
    edad: 22,
    direccion: "Avenida 15",
    tel: 990011,
    materias: ["Ingles"],
  },
  {
    nombre: "Maria",
    edad: 21,
    direccion: "Avenida 8",
    tel: 998877,
    materias: ["Ingles"],
  },
  {
    nombre: "Pedro",
    edad: 20,
    direccion: "Calle 16",
    tel: 665544,
    materias: ["Ingles"],
  },
  {
    nombre: "Miguel",
    edad: 19,
    direccion: "Avenida 12",
    tel: 112233,
    materias: ["Ingles"],
  },
  {
    nombre: "Sofia",
    edad: 18,
    direccion: "Calle 5",
    tel: 334455,
    materias: ["Ingles"],
  },
  {
    nombre: "David",
    edad: 21,
    direccion: "Avenida 1",
    tel: 998877,
    materias: ["Ingles"],
  },
  {
    nombre: "Laura",
    edad: 19,
    direccion: "Calle 15",
    tel: 776655,
    materias: ["Ingles"],
  },
  {
    nombre: "Julian",
    edad: 20,
    direccion: "Calle 14",
    tel: 443322,
    materias: ["Ingles"],
  },
  {
    nombre: "Ana",
    edad: 22,
    direccion: "Avenida 6",
    tel: 667788,
    materias: ["Ingles"],
  },
  {
    nombre: "Jose",
    edad: 19,
    direccion: "Calle 23",
    tel: 998877,
    materias: ["Ingles"],
  },
  {
    nombre: "Carla",
    edad: 18,
    direccion: "Avenida 7",
    tel: 334455,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Luis",
    edad: 20,
    direccion: "Calle 11",
    tel: 112233,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Isabella",
    edad: 19,
    direccion: "Avenida 4",
    tel: 776655,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Diego",
    edad: 21,
    direccion: "Calle 19",
    tel: 443322,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Valentina",
    edad: 18,
    direccion: "Avenida 9",
    tel: 667788,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Mateo",
    edad: 20,
    direccion: "Calle 18",
    tel: 998877,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Camila",
    edad: 22,
    direccion: "Avenida 3",
    tel: 334455,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Daniel",
    edad: 19,
    direccion: "Calle 12",
    tel: 665544,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Lucia",
    edad: 18,
    direccion: "Avenida 10",
    tel: 998877,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Sebastian",
    edad: 21,
    direccion: "Calle 17",
    tel: 776655,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Eva",
    edad: 19,
    direccion: "Avenida 5",
    tel: 334455,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Juan",
    edad: 20,
    direccion: "Calle 13",
    tel: 667788,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Abril",
    edad: 22,
    direccion: "Avenida 2",
    tel: 112233,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Felipe",
    edad: 18,
    direccion: "Calle 20",
    tel: 998877,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Valeria",
    edad: 19,
    direccion: "Avenida 11",
    tel: 665544,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Simon",
    edad: 21,
    direccion: "Calle 14",
    tel: 776655,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Renata",
    edad: 20,
    direccion: "Avenida 8",
    tel: 334455,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Tomas",
    edad: 18,
    direccion: "Calle 15",
    tel: 112233,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Julia",
    edad: 19,
    direccion: "Avenida 6",
    tel: 998877,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Nicolas",
    edad: 22,
    direccion: "Calle 10",
    tel: 665544,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Mariana",
    edad: 21,
    direccion: "Avenida 7",
    tel: 776655,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Javier",
    edad: 20,
    direccion: "Calle 21",
    tel: 334455,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Laura",
    edad: 19,
    direccion: "Avenida 12",
    tel: 112233,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Alejandro",
    edad: 22,
    direccion: "Calle 16",
    tel: 776655,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Sofia",
    edad: 18,
    direccion: "Avenida 9",
    tel: 998877,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Eduardo",
    edad: 21,
    direccion: "Calle 19",
    tel: 665544,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Maria",
    edad: 20,
    direccion: "Avenida 6",
    tel: 334455,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Andres",
    edad: 19,
    direccion: "Calle 18",
    tel: 112233,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Paula",
    edad: 22,
    direccion: "Avenida 3",
    tel: 776655,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Juan Pablo",
    edad: 18,
    direccion: "Calle 22",
    tel: 998877,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Marta",
    edad: 21,
    direccion: "Avenida 10",
    tel: 665544,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Ana",
    edad: 25,
    direccion: "Calle 123",
    tel: 555555,
    materias: ["Algebra", "Historia"],
  },
  {
    nombre: "Pedro",
    edad: 22,
    direccion: "Avenida 90",
    tel: 666666,
    materias: ["Algebra", "Historia"],
  },
  {
    nombre: "Sara",
    edad: 20,
    direccion: "Calle 70",
    tel: 777777,
    materias: ["Algebra", "Historia"],
  },
  {
    nombre: "Javier",
    edad: 19,
    direccion: "Avenida 20",
    tel: 888888,
    materias: ["Algebra", "Historia"],
  },
  {
    nombre: "Luisa",
    edad: 21,
    direccion: "Calle 10",
    tel: 999999,
    materias: ["Algebra", "Historia"],
  },
  {
    nombre: "Diego",
    edad: 23,
    direccion: "Avenida 34",
    tel: 111111,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Laura",
    edad: 18,
    direccion: "Calle 90",
    tel: 222222,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Maria",
    edad: 20,
    direccion: "Avenida 45",
    tel: 333333,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Carlos",
    edad: 22,
    direccion: "Calle 89",
    tel: 444444,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Miguel",
    edad: 19,
    direccion: "Avenida 56",
    tel: 555555,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "Sofia",
    edad: 21,
    direccion: "Calle 14",
    tel: 666666,
    materias: ["Historia", "Matematicas"],
  },
  {
    nombre: "David",
    edad: 20,
    direccion: "Avenida 1",
    tel: 777777,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Elena",
    edad: 18,
    direccion: "Calle 2",
    tel: 888888,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Miguel",
    edad: 21,
    direccion: "Avenida 3",
    tel: 999999,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Sara",
    edad: 19,
    direccion: "Calle 4",
    tel: 111111,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Javier",
    edad: 20,
    direccion: "Avenida 5",
    tel: 222222,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Laura",
    edad: 22,
    direccion: "Calle 6",
    tel: 333333,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Diego",
    edad: 19,
    direccion: "Avenida 7",
    tel: 444444,
    materias: ["Historia", "Algebra", "Ingles"],
  },
  {
    nombre: "Maria",
    edad: 21,
    direccion: "Calle 8",
    tel: 555555,
    materias: ["Historia", "Algebra", "Ingles"],
  },
  {
    nombre: "Carlos",
    edad: 18,
    direccion: "Avenida 9",
    tel: 666666,
    materias: ["Historia", "Algebra", "Ingles"],
  },
  {
    nombre: "Lucia",
    edad: 23,
    direccion: "Calle 10",
    tel: 777777,
    materias: ["Historia", "Algebra", "Ingles"],
  },
  {
    nombre: "Miguel",
    edad: 18,
    direccion: "Avenida 11",
    materias: ["Historia", "Algebra", "Ingles"],
  },
  {
    nombre: "Sofia",
    edad: 20,
    direccion: "Calle 12",
    tel: 999999,
    materias: ["Historia", "Algebra", "Ingles"],
  },
  {
    nombre: "Diego",
    edad: 24,
    direccion: "Avenida 13",
    tel: 111111,
    materias: ["Historia", "Algebra", "Ingles"],
  },
  {
    nombre: "Maria",
    edad: 19,
    direccion: "Calle 14",
    tel: 222222,
    materias: ["Historia", "Algebra", "Ingles"],
  },
  {
    nombre: "Carlos",
    edad: 20,
    direccion: "Avenida 14",
    tel: 333333,
    materias: ["Matematicas"],
  },
  {
    nombre: "Lucia",
    edad: 22,
    direccion: "Calle 15",
    tel: 444444,
    materias: ["Matematicas"],
  },
  {
    nombre: "Miguel",
    edad: 20,
    direccion: "Avenida 16",
    tel: 555555,
    materias: ["Matematicas"],
  },
  {
    nombre: "Sofia",
    edad: 24,
    direccion: "Calle 17",
    tel: 666666,
    materias: ["Matematicas"],
  },
  {
    nombre: "Lucia",
    edad: 22,
    direccion: "Avenida 34",
    tel: 111111,
    materias: ["Historia"],
  },

  {
    nombre: "Marina",
    edad: 22,
    direccion: "Avenida 1",
    tel: 111111,
    materias: ["Historia"],
  },

  {
    nombre: "Elena",
    edad: 21,
    direccion: "Avenida 2",
    tel: 222222,
    materias: ["Historia"],
  },

  {
    nombre: "Carlos",
    edad: 23,
    direccion: "Avenida 3",
    tel: 333333,
    materias: ["Historia"],
  },

  {
    nombre: "Pedro",
    edad: 24,
    direccion: "Avenida 4",
    tel: 444444,
    materias: ["Historia"],
  },

  {
    nombre: "Laura",
    edad: 25,
    direccion: "Calle 5",
    tel: 555555,
    materias: ["Historia", "Algebra"],
  },

  {
    nombre: "Ana",
    edad: 26,
    direccion: "Avenida 6",
    tel: 666666,
    materias: ["Historia", "Algebra"],
  },

  {
    nombre: "Diego",
    edad: 27,
    direccion: "Avenida 7",
    tel: 777777,
    materias: ["Historia", "Algebra"],
  },

  {
    nombre: "Isabel",
    edad: 28,
    direccion: "Avenida 8",
    tel: 888888,
    materias: ["Historia", "Algebra"],
  },

  {
    nombre: "Javier",
    edad: 29,
    direccion: "Carrera 9",
    tel: 999999,
    materias: ["Historia", "Algebra"],
  },

  {
    nombre: "Santiago",
    edad: 30,
    direccion: "Calle 10",
    tel: 101010,
    materias: ["Historia", "Algebra"],
  },

  {
    nombre: "María",
    edad: 22,
    direccion: "Avenida 45",
    tel: 121212,
    materias: ["Historia", "Algebra"],
  },

  {
    nombre: "José",
    edad: 21,
    direccion: "Avenida 55",
    tel: 232323,
    materias: ["Historia"],
  },

  {
    nombre: "Luis",
    edad: 23,
    direccion: "Avenida 89",
    tel: 343434,
    materias: ["Algebra"],
  },

  {
    nombre: "Luis",
    edad: 23,
    direccion: "Calle 98",
    tel: 343434,
    materias: ["Algebra"],
  },

  {
    nombre: "Marta",
    edad: 24,
    direccion: "Calle 67",
    tel: 454545,
    materias: ["Historia"],
  },

  {
    nombre: "David",
    edad: 25,
    direccion: "Carrera 13",
    tel: 565656,
    materias: ["Algebra"],
  },

  {
    nombre: "Eva",
    edad: 26,
    direccion: "Calle 65",
    tel: 676767,
    materias: ["Matematicas"],
  },

  {
    nombre: "Carlos",
    edad: 27,
    direccion: "Calle 87",
    tel: 787878,
    materias: ["Matematicas"],
  },

  {
    nombre: "Julia",
    edad: 28,
    direccion: "Calle 34",
    tel: 898989,
    materias: ["Matematicas"],
  },

  {
    nombre: "Pedro",
    edad: 29,
    direccion: "Calle 65",
    tel: 909090,
    materias: ["Historia"],
  },

  {
    nombre: "Sara",
    edad: 30,
    direccion: "Calle J",
    tel: 101010,
    materias: ["Historia"],
  },

  {
    nombre: "Sara",
    edad: 30,
    direccion: "Calle 32",
    tel: 101010,
    materias: ["Algebra"],
  },
  {
    nombre: "Hugo",
    edad: 21,
    direccion: "Calle 76",
    tel: 666666,
    materias: ["Algebra"],
  },
  {
    nombre: "Laura",
    edad: 23,
    direccion: "Calle M",
    tel: 777777,
    materias: ["Matematicas"],
  },
  {
    nombre: "Pablo",
    edad: 24,
    direccion: "Calle 21",
    tel: 888888,
    materias: ["Ingles"],
  },
  {
    nombre: "Elena",
    edad: 20,
    direccion: "Calle 90",
    tel: 999999,
    materias: ["Ingles"],
  },
  {
    nombre: "Isabel",
    edad: 22,
    direccion: "Calle 67",
    tel: 123456,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Hugo",
    edad: 21,
    direccion: "Carrera 23",
    tel: 234567,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Laura",
    edad: 23,
    direccion: "Carrear 12",
    tel: 345678,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Pablo",
    edad: 24,
    direccion: "Calle 56",
    tel: 456789,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Elena",
    edad: 20,
    direccion: "Calle 15",
    tel: 567890,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Alejandro",
    edad: 22,
    direccion: "Calle 14",
    tel: 678901,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Sara",
    edad: 21,
    direccion: "Calle 13",
    tel: 789012,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Javier",
    edad: 23,
    direccion: "Calle 12",
    tel: 890123,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Andrea",
    edad: 24,
    direccion: "Calle 11",
    tel: 901234,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Mariana",
    edad: 22,
    direccion: "Calle 10",
    tel: 123456,
    materias: ["Historia"],
  },
  {
    nombre: "Juan",
    edad: 21,
    direccion: "Calle U",
    tel: 123450,
    materias: ["Historia"],
  },
  {
    nombre: "Claudia",
    edad: 23,
    direccion: "Calle 56",
    tel: 234561,
    materias: ["Historia"],
  },
  {
    nombre: "Diego",
    edad: 24,
    direccion: "Calle 56",
    tel: 345672,
    materias: ["Historia"],
  },
  {
    nombre: "Luis",
    edad: 20,
    direccion: "Calle 23",
    tel: 456783,
    materias: ["Historia"],
  },
  {
    nombre: "Ana",
    edad: 22,
    direccion: "Calle 43",
    tel: 567894,
    materias: ["Historia"],
  },
  {
    nombre: "Pedro",
    edad: 23,
    direccion: "Calle 78",
    tel: 678905,
    materias: ["Ingles"],
  },
  {
    nombre: "Santiago",
    edad: 24,
    direccion: "Calle 12",
    tel: 789016,
    materias: ["Ingles"],
  },
  {
    nombre: "Valentina",
    edad: 22,
    direccion: "Calle 23",
    tel: 890127,
    materias: ["Ingles"],
  },
  {
    nombre: "Julia",
    edad: 21,
    direccion: "Calle 89",
    tel: 901238,
    materias: ["Ingles"],
  },
  {
    nombre: "Mateo",
    edad: 23,
    direccion: "Calle 20",
    tel: 124589,
    materias: ["Ingles"],
  },
  {
    nombre: "Daniel",
    edad: 22,
    direccion: "Calle 10",
    tel: 111111,
    materias: ["Ingles"],
  },
  {
    nombre: "Carla",
    edad: 21,
    direccion: "Calle 43",
    tel: 222222,
    materias: ["Ingles"],
  },
  {
    nombre: "Miguel",
    edad: 23,
    direccion: "Calle 43",
    tel: 333333,
    materias: ["Matematicas"],
  },
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
  {
    nombre: "Antonela",
    edad: 37,
    direccion: "Avenida 20",
    tel: 223223,
    materias: ["Ingles", "Historia"],
  },
  {
    nombre: "Elena",
    edad: 20,
    direccion: "Calle 15",
    tel: 321456,
    materias: ["Historia"],
  },
  {
    nombre: "Juan",
    edad: 22,
    direccion: "Avenida 56",
    tel: 555123,
    materias: ["Historia"],
  },
  {
    nombre: "Luisa",
    edad: 19,
    direccion: "Carrera 10",
    tel: 789789,
    materias: ["Historia"],
  },
  {
    nombre: "Andres",
    edad: 21,
    direccion: "Calle 30",
    tel: 999888,
    materias: ["Historia"],
  },
  {
    nombre: "María",
    edad: 23,
    direccion: "Avenida Central",
    tel: 123789,
    materias: ["Historia"],
  },
  {
    nombre: "Pedro",
    edad: 24,
    direccion: "Carrera 5",
    tel: 456123,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Ana",
    edad: 20,
    direccion: "Calle 18",
    tel: 777333,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Miguel",
    edad: 19,
    direccion: "Avenida 87",
    tel: 888444,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Sofía",
    edad: 22,
    direccion: "Carrera 65",
    tel: 222111,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Diego",
    edad: 18,
    direccion: "Calle 34",
    tel: 444555,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "David",
    edad: 18,
    direccion: "Carrera 34",
    tel: 444555,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Laura",
    edad: 54,
    direccion: "Avenida 34",
    tel: 444555,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Javier",
    edad: 30,
    direccion: "Calle 12",
    tel: 555666,
    materias: ["Historia", "Matemáticas"],
  },
  {
    nombre: "María",
    edad: 42,
    direccion: "Calle 7",
    tel: 777888,
    materias: ["Ingles"],
  },
  {
    nombre: "Juan",
    edad: 28,
    direccion: "Calle 42",
    tel: 555666,
    materias: ["Ingles"],
  },
  {
    nombre: "Elena",
    edad: 45,
    direccion: "Avenida 56",
    tel: 777888,
    materias: ["Geografia"],
  },
  {
    nombre: "Sofía",
    edad: 33,
    direccion: "Calle 25",
    tel: 888999,
    materias: ["Inglés", "Historia"],
  },
  {
    nombre: "Diego",
    edad: 40,
    direccion: "Avenida 12",
    tel: 555444,
    materias: ["Matemáticas"],
  },
  {
    nombre: "Luis",
    edad: 29,
    direccion: "Calle 30",
    tel: 666777,
    materias: ["Historia", "Geografia"],
  },
  {
    nombre: "Ana",
    edad: 35,
    direccion: "Calle 14",
    tel: 777666,
    materias: ["Matemáticas", "Ingles"],
  },
  {
    nombre: "Pablo",
    edad: 32,
    direccion: "Avenida 10",
    tel: 888777,
    materias: ["Algebra"],
  },
  {
    nombre: "Isabel",
    edad: 38,
    direccion: "Calle 19",
    tel: 666555,
    materias: ["Algebra"],
  },
  {
    nombre: "Raul",
    edad: 41,
    direccion: "Avenida 8",
    tel: 555777,
    materias: ["Matemáticas"],
  },
  {
    nombre: "Carmen",
    edad: 36,
    direccion: "Calle 17",
    tel: 777333,
    materias: ["Inglés", "Historia"],
  },
  {
    nombre: "Carmen",
    edad: 56,
    direccion: "Calle 17",
    tel: 777333,
    materias: ["Inglés", "Historia"],
  },
  {
    nombre: "Carmen",
    edad: 76,
    direccion: "Calle 17",
    tel: 345678,
    materias: ["Inglés", "Historia"],
  },
  {
    nombre: "Marta",
    edad: 25,
    direccion: "Avenida 34",
    tel: 444555,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Marta",
    edad: 70,
    direccion: "Avenida 34",
    tel: 444555,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Jorge",
    edad: 32,
    direccion: "Calle 12",
    tel: 555666,
    materias: ["Matemáticas"],
  },
  {
    nombre: "Jorge",
    edad: 28,
    direccion: "Calle 12",
    tel: 555666,
    materias: ["Historia"],
  },
  {
    nombre: "Jorge",
    edad: 45,
    direccion: "Calle 12",
    tel: 555666,
    materias: ["Algebra"],
  },
  {
    nombre: "Luis",
    edad: 31,
    direccion: "Calle 15",
    tel: 666777,
    materias: ["Inglés"],
  },
  {
    nombre: "Luis",
    edad: 40,
    direccion: "Avenida 8",
    tel: 666777,
    materias: ["Matemáticas", "Ingles"],
  },
  {
    nombre: "Luis",
    edad: 28,
    direccion: "Calle 25",
    tel: 666777,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Luis",
    edad: 35,
    direccion: "Avenida 12",
    tel: 666777,
    materias: ["Algebra", "Historia"],
  },
  {
    nombre: "Luis",
    edad: 37,
    direccion: "Carrera 7",
    tel: 666777,
    materias: ["Algebra", "Ingles"],
  },

  {
    nombre: "Antonio",
    edad: 30,
    direccion: "Calle 10",
    tel: 553466,
    materias: ["Algebra", "Ingles"],
  },
  {
    nombre: "Antonio",
    edad: 40,
    direccion: "Avenida 5",
    tel: 897689,
    materias: ["Matemáticas"],
  },
  {
    nombre: "Antonio",
    edad: 28,
    direccion: "Calle 8",
    tel: 556666,
    materias: ["Historia"],
  },
  {
    nombre: "Antonio",
    edad: 35,
    direccion: "Avenida 2",
    tel: 552366,
    materias: ["Historia"],
  },
  {
    nombre: "Antonio",
    edad: 45,
    direccion: "Calle 20",
    tel: 550066,
    materias: ["Historia", "Ingles"],
  },
  {
    nombre: "Antonio",
    edad: 37,
    direccion: "Calle 15",
    tel: 558966,
    materias: ["Historia", "Ingles"],
  },
  {
    nombre: "Antonio",
    edad: 29,
    direccion: "Calle 22",
    tel: 565666,
    materias: ["Historia", "Ingles"],
  },
  {
    nombre: "Antonio",
    edad: 42,
    direccion: "Avenida 12",
    tel: 553666,
    materias: ["Historia", "Ingles"],
  },
  {
    nombre: "Antonio",
    edad: 33,
    direccion: "Calle 18",
    tel: 557666,
    materias: ["Historia", "Ingles", "Matematicas"],
  },
  {
    nombre: "Antonio",
    edad: 36,
    direccion: "Carrera 3",
    tel: 555666,
    materias: ["Historia", "Ingles", "Matematicas"],
  },
  {
    nombre: "Cristian",
    edad: 28,
    direccion: "Calle 15",
    tel: 555777,
    materias: ["Inglés"],
  },
  {
    nombre: "Cristian",
    edad: 35,
    direccion: "Avenida 2",
    tel: 555888,
    materias: ["Inglés"],
  },
  {
    nombre: "Cristian",
    edad: 30,
    direccion: "Calle 8",
    tel: 555999,
    materias: ["Inglés"],
  },
  {
    nombre: "Cristian",
    edad: 40,
    direccion: "Avenida 5",
    tel: 555000,
    materias: ["Inglés"],
  },
  {
    nombre: "Cristian",
    edad: 45,
    direccion: "Calle 20",
    tel: 555111,
    materias: ["Inglés"],
  },
  {
    nombre: "Cristian",
    edad: 33,
    direccion: "Calle 18",
    tel: 555222,
    materias: ["Algebra", "Matematicas"],
  },
  {
    nombre: "Cristian",
    edad: 29,
    direccion: "Calle 22",
    tel: 555333,
    materias: ["Algebra", "Matematicas"],
  },
  {
    nombre: "Cristian",
    edad: 37,
    direccion: "Calle 15",
    tel: 555444,
    materias: ["Algebra", "Matematicas"],
  },
  {
    nombre: "Cristian",
    edad: 42,
    direccion: "Avenida 12",
    tel: 555555,
    materias: ["Algebra", "Matematicas"],
  },
  {
    nombre: "Cristian",
    edad: 36,
    direccion: "Carrera 3",
    tel: 555666,
    materias: ["Geografía", "Ingles"],
  },
  {
    nombre: "Carla",
    edad: 28,
    direccion: "Calle 15",
    tel: 555777,
    materias: ["Geografía", "Ingles"],
  },
  {
    nombre: "Carla",
    edad: 35,
    direccion: "Avenida 2",
    tel: 555888,
    materias: ["Geografía", "Ingles"],
  },
  {
    nombre: "Carla",
    edad: 30,
    direccion: "Calle 8",
    tel: 555999,
    materias: ["Geografía", "Ingles"],
  },
  {
    nombre: "Carla",
    edad: 40,
    direccion: "Avenida 5",
    tel: 555000,
    materias: ["Geografía", "Ingles", "Historia"],
  },
  {
    nombre: "Carla",
    edad: 45,
    direccion: "Calle 20",
    tel: 555111,
    materias: ["Geografía", "Ingles", "Historia"],
  },
  {
    nombre: "Carla",
    edad: 33,
    direccion: "Calle 18",
    tel: 555222,
    materias: ["Geografía", "Ingles", "Historia"],
  },
  {
    nombre: "Carla",
    edad: 29,
    direccion: "Calle 22",
    tel: 555333,
    materias: ["Geografía", "Ingles", "Historia"],
  },
  {
    nombre: "Carla",
    edad: 37,
    direccion: "Calle 15",
    tel: 555444,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Carla",
    edad: 42,
    direccion: "Avenida 12",
    tel: 555555,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Carla",
    edad: 36,
    direccion: "Carrera 3",
    tel: 555666,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Kevin",
    edad: 28,
    direccion: "Calle 15",
    tel: 555777,
    materias: ["Inglés", "Álgebra", "Historia"],
  },
  {
    nombre: "Kevin",
    edad: 35,
    direccion: "Avenida 2",
    tel: 555888,
    materias: ["Inglés", "Álgebra", "Historia"],
  },
  {
    nombre: "Kevin",
    edad: 30,
    direccion: "Calle 8",
    tel: 555999,
    materias: ["Inglés", "Álgebra", "Historia"],
  },
  {
    nombre: "Kevin",
    edad: 40,
    direccion: "Avenida 5",
    tel: 555000,
    materias: ["Inglés", "Álgebra", "Matematicas"],
  },
  {
    nombre: "Kevin",
    edad: 45,
    direccion: "Calle 20",
    tel: 555111,
    materias: ["Inglés", "Álgebra", "Matematicas"],
  },
  {
    nombre: "Kevin",
    edad: 33,
    direccion: "Calle 18",
    tel: 555222,
    materias: ["Inglés", "Álgebra", "Matematicas"],
  },
  {
    nombre: "Kevin",
    edad: 29,
    direccion: "Calle 22",
    tel: 555333,
    materias: ["Inglés", "Álgebra", "Matematicas"],
  },
  {
    nombre: "Kevin",
    edad: 37,
    direccion: "Calle 15",
    tel: 555444,
    materias: ["Matematicas", "Historia"],
  },
  {
    nombre: "Kevin",
    edad: 42,
    direccion: "Avenida 12",
    tel: 555555,
    materias: ["Matematicas", "Historia"],
  },
  {
    nombre: "Kevin",
    edad: 36,
    direccion: "Carrera 3",
    tel: 555666,
    materias: ["Matematicas", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 28,
    direccion: "Calle 15",
    tel: 555123,
    materias: ["Inglés", "Álgebra", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 35,
    direccion: "Avenida 2",
    tel: 555456,
    materias: ["Inglés", "Álgebra", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 30,
    direccion: "Calle 8",
    tel: 555789,
    materias: ["Inglés", "Álgebra", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 40,
    direccion: "Avenida 5",
    tel: 555012,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 45,
    direccion: "Calle 20",
    tel: 555345,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 33,
    direccion: "Calle 18",
    tel: 555678,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 29,
    direccion: "Calle 22",
    tel: 555901,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 37,
    direccion: "Calle 15",
    tel: 555234,
    materias: ["Inglés", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 42,
    direccion: "Avenida 12",
    tel: 555567,
    materias: ["Inglés", "Historia"],
  },
  {
    nombre: "Saray",
    edad: 36,
    direccion: "Carrera 3",
    tel: 555890,
    materias: ["Inglés", "Historia"],
  },

  {
    nombre: "Elena",
    edad: 28,
    direccion: "Calle 15",
    tel: 555123,
    materias: ["Inglés", "Historia"],
  },
  {
    nombre: "Elena",
    edad: 35,
    direccion: "Avenida 2",
    tel: 555456,
    materias: ["Inglés", "Historia"],
  },
  {
    nombre: "Elena",
    edad: 30,
    direccion: "Calle 8",
    tel: 555789,
    materias: ["Inglés", "Algebra"],
  },
  {
    nombre: "Elena",
    edad: 40,
    direccion: "Avenida 5",
    tel: 555012,
    materias: ["Inglés", "Algebra"],
  },
  {
    nombre: "Elena",
    edad: 45,
    direccion: "Calle 20",
    tel: 555345,
    materias: ["Inglés", "Algebra"],
  },
  {
    nombre: "Elena",
    edad: 33,
    direccion: "Calle 18",
    tel: 555678,
    materias: ["Inglés", "Algebra"],
  },
  {
    nombre: "Elena",
    edad: 29,
    direccion: "Calle 22",
    tel: 555901,
    materias: ["Inglés", "Algebra"],
  },
  {
    nombre: "Elena",
    edad: 37,
    direccion: "Calle 15",
    tel: 555234,
    materias: ["Álgebra", "Historia"],
  },
  {
    nombre: "Elena",
    edad: 42,
    direccion: "Avenida 12",
    tel: 555567,
    materias: ["Álgebra", "Historia"],
  },
  {
    nombre: "Elena",
    edad: 36,
    direccion: "Carrera 3",
    tel: 555890,
    materias: ["Álgebra", "Historia"],
  },
  {
    nombre: "Eduardo",
    edad: 32,
    direccion: "Calle 17",
    tel: 555234,
    materias: ["Álgebra", "Historia"],
  },
  {
    nombre: "Eduardo",
    edad: 38,
    direccion: "Avenida 9",
    tel: 555456,
    materias: ["Álgebra", "Historia"],
  },
  {
    nombre: "Eduardo",
    edad: 41,
    direccion: "Calle 11",
    tel: 555789,
    materias: ["Álgebra", "Historia"],
  },
  {
    nombre: "Eduardo",
    edad: 37,
    direccion: "Avenida 6",
    tel: 555012,
    materias: ["Historia"],
  },
  {
    nombre: "Eduardo",
    edad: 42,
    direccion: "Calle 21",
    tel: 555345,
    materias: ["Historia"],
  },
  {
    nombre: "Eduardo",
    edad: 36,
    direccion: "Calle 19",
    tel: 555678,
    materias: ["Historia"],
  },
  {
    nombre: "Eduardo",
    edad: 34,
    direccion: "Avenida 14",
    tel: 555901,
    materias: ["Historia"],
  },
  {
    nombre: "Eduardo",
    edad: 39,
    direccion: "Calle 23",
    tel: 555234,
    materias: ["Matematicas"],
  },
  {
    nombre: "Eduardo",
    edad: 33,
    direccion: "Avenida 7",
    tel: 555567,
    materias: ["Matematicas"],
  },
  {
    nombre: "Eduardo",
    edad: 31,
    direccion: "Carrera 5",
    tel: 555890,
    materias: ["Matematicas"],
  },
  {
    nombre: "Luziano",
    edad: 30,
    direccion: "Calle 17",
    tel: 555234,
    materias: ["Matematicas"],
  },
  {
    nombre: "Luziano",
    edad: 36,
    direccion: "Avenida 9",
    tel: 555456,
    materias: ["Matematicas", "Ingles"],
  },
  {
    nombre: "Luziano",
    edad: 33,
    direccion: "Calle 11",
    tel: 555789,
    materias: ["Matematicas", "Ingles"],
  },
  {
    nombre: "Luziano",
    edad: 35,
    direccion: "Avenida 6",
    tel: 555012,
    materias: ["Matematicas", "Ingles"],
  },
  {
    nombre: "Luziano",
    edad: 32,
    direccion: "Calle 21",
    tel: 555345,
    materias: ["Matematicas", "Ingles"],
  },
  {
    nombre: "Luziano",
    edad: 38,
    direccion: "Calle 19",
    tel: 555678,
    materias: ["Matematicas", "Algebra"],
  },
  {
    nombre: "Luziano",
    edad: 34,
    direccion: "Avenida 14",
    tel: 555901,
    materias: ["Matematicas", "Algebra"],
  },
  {
    nombre: "Luziano",
    edad: 31,
    direccion: "Calle 23",
    tel: 555234,
    materias: ["Matematicas", "Algebra"],
  },
  {
    nombre: "Luziano",
    edad: 37,
    direccion: "Avenida 7",
    tel: 555567,
    materias: ["Matematicas", "Algebra"],
  },
  {
    nombre: "Luziano",
    edad: 39,
    direccion: "Carrera 5",
    tel: 555890,
    materias: ["Matematicas", "Algebra", "Ingles", "Geografia"],
  },
  {
    nombre: "Nepomuceno",
    edad: 41,
    direccion: "Calle 31",
    tel: 555234,
    materias: ["Historia del Arte", "Geografía", "Matemáticas"],
  },
  {
    nombre: "Nepomuceno",
    edad: 39,
    direccion: "Avenida 11",
    tel: 555456,
    materias: ["Literatura Clásica", "Biología", "Química"],
  },
  {
    nombre: "Nepomuceno",
    edad: 44,
    direccion: "Calle 9",
    tel: 555789,
    materias: ["Música Clásica", "Dibujo", "Pintura"],
  },
  {
    nombre: "Nepomuceno",
    edad: 37,
    direccion: "Avenida 3",
    tel: 555012,
    materias: ["Matematicas", "Algebra", "Ingles", "Geografia"],
  },
  {
    nombre: "Nepomuceno",
    edad: 42,
    direccion: "Calle 25",
    tel: 555345,
    materias: ["Matematicas", "Algebra", "Ingles", "Geografia"],
  },
  {
    nombre: "Nepomuceno",
    edad: 38,
    direccion: "Avenida 17",
    materias: ["Matematicas", "Algebra", "Ingles", "Geografia"],
  },
  {
    nombre: "Nepomuceno",
    edad: 43,
    direccion: "Calle 18",
    materias: ["Matematicas", "Algebra", "Ingles", "Geografia"],
  },
  {
    nombre: "Nepomuceno",
    edad: 40,
    direccion: "Avenida 6",
    tel: 555234,
    materias: ["Matematicas", "Algebra", "Ingles", "Geografia"],
  },
  {
    nombre: "Nepomuceno",
    edad: 36,
    direccion: "Calle 22",
    tel: 555567,
    materias: ["Matematicas", "Ingles", "Algebra"],
  },
  {
    nombre: "Nepomuceno",
    edad: 45,
    direccion: "Avenida 14",
    tel: 555890,
    materias: ["Matematicas", "Ingles", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 27,
    direccion: "Calle 32",
    tel: 555234,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 29,
    direccion: "Avenida 12",
    tel: 555456,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 31,
    direccion: "Calle 10",
    tel: 555789,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 28,
    direccion: "Avenida 4",
    tel: 555012,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 30,
    direccion: "Calle 26",
    tel: 555345,
    materias: ["Ingles", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 32,
    direccion: "Avenida 18",
    tel: 555678,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 33,
    direccion: "Calle 19",
    tel: 555901,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 34,
    direccion: "Avenida 7",
    tel: 555234,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 35,
    direccion: "Calle 23",
    tel: 555567,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Nacho",
    edad: 36,
    direccion: "Avenida 15",
    tel: 555890,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Isabella",
    edad: 43,
    direccion: "Avenida 14",
    tel: 555555,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Isabella",
    edad: 58,
    direccion: "Calle 8",
    tel: 555666,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Isabella",
    edad: 49,
    direccion: "Carrera 3",
    tel: 555777,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Isabella",
    edad: 65,
    direccion: "Calle 21",
    tel: 555888,
    materias: ["Historia", "Ingles"],
  },
  {
    nombre: "Isabella",
    edad: 52,
    direccion: "Avenida 6",
    tel: 555999,
    materias: ["Historia", "Ingles"],
  },
  {
    nombre: "Isabella",
    edad: 61,
    direccion: "Avenida 17",
    tel: 555000,
    materias: ["Historia", "Ingles"],
  },
  {
    nombre: "Isabella",
    edad: 47,
    direccion: "Calle 19",
    tel: 555111,
    materias: ["Historia", "Ingles"],
  },
  {
    nombre: "Isabella",
    edad: 72,
    direccion: "Avenida 7",
    tel: 555222,
    materias: ["Historia", "Ingles", "Algebra"],
  },
  {
    nombre: "Isabella",
    edad: 56,
    direccion: "Calle 23",
    tel: 555333,
    materias: ["Historia", "Ingles", "Algebra"],
  },
  {
    nombre: "Isabella",
    edad: 75,
    direccion: "Avenida 15",
    tel: 555444,
    materias: ["Historia", "Ingles", "Algebra"],
  },
  {
    nombre: "Natalia",
    edad: 29,
    direccion: "Calle 12",
    tel: 555555,
    materias: ["Historia", "Ingles", "Algebra"],
  },
  {
    nombre: "Natalia",
    edad: 31,
    direccion: "Avenida 5",
    tel: 555666,
    materias: ["Algebra"],
  },
  {
    nombre: "Natalia",
    edad: 28,
    direccion: "Calle 8",
    tel: 555777,
    materias: ["Algebra"],
  },
  {
    nombre: "Natalia",
    edad: 32,
    direccion: "Avenida 11",
    tel: 555888,
    materias: ["Algebra"],
  },
  {
    nombre: "Natalia",
    edad: 30,
    direccion: "Calle 15",
    tel: 555999,
    materias: ["Algebra"],
  },
  {
    nombre: "Natalia",
    edad: 34,
    direccion: "Avenida 7",
    tel: 555000,
    materias: ["Matematicas"],
  },
  {
    nombre: "Natalia",
    edad: 27,
    direccion: "Calle 18",
    tel: 555111,
    materias: ["Matematicas"],
  },
  {
    nombre: "Natalia",
    edad: 35,
    direccion: "Avenida 3",
    tel: 555222,
    materias: ["Matematicas", "Ingles"],
  },
  {
    nombre: "Natalia",
    edad: 33,
    direccion: "Carrera 9",
    tel: 555333,
    materias: ["Matematicas", "Ingles"],
  },
  {
    nombre: "Natalia",
    edad: 36,
    direccion: "Avenida 14",
    tel: 555444,
    materias: ["Matematicas", "Ingles"],
  },
  {
    nombre: "Johan",
    edad: 27,
    direccion: "Calle 22",
    tel: 555555,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Johan",
    edad: 29,
    direccion: "Avenida 10",
    tel: 555666,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Johan",
    edad: 28,
    direccion: "Calle 5",
    tel: 555777,
    materias: ["Matematicas", "Ingles", "Historia"],
  },
  {
    nombre: "Johan",
    edad: 30,
    direccion: "Avenida 12",
    tel: 555888,
    materias: ["Ingles"],
  },
  {
    nombre: "Johan",
    edad: 26,
    direccion: "Calle 17",
    tel: 555999,
    materias: ["Ingles"],
  },
  {
    nombre: "Johan",
    edad: 34,
    direccion: "Avenida 8",
    tel: 555000,
    materias: ["Ingles"],
  },
  {
    nombre: "Johan",
    edad: 27,
    direccion: "Calle 13",
    tel: 555111,
    materias: ["Ingles"],
  },
  {
    nombre: "Johan",
    edad: 33,
    direccion: "Carrera 4",
    tel: 555222,
    materias: ["Ingles", "Matematicas"],
  },
  {
    nombre: "Johan",
    edad: 31,
    direccion: "Avenida 15",
    tel: 555333,
    materias: ["Ingles", "Matematicas"],
  },
  {
    nombre: "Johan",
    edad: 32,
    direccion: "Calle 20",
    tel: 555444,
    materias: ["Ingles", "Matematicas"],
  },
  {
    nombre: "Leonardo",
    edad: 33,
    direccion: "Calle 25",
    tel: 555555,
    materias: ["Ingles", "Matematicas"],
  },
  {
    nombre: "Leonardo",
    edad: 35,
    direccion: "Avenida 14",
    tel: 555666,
    materias: ["Historia"],
  },
  {
    nombre: "Leonardo",
    edad: 32,
    direccion: "Calle 9",
    tel: 555777,
    materias: ["Historia"],
  },
  {
    nombre: "Leonardo",
    edad: 36,
    direccion: "Avenida 10",
    tel: 555888,
    materias: ["Historia"],
  },
  {
    nombre: "Leonardo",
    edad: 34,
    direccion: "Calle 19",
    tel: 555999,
    materias: ["Historia"],
  },
  {
    nombre: "Leonardo",
    edad: 37,
    direccion: "Avenida 12",
    tel: 555000,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Leonardo",
    edad: 31,
    direccion: "Calle 18",
    tel: 555111,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Leonardo",
    edad: 38,
    direccion: "Avenida 6",
    tel: 555222,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Leonardo",
    edad: 39,
    direccion: "Calle 23",
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Leonardo",
    edad: 40,
    direccion: "Avenida 8",
    tel: 555444,
    materias: ["Historia", "Algebra"],
  },
  //

  {
    nombre: "Leonardo",
    edad: 17,
    direccion: "Avenida 12",
    tel: 555000,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Leonardo",
    edad: 51,
    direccion: "Calle 18",
    tel: 555111,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Leonardo",
    edad: 33,
    direccion: "Avenida 6",
    tel: 555222,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Leonardo",
    edad: 12,
    direccion: "Calle 23",
    materias: ["Algebra"],
  },
  {
    nombre: "Leonardo",
    edad: 10,
    direccion: "Avenida 8",
    tel: 555444,
    materias: ["Historia", "Algebra"],
  },
  {
    nombre: "Laura",
    edad: 31,
    direccion: "Calle 15",
    tel: 789012,
    materias: ["Algebra", "Matematicas", "Historia", "Ingles"],
  },

  {
    nombre: "Diego",
    edad: 52,
    direccion: "Avenida 10",
    tel: 890123,
    materias: ["Historia", "Ingles"],
  },

  {
    nombre: "Elena",
    edad: 13,
    direccion: "Carrera 7",
    tel: 901234,
    materias: ["Matematicas", "Historia"],
  },

  {
    nombre: "Sofia",
    edad: 34,
    direccion: "Calle 20",
    tel: 123456,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 35,
    direccion: "Avenida 12",
    tel: 234567,
    materias: ["Ingles", "Matematicas", "Historia"],
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
    edad: 15,
    direccion: "carrera 55",
    tel: 556780,
    materias: ["Historia"],
  },

  {
    nombre: "Claudia",
    edad: 23,
    direccion: "carrera 35",
    tel: 678900,
    materias: ["Algebra", "Historia", "Matematicas"],
  },

  {
    nombre: "Alberto",
    edad: 69,
    direccion: "calle 55",
    tel: 556780,
    materias: ["Algebra", "Historia", "Matematicas"],
  },

  {
    nombre: "Sofia",
    edad: 34,
    direccion: "Calle 20",
    tel: 123456,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 35,
    direccion: "Avenida 154",
    tel: 2234567,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Antonio",
    edad: 10,
    direccion: "carrera 22",
    tel: 6789026,
    materias: ["Matematicas", "Algebra"],
  },

  {
    nombre: "Beatriz",
    edad: 25,
    direccion: "carrera 41",
    tel: 1345982,
    materias: ["Matematicas", "Algebra"],
  },

  {
    nombre: "Manuel",
    edad: 15,
    direccion: "carrera 5b",
    tel: 55678320,
    materias: ["Historia"],
  },

  {
    nombre: "Sofia",
    edad: 34,
    direccion: "Calle 20",
    tel: 123356,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Pablo",
    edad: 35,
    direccion: "Avenida 154",
    tel: 223452467,
    materias: ["Ingles", "Matematicas", "Historia"],
  },

  {
    nombre: "Antonio",
    edad: 10,
    direccion: "carrera 22",
    tel: 678924026,
    materias: ["Matematicas", "Algebra"],
  },
]);

//Find Estudiantes
// db.Estudiantes.find({edad:18});

//Find Estudiantes
// db.Estudiantes.findOne({edad:18});

//Update One Estudiantes
// db.Estudiantes.updateOne({nombre:"Juan"},{$set:{direccion:"Calle 54",edad:55}});

//Update Many Estudiantes
// db.Estudiantes.updateMany({nombre:"Ana"},{$set:{edad:26}});

//Delete One Estudiantes
// db.Estudiantes.deleteOne({edad:55});

//Delete Many Estudiantes
// db.Estudiantes.deleteMany({materias: "Matematicas"});

//Drop collection Estudiantes
// db.Estudiantes.drop();

// //Drop DataBase Colegio
// db.dropDatabase("Colegio");



// OPERADORES DE CONSULTA

//encontrar a los estudiantes con la edad igual a 23
// db.Estudiantes.find({edad:{$eq:42}});

//encontrar a los estudiantes con la edad inferior a 23
// db.Estudiantes.find({edad:{$lt:25}});

//encontrar a los estudiantes con la edad inferior o igual a 23
// db.Estudiantes.find({edad:{$lte:25}});

//encontrar a los estudiantes con la edad mayor a 23
// db.Estudiantes.find({edad:{$gt:22}});

//encontrar a los estudiantes con la edad mayor o igual a 23
// db.Estudiantes.find({edad:{$gte:23}});

//encontrar a los estudiantes donde nombre no sea a Carlos
//db.Estudiantes.find({nombre:{$ne:'Carlos'}});

//encontrar a los estudiantes donde direccion pertenece a 'Avenida 5'
//db.Estudiantes.find({direccion:{$in:['Avenida 5']}});

//encontrar a los estudiantes donde direccion no pertenece a 'Avenida 5'
//db.Estudiantes.find({direccion:{$nin:['Avenida 5']}});




//encontrar a los estudiantes donde direccion:'Avenida 12' y edad:35
// db.Estudiantes.find({$and:[{direccion:'Avenida 12'},{edad:35}]});

//encontrar a los estudiantes donde se llamen pablo o sofia
// db.Estudiantes.find({$or:[{nombre:'Pablo'},{nombre:'Sofia'}]});

//encontrar a los estudiantes donde no se llamen javier
//db.Estudiantes.find({nombre:{$not:{$eq:'Javier'}}});





// encontrar estudiantes con edad mayor 30 y con la materia "matematicas"
// db.Estudiantes.find({ edad:{$gt:30}, materias: "Matematicas"},{"edad.$":1});

// consultar el array estudiantes donde el valor del elemento 'materia' sea igual 'matematicas';
// db.Estudiantes.find({
//   $and: [{ edad: 13 }, { materias: { $elemMatch: { $eq: "Matematicas" } } }],
// });

//encontrar las materias de los estudiantes y 
//db.Estudiantes.find({},{materias:{$slice:2}});





// //encontrar todos los estudiantes que el nombre tenga palabras relacionadas con 'ju'
// db.Estudiantes.createIndex({nombre:"text"})
// db.Estudiantes.find({$text:{$search:'Juan'}});

//encontrar todos los Estudiantes que direccion contenga 'Aveni'
//db.Estudiantes.find({direccion:{$regex:/Aveni/}});

//encontrar todos los Estudiantes donde la suma de la edad y tel sea menor a 500.000
// db.Estudiantes.find({
//   $where: "this.edad + this.tel < 500000"
// });






//encontrar todos los estudiantes donde nombre no exista
// db.Estudiantes.find({nombre:{$exists:false}});

//encontrar todos los estudiantes donde nombre sea de tipo 'string'
//db.Estudiantes.find({"nombre":{$type:"string"}});

//encontrar todos los estudiantes donde edad sea de tipo 'string'
//db.Estudiantes.find({edad:{$type:"string"}});





//encontrar todos los estudiantes que contengan las materias:'Ingles','Historia'
// db.Estudiantes.find({materias:{$all:["Ingles","Historia"]}});

//encontrar todos los estudiantes que el tamaño de materias sea 1
//db.Estudiantes.find({materias:{$size:1}});













//////////////////////////MAESTROS


// OPERADORES DE CONSULTA

//encontrar a los maestros con la edad igual a 23
// db.Estudiantes.find({añosEducando:{$eq:42}});

//encontrar a los maestros con la edad inferior a 23
// db.Estudiantes.find({añosEducando:{$lt:25}});

//encontrar a los maestros con la edad inferior o igual a 23
// db.Estudiantes.find({añosEducando:{$lte:25}});

//encontrar a los maestros con la edad mayor a 23
// db.Estudiantes.find({añosEducando:{$gt:22}});

//encontrar a los maestros con la edad mayor o igual a 23
// db.Estudiantes.find({añosEducando:{$gte:23}});

//encontrar a los maestros donde aula no sea 102
//db.Estudiantes.find({Cursos:{$ne:102}});

//encontrar a los maestros donde nombre pertenece a 'Luisa'
//db.Estudiantes.find({nombre:{$in:['Luisa']}});

//encontrar a los maestros donde nombre no pertenece a 'Carlos'
//db.Estudiantes.find({nombre:{$nin:['Carlos']}});




//encontrar a los maestros donde direccion:'Avenida 12' y edad:35
// db.Estudiantes.find({$and:[{direccion:'Avenida 12'},{edad:35}]});

//encontrar a los maestros donde se llamen pablo o sofia
// db.Estudiantes.find({$or:[{nombre:'Pablo'},{nombre:'Sofia'}]});

//encontrar a los maestros donde no se llamen javier
//db.Estudiantes.find({nombre:{$not:{$eq:'Javier'}}});





// encontrar maestros con edad mayor 30 y con la materia "matematicas"
// db.Estudiantes.find({ edad:{$gt:30}, materias: "Matematicas"},{"edad.$":1});

// consultar el array maestros donde el valor del elemento 'materia' sea igual 'matematicas';
// db.Estudiantes.find({
//   $and: [{ edad: 13 }, { materias: { $elemMatch: { $eq: "Matematicas" } } }],
// });

//encontrar las materias de los maestros y 
//db.Estudiantes.find({},{materias:{$slice:2}});





// //encontrar todos los maestros que el nombre tenga palabras relacionadas con 'ju'
// db.Estudiantes.createIndex({nombre:"text"})
// db.Estudiantes.find({$text:{$search:'Juan'}});

//encontrar todos los maestros que direccion contenga 'Aveni'
//db.Estudiantes.find({direccion:{$regex:/Aveni/}});

//encontrar todos los maestros donde la suma de la edad y tel sea menor a 500.000
// db.Estudiantes.find({
//   $where: "this.edad + this.tel < 500000"
// });






//encontrar todos los maestros donde nombre no exista
// db.Estudiantes.find({nombre:{$exists:false}});

//encontrar todos los maestros donde nombre sea de tipo 'string'
//db.Estudiantes.find({"nombre":{$type:"string"}});

//encontrar todos los maestros donde edad sea de tipo 'string'
//db.Estudiantes.find({edad:{$type:"string"}});





//encontrar todos los maestros que contengan las materias:'Ingles','Historia'
// db.Estudiantes.find({materias:{$all:["Ingles","Historia"]}});

//encontrar todos los maestros que el tamaño de materias sea 1
//db.Estudiantes.find({materias:{$size:1}});


