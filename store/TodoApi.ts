import { api } from './graphqlApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  title: Scalars['String'];
  isDone?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  todoList?: Maybe<Array<Maybe<Todo>>>;
};

export type BasePayload = {
  __typename?: 'BasePayload';
  isSuccess: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type UpdateTodoInput = {
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  isDone?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: BasePayload;
  deleteTodo: BasePayload;
  updateTodo: BasePayload;
};


export type MutationCreateTodoArgs = {
  title: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateTodoArgs = {
  todo: UpdateTodoInput;
};

export type GetListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListQuery = { __typename?: 'Query', todoList?: Array<{ __typename?: 'Todo', id: string, isDone?: boolean | null, title: string } | null> | null };

export type AddTodoMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type AddTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'BasePayload', isSuccess: boolean, message?: string | null } };

export type UpdateTodoMutationVariables = Exact<{
  todo: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'BasePayload', isSuccess: boolean, message?: string | null } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'BasePayload', isSuccess: boolean, message?: string | null } };


export const GetListDocument = `
    query GetList {
  todoList {
    id
    isDone
    title
  }
}
    `;
export const AddTodoDocument = `
    mutation AddTodo($title: String!) {
  createTodo(title: $title) {
    isSuccess
    message
  }
}
    `;
export const UpdateTodoDocument = `
    mutation UpdateTodo($todo: UpdateTodoInput!) {
  updateTodo(todo: $todo) {
    isSuccess
    message
  }
}
    `;
export const DeleteTodoDocument = `
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    isSuccess
    message
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetList: build.query<GetListQuery, GetListQueryVariables | void>({
      query: (variables) => ({ document: GetListDocument, variables })
    }),
    AddTodo: build.mutation<AddTodoMutation, AddTodoMutationVariables>({
      query: (variables) => ({ document: AddTodoDocument, variables })
    }),
    UpdateTodo: build.mutation<UpdateTodoMutation, UpdateTodoMutationVariables>({
      query: (variables) => ({ document: UpdateTodoDocument, variables })
    }),
    DeleteTodo: build.mutation<DeleteTodoMutation, DeleteTodoMutationVariables>({
      query: (variables) => ({ document: DeleteTodoDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetListQuery, useLazyGetListQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = injectedRtkApi;

