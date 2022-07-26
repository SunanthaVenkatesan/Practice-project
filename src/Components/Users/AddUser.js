import React,{useState} from "react";


import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";


const AddUser = (props) => {
    const [enteredUserName,setEnteredUserName]=useState('')
    const [enteredAge,setEnteredAge]=useState('')

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length===0||enteredAge.trim().length===0){
        return;
    }
    if(+enteredAge<1){//adding +enteredAge this as it indicates the entered text should be a number
        return;
    }

    props.onAddUser(enteredUserName,enteredAge)
    setEnteredUserName('')
    setEnteredAge('')
  };

  const userNameChangeHandler=(event)=>{
    setEnteredUserName(event.target.value)
  }
  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input className="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input className="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        
        <Button type="submit">Add User</Button>
      </form>
    
    </Card>
  );
};

export default AddUser;
