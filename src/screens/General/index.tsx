import { useEffect, useState, CSSProperties } from "react";
import HeroCard from "../../components/HeroCard";
import { herosType } from "../../types/herosType";
import { FixedSizeGrid as Grid } from "react-window";

type props = {
    heros: herosType[];
    isLoading: boolean;
    error: boolean;
    addFavorite: (id: number, action: string) => void;
};

type cellType = {
    columnIndex: number;
    rowIndex: number;
    style: CSSProperties;
};

const General = (props: props) => {
    const { heros, isLoading, error, addFavorite } = props;
    const [columns, setColumns] = useState(Math.trunc(window.innerWidth / 350));
    const [width, setWith] = useState(window.innerWidth);
    const herosArray = heros?.map((hero: herosType) => (
        <HeroCard hero={hero} addFavorite={addFavorite} action={"add"} />
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
    if (isLoading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }

    return (
        <Grid
            columnCount={columns}
            columnWidth={350}
            height={350}
            rowCount={matrixHeros.length}
            rowHeight={230}
            width={width}
        >
            {Cell}
        </Grid>
    );
};

export default General;
