import "../styles/main.scss";
import "../styles/elements.scss";
import { useState, useEffect } from "react";

export default function MainItem() {
  let [items, setItems] = useState([]);
  // let [loading, setLoading] = useState(false);
  let [paging, setPaging] = useState(3);

  async function getData() {
    let response = await fetch(
      "https://sunsee-app.herokuapp.com/api/getAllProducts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (response.ok) {
      response = await response.json();
      setItems(response);
    } else {
      console.log("Error" + response.status);
    }
  }

  useEffect(() => {
    getData();
  }, [items]);

  const slice = items.slice(0, paging);
  const loadMore = () => {
    setPaging(paging + 3);
  };

  return (
    <main className="main">
      <div className="line" />
      <div className="main__items">
        {slice.map((item, index) => (
          <a href="/" className="main__item" id={item._id} key={index}>
            <img className="item__photo" src={item.picture} alt="item" />
            <h2 className="item__name">{item.name}</h2>
            <p className="item__price">{item.price}</p>
          </a>
        ))}
      </div>
      <button className="btn shop-btn" onClick={() => loadMore()}>
        Load More
      </button>
    </main>
  );
}
