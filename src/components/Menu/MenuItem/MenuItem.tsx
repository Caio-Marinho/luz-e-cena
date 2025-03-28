import React from 'react'
import Link from '../../Link/Link'
import { MenuItemProps } from '../../../Types/MenuItem'



const MenuItem = ({children, href='#'}:MenuItemProps) => {
  return (
    <li>
      <Link hiperlink={href}>{children}</Link>
    </li>
  )
}

export default MenuItem
