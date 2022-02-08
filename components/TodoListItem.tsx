import React from "react";
import Link from "next/link";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
type Props = {
  title: string;
  isDone?: boolean;
  onDelete?: () => void;
  onCheck?:()=> void;
};

const TodoListItem = ({ title, onDelete, isDone, onCheck }: Props) => (
  <ListItem>
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
