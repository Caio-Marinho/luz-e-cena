import React from 'react';
import styles from './Fieldset.module.css'
import { FieldsetProps } from '../../Types/Fieldset';

const Fieldset = ({children, variavel}: FieldsetProps) => {
  return (
    <fieldset className={`${styles.inputWrapper} ${variavel==='primary' ? styles.primary : styles.secondary}`}>{children}</fieldset>
  )
}

export default Fieldset
