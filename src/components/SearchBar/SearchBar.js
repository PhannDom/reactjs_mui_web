import "./SearchBar.css";
import { useState } from "react";
import { TextField, Stack, Button } from "@mui/material";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
    setTerm("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSubmit(term);
      setTerm("");
    }
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <Stack
        direction="column"
        component="form"
        spacing={3}
        sx={{
          maxWidth: "100%",
        }}
        bgcolor="pink"
        autoComplete="off"
        alignItems="center"
        justifyContent="center"
      >
        <h2>Add Product Form</h2>
        <TextField
          value={term}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          label="Search field"
          variant="standard"
          type="search"
        />
        <Button
          onClick={handleFormSubmit}
          sx={{
            height: "max-content",
            margin: "0 8px",
          }}
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}

export default SearchBar;
