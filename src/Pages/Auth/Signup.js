import React, { useEffect, useState } from "react";
import Api from "../../Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from "react-router-dom";
import { ToastItem } from "react-toastify";

const Register = () => {
    /** Getting data from form */
    const [inputs, setInputs] = useState({});
    let history = useHistory()
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        Api.axios_instance.post(Api.baseUrl+'auth/users/', inputs)
        .then(res => {
            toast('🦄 An Activation Link Has Been Sent To Your Email. Cick on the link in your email to get your account activated!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        .catch(err => {
            toast.error(err.response.data.detail, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
        .finally(() => {
            document.getElementById('register').reset();
        })
    }

    const unsubscribe = toast.onChange((payload) => {
        if (payload.status == 'removed'){
                history.push('/signin')
            }
        }
    )
   
    useEffect(() => {
        unsubscribe()  
    })

    return(
        <div className="login">
        <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
            {/* <!-- BEGIN: Register Info --> */}
            <div className="hidden xl:flex flex-col min-h-screen">
                <a href="" className="-intro-x flex items-center pt-5">
                    <img alt="Suare" className="w-6" src={require("../../assets/images/logo.svg").default} />
                    <span className="text-white text-lg ml-3"> Square </span> 
                </a>
                <div className="my-auto">
                    <img alt="Square" className="-intro-x w-1/2 -mt-16" src={require("../../assets/images/crypto.png")} />
                    <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                        A few more clicks to 
                        <br />
                        sign up to your account.
                    </div>
                    <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-slate-400">Crypto Trading Made Easy</div>
                </div>
            </div>
            {/* 
                <!-- END: Register Info -->
                <!-- BEGIN: Register Form --> 
            */}
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0 mt-4">
                <form id="register" onSubmit={handleSubmit}>
                <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left mt-5">
                        Sign Up
                    </h2>
                    <div className="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">A few more clicks to sign in to your account.  We're ready to process your request.</div>
                    <div className="intro-x mt-8">
                        <input type="text" className="intro-x login__input form-control py-3 px-4 block" placeholder="First Name" name="first_name" value={inputs.first_name || ''} onChange={handleChange}/>
                        <input type="text" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Last Name" name="last_name" value={inputs.last_name || ""}  onChange={handleChange}/>
                        <input type="text" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Phone Number" name="phone_number" value={inputs.phone_number || ""}  onChange={handleChange}/>
                        <input type="text" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Email" name="email" value={inputs.email || ''} onChange={handleChange}/>
                        <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password" name="password"  value={inputs.password || ''} onChange={handleChange}/>
                        {/* <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
                            <div className="col-span-3 h-full rounded bg-success"></div>
                            <div className="col-span-3 h-full rounded bg-success"></div>
                            <div className="col-span-3 h-full rounded bg-success"></div>
                            <div className="col-span-3 h-full rounded bg-slate-100 dark:bg-darkmode-800"></div>
                        </div> */}
                        {/* <a href="" className="intro-x text-slate-500 block mt-2 text-xs sm:text-sm">What is a secure password?</a>  */}
                        <input type="password" className="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password Confirmation" name="re_password"  value={inputs.re_password || ''} onChange={handleChange}/>
                    </div>
                    <div className="intro-x flex items-center text-slate-600 dark:text-slate-500 mt-4 text-xs sm:text-sm">
                        <input id="remember-me" type="checkbox" className="form-check-input border mr-2" />
                        <label className="cursor-pointer select-none" for="remember-me">I agree to the Square</label>
                        <a className="text-primary dark:text-slate-200 ml-1" href="">Privacy Policy</a>
                    </div>
                    <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                        <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" type="submit">Register</button>
                      <Link to="/signin">  <button className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top" >Sign in</button> </Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>
        <ToastContainer />
        </div>
    )
}

export default Register