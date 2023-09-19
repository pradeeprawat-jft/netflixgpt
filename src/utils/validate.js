export const validateData = (email, password) => {
  const testEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const testPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!testEmail) return "Email Address is not valid";
  if (!testPassword) return "Password is not valid";
  return null;
};
