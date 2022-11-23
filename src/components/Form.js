import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { ValidationSchema } from "./ValidationSchema";

const initialValue = {
  fullName: "",
  email: "",
  password: "",
  ConfirmPassword: "",
};




const Form = () => {
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: ValidationSchema,
      onSubmit: (values, action) => {
        console.log(values);

        action.resetForm();
      },
    });
    
   

  return (
    <>
      <div className="h-full w-[500px]   bg-gradient-to-br from-green-200 to-blue-600 shadow-2xl overflow-hidden md:m-auto md:mt-[117px] py-5  md:rounded-3xl">
        <form onSubmit={handleSubmit} className="  w-[470px] m-auto ">
          <h1 className=" text-center  mt-6 text-3xl py-5  "> Sign Up Form </h1>
          <div className="md:flex md:items-center mb-6 mx-9">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="  md:w-2/3 sm:w-[78%]">
              <input
                className="bg-white appearance-none border-2 border-gray-200 rounded-3xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                name="fullName"
                autoComplete="off"
                value={values.fullName}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.fullName && errors.fullName ? (
                <p className="form-error text-red-700"> {errors.fullName} </p>
              ) : null}
            </div>
          </div>

          <div className="md:flex md:items-center mb-6  mx-9">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-email"
              >
                Email
              </label>
            </div>

            <div className="md:w-2/3 sm:w-[78%]">
              <input
                className="bg-white appearance-none border-2  border-gray-200 rounded-3xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                id="inline-email"
                type="email"
                name="email"
                autoComplete="off"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.email && errors.email ? (
                <p className="form-error  text-red-700"> {errors.email} </p>
              ) : null}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6  mx-9">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3 sm:w-[78%]">
              <input
                className="bg-white appearance-none border-2 border-gray-200 rounded-3xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                autoComplete="off"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.password && errors.password ? (
                <p className="form-error text-red-700"> {errors.password} </p>
              ) : null}
            </div>
          </div>

          <div className="md:flex md:items-center mb-6 mx-9">
            <div className="md:w-1/3 ">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password-2"
              >
                Confirm Password
              </label>
            </div>
            <div className="md:w-2/3 sm:w-[78%]">
            
              <input                className="bg-white appearance-none border-2 border-gray-200 rounded-3xl w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password-2"
                type="password"
                autoComplete="off"
                name="ConfirmPassword"
                value={values.ConfirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {touched.ConfirmPassword && errors.ConfirmPassword ? (
                <p className="form-error text-red-700">
                  {errors.ConfirmPassword}
                </p>
              ) : null}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6  mx-9">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-600 font-bold mx-1">
              <input className="mr-2   leading-tight" type="checkbox" />
              <span className="text-sm  ">Send me your newsletter!</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 mx-[60px] ">
             <Link to='/GoBackToSignUp'> <button disabled={values.fullName.length===0}  type="submit" className=" SignupButton sm:w-[6rem] w-[360px] text-white bg-red-700 hover:bg-green-800  focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
             
             Sign Up
           </button>  </Link>
            </div>
          </div>
        </form>
      </div>s4
    </>
  );
};

export default Form;
