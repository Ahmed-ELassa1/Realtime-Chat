import React from "react";
import { useState } from "react";

export default function Register() {
  let [userRegister, setUserRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });
  let [apiError , setApiError ] = useState("")
  let [validateError , setValidateError ] = useState([])
  let [ loading , setLoading] = useState(false)

  function validateUser (){
    // let schema = joi.valid
  }

  return <div>register</div>;
}
