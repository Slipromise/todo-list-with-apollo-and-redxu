import { api as generatedApi  } from "./TodoApi";


// TODO: 待確認與修正
export const api = generatedApi.enhanceEndpoints({
  addTagTypes: ["TodoList"],
  endpoints: {
    GetList: {
      providesTags: () => [{ type: "TodoList" }],
    },
    UpdateTodo: {
      invalidatesTags: () => [{ type: "TodoList" }],
    },
    AddTodo: {
      invalidatesTags: () => [{ type: "TodoList" }],
    },
    DeleteTodo: {
      invalidatesTags: () => [{ type: "TodoList" }],
    },
  },
});

export const {
  useGetListQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = api;