import { useEffect, useState } from "react";

export default function Article({ router }) {
  const { id } = router.query;
  const [article, setArticle] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/articles/" + id)
      .then((value) => {
        return value.json();
      })
      .then((data) => {
        setArticle(data);
      });
  }, [id]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24rem" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          />
          <img
            src={article.image}
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            {article.category && (
              <a
                href="#"
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                {article.category}
              </a>
            )}
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              {article.title}
            </h2>
            <div className="flex mt-3">
              <img
                src={article.author_portraits}
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  {article.author}{" "}
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  {" "}
                  {article.date}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6">{article.body}</p>
        </div>
      </main>

      <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
        <div className="flex">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
            <ul>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Team
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  About us
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Press
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
            <ul>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Blog
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Privacy Policy
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Terms &amp; Conditions
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href className="block text-gray-600 py-2">
                  Documentation
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
