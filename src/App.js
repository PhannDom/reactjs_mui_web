import { useEffect, useState, useContext } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageList from "./components/SearchBar/ImageList";
import searchImages from "./api";
import BookCreate from "./components/Book/BookCreate";
import BookList from "./components/Book/BookList";
import { Stack } from "@mui/material";
import BooksContext from "./context/books";

function App() {
  const [images, setImages] = useState([]);

  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  });

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <Stack direction="column" spacing={2} justifyContent={"center"}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
      <BookCreate />
      <BookList />
    </Stack>
  );
}

export default App;
