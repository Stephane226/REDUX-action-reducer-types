// IMPORT DEPENDENCIES
import React, { useState } from "react";
import { createListService } from "../../actions/todo/todo";
import { Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

//INPORT CSS
import classes from '../../assets/css/creerlist.module.css';

const CreerList = () => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.TodoReducer.loading);
    const creerliststatus = useSelector(state => state.TodoReducer.creerliststatus);

    const [nom, setNom] = useState('')
    const [errorMessageNom, setErrorMessageNom] = useState(false)

    const [prenom, setPrenom] = useState('')
    const [errorMessagePrenom, setErrorMessagePrenom] = useState(false)

    const [age, setAge] = useState('')
    const [errorMessageAge, setErrorMessageAge] = useState('')


    const handleNom = (e) => {
        setErrorMessageNom(false)
        setNom(e.target.value)
    }

    const handlePrenom = (e) => {
        setErrorMessagePrenom(false)
        setPrenom(e.target.value)
    }

    const handleAge = (e) => {
        setErrorMessageAge(false)
        setAge(e.target.value)
    }

    const handleSubmit = () => {

        if (nom !== '' && nom.trim() !== '' && prenom !== '' && prenom.trim() !== '' && age !== '' && age.trim() !== '') {
            let id = Math.floor((Math.random() * 100) + 1);
            let data = { "id": id, "nom": nom, 'prenom': prenom, "age": age }
            dispatch(createListService(data))
        }
        else {
            if (nom === '') {
                setErrorMessageNom(true)
            }
            if (prenom === '') {
                setErrorMessagePrenom(true)
            }
            if (age === '') {
                setErrorMessageAge(true)
            }
        }

    }


    let redirect = null;

    if(creerliststatus) {
        redirect = <Redirect to="/"/>
    }

    return (
        <div className={classes.Container}>
            {redirect}
            <div className={classes.Container_todo_container}>
                <h2>Todo App</h2>
            </div>
            <div className={classes.Container_bar_container}>
                <div>
                    <label className={classes.label_text}> Nom : </label>
                    <input type="text" value={nom} onChange={handleNom} className={errorMessageNom ? classes.input_error : classes.input} placeholder="Votre nom" />
                    {errorMessageNom ? <i><span className={classes.text_error}>Entrez votre nom svp!</span></i> : null}
                </div>

                <div>
                    <label className={classes.label_text}> Prenom : </label>
                    <input type="text" value={prenom} onChange={handlePrenom} className={errorMessagePrenom ? classes.input_error : classes.input} placeholder="Votre prenom" />
                    {errorMessagePrenom ? <i><span className={classes.text_error}>Entrez votre prenom svp!</span></i> : null}
                </div>

                <div>
                    <label className={classes.label_text} > Age : </label>
                    <input type="text" value={age} onChange={handleAge} className={errorMessageAge ? classes.input_error : classes.input} placeholder="Votre age" />
                    {errorMessageAge ? <i><span className={classes.text_error}>Entrez votre age svp!</span></i> : null}
                </div>
            </div>
            {
                loading ? <p>Chargement...</p> : <div className={classes.container_button}>
                    <p className={classes.annuler}><Link to="./">Annuler</Link></p>
                    <p onClick={handleSubmit} className={classes.creer}>Creer</p>
                </div>
            }

        </div>
    )
}

export default CreerList;
