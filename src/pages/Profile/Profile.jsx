import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getByIdUser } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";

const Profile = () => {
  const {user, allUser} = useAuth()
  const [send, setSend] = useState(false)
  const [res, setRes] = useState()
  
  console.log(allUser)
  
  return <div>Profile</div>;
};

export default Profile;
