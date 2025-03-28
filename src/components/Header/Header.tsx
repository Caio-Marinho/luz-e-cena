import React from 'react';
import HeaderList from './Components/HeaderList';
import HeaderListItem from './Components/HeaderListItem';
import HeaderLinks from './Components/HeaderLinks';
import Logo from '../Logo/Logo';
import HeaderActions from './Components/HeaderActions';
import HeaderFormFilters from './Components/HeaderFormFilters';

const Header = () => {
    return (
        <header>
            <HeaderList>

                <HeaderListItem>
                    <Logo src='./Logo e Favicon/LogoEscura.png' />
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
