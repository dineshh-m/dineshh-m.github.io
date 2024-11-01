'use client';

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import styles from './breadcrumb.module.css'

const Link = ({href, children}: { href: string, children: React.ReactNode}) => {
    return <NextLink className={styles.link} href={href}>{children}</NextLink>
}

export default function BreadCrumb() {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const breadcrumb = segments.map((segment, index, array) => {
      if (index === 0)
        return (
          <li key={segment}>
            <Link href="/">~</Link>
            <span className={styles.slash}> / </span>
          </li>
        );
      const href = segments.slice(0, index + 1).join("/");
      if (index === array.length - 1)
        return (
          <li key={segment}>
            <Link href={href}>{segment}</Link>
          </li>
        );
      return (
        <li key={segment}>
          <Link href={href}>{segment}</Link> <span className={styles.slash}> / </span>
        </li>
      );
    });
    return (
      <nav className={styles.breadCrumbWrapper}>
        <ol className={styles.breadcrumbList}>{breadcrumb}</ol>
      </nav>
    );
}