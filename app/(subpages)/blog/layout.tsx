import styles from './layout.module.css';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.blogWrapper}>
      {children}
    </div>
  );
}
