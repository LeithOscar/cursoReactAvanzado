import React from 'react';
import { CategoryList } from './components/CategoryList/'
import { GlobalStyle } from './GlobalStyles'
import {PhotoCard} from './components/PhotoCard';


export const App = () => (
    <div>
        <GlobalStyle />
        <CategoryList />
        <PhotoCard />
    </div>
)
