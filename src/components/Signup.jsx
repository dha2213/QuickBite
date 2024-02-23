import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pincode, setPincode] = useState(""); // Add state for pincode
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
        pincode, // Include pincode in the request body
      });
      alert("User created successfully");
      navigate("/login"); // Use navigate function to redirect
    } catch (error) {
      console.error(error);
      alert("Error creating user");
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <h2 className="signup-heading">Create an account</h2>
          <form className="signup-form-fields" onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                required
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="flex justify-between">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter your password"
                required
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode" className="form-label">
                Pincode
              </label>
              <input
                id="pincode"
                name="pincode"
                type="text"
                autoComplete="pincode"
                placeholder="Enter your pincode"
                required
                className="form-input"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <button type="submit" className="signup-btn">
              Sign up
            </button>
          </form>
          <p className="signup-login-link">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// import axios from "axios";
// import "./SignUp.css";

// function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Use useNavigate hook

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/signup", {
//         email,
//         password,
//       });
//       alert("User created successfully");
//       navigate("/login"); // Use navigate function to redirect
//     } catch (error) {
//       console.error(error);
//       alert("Error creating user");
//     }
//   };

//   return (
//     <>
//       <div className="signup-container">
//         <div className="signup-form">
//           <h2 className="signup-heading">Create an account</h2>
//           <form className="signup-form-fields" onSubmit={handleSignUp}>
//             <div className="form-group">
//               <label htmlFor="email" className="form-label">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 placeholder="Enter your email"
//                 required
//                 className="form-input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <div className="flex justify-between">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//               </div>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 placeholder="Enter your password"
//                 required
//                 className="form-input"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="signup-btn">
//               Sign up
//             </button>
//           </form>
//           <p className="signup-login-link">
//             Already have an account?{" "}
//             <Link to="/login" className="login-link">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUp;
