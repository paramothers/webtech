class Cache {
  get(key, defaultValue) {
    const value = this.doGet(key);
    if (value === undefined || value === null) {
      return defaultValue;
    }
    return value;
  }

  set(key, value){

    if(key === undefined || key === null){

        throw new Error('Invalid Key '+key);
    }
  }

  doGet(key){

  }
}

class ArrayCache extends Cache {

    doGet(){

    }

    doSet(){
        
    }
}
