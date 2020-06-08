import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "c6286f29-6613-4a55-b5f7-ec35d57c3099",
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        debugger
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}