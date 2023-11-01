import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import { svgStyle, textFieldStyle } from "../../theme/style";
import { Add, AddTask, Subject } from "@mui/icons-material";
import { Task } from "../../interfaces/Task";

type Props = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  addTask: (task: Task) => void;
  isEditing: boolean;
};

const TaskAdd = ({ inputValue, setInputValue, addTask, isEditing }: Props) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      value: inputValue,
      checked: false,
    });
    setInputValue("");
  };
  return (
    <Box mt={4} mb={5} component="form" onSubmit={handleSubmit}>
      <Subject sx={svgStyle} />
      <TextField
        placeholder="Add a task..."
        required
        autoFocus
        fullWidth
        sx={textFieldStyle}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!isEditing ? (
                <Tooltip title="Add">
                  <IconButton type="submit" aria-label="add">
                    <Add />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Update">
                  <IconButton type="submit" aria-label="update">
                    <AddTask />
                  </IconButton>
                </Tooltip>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default TaskAdd;
