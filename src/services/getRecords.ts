import { IRecord } from "@components/models";
import { client } from "@kbaw/client";

export async function getRecordsAsync(): Promise<IRecord[]> {
    return await client.getAsync<IRecord[]>("/Records/GetAllXmlRecords");
}
