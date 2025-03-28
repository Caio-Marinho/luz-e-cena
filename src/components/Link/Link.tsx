import React from 'react';
import styles from './Link.module.css';
import { LinkProps } from '../../Types/Link';



const Link = ({ children, hiperlink, ...rest }: LinkProps) => {
  return (
    <a className={styles.link} href={hiperlink} {...rest}>
      {children}
    </a>
  );
};

export default Link;
