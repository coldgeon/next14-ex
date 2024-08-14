'use client';

import styles from '../app/styles/navigation.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home {pathName === '/' ? '🔥' : ''}</Link>
        </li>
        <li>
          <Link href="/about-us">About Us {pathName === '/about-us' ? '🔥' : ''}</Link>
        </li>
      </ul>
    </nav>
  );
}
