import Card from "../src/components/Card";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home({ router }) {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (router.query.category && router.query.category != "All") {
      setFilter(
        "http://localhost:8000/articles/?category=" + router.query.category
      );
    } else {
      setFilter("http://localhost:8000/articles");
    }
  }, [router]);

  useEffect(() => {
    if (!filter) return;
    setTimeout(() => {
      fetch(filter)
        .then((value) => {
          return value.json();
        })
        .then((data) => {
          setArticles(data);
          setLoader(false);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "ATTENZIONE",
            text: "Sembra esserci un errore!",
          });
          setLoader(false);
        });
    }, 1000);
  }, [filter]);

  return (
    <>
      {loader && (
        <div className="flex justify-center items-center w-full h-screen">
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="my-12 mx-auto px-4 ">
        <div
          onClick={(e) => console.log(e)}
          className="flex flex-wrap gap-10 -mx-1 lg:-mx-4"
        >
          {articles.length > 0 &&
            articles.map((art, index) => {
              return (
                <Card
                  key={"card_article_" + index}
                  art={art}
                  index={index}
                  router={router}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
