import React, {useContext} from 'react'
import "../styles/Navbar.scss"
import logo from "../imgs/logo (1).png"
import {Link, useLocation} from "react-router-dom"
import {HOME_ROUTE, LOGIN_ROUTE, MYTICKETS_ROUTE, REGISTRATION_ROUTE, RETURN_ROUTE} from "../utils/consts"
import {Context} from "../index";
import {observer} from "mobx-react-lite"


const Navbar = observer( () => {
    const {user} = useContext(Context)
    const logout = () => {
        localStorage.removeItem("token")
        user.setIsAuth(false)
    }
    const location = useLocation()
    const isLogin = location.pathname ===  LOGIN_ROUTE || location.pathname === REGISTRATION_ROUTE
    return (
        <div className="nav">
            <Link to={HOME_ROUTE}><img src={logo} alt="logo" className="logo"/></Link>
            <div className="info">
                <p>Технічна підтримка: 0 (800) 503-111</p>
                <p>Довідкова служба: 0 (800) 503-111</p>
                <p>Email: booking@uz.gov.ua</p>
                <p>Контакт центр "Якість та сервіс": 0 (800) 503-111</p>
            </div>
            {user.isAuth ?
                <div className="nav-buttons">
                    <Link to={MYTICKETS_ROUTE}>Мої квитки</Link>
                    <Link to={RETURN_ROUTE}>Повернути квиток</Link>
                    <Link to={HOME_ROUTE} onClick={logout}>Вийти</Link>
                </div>
                :
                isLogin ?
                    <div> </div>
                    :
                    <div className="nav-buttons"><Link to={LOGIN_ROUTE} onClick={logout}>Авторизуватись</Link></div>
            }
        </div>
    )
})

export default Navbar