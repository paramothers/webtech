export default function ValidateForm(data){

    let errors = [];
    if(!data.email.endsWith("@example.com")){
       errors.push("Only example.com users are allowed");
    }

    if(!data.email.toLowerCase().startsWith(data.name.toLowerCase())){
        errors.push("Email address must statty with name");
    }
    if(data.name.toLowerCase() === "joe"){
        errors.push("Go away, Joe");
    }

    return errors;    
}