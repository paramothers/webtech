function extend2(Child, Parent){

    let p = Parent.prototype;
    let c = Child.prototype;

    for(const prop in p){
        c[prop] = p[prop];
    }

    c.uber = p;
}