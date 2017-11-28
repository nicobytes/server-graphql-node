module.exports = `
type Profesor {
  id: ID!
  nombre: String!
  nacionalidad: String!
  genero: Genero
  cursos: [Curso]
}
`
