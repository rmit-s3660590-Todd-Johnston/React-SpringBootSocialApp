import axios from 'axios'
import { API_URL } from '../Constants'

class UserBeanService {

    retrieveAllUserBeans() {
        console.log('executed retrieveAllUserBeans');
        return axios.get(`${API_URL}/users`);

    }

    retrieveUserBean(id) {
        //console.log('executed service')
        return axios.get(`${API_URL}/users/${id}`);
    }

    retrieveUserBeanByUserName(user_name){
        return axios.get(`${API_URL}/users/${user_name}`)
    }

    deleteUserBean(id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/users/${id}`);
    }

    updateProfilePic(id,user){
        return axios.put(`${API_URL}/users/${id}`);
    }

    updateUserBean(id, profilePic) {
        console.log('executed updateUserBean');
        return axios.put(`${API_URL}/users/${id}`, {profilePic});
    }

    createUserBean(id, user_name, name, last_name, password, isMentor) {
        //console.log('executed service')
        return axios.post(`${API_URL}/users/${id}`, this.createUserBean(id, user_name, name, last_name, password, isMentor))
    }

}

export default new UserBeanService()