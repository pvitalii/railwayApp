import {$host} from "./index"

export const fetchTrain = async (from:string, to:string) => {
    return await $host.get('api/train/fetch', {params: {from, to}})
}