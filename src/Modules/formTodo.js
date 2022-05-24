import React, {useState} from "react";
import './formTodo.css';

const FormTodo = (props) => {
    const [value, setValue] = useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(value) {
            props.addTodo(value)
            setValue("");
        }
    }

    return (
    <form onSubmit={onSubmitHandler}>
    <label className="form-label"><b>Add Todo</b></label>
    <input type="text" onChange={(e) => {setValue(e.target.value)}} value={value} className="form-input"/>
    <button className="primary_button">
        Add Task
    </button>
    </form>
  );

};


export default FormTodo;