module.exports = `
type Profesor {
  id: ID!
  nombre: String!
  nacionalidad: String!
  genero: Genero
  cursos: [Curso]
}

input NuevoProfesor{
  nombre: String!
  genero: Genero
  nacionalidad: String!
}

input EditProfesor{
  nombre: String
  genero: Genero
  nacionalidad: String
}
`
