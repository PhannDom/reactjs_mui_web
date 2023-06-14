import { useState } from "react";

import { Box, TextField, Button, FormControl } from "@mui/material";

import useBooksContext from "../../hooks/useBooksContext";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <Box
      display={"flex"}
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{
        mt: 1,
      }}
      justifyContent={"center"}
    >
      <FormControl sx={{ width: "60ch" }}>
        <h2>Add new of book</h2>
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
        >
          Create
        </Button>
      </FormControl>
    </Box>
  );
}

export default BookCreate;
