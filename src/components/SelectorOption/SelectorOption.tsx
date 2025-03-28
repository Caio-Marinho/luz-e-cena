import React from 'react';
import { SelectorOptionProps } from '../../Types/SelectorOption';


const SelectorOption = ({ texto, valor, ...rest }: SelectorOptionProps) => {
    return (
        <label>
            <option value={valor} {...rest}>
                {texto}
            </option>
        </label>
    );
}

export default SelectorOption;
