import React from 'react';
import styles from './Link.module.css';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  hiperlink: string;
  children: React.ReactNode;
};

const Link = ({ children, hiperlink, ...rest }: LinkProps) => {
  return (
    <a className={styles.link} href={hiperlink} {...rest}>
      {children}
    </a>
  );
};

export default Link;
