import React, { useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import ErrorModal from '../UI/Modal/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age.' 
            });
            return;
        } 
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).' 
            });
            return;
        }
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error &&  
                <ErrorModal 
                    title={error.title} 
                    message={error.message} 
                    onConfirm={errorHandler} 
                />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;