import { IDropdownItem } from "@typings/props";

export async function getMaterialsAsync(): Promise<IDropdownItem[]> {
    //const result = await client.getAsync<IMaterial[]>("/Materials/GetMaterials");

    return [
        {
            key: "Al",
            value: 4,
            displayName: "Aluminum"
        },
        {
            key: "AlAlloys ",
            value: 5,
            displayName: "Aluminum alloys"
        },
        {
            key: "CuZn",
            value: 6,
            displayName: "Brass"
        },
        {
            key: "BronzeAlloys ",
            value: 8,
            displayName: "Bronze alloys"
        }
    ];

    /*return result.map((material: IMaterial) => {
        let dropdownItem: IDropdownItem = {
            key: material.key,
            value: material.value,
            displayName: material.name
        };

        return dropdownItem;
    });*/
}
