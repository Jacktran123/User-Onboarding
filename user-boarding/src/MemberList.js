import React from 'react';
import './MemberList.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from 'reactstrap';

const MembercardContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   flex-wrap: wrap;

`;

const MemberCard=styled.div`
  width: auto;
  height: auto;
  background: rgba(0,0,0,0.6);
  color: white;
  margin: 2%;
  padding: 1%;
  border: 4px solid yellow;
`;




const MemberList=( {newMember, ...props})=>{
    
    function goHome (){
      props.history.push('/');
    } 

    return(
        <div style={{ height: '100vh', background: '#821A6F'}} >
          <MembercardContainer>
           
                 {newMember.map(mem=> 
                 <MemberCard key={mem.id}>
                   <p> Name: {mem.Name} </p>
                   <p> Password: {mem.Password} </p>
                   <p> Email: {mem.Email} </p>
                   </MemberCard> )}
                
            
                
          </MembercardContainer>
          <Button onClick={goHome} color='primary' style={{ borderRadius:'50%', height: '7rem', marginTop: '5%'}}>  Go Home </Button>
          
             
        </div>
    );
}

export default MemberList;