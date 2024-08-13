'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav>
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
