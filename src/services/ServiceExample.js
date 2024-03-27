import config from "../config";
import axios from "axios";

export const GetExample = async () => {
    return await axios.request({
        url: "/example",
        method: "get",
        baseURL: config.url_service,
        headers : {
            'apikey' : config.key
        },
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}