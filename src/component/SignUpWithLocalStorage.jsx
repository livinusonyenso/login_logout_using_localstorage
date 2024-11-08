import React, { useEffect, useState } from "react";
import Home from "./Home";

function SignUpWithLocalStorage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  let localStorageSign = localStorage.getItem("signup");
  let localStorageEmail = localStorage.getItem("email");
  let localStorageName = localStorage.getItem("name");

  useEffect(() => {
    if (localStorageSign) {
      setShow(true);
    }
    if (localStorageEmail) {
      setShowEmail(true);
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (name && email && pwd) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("pwd", pwd);
      localStorage.setItem("signup", email);
      setShow(true);
    }
    setTimeout(() => alert("Account created successfully"), 1000);
  };

  const handleLogOut = () => {
    localStorage.removeItem("signup");
    setShow(false);
    setTimeout(() => alert("you have succesfully logged out"), 1000);
  };

  const handleLogin = () => {
    if (
      email === localStorage.getItem("email", email) &&
      pwd === localStorage.getItem("pwd", pwd)
    ) {
      setShow(true);
    } else {
      alert("wrong email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {show ? (
        <Home handleLogOut={handleLogOut} />
      ) : showEmail ? (
        <div className="bg-white shadow-md rounded px-8 py-6 w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">
            <h1>Hello {localStorageName}</h1>
          </h2>

          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <label
            htmlFor="pwd"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            id="pwd"
            onChange={(e) => setPwd(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
          />

          <button
            type="submit"
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded px-8 py-6 w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            value={name}
            id="username"
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />

          <label
            htmlFor="pwd"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            id="pwd"
            onChange={(e) => setPwd(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
          />

          <button
            type="submit"
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
          >
            signup
          </button>
        </div>
      )}
    </div>
  );
}

export default SignUpWithLocalStorage;
