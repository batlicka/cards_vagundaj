import React, {useState} from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Form from "./components/Form/Form";
import { headingStyle, inputStyle, buttonStyle } from "./styles/Styles";

import Users from './mocks/cards.json'; //import json
import Card from "./components/Card/Card";

function App() {
  const[users, setUsers] = useState(Users);//useState(Users)...hook nastavuje defaultní stav
  const[name, setName]=useState('');
  const[description, setDescriprion] = useState('');
  const[editingState, setEditingState] = useState(false);

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

  const handleCloseClicked = id=>{
    const filteredUsers = users.filter(user=>user.id!=id);//odfiltruje všechno, které se nerovná
    setUsers(filteredUsers);
  };

  const handelEditClicked = id=>{
    //
  }

//{user.map()} mohlo by být i samostatně
const renderUserCards =()=>users.map(({id, name, description,editingState})=>{
  return(
    <Card 
    keyy={id} 
    name={name} 
    description={description}
    editingState={editingState}
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
        <button 
        onClick={handelAddUserClicked} 
        style={buttonStyle} 
        disabled ={inputsAreEmpty}>
        Add</button>
      </Form>
      {/* <Card name = "Dummy text" description='Text'/> */}
      {renderUserCards()}
      
    </Layout>
  );
}

export default App;
