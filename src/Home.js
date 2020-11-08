import React, { useState } from "react";
import {
  Typography,
  TextField,
  Paper,
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  makeStyles
} from "@material-ui/core";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const useStyles = makeStyles({
  root: {
    maxWidth: "500px",
    width: "100%",
    margin: "0 auto"
  }
});
const Home = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [exercises, setExercises] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      setExercises([...exercises, { title: title, id: Date.now() }]);
    }
    setTitle("");
  };

  const handleDelete = id => {
    setExercises(exercises.filter(data => data.id !== id));
  };
  return (
    <Paper
      className={classes.root}
      style={{
        marginTop: "20px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Exercises
      </Typography>
      <form onSubmit={handleSubmit} style={{ margin: "0 auto" }}>
        <TextField value={title} onChange={e => setTitle(e.target.value)} />
        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Create
        </Button>
      </form>
      <List>
        {exercises.map(({ title, id }) => {
          return (
            <ListItem key={id}>
              <ListItemText primary={title} />
              <ListItemSecondaryAction>
                <IconButton onClick={() => handleDelete(id)}>
                  <DeleteRoundedIcon color="primary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default Home;
