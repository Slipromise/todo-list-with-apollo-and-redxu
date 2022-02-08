import { Box, Container, IconButton, List, TextField } from "@mui/material";
import  Head  from "next/head";
import Link from "next/link";
import TodoListItem from "../components/TodoListItem";
import AddIcon from '@mui/icons-material/Add';

const IndexPage = () => (
  <Container>
    <Head>
      <title>Todo-list</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Todo list</h1>
    <List>
      <TodoListItem title="Test" />
      <TodoListItem title="Test" />
      <TodoListItem title="Test" />
    </List>
    <Box>
      <TextField></TextField>
      <IconButton>
        <AddIcon />
      </IconButton>
    </Box>
  </Container>
);

export default IndexPage;
