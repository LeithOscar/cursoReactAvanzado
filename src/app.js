import React from 'react';
import { ListOfCategories } from './components/CategoryList/'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCard/';
import { Logo } from './components/Logo'

export const App = () => (
    <div>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards categoryId={1} />
    </div>
)
