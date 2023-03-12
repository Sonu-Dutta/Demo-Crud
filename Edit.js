import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EnvelopeAt, Telephone, Globe, PersonCheck, Bookmark } from "react-bootstrap-icons";
import './User.css'
function Edit() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3005/users/${id}`).then((res) => {
      setName(res.data.name);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setWebsite(res.data.website);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    username:username,
    email: email,
    phone: phone,
    website:website
  };
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  function Update(e) {
    e.preventDefault();
    e.preventDefault();
    if (name.trim().length < 6) {
      setNameError("Name should be atleast 6 characters long");
      return;
  } else {
      setNameError("");
  }
  if (username.trim().length < 6) {
    setUsernameError("Username should be atleast 6 characters long");
    return;
} else {
    setUsernameError("");
}

  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    setEmailError("Invalid email format");
    return;
} else {
    setEmailError("");
}

if (!/^\d{10}$/.test(phone)) {
    setPhoneError("Invalid phone number");
    return;
} else {
    setPhoneError("");
}
if (!/^http/.test(website)) {
  setWebsiteError("Website name should start with 'http'");
  return;
} else {
  setWebsiteError("");
}
    axios.put(`http://localhost:3005/users/${id}`, data).then(navigate("/"));
  }
  const isNameEmpty = name.trim() === '';
  const isUsernameEmpty = username.trim() === '';
  const isEmailEmpty = email.trim() === '';
  const isPhoneEmpty = phone.trim() === '';
  const isWebsiteEmpty = website.trim() === '';

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16 ">
      <h2 className="text-2xl font-bold">User Details</h2>
      <form className="w-[50%] h-full flex flex-col mt-2 ">
       <div className="form-group">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-3 pl-6 mt-2 form-control form-control-lg"
          type="text"
          placeholder="     Name"
        />
           {isNameEmpty && <PersonCheck className="form-icon" />}
                        {nameError && <span className="text-danger error-msg">{nameError}</span>}
                        </div>    

         
                        <div className="form-group">
                        <input
                             value={username}
                             onChange={(e) => setUsername(e.target.value)}
                             className="bg-white/10 outline-none font-normal border  py-3 pl-6 mt-2 form-control form-control-lg"
                             type="text"
                            placeholder="     Username"
                          
                        />
                        {isUsernameEmpty && <Bookmark className="form-icon" />}
                        {usernameError && <span className="text-danger error-msg">{usernameError}</span>}
             
                    </div>                
               
                        <div className="form-group">     
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-3 pl-6 mt-2 form-control form-control-lg"
          type="email"
          placeholder="     E-mail Address "
        />
           {isEmailEmpty && <EnvelopeAt className="form-icon" />}
                        {emailError && <span className="text-danger error-msg">{emailError}</span>}
        
        </div>
         <div className="form-group">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-3 pl-6 mt-2 form-control form-control-lg"
          type="phone"
          placeholder="     Phone Number"
        />
           {isPhoneEmpty && <Telephone className="form-icon" />}
                        {phoneError && <span className="text-danger error-msg">{phoneError}</span>}
                 
        </div>
        <div className="form-group">
                        <input
                         value={website}
                         onChange={(e) => setWebsite(e.target.value)}
                         className="bg-white/10 outline-none font-normal border  py-3 pl-6 mt-2 form-control form-control-lg"
                         type="website"
                          placeholder="     Website Name"
                                                   />
                        {isWebsiteEmpty && <Globe className="form-icon" />}
                        {websiteError && <span className="text-danger error-msg">{websiteError}</span>}
                 

                    </div>
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-3 pl-4 mt-2"
          type="submit"
          onClick={Update}
        >UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Edit;
