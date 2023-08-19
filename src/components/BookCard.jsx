/* eslint-disable react/prop-types */
export const BookCard = ({ bookInfo }) => {
  return (
    <div id="card-wrapper">
      <img id="card-image" src={bookInfo.image} alt={bookInfo.title} />
      <div id="card-info">
        <div id="card-book">
          <div id="card-author">{bookInfo.author}</div>
          <div id="card-title">{bookInfo.title}</div>
        </div>
        <div id="card-feedback">
          <button id="card-comments" onClick={() => alert("Hello")}>
            {bookInfo.comments}
            <img src="/Chat.svg" alt="Comments" />
          </button>
          <div id="card-rating">
            {bookInfo.rating}
            <img src="/Star.svg" alt="Star" />
            <span>({bookInfo.rating_count})</span>
          </div>
        </div>
        <p id="card-price">
          <span style={{ textDecoration: "line-through" }}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(Number(bookInfo.price))}
          </span>{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(Number(bookInfo.discounted_price))}
        </p>
      </div>
      <div id="card-cta">
        <button id="card-bookmark">
          <img
            src="/Bookmark.svg"
            alt="Bookmark"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </button>
      </div>
    </div>
  );
};
