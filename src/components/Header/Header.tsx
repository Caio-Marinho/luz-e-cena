import React from 'react'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'
import HeaderLinks from './components/HeaderLinks'
import Logo from '../Logo/Logo'
import HeaderActions from './components/HeaderActions'
import HeaderFormFilters from './components/HeaderFormFilters'

const Header = () => {
    return (
        <header>
            <HeaderList>

                <HeaderListItem>
                    <Logo src='./Logo e Favicon/Logo.png' />
                </HeaderListItem>

                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>

                <HeaderListItem>
                    <HeaderFormFilters />
                </HeaderListItem>

                <HeaderListItem>
                    <HeaderActions />
                </HeaderListItem>
                
            </HeaderList>
        </header>
    )
}

export default Header
