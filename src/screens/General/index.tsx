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
    const herosArray = heros?.map((hero: herosType) => (
        <HeroCard hero={hero} addFavorite={addFavorite} action={"add"} />
    ));
    const [columns, setColumns] = useState(Math.trunc(window.innerWidth / 350));

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
    if (isLoading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    return (
        <Grid
            columnCount={5}
            columnWidth={350}
            height={500}
            rowCount={matrixHeros.length}
            rowHeight={230}
            width={1800}
        >
            {Cell}
        </Grid>
    );
};

export default General;
