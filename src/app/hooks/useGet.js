import axios from '../config/axios';
import {BASE_URL_API} from '../config/env';
import useQuery2 from "./useQuery2";
import {useParams} from "react-router-dom"
import {passParams} from "../router/routes";

export const useGet = (url, queryKey) => {
    const params = useParams()
    return useQuery2({
        queryKey: queryKey,
        queryFn: () => axios.get(`${BASE_URL_API}${passParams(`${url}`, params)}`).then(({data}) => data)
    });
};