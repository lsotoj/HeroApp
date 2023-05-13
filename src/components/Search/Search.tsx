import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="flex justify-between mt-12 mb-6">
      <span className="text-3xl font-bold">All superheros</span>
      <SearchBar />
    </div>
  );
};

export default Search;
