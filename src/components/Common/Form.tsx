import React, { useState } from "react";
import { Login, register } from "../../store/slice/authSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
export interface IUser {
  email: string;
  password: string;
}
function Form(props: any) {
  let navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const [form, setForm] = useState<IUser>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.email === "" || form.password === "") {
      setErrorMessage("Please fill the fields in the form");
      return;
    } else {
      setErrorMessage(""); 
    }
    const created =
      props.title === "signup"
        ? await dispatch(register(form))
        : await dispatch(Login(form));
    if (created && created.payload && created.payload.token) {
      navigate("/dashboard");
    }
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  return (
    <div className="flex-[0.35] bg-cyan-500 p-8 rounded-2xl w-[100%] border">
      <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        {props.title === "signup" ? "SignUp" : "LogIn"}
      </h3>
      <form
        className="mt-12 flex flex-col gap-8 bg-primary"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-tertiary border py-4 px-6 placeholder:text-secondary text-black-100 rounded-lg outline-none  font-medium"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Password</span>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="bg-tertiary border py-4 px-6 placeholder:text-secondary text-black-100 rounded-lg outline-none font-medium"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        {errorMessage && (
          <p className="text-red-500">{errorMessage}</p>
        )}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-tertiary border py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {props.title === "signup" ? "Register" : "Submit"}
          </button>
          {props.title === "signup" ? (
            <Link to={'/login'} className="underline text-slate-700">Already have an account !</Link>
          ):<Link to={'/'} className="underline text-slate-700">Create New Account.</Link>}
        </div>
      </form>
    </div>
  );
}

export default Form;
