import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import validation from "./validation";

const Registration = () => {
  
  // const history = useHistory();
  let navigate = useNavigate();

  const [Info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
 
  const submitHandler = (e) => {
    e.preventDefault();

    if(Info.name.length > 0  && Info.email.length > 0){

      console.log("added#==",Info.name);
      console.log("added#==",Info.email);
      /// api call to backend
      alert("registration sucess")
      navigate("../login", { replace: true });

    }else{
      
      alert("registration fail")
    }


  };
  
 
  return (
     

      <div className="container">
        <div className="app-wrapper">
          <div>
            <h1>Registration</h1>
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                name="fullname"
                className="fill"
                value={Info.name}
                onChange={(e) => setInfo({ ...Info, name: e.target.value })} //  required
              />

              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="mail-id">
              <input
                type="email"
                placeholder="Enter Email-id"
                name="email"
                className="fill"
                value={Info.email}
                onChange={(e) => setInfo({ ...Info, email: e.target.value })} // required
              />

              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="mail-id">
              <input
                type="password"
                placeholder="Enter New Password"
                name="password"
                className="fill"
                value={Info.password}
                onChange={(e) => setInfo({ ...Info, password: e.target.value })} //  required
              />
              {errors.password && <p className="error">{errors.password}</p>}   
            </div>

            <div className="mail-id">
              <input
                type="password"
                placeholder="confirm Password"
                name="confirmPassword"
                className="fill"
                value={Info.confirmPassword}
                onChange={(e) =>
                  setInfo({ ...Info, confirmPassword: e.target.value })
                } //  required
              />

              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="login-btn">
              <button onClick={(e) => submitHandler(e)} >
                Register
              </button>
            </div>

            {/* <div className="reg-link">
              <p>If Account exist then</p>
              <Link className="link" to="/login">
                <li>Login!!!</li>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
   
  );
};

export default Registration;
