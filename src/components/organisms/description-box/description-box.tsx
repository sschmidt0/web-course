import styles from "./description-box.module.scss";

export interface DescriptionBoxProps {
  className?: string;
  items: { id: number; text: string }[];
  title: string;
}

export const DescriptionBox: React.FC<DescriptionBoxProps> = ({
  items,
  title,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
