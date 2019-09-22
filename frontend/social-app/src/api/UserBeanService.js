import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class UserBeanService {

    retrieveAllUserBeans() {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/`);
    }

    retrieveUserBean(id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${id}`);
    }

    deleteUserBean(id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${id}`);
    }

    updateUserBean(name, id) {
        //console.log('executed service')
        //return axios.put(`${JPA_API_URL}/users/${id}`, userBean);
    }

    createUserBean(name, id) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${id}`, userBean);
    }

}

export default new TodoDataService()