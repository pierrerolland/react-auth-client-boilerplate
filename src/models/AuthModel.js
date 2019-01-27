import Model from './Model';

export default new class AuthModel extends Model {
    login = (_username, _password) => this.post('login', {
        _username,
        _password
    }, false);

    me = () => this.get('me');
}();
