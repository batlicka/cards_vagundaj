import React, {useState} from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Form from "./components/Form/Form";

import { headingStyle, inputStyle} from "./styles/Styles";

import Users from './mocks/cards.json'; //import json
import Card from "./components/Card/Card";
import Button from './components/atoms/Button'
import Textarea from './components/atoms/Textarea'
import Input from './components/atoms/Input'

function App() {
  const[users, setUsers] = useState(Users);//useState(Users)...hook nastavuje defaultní stav
  const[name, setName]=useState('');
  const[description, setDescriprion] = useState('');
  const[editedName, setEditedName] = useState('');
  const[editedDescription, setEditedDescription] = useState('');
  const[editedID, setEditedID] = useState('');//pro  odchytavani ID
  

  const inputsAreEmpty = name ==='' || description ==='';
  //handlujem vytvoreni noveho uzivatele/karticky
  const handelAddUserClicked = ()=>{
    const newUser={
      id: users.length +10, //unikatni id pomoci delky
      name: name,
      description: description,
    };
    setUsers([newUser, ...users]);//...=spread sintax, na konec přidat všechny ostatní users
    setName('');
    setDescriprion('');
  };
  const handleShowUserEditClicked = id=>{
    setEditedID(id);//pouze 1 konkretni karta se da do edit state
    const editedUser = users.find(user=>user.id===id); 
    setEditedName(editedUser.name);
    setEditedDescription(editedUser.description);
  }

  const handleCloseClicked = id=>{
    const filteredUsers = users.filter(user=>user.id!==id);//odfiltruje všechno, které se nerovná
    setUsers(filteredUsers);
  };

  const handelEditClicked = id=>{
    //
  }
//handler
  const handleEditUserCardClicked = id =>{
    const editedUser = users.map(user=>{
      if(user.id === id){
        return{
          ...user,
          name: editedName,
          description: editedDescription,
        }
      }
      return user;
    })
    setUsers(editedUser);
    setEditedID(0);
  }

//{user.map()} mohlo by být i samostatně
const renderUserCards =()=>users.map(({id, name, description,editingState})=>{
  return(
    <Card 
    key={id} 
    id={id}
    editedName={editedName}
    editedID = {editedID}
    editedDescription={editedDescription}
    setEditedName={setEditedName}
    setEditedDescription={setEditedDescription}
    description={description}
    editingState={editingState}
    onEditClicked={()=>handleShowUserEditClicked(id)}
    onEditSaveClicked={()=>handleEditUserCardClicked(id)}
    
    name={name} 
    onCloseClicked={()=>handleCloseClicked(id)}    
    onEditeClicked={()=>handelEditClicked(false)}/>
  )
})

  return (
    <Layout>
      <h1 style={headingStyle}>Cards</h1>
      <Form>
      {
        /* onChange={event=>setName(event.target.value) ......hook naslouchání na změnu....nastavuje value */}
        <input 
         value={name}
         onChange={event=>setName(event.target.value)}         
         style={inputStyle} 
         name="name"
         placeholder="Name"></input>
        <textarea
          value={description}
          onChange={event=>setDescriprion(event.target.value)}
          style={inputStyle}
          name="desc"
          placeholder="Description"
        ></textarea>
        <Button onClick={handelAddUserClicked}
      disabled ={inputsAreEmpty}
      >added button</Button>
      </Form>
      {/* <Card name = "Dummy text" description='Text'/> */}
      {renderUserCards()}
      
    </Layout>
  );
}

export default App;
