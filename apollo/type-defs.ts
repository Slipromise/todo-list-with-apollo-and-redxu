import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    isDone: Boolean
  }

  type Query {
    todoList: [Todo]
  }

  type BasePayload {
    isSuccess: Boolean!
    message: String
  }

  input UpdateTodoInput {
    id: ID!
    title: String
    isDone: Boolean
  }

  type Mutation {
    createTodo(title: String!): BasePayload!
    deleteTodo(id: ID!): BasePayload!
    updateTodo(todo: UpdateTodoInput!): BasePayload!
  }
`;
