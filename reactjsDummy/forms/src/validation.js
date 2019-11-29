import validator from "validator";

export function ValidateData(data, rules) {
  let errors = {};
  Object.keys(data).forEach(field => {
    if (rules.hasOwnProperty(field)) {
      let fielderros = [];
      let val = data[field];

      if (rules[field].true) {
        if (!val) {
          fielderros.push("Must be checked");
        }
      } else {
        if (rules[field].required && validator.isEmpty(val)) {
          fielderros.push("Value required");
        }

        if (!validator.isEmpty(data[field])) {
          if (
            rules[field].minlength &&
            !validator.isLength(val, rules[field].minlength)
          ) {
            fielderros.push(
              `Enter at least ${rules[field].minlength} characters`
            );
          }
          if (rules[field].alpha && !validator.isAlpha(val)) {
            fielderros.push("Enter only letters");
          }

          if (rules[field].email && !validator.isEmail(val)) {
            fielderros.push("Enter a valid email address");
          }

          if(rules[field].equals && !validator.equals(val, data[rules[field].equals])){
            fielderros.push("Value dont match");
          }
        }
      }
      if (fielderros.length > 0) {
        errors[field] = fielderros;
      }
    }
  });
  return errors;
}
