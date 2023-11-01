import { Stack } from "@mui/material";
import { Task } from "../../interfaces/Task";
import Item from "./Item";

type Props = {
  tasks: Task[];
  deleteTask: (taskId: number) => void;
  checkTask: (taskId: number) => void;
  editTask: (taskId: Task) => void;
};
const List = ({ tasks, deleteTask, checkTask, editTask }: Props) => {
  return (
    <Stack spacing={{ xs: 1.5, sm: 2 }}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((taskItem) => (
          <Item
            key={taskItem.id}
            taskItem={taskItem}
            deleteTask={deleteTask}
            checkTask={checkTask}
            editTask={editTask}
          />
        ))}
    </Stack>
  );
};

export default List;
