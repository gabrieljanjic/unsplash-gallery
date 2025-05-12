import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { numbers } from "./data";
const url = "https://api.unsplash.com/search/photos/?per_page=20&orientation=landscape&client_id=JRD585-DlCVyhZXEWnT59R7TpjDtnlgRQEgav3_flcg";
const QuerySearch = () => {
  const [searchCategory, setSearchCategory] = useState("car");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["random-img"],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchCategory}`);
      return result.data;
    },
  });
  if (isLoading) return <div>Učitavanje slike...</div>;
  if (isError) return <div>Greška: {error.message}</div>;
  const results = data.results;
  console.log(results);
  return (
    <section className="flex-gallery">
      <div className="grid-gallery">
        {results.map((item) => {
          return <img src={item.urls.small} className="img" key={item.id} />;
        })}
      </div>
      <div className="page-numbers-div">
        {numbers.map((number) => {
          return (
            <button key={number.id} className="number-page">
              {number.value}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuerySearch;
