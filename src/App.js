import { useEffect, useState, useContext } from "react";
import SearchBar from "./pages/SearchBar/SearchBar";
import ImageList from "./pages/SearchBar/ImageList";
import searchImages from "./api";
import BookCreate from "./pages/Book/BookCreate";
import BookList from "./pages/Book/BookList";
import { Stack } from "@mui/material";
import BooksContext from "./context/books";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null);

  const items = [
    {
      id: "l2kj5",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "lk2j35lkj",
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "l1kj2i0g",
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];

  const options = [
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
  ];
  const [images, setImages] = useState([]);

  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div>
      <Stack direction="column" spacing={2} justifyContent={"center"}>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
        <BookCreate />
        <BookList />
        <Accordion items={items} />
      </Stack>

      <div className="flex">
        <Dropdown options={options} value={selection} onChange={handleSelect} />
        <Dropdown options={options} value={selection} onChange={handleSelect} />
      </div>
    </div>
  );
}

export default App;
