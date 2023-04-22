import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/',
    params:{
        key: "fdcd9d3f708642a7b0f208f798d7c39b",
    }
})

export {CanceledError}