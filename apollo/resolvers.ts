let currentID = 0;

const sampleData = [
  {
    id: currentID++,
    title: "去日本",
    isDone: false,
  },
];

export const resolvers = {
  Query: {
    todoList() {
      return sampleData;
    },
  },
  Mutation: {
    createTodo(_, { title }: { title: string }) {

      sampleData.push({ id: currentID++, title, isDone: false });
      return { isSuccess: true, message: "新增成功" };
    },
    deleteTodo(_, { id }: { id: number }) {
      const foundIndex = sampleData.findIndex((item) => item.id == id);

      foundIndex !== -1 && sampleData.splice(foundIndex, 1);

      const isSuccess = foundIndex !== -1;

      return { isSuccess, message: isSuccess ? "刪除成功" : "找不到項目" };
    },
    updateTodo(_, arg) {
      const { id, title, isDone } = arg.todo;

      const todo = sampleData.find((item) => item.id == id);

      if ( todo && title !== undefined) {
        todo.title = title;
      }

      if ( todo && isDone !== undefined) {
        todo.isDone = isDone;
      }

      const isSuccess = !!todo;

      return { isSuccess, message: isSuccess ? "修改成功" : "找不到項目" };
    },
  },
};
