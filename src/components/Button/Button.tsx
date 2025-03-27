import React, { MouseEventHandler } from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';

type ButtonProps = {
    variavel: "default" | "icon";
    aoClicar?: MouseEventHandler<HTMLButtonElement>
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variavel = "default",aoClicar , ...rest }: ButtonProps) => {
    const classMap = {
        default: styles.default,
        icon: styles.icon,
    };
    return (
        <button onClick={aoClicar} className={classnames(styles.botao, classMap[variavel])} {...rest}>
            {children}
        </button >
    )
}

export default Button
