import Link from "next/link";
import styles from './block-entry.module.css';

interface Props {
    title: string
    date: Date
    href: string
}

export default function BlockEntry(props: Props) {
    const { title, date, href } = props;
    return (
        <li className={styles.blogItem}>
            <Link className={styles.link} href={href}>
            <span className={styles.date}>{date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            })}</span>
            <h4 className={styles.title}>{title}</h4>
            </Link>
        </li>
    )
}