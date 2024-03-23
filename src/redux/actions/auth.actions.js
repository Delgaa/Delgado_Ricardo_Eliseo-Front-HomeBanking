import { createAction } from "@reduxjs/toolkit";

const current = createAction('CURRENT', (data) => {
    return {
        payload:{
            ...data,
            loggedIn: true,
        }
    }
});

const login = createAction('LOGIN', (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('loggedIn', true);
    return {
        payload:{
            token,
            timestamps: Date.now()
        }
    }
});

const logout = createAction('LOGOUT', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    return {
        payload:{
            loggedIn: false
        }
    }
});

const actions = { current, login, logout };

export default actions;
