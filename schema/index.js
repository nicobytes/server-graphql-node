const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('../resolvers')

const Profesor = require('./Profesor')
const Curso = require('./Curso')
const Comentario = require('./Comentario')
const Genero = require('./Genero')

const rootQuery = `
type Query {
  cursos: [Curso]
  profesores: [Profesor]
  curso(id: Int): Curso
  profesor(id: Int): Profesor
}

type Mutation {
  profesorAdd(profesor: NuevoProfesor): Profesor
  profesorEdit(profesorId: Int!, profesor: EditProfesor): Profesor
  profesorDelete(profesorId: Int!): Profesor
}
`

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Profesor, Curso, Comentario, Genero],
  resolvers
});

module.exports = schema;