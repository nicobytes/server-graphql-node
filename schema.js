const {  makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const casual = require('casual');


const typeDefs = `
# Esto es un curso
type Curso {
  id: ID!
  titulo: String!
  # tomala
  descripcion: String!
  profesor: Profesor
  rating: Float @deprecated(reason: "no va más")
  comentarios: [Comentario]
}

type Profesor {
  id: ID!
  nombre: String!
  nacionalidad: String!
  genero: Genero
  cursos: [Curso]
}

enum Genero {
  MASCULINO
  FEMENINO
}

type Comentario {
  id: ID!
  nombre: String!
  cuerpo: String!
}

type Query {
  cursos: [Curso]
  profesores: [Profesor]
  curso(id: Int): Curso
  profesor(id: Int): Profesor
}
`;

const resolvers = {
  Query: {
    cursos: () => {
      return [
        {
          id : '121212',
          titulo : 'asass',
        },
        {
          id : '12sd1212',
          titulo : 'asass',
        }
      ]
    }
  },
  Curso: {
    id: () => {
      return 'sd';
    },
    profesor: () => {
      return {
        id: 12
      }
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

addMockFunctionsToSchema({
  schema,
  mocks: {
    Curso: () => {
      return {
        id: casual.uuid,
        titulo : casual.title,
      }
    },
    Profesor: () => {
      return {
        id: casual.uuid,
        nombre : casual.name,
      }
    }
  },
  preserveResolvers: false
})

module.exports = schema;