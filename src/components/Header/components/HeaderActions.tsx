import React from 'react'
import Button from '../../Button/Button'
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi'

const HeaderActions = () => {
  return (
    <div>
        <Button variavel='icon'>
            <HiOutlineShoppingCart/>
        </Button>
        
        <Button variavel='icon'>
            <HiOutlineUser/>
        </Button>
      
    </div>
  )
}

export default HeaderActions
