import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { numbers } from "./data";
import InputField from "./InputField";
import Filters from "./Filters";
const url = "https://api.unsplash.com/search/photos/?per_page=20&orientation=landscape";
const QuerySearch = () => {
  const api = "client_id=JRD585-DlCVyhZXEWnT59R7TpjDtnlgRQEgav3_flcg";
  const [orientation, setOrientation] = useState("landscape");
  const [searchCategory, setSearchCategory] = useState("car");
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["random-img", pageNumber, searchCategory, orientation],
    queryFn: async () => {
      const result = await axios.get(`${url}&orientation=${orientation}&${api}&query=${searchCategory}&page=${pageNumber}`);
      return result.data;
    },
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  const results = data.results;

  console.log(results);
  return (
    <main>
      <InputField searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
      <Filters orientation={orientation} setOrientation={setOrientation} />
      <section className="flex-gallery">
        {results.length < 1 ? (
          <div>No images found...</div>
        ) : (
          <>
            <div className={orientation === "portrait" ? "grid-gallery grid-gallery-portrait" : " grid-gallery "}>
              {results.map((item) => {
                return <img src={item.urls.small} className={`img img-${orientation}`} key={item.id} />;
              })}
            </div>
            <div className="page-numbers-div">
              {numbers.map((number) => {
                return (
                  <button key={number.id} className="number-page" onClick={() => setPageNumber(number.value)}>
                    {number.value}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default QuerySearch;
