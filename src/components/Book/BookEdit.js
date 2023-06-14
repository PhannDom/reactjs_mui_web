import { useState } from "react";

import { TextField, Button, FormControl } from "@mui/material";
import useBooksContext from "../../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
  const [title, setTile] = useState("");

  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <FormControl sx={{ width: "60ch" }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Title"
        name="title"
        value={title}
        autoComplete="title"
        autoFocus
        onChange={handleChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
      >
        Save
      </Button>
    </FormControl>
  );
}

export default BookEdit;
