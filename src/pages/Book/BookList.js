import BookShow from "./BookShow";
import { Stack } from "@mui/material";
import useBooksContext from "../../hooks/useBooksContext";

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      {renderedBooks}
    </Stack>
  );
}

export default BookList;
