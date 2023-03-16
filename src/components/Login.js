import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";
import { Input } from "../ui/Input";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.auth);

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
  }

  console.log(isLoading);

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="border w-96 p-6 rounded">
        <h3 className="text-zinc-900 text-center pb-6 font-semibold text-lg">
          Login
        </h3>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input label={"Email"} state={email} setState={setEmail} />
          </div>
          <div className="mb-4">
            <Input label={"Password"} state={password} setState={setPassword} />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-zinc-700 hover:bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={loginHandler}
              type="button"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
