import { getMaterialsAsync } from "@kbaw/services/getMaterials";
import { IMaterial } from "@kbaw/services/models";
import { useQuery } from "@tanstack/react-query";
import { FC, ReactElement } from "react";

const Example: FC<{}> = (): ReactElement => {
    const { isLoading, data, error } = useQuery([nameof(getMaterialsAsync)], getMaterialsAsync, { retry: false });

    if (isLoading) {
        return <div>loading...</div>;
    }

    if (error) {
        return <div>{error.toString()}</div>;
    }

    return (
        <div>
            {data.map((item: IMaterial) => (
                <p key={item.key}>{item.name}</p>
            ))}
        </div>
    );
};

const Main: FC<{}> = (): ReactElement => {
    return <Example />;
};

export default Main;
