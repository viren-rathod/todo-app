import { Box, Paper } from "@mui/material";
import { taskBoxStyle, todoBoxStyle } from "../theme/style";
import Header from "../components/Header";
import TaskAdd from "../components/ToDo/Add";
import List from "../components/ToDo/List";
import Home from "./Home";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";
import { Task } from "../interfaces/Task";

const Todo = () => {
  const [tasks, setTasks] = useLocalStorage("todoList", []);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedItemId, setEditedItemId] = useState<number | null>(null);

  /**
   * Add or Update Task
   */
  const addTask = (task: Task) => {
    !isEditing
      ? setTasks((prevState: Task[]) => [...prevState, task])
      : setTasks((prevState: Task[]) => [
          ...prevState.map((item) => {
            if (item.id === editedItemId) {
              return {
                ...item,
                value: inputValue,
              };
            }
            return item;
          }),
        ]);
    setEditedItemId(null);
    setIsEditing(false);
  };

  /**
   * Delete a Task
   */
  const deleteTask = (taskId: number) => {
    setTasks((prevState: Task[]) => [
      ...prevState.filter((item) => item.id !== taskId),
    ]);
  };

  /**
   * Toggle the Task status (Completed or Not)
   */
  const checkTask = (taskId: number) => {
    setTasks((prevState: Task[]) =>
      prevState.map((item) => {
        if (item.id === taskId) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      })
    );
  };

  /**
   * Edit a Task
   */
  const editTask = (taskItem: Task) => {
    const itemToEdit = tasks.find((item: Task) => item.id === taskItem.id);
    itemToEdit && setInputValue(itemToEdit.value);
    setIsEditing(true);
    setEditedItemId(taskItem.id);
  };

  return (
    <Box sx={todoBoxStyle}>
      <Header />

      <TaskAdd
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
        isEditing={isEditing}
      />

      <Paper elevation={8} sx={taskBoxStyle}>
        {tasks?.[0] ? (
          <List
            tasks={tasks}
            deleteTask={deleteTask}
            checkTask={checkTask}
            editTask={editTask}
          />
        ) : (
          <Home />
        )}
      </Paper>
    </Box>
  );
};

export default Todo;
