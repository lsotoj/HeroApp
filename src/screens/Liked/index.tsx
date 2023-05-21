import { useEffect, useState, CSSProperties } from "react";
import { herosType } from "../../types/herosType";
import TitleLiked from "./components/TitleLiked";
import { FixedSizeGrid as Grid } from "react-window";
import HeroCard from "../../components/HeroCard";

type props = {
    favoriteHeros: herosType[];
    isLoading: boolean;
    addFavorite: (id: number, action: string) => void;
};
type cellType = {
    columnIndex: number;
    rowIndex: number;
    style: CSSProperties;
};

const Liked = (props: props) => {
    const { favoriteHeros, addFavorite } = props;
    const [columns, setColumns] = useState(Math.trunc(window.innerWidth / 350));
    const [width, setWith] = useState(window.innerWidth);
    const [rotate, setRotate] = useState<boolean>(false);

    const rotateRow = () => setRotate(!rotate);

    const herosArray = favoriteHeros?.map((hero: herosType) => (
        <HeroCard hero={hero} addFavorite={addFavorite} action={"delete"} />
    ));

    useEffect(() => {
        const updateWith = () => {
            setColumns(Math.trunc(window.innerWidth / 350));
            setWith(window.innerWidth - 150);
        };
        window.addEventListener("resize", updateWith);
        return () => {
            window.removeEventListener("resize", updateWith);
        };
    }, []);

    const matrixHeros = herosArray.reduce(
        (rows, key, index) =>
            (index % columns == 0
                ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows,
        []
    );
    const Cell = ({ columnIndex, rowIndex, style }: cellType) => (
        <div style={style}>{matrixHeros[rowIndex][columnIndex]}</div>
    );
    const arrowClassName = rotate
        ? "cursor-pointer bg-bgRowColor rounded-full w-10 h-10 transform rotate-180"
        : "cursor-pointer bg-bgRowColor rounded-full w-10 h-10";

    return (
        <div className="p-3 rounded-lg border border-borderLiked">
            <div className="flex justify-between mb-3">
                <div className="flex  items-center ">
                    <img
                        className="rounded-full bg-likedHeartColor p-3 w-10 h-10"
                        src="src\assets\medium-heart\medium-heart.svg"
                        alt="Medium filled heart"
                    />
                    <span className="text-3xl md:text-xl	 ml-2 font-semibold">
                        Liked
                    </span>
                </div>
                <img
                    onClick={rotateRow}
                    // className="cursor-pointer bg-bgRowColor rounded-full w-10 h-10"
                    className={arrowClassName}
                    src="src\assets\arrow-up\arrow-up.svg"
                    alt="Arrow up"
                />
            </div>
            {rotate ? (
                <Grid
                    columnCount={columns}
                    columnWidth={350}
                    height={210}
                    rowCount={matrixHeros.length}
                    rowHeight={230}
                    width={width}
                >
                    {Cell}
                </Grid>
            ) : null}
        </div>
    );
};

export default Liked;
