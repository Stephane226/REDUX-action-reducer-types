import React from 'react';
import {Link} from 'react-router-dom';
import {viewİtem} from '../../actions/todo/todo';


import { useDispatch, useSelector } from 'react-redux';

//INPORT CSS
import classes from '../../assets/css/todolist.module.css';




function Voir(){

 const Viewİtemİd = useSelector(state => state.TodoReducer.Viewİtemİd);
 console.log(Viewİtemİd) 
const todolist = useSelector(state => state.TodoReducer.todolist.filter(index => index.id == Viewİtemİd));
    let list = todolist.map((item,index)=>{
        return(
            
            <div  key={index} className={classes.Container_bar_container_see}>
            <div className={classes.Container_text_container}>
                <div className={classes.container_text}>
                    <p>{item.nom}</p>
                </div>
                <div className={classes.container_text}>
                    <p>{item.prenom}</p>
                </div>
                <div className={classes.container_text}>
                    <p>{item.age}</p>
                </div>
            </div>
            <div className={classes.Container_button_container}>
                
               
            </div>
        </div>
        )
    })

    return (
        <div className={classes.Container}>
            <div className={classes.Container_todo_container}>
                <h2>Todo App</h2>
                <Link to="/todo-list" className={classes.creer}>Go Back</Link>
            </div>
           {list}
        </div>
    )
}

export default Voir