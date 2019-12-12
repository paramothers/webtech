export function GetValidationMessage(elm){

    let errors = [];
    if(!elm.checkValidity()){

        if(elm.validity.valueMissing){
            errors.push("Value required");
        }
        if(elm.validity.tooShort){
            errors.push("Value is too short");
        }
        if(elm.validity.rangeUnderflow){
            errors.push("Value is too small");
        }
    }
    return errors;
}