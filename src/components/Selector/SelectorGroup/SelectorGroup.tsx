import React from 'react';
import styles from './SelectorGroup.module.css';
import {SelectorGroupProps} from '../../../Types/SelectorGroup'


const SelectorGroup = ({ icon, children, ...rest }: SelectorGroupProps) => {
    return (
        <div className={styles.container}>
            {icon && <div className={styles.icone}>{icon}</div>}
            <select className={styles.selector} {...rest}>
                {children}
            </select>
        </div>
    )
}

export default SelectorGroup
