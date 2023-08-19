import "./App.css";
import { BookCard } from "./components/BookCard";

const bookList = [
  {
    id: 1,
    author: "Erik Spiekermann",
    title: "Hello I Am Erik",
    comments: 25,
    rating: 4.5,
    rating_count: 120,
    price: 15.5,
    discounted_price: 10.5,
    image: "https://i.imgur.com/FdVxBP3.png",
    bookmarked: false,
  },
  {
    id: 2,
    author: "Murakami",
    title: "After Dark",
    comments: 25,
    rating: 4.5,
    rating_count: 120,
    price: 15.5,
    discounted_price: 10.5,
    image: "https://i.imgur.com/FdVxBP3.png",
    bookmarked: false,
  },
  {
    id: 3,
    author: "Masashi Kishimoto",
    title: "Naruto",
    comments: 25,
    rating: 4.5,
    rating_count: 120,
    price: 15.5,
    discounted_price: 10.5,
    image: "https://i.imgur.com/FdVxBP3.png",
    bookmarked: false,
  },
];

function App() {
  return (
    <>
      <div id="book-list">
        {bookList.map((bookInfo) => (
          <BookCard bookInfo={bookInfo} key={bookInfo.id} />
        ))}
      </div>
    </>
  );
}

export default App;
