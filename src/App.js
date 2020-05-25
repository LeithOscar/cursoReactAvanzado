import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'

import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
//import { NotRegisteredUser } from './Pages/NotregisteredUser'

import { Router } from '@reach/router'
import { NotRegisteredUser } from './Pages/NotregisteredUser'


const UserLogged = ({ children }) => {
    return children({ isAuth: false })
}

export const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                <Detail path='/detail/:detailId' />
            </Router>
            <UserLogged>

                {
                    ({ isAuth }) => isAuth

                        ? <Router>
                            <Favs path='/favs' />
                            <User path='/user' />
                        </Router>
                        : <Router>
                            <NotRegisteredUser path='/favs' />
                            <NotRegisteredUser path='/user' />
                        </Router>
                }

            </UserLogged>

            <NavBar />
        </div>
    )
}
