import { useCallback, useEffect, useRef, useState, ChangeEvent } from "react";
import LogoHeros from "./components/LogoHeros";
import Search from "./components/Search/Search";
import General from "./screens/General";
import Liked from "./screens/Liked";
import { herosType } from "./types/herosType";

const URL = "https://akabab.github.io/superhero-api/api/all.json";

function App() {
    const [heros, setHeros] = useState<herosType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [favoritesId, setFavoritesId] = useState<number[]>([]);
    const [favoriteHeros, setFavoriteHeros] = useState<herosType[]>([]);
    const [searchResult, setSearchResult] = useState<herosType[]>([]);
    const [error, setError] = useState<boolean>(false);
    const herosRef = useRef<herosType[]>([]);

    // *Get Heros from the API and memorize the function and create a ref of heros
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(URL);
            if (response.ok) {
                const json = await response.json();
                setHeros(json);
                herosRef.current = json;
                setIsLoading(false);
            } else {
                setHeros([]);
                setIsLoading(false);
            }
        } catch (error: any) {
            setError(true);
        }
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    // *Get Heros from the API and memorize the function and create a ref of heros

    const addFavorite = (id: number, action: string) => {
        switch (action) {
            case "add":
                setFavoritesId([...favoritesId, id]);
                break;
            case "delete":
                const newFavoritesId = favoritesId.filter(
                    (favId) => id !== favId
                );
                setFavoritesId([...newFavoritesId]);
                break;
            default:
                break;
        }
    };

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const heroToSearch: string = event.target.value;
        const matchSearch: herosType[] = heros.filter(
            (hero) =>
                hero.biography.fullName.includes(heroToSearch) ||
                hero.name.includes(heroToSearch)
        );
        if (event.target.value === "") {
            setSearchResult([]);
            return;
        }
        setSearchResult(matchSearch);
    };

    useEffect(() => {
        const filteredFavHeros: herosType[] = herosRef.current.filter((hero) =>
            favoritesId.includes(hero.id)
        );

        setFavoriteHeros(filteredFavHeros);
    }, [favoritesId]);

    useEffect(() => {
        const newHeros: herosType[] = herosRef.current.filter(
            (hero) => !favoritesId.includes(hero.id)
        );
        setHeros([...newHeros]);
    }, [favoriteHeros]);

    return (
        <div className="w-full h-screen fixed bg-bgStartrack text-white pt-4 px-16 pb-6">
            <LogoHeros />
            <Liked
                favoriteHeros={favoriteHeros}
                isLoading={isLoading}
                addFavorite={addFavorite}
            />
            <Search handleSearch={handleSearch} />
            {searchResult.length > 0 ? (
                <General
                    heros={searchResult}
                    isLoading={isLoading}
                    error={error}
                    addFavorite={addFavorite}
                />
            ) : (
                <General
                    heros={heros}
                    isLoading={isLoading}
                    error={error}
                    addFavorite={addFavorite}
                />
            )}
        </div>
    );
}

export default App;
