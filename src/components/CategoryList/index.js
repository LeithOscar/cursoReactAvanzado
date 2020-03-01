
import React from 'react'
import { Category } from '../category'

import { List, Item } from './styles'

export const CategoryList = () => {
  return (
    <List>
      {
        [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>)
      }
    </List>
  )
}