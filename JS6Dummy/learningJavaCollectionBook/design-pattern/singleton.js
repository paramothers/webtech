const _data = [];
const UserStore = {

    add: item => _data.push(item),
    get: id => _data.find(one => one.id === id)
};

Object.freeze(UserStore);
export default UserStore;