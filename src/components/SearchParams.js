import { useState, useEffect } from "react";
import CardList from "./CardList";

const SearchParams = () => {
  const [cats, setCats] = useState([]);
  const [searchCat, setSearchCat] = useState("");

  useEffect(() => {
    getCats();
  }, []);

  async function getCats() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await res.json();
    setCats(json);
    console.log(json);
  }

  const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchCat.toLowerCase()))

  return (
    <div className="text-center">
      <input
        type="search"
        placeholder="search for cat..."
        className="p-3 border border-gray-400 mt-10 text-md outline-none"
        value={searchCat}
        onChange={e => setSearchCat(e.target.value)}
      />
      <CardList cats={filteredCats} />
    </div>
  );
};

export default SearchParams;
