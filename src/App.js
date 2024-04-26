import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Welcome from "./Welcome";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault();
    if(username === "user" && password === "password" ) {
      setError("");
      setIsSubmitted(true)
    }
    else{
      setError("Invalid username or password")
      setIsSubmitted(false)
    }
    

  };
  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted? (
        <div>
          <p>Welcome, {username}</p>
        </div>
      ): (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="username">Username</label>
            <input 
            type="text"
            value={username}
            id="username"
            placeholder="username"
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            required
            />
            <label htmlFor="password">Password</label>
            <input 
            type="text"
            value={password}
            id="username"
            placeholder="password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>

        </form>
      )}
    </div>
  );
}

export default App;
