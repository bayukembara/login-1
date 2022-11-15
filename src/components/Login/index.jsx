import React from "react";

function Login() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <form action="" className="space-y-5">
        <center>
          <h1 className="text-white text-[30px] font-bold">Login Here</h1>
        </center>
        <center>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
            className="w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white"
            required
          />
        </center>
        <center>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
            className="w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white"
            required
          />
        </center>
        <center>
          <a
            href="#"
            className="text-white text-lg hover:text-bold hover:border-b border-spacing-5 duration-300"
          >
            Forgot Password
          </a>
        </center>
        <center>
          <input
            type="submit"
            value="Submit"
            className="w-96 p-2 px-3 bg-transparent border border-white outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300"
          />
        </center>
      </form>
    </div>
  );
}

export default Login;
