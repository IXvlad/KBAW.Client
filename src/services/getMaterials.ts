import { client } from "@kbaw/client";
import { IMaterial } from "@kbaw/services/models";

export async function getMaterialsAsync(): Promise<IMaterial[]> {
    return await client.getAsync<IMaterial[]>("/Materials/GetMaterials");
}
