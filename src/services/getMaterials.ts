import { client } from "@kbaw/client";
import { IMaterial } from "@kbaw/services/models";
import { IDropdownItem } from "@typings/props";

export async function getMaterialsAsync(): Promise<IDropdownItem[]> {
    const result = await client.getAsync<IMaterial[]>("/Materials/GetMaterials");

    return result.map((material: IMaterial) => {
        let dropdownItem: IDropdownItem = {
            key: material.key,
            value: material.value,
            displayName: material.name
        };

        return dropdownItem;
    });
}
