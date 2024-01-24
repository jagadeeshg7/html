import React,{ useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import UserCard from "./UserCard";
import UserDetails from "./UserDetails";
import './index.css';


const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {

  const [userData, setUserData ]= useState([]);

  const fetchData = async (apiUrl) => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setUserData(data);
  };
  useEffect( () => {
    fetchData(URL);
  },[])

  
  return <div>
    <NavBar/>
    <Routes>
      <Route path="/users" element={<UserCard userData={userData} />}  />
       <Route path="/users/:userId"  element={<UserDetails userData={userData} />}/>
    </Routes>
   { console.log(userData)}
  </div>;
  
};

export default App;
