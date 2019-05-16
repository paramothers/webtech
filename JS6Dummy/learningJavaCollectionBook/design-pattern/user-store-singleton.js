class UserStore{

    constructor(){

        if(!UserStore.instance){

            this._data = [];
            UserStore.instance = this;
        }
       
        return UserStore.instance
    }

    

    addItem(item){

        this._data.push(item);
    }

    get(id){

        return this._data.find(dat => dat.id === id);
    }    
}

const instance = new UserStore();
Object.freeze(instance);

export default instance;