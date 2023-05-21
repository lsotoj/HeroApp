import { ChangeEvent } from "react";
type props = {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ handleSearch }: props) => {
    return (
        <div className="flex justify-between mt-12 mb-6">
            <span className="text-3xl font-bold">All superheros</span>
            <div className="flex flex-row rounded-full bg-bgRowColor py-2 px-4">
                <img src="src\assets\search\search.svg" alt="Search Logo" />
                <input
                    onChange={handleSearch}
                    className="w-3/5 bg-transparent px-3 outline-none	"
                    type="text"
                    id="text-input"
                    name="text-input"
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default Search;
