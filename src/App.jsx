import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";


const App = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <div className={`container ${signIn ? "sign-in-mode" : "sign-up-mode"}`}>
    {/* Sign Up Form */}
    <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Sign Up</button>
      </form>
    </div>

    {/* Sign In Form */}
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button type="button">Sign In</button>
      </form>
    </div>

    {/* Overlay Section */}
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel left-panel">
          <h1 className="text-black p-6 pl-36 text-4xl">Dharma!</h1>
          <button className="ghost text-black  ml-28 mt-auto mb-2" onClick={() => setSignIn(true)}>
            Sign In
          </button>
        </div>
        <div className="overlay-panel right-panel">
          <h1>Hello, Friend!</h1>
          <p>Enter your details to start your journey with us</p>
          <button className="ghost" onClick={() => setSignIn(false)}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
