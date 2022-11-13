import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleSignup = data =>{
        console.log(data)
    }
    
    return (
        <div className='h-[800px]  flex justify-center items-center' >
            <div className='w-96 h-[470px] rounded-lg shadow-lg p-10'>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleSignup)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>

                        <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">forget password?</span>

                        </label>


                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn w-full' type="submit" />
                </form>
                <label className="label">
                    <span className="label-text-alt">New to Doctors Portal?</span>
                    <Link className='text-primary'>Create Account</Link>
                </label> 
                <div className="divider">OR</div>
                
                <button className="btn btn-outline w-full">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;