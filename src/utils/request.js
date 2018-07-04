import Vue from 'vue';
import axios from 'axios';
let httpInstance = axios.create({
    header: {
        //"Accept-Content":"applicatio/json"
    },
    baseURL:"http://localhost:3000"
})

httpInstance.interceptors.request.use((config) => {
    return config
}, (err) => {
    console.log(err);
})

httpInstance.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data
    } else {
        return response
    }
})

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$https', {
            value: httpInstance
        })
    }
}