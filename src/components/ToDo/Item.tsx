import { useState } from "react";
import { Task } from "../../interfaces/Task";
import {
  Checkbox,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { checkedItemStyle, taskItemStyle } from "../../theme/style";
import { Delete, Edit } from "@mui/icons-material";

type Props = {
  taskItem: Task;
  deleteTask: (taskId: number) => void;
  checkTask: (taskId: number) => void;
  editTask: (taskId: Task) => void;
};

const Item = ({ taskItem, deleteTask, checkTask, editTask }: Props) => {
  const { id, value, checked } = taskItem;

  const [isChecked, setIsChecked] = useState(checked);

  const handleIsChecked = () => {
    setIsChecked((prevState) => !prevState);
    checkTask(id);
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={!isChecked ? taskItemStyle : checkedItemStyle}
    >
      <Stack direction="row" alignItems="center">
        <Checkbox
          name={value}
          checked={isChecked}
          onChange={handleIsChecked}
          disableRipple
        />
        <Typography
          variant="h6"
          ml={1.6}
          sx={{color:"#64ffda", textDecoration: isChecked ? "line-through" : "none" }}
        >
          {value}
        </Typography>
      </Stack>
      <Stack direction="row" columnGap={2}>
        <Tooltip title="Edit">
          <IconButton aria-label="edit" onClick={() => editTask(taskItem)}>
            <Edit />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={() => deleteTask(id)}>
            <Delete />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default Item;
