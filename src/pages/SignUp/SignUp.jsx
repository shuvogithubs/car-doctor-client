import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const {createUser} =useContext(AuthContext);

    const handleSignUp =event =>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)


        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user)
        })
        .catch(error=>console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-[#FFF]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-24 w-1/2">
           <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <h2 className="text-5xl text-center font-bold">SignUp</h2>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                
                <input className="btn btn-primary" type="submit" value="Sign up" />
              </div>
              <p className="text-xl font-semibold text-center">or login with</p>
              <div className="flex justify-center gap-4">
              
              <FaFacebook></FaFacebook>
              <FaGoogle></FaGoogle>
              <FaLinkedin></FaLinkedin>
              </div>
              <p className="text-center">Already have an account?<Link to={'/login'}><span className="text-[#FF3811]">login</span></Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;