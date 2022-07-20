export const validateErrors = (errors: any) => {
  errors.forEach((err: any) => {
    switch (err.code) {
      case "any.required":
        err.message = `Field ${err.local.label as string} is required`;
        break;
      case "string.empty":
        err.message = `Field ${err.local.label} should not be empty`;
        break;
      case "string.alphanum":
        err.message = `Field ${err.local.label} must have valid format`;
        break;
      case "string.email":
        err.message = `Field email shoud be valid email`;
        break;
      case "string.min":
        err.message = `Field ${err.local.label} should have at least ${err.local.limit} characters`;
        break;
      case "string.max":
        err.message = `Field ${err.local.label} should have at most ${err.local.limit} characters`;
        break;
      default:
        break;
    }
  });
  return errors;
};
