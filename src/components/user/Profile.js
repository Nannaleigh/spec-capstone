import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  return <>
      {loading ? <h1>Loading...</h1> : (
          <>
        <h2 classNameNameNameName="mt-5 ml-5">My Profile</h2>
        <div classNameNameNameName="row justify-content-around mt-5 user-info">
            <div classNameNameNameName="col-12 col-md-3">
                <figure classNameNameNameName='avatar avatar-profile'>
                    <img classNameNameNameName="rounded-circle img-fluid" src='' alt='' />
                </figure>
                <a href="#" id="edit_profile" classNameNameNameName="btn btn-primary btn-block my-5">
                    Edit Profile
                </a>
            </div>
     
            <div classNameNameNameName="col-12 col-md-5">
                 <h4>Full Name</h4>
                 <p>Ghulam Abbas</p>
     
                 <h4>Email Address</h4>
                 <p>ghulamabbas258@gmail.com</p>

                 <a href="#" classNameNameNameName="btn btn-danger btn-block mt-5">
                    My Orders
                </a>

                <a href="#" classNameNameNameName="btn btn-primary btn-block mt-3">
                    Change Password
                </a>
            </div>
        </div>  
        </> 
      )}
  </>;
};

export default Profile;
