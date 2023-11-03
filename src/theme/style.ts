export const containerStyle = {
  my: { xs: "1rem", sm: "1.5rem" },
  minHeight: { xs: "calc(100vh - 2rem)", sm: "calc(100vh - 3rem)" },
  display: "flex",
  justifyContent: "center",
};

export const todoBoxStyle = {
  maxWidth: 800,
  width: "100%",
  mt: 3,
};

export const textFieldStyle = {
  "& fieldset": {
    borderColor: "rgba(255, 255, 255, 0.125)",
  },
  // backgroundColor: "#343a40",
  input: {
    paddingLeft: "3rem",
  },
  "input:hover": {
    "& fieldset": {
      borderColor: "red !important",
    },
  },
  backgroundColor: "#233554",
  borderRadius: "5px"
};

export const taskBoxStyle = {
  p: { xs: 1.6, sm: 2.5 },
  bgcolor: "transparent",
  backgroundImage: "none",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.125)",
};

export const taskItemStyle = {
  bgcolor: "#03132b",
  borderRadius: "8px",
  p: 2,
  overflow: "hidden",
};

export const checkedItemStyle = {
  ...taskItemStyle,
  opacity: 0.5,
};

export const svgStyle = {
  position: "absolute",
  margin: "1rem",
  zIndex: 999,
  color: "#7c8290",
};
