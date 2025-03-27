import React from 'react';

interface SelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
    texto: string;
    valor: string;
}

const SelectorOption = ({ texto, valor, ...rest }: SelectorOption) => {
    return (
        <label>
            <option value={valor} {...rest}>
                {texto}
            </option>
        </label>
    );
}

export default SelectorOption;
