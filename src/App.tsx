import { useCallback, useEffect, useRef, useState } from "react";
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
    const [error, setError] = useState<boolean>(false);

    // *Get Heros from the API and memorize the function
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetch(URL);
            if (response.ok) {
                const json = await response.json();
                setHeros(json);
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
    // * End Get Heros from the API and memorize the function
    const previousHerosRef = useRef<herosType[]>([]);

    const addFavorite = (id: number, action: string) => {
        switch (action) {
            case "add":
                setFavoritesId([...favoritesId, id]);
                break;
            case "delete":
                const newFavoritesId = favoritesId.filter(
                    (favId) => id !== favId
                );
                // const deletedHero: herosType[] = favoriteHeros.filter(
                //     (hero) => hero.id === id
                // );
                // setHeros([...heros, ...deletedHero]);
                setFavoritesId([...newFavoritesId]);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        previousHerosRef.current = heros;
    }, [heros]);

    useEffect(() => {
        const filteredFavHeros: herosType[] = previousHerosRef.current.filter(
            (hero) => favoritesId.includes(hero.id)
        );

        setFavoriteHeros(filteredFavHeros);
    }, [favoritesId]);

    useEffect(() => {
        const newHeros: herosType[] = heros.filter(
            (hero) => !favoritesId.includes(hero.id)
        );
        setHeros([...newHeros]);
    }, [favoriteHeros]);
    console.log("Heros=>", heros);
    console.log("Favorites=>", favoriteHeros);

    return (
        <div className="w-full h-screen bg-bgStartrack text-white pt-4 px-16 pb-6">
            <LogoHeros />
            <Liked
                favoriteHeros={favoriteHeros}
                isLoading={isLoading}
                addFavorite={addFavorite}
            />
            <Search />
            <General
                heros={heros}
                isLoading={isLoading}
                error={error}
                addFavorite={addFavorite}
            />
        </div>
    );
}

export default App;
