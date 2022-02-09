import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import styles from '../styles/TodoListItem.module.css'


type Props = {
  title: string;
  isDone?: boolean;
  onDelete?: () => void;
  onCheck?:()=> void;
};

const TodoListItem = ({ title, onDelete, isDone, onCheck }: Props) => (
  <ListItem className={styles.container} data-is-done={isDone} >
    <ListItemButton onClick={onCheck}>
      {isDone ? <CheckCircleOutlinedIcon /> : <CircleOutlinedIcon />}
    </ListItemButton>
    <ListItemText>{title}</ListItemText>
    <ListItemButton onClick={onDelete}>
      <CloseIcon />
    </ListItemButton>
  </ListItem>
);

export default TodoListItem;
