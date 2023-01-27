import { event } from "jquery";
import React, { useEffect, useState } from "react";
// import React, {useState,useEffect } from "react";
import { useParams, Redirect, useHistory, Navigate, useNavigate} from "react-router-dom";
import Api from "../../Api";


const Activate = () => {
    const [success, setSuccess] = useState(false)
    let history = useHistory();
   
    let {uid, token} = useParams()
    const formData = {
      uid: uid,
      token: token
    };

    useEffect(() => {
      Api.axios_instance.post(Api.baseUrl+'auth/users/activation/', formData)
      .then(res => {
        console.log(res);
        setSuccess(true)
        console.log(success);
      })
      .catch(error => {
          console.log(error);
              // if (error.response){
              //     for(const property in error.response.data){
              //         this.errors.push(`${property}:${error.response.data[property]}`)
              //     }
              //     console.log(JSON.stringify(error.message));
              //     } else if (error.message){
              //         console.log(JSON.stringify(error.message));
              //     } else{
              //         console.log(JSON.stringify(error));
              //     }
              }
          )
    })
   useEffect(() => {
    console.log(success);
      if(success === true){
          history.push('/signin');
      }
   }, [success, history])
  
    return(
        <div>
          
      </div>
    )

}

export default Activate