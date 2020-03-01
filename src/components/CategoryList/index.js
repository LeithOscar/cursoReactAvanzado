
import React from 'react'
import { Category } from '../category'

import { List, Item } from './styles'

import {categories} from '../../../api/db.json'

export const CategoryList = () => {
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category}  /></Item>)
      }
    </List>
  )
}