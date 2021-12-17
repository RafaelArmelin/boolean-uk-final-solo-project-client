import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setAuthenticatedUser }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleNameInput = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setUserPassword(e.target.value);
  };

  console.log("User", userName, userEmail, userPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }),
    };

    fetch("${process.env.REACT_APP_SERVER_URL}/auth/signin", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        console.log("token: ", token);
        if (token) {
          setAuthenticatedUser(token);
          localStorage.setItem("token", token);
          navigate("/artists");
        }
      });
  };
  return (
    <form
      className="form-stack light-shadow center user-form"
      onSubmit={handleSubmit}
    >
      <h1>Sign In</h1>
      <label htmlFor="name-input">Name:</label>
      <input
        type="text"
        name="name-input"
        onChange={handleNameInput}
        required
      />
      <label htmlFor="email-input">Email:</label>
      <input
        type="text"
        name="email-input"
        onChange={handleEmailInput}
        required
      />
      <label htmlFor="password-input">password:</label>
      <input
        type="password"
        name="password-input"
        onChange={handlePasswordInput}
        required
      />
      <div className="actions-section">
        <button className="button blue" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
}
