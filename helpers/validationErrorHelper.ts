export const validateErrors = (errors: any) => {
  errors.forEach((err: any) => {
    switch (err.code) {
      case "any.required":
        err.message = `Error: '${err.local.label}' is required`;
        break;
      case "string.empty":
        err.message = `Error: '${err.local.label}' should not be empty`;
        break;
      case "string.alphanum":
        err.message = `Error: '${err.local.label}' must have valid format`;
        break;
      case "string.email":
        err.message = `Error: '${err.local.value}' should be valid email`;
        break;
      case "string.min":
        err.message = `Error: '${err.local.label}' should have at least ${err.local.limit} characters`;
        break;
      case "string.max":
        err.message = `Error: '${err.local.label}' should have at most ${err.local.limit} characters`;
        break;
      default:
        break;
    }
  });
  return errors;
};
