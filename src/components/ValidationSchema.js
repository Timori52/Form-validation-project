import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  fullName: Yup.string().min(2).max(36).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string()
    .required("Please enter the password")
    .matches(/^(?=.*[A-Z])/, "Should contain a Uppercase letter")
    .matches(/^(?=.*[a-z])/, " Should contain Lowercase letter")
    .matches(/^(?=.*[0-9])/, "Should contain a Numeric value")
    .matches(/^(?=.*[!@#$%^&*])/, "Should contain atleast a Symbol")
    .matches(/^(?=.{8,})/,"Should contain atleast 8 Characters"),

  ConfirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password should match"),
});



