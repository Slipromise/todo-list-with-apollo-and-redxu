import { Box, Container, IconButton, List, TextField } from "@mui/material";
import TodoListItem from "../components/TodoListItem";
import AddIcon from '@mui/icons-material/Add';
import Head from "next/head";
import {
  useGetListQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../store/TodoApiEnhancer";
import React, { useEffect, useMemo, useState } from "react";

const IndexPage = () => {

  const [newTodoTitle, setNewTodoTitle] = useState('')

  const {data,refetch} = useGetListQuery({});

  const [addTodo,addTodoResult] = useAddTodoMutation();

  const [deleteTodo,deleteTodoResult] = useDeleteTodoMutation();

  const [updateTodo,updateTodoResult] = useUpdateTodoMutation();


  // TODO: 待確認與修正 tag 不起作用
  useEffect(()=>{
    if(addTodoResult.data?.createTodo.isSuccess || deleteTodoResult.data?.deleteTodo.isSuccess ||deleteTodoResult.data?.deleteTodo.isSuccess ){
      refetch();
    }
  },[addTodoResult,deleteTodoResult,updateTodoResult])



  const todoList = useMemo<
    (React.ComponentProps<typeof TodoListItem> & { id: string })[]
  >(() => {

    if(!data) return [];

    return data.todoList?.map((item) => ({
      ...item,
      onCheck: () =>
        updateTodo({ todo: { id: item.id, isDone: !item.isDone } }),
      onDelete: () => deleteTodo({ id: item.id }),
    }));
  }, [data]);

  return (
    <Container>
      <Head>
        <title>Todo-list</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Todo list</h1>
      {todoList.map(({ id, ...props }) => (
        <TodoListItem key={id} {...props} />
      ))}
      <Box>
        <TextField
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <IconButton
          onClick={() => {
            setNewTodoTitle('')
            addTodo({ title: newTodoTitle });
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Container>
  );};

export default IndexPage;
