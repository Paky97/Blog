import Card from "../src/components/Card";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CardSkeleton from "../src/components/CardSkeleton";

export default function Home({ router }) {
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    /* condizione di filtro per categoria */
    if (router.query.category && router.query.category != "All") {
      setFilter(
        "http://localhost:8000/articles/?category=" + router.query.category
      );
    } else {
      setFilter("http://localhost:8000/articles");
    }
  }, [router]);

  useEffect(() => {
    /* fake api con fake loader */
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
      {/* loader */}
      {loader && (
        //Skeleton Loader
        <CardSkeleton cards={8} />
        // Simple Loader
        /*  <div className="flex justify-center items-center w-full h-screen">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> */
      )}
      <div className="my-12 mx-auto px-4 ">
        <div className="flex flex-wrap gap-10 -mx-1 lg:-mx-4">
          <CardSkeleton />
          {articles.length > 0 &&
            articles.map((art, index) => {
              return (
                <Card key={"card_article_" + index} art={art} router={router} />
              );
            })}
        </div>
      </div>
    </>
  );
}
