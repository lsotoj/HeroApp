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
    const herosArray = favoriteHeros?.map((hero: herosType) => (
        <HeroCard hero={hero} addFavorite={addFavorite} action={"delete"} />
    ));

    useEffect(() => {
        const updateWith = () => {
            setColumns(Math.trunc(window.innerWidth / 350));
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
    return (
        <div className="p-3 rounded-lg border border-borderLiked">
            <TitleLiked />
            <Grid
                columnCount={5}
                columnWidth={350}
                height={200}
                rowCount={matrixHeros.length}
                rowHeight={230}
                width={1800}
            >
                {Cell}
            </Grid>
        </div>
    );
};

export default Liked;
