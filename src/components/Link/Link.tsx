import React from 'react';
import styles from './Link.module.css';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

const Link = ({ children, href, ...rest }: LinkProps) => {
  return (
    <a className={styles.link} href={href} {...rest}>
      {children}
    </a>
  );
};

export default Link;
