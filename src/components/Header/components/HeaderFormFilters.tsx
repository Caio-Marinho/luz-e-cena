import React from 'react';
import SelectorGroup from '../../Selector/SelectorGroup/SelectorGroup';
import { FaLocationDot } from 'react-icons/fa6';
import SelectorOption from '../../SelectorOption/SelectorOption';

const cidades = [
    { id: 1, nome: "São Paulo" },
    { id: 2, nome: "Rio de Janeiro" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Curitiba" },
    { id: 5, nome: "Porto Alegre" },
];

const mapeamentoCidades = () => cidades.map((cidade) => {
    return (
        <SelectorOption
            key={cidade.id}
            valor={cidade.nome}
            texto={cidade.nome}
        />
    );
})

const HeaderFormFilters = () => {
    return (
        <form>
            <SelectorGroup id="cidade" icon={<FaLocationDot />}>
                <SelectorOption valor='' texto='Escolha sua cidade...' />
                {mapeamentoCidades()}
            </SelectorGroup>
        </form>
    )
}

export default HeaderFormFilters
