import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
     
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser,updateUserProfile } = useContext(AuthContext)
    const handleRegister = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {

                const user = result.user;
                alert("Create Successfull")
                const profile = {
                    displayName : data.name,
                    
                  }
                  updateUserProfile(profile)
                  .then(() =>{ 
                    navigate('/login')
                  })
                  .catch(error =>console.error(error));

            })
            .catch((error) => {
                console.error(error)
                
              });
    }
    return (
        <div className='h-[800px]  flex justify-center items-center' >
            <div className='w-96 h-[570px] rounded-lg shadow-lg p-10'>
                <h1 className='text-center text-3xl font-bold'>Register</h1>
                <form onSubmit={handleSubmit(handleRegister)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>

                        <input type="text" {...register("name",

                            { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>

                        <input type="email" {...register("email",

                            { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" {...register("password",
                            {
                                required: "password is required",
                                minLength: { value: 6, message: "password must 6 character or long" }
                            })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt">forget password?</span>

                        </label>


                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn w-full' type="submit" value='Register' />
                </form>
                <label className="label">
                    <span className="label-text-alt">Already have an account?</span>
                    <Link to='/login' className='text-primary'>Login</Link>
                </label>
                <div className="divider">OR</div>

                <button className="btn btn-outline w-full">Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;