import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContexts } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../../hooks/useToken';


const SignUp = () => {
    const {createUser,updateUser} = useContext(AuthContexts)
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [signUpError,setSignUpError] = useState('');
    const [createdEmailUser, seTcreatedEmailUser] = useState('')
    const [token] = useToken(createdEmailUser);
    const navigate = useNavigate();

    if(token){
      navigate('/')
    }

    const handelLogin = (data) => {
      setSignUpError('')
      console.log('input values-------------->', data);
      createUser(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log('createUser-------------------> user---------',user);
        toast('User Create Successfully')
        const userInfo = {
          displayName:data.name
        }
        console.log('after created user info', userInfo)
        updateUser(userInfo)
        .then((res)=> {
          console.log('inside update user')
          console.log('update user Response---------->',res)
          saveUser(data.name, data.email);
        })
        .catch(err => console.err(err))
      })
      .catch(error => {
        console.log(error)
        setSignUpError(error.message)
      });
    };
   
     const saveUser = (name, email) =>{
          const user = {name, email};
          fetch('http://localhost:5000/users', {
            method:'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data=>{
          console.log('save user', data);
          seTcreatedEmailUser(email)
          })

     }

    


    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handelLogin)}>
        <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: "Name is required",
              })}
            />
          </div>  
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                  minLength: { value: 6, message: "Password must be 6 characters long" },
                  pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full max-w-xs"
            value="Sign Up"
            type="submit"
           
          />
          <div>
              {signUpError && <p>{signUpError}</p>}
          </div>
        </form>
        <p>
          <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>

        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  
    );
};

export default SignUp;