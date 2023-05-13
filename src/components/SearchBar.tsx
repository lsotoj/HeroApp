const SearchBar = () => {
  return (
    <div className="flex flex-row	rounded-full bg-bgRowColor py-2 px-4">
      <img src="src\assets\search\search.svg" alt="Search Logo" />
      <input
        className="w-80 bg-transparent"
        type="text"
        id="text-input"
        name="text-input"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
