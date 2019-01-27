import Model from './Model';

export default new class UserModel extends Model {
    register = (username, password, email) => this.post('register', {
        username,
        password,
        email
    });
}();
