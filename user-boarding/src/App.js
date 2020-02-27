import React, {useState,useEffect} from 'react';
import './App.css';
import UserForm from './Form';
import {Route} from 'react-router-dom';
import MemberList from './MemberList';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [data, setData]= useState({
  
  });
  const [newMember,setNewMember]= useState([{
    Name : 'Jack Tran',
    id: Date.now(),
    Password: 'jacktran123',
    Email: 'Jacktran1799@gmail.com',

  }])

   
     const addnewmember = data =>{
   
     const Newmember = {
       Name: data.Name,
       id: Date.now(),
       Password: data.Password,
       Email: data.email 
      }
      setNewMember( [Newmember])
      
    }
      

   

 


  return (
    <div className="App">
     <Route exact path='/' render={()=> <UserForm   addnewmember={addnewmember} setData={setData} data={data} newMember={newMember} setNewMember={setNewMember} />} />
    <Route exact path='/memberlist' render={props=> <MemberList  {...props} newMember={newMember} />} />
   
    </div>
  );
}

export default App;
