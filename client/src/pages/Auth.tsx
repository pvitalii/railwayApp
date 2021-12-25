import React, {useContext, useState} from 'react'
import "../styles/Auth.scss"
import {Button, TextField} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const auth = async() => {
        isLogin ? await login(email, password) : await registration(email, password)
        user.setIsAuth(true)
        navigate(HOME_ROUTE)
    }
    return (
        <div className="auth">
            <div className="auth-area">
                {isLogin ?
                    "Авторизація"
                    :
                    "Реєстрація"
                }
                <div className="auth-form">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        type="email"
                        autoComplete="off"
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        type="password"
                        autoComplete="off"
                    />
                </div>
                <div className="auth-footer">
                    <Button variant="contained" onClick={auth}>{isLogin ? "Увійти" : "Зареєструватись"}</Button>
                    {isLogin ?
                        <label>Не маєте обліковий запис? <Link to={REGISTRATION_ROUTE}>Зареєструватись</Link></label>
                        :
                        <label>Вже маєте обліковий запис? <Link to={LOGIN_ROUTE}>Увійти</Link></label>
                    }
                </div>
            </div>
        </div>
    );
};

export default Auth