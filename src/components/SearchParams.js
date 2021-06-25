import { useState, useEffect } from "react";
import CardList from "./CardList";

const SearchParams = () => {
  const [cats, setCats] = useState([]);
  const [searchCat, setSearchCat] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCats();
    setIsLoading(false)
  }, []);

  async function getCats() {
    setIsLoading(true)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await res.json();
    setCats(json);
  }

  const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchCat.toLowerCase()))

  return (
    <div className="text-center">
      <input
        type="search"
        placeholder="search for cat..."
        className="p-3 border border-gray-400 my-10 text-md outline-none shadow-md"
        value={searchCat}
        onChange={e => setSearchCat(e.target.value)}
      />
      <CardList cats={filteredCats} isLoading={isLoading} />
    </div>
  );
};

export default SearchParams;
