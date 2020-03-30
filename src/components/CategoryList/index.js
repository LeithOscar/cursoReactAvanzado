
import React, { useEffect, useState } from 'react'
import { Category } from '../category'

import { List, Item } from './styles'

export const CategoryList = () => {
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}