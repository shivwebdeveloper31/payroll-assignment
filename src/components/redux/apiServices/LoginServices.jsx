import axios from 'axios';

function AuthServices() {

    //1. Login Auth
    this.LoginAuth = async body => await axios.post(`/Account/authenticate`, body);

}

export default new AuthServices();
