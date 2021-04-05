import React from 'react';
import Link from 'next/link';
import styles from './StyledLink.module.scss';

interface Props {
  href: string
  text: string
}

const StyledLink = ({ href, text }: Props) => (
  <Link href={href}>
    <a href={href} className={styles.Link}>
      {text}
    </a>
  </Link>
);

export default StyledLink;
