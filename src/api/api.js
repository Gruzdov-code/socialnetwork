import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    // headers: ("API-KEY": "7757586875634289")
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },

    setFollow(id) {
        return instance.post(`follow/${id}`)
    },

    setUnfollow(id) {
        return instance.delete(`follow/${id}`)
    },

    getProfile(id){
        return instance.get(`profile/${id}`)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}