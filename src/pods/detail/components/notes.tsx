import React from "react";
import styles from "./notes.module.scss";

export interface NotesProps {
  notes: string[];
}

export const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <div className={styles.container}>
      {notes.map((note) => (
        <span key={note}>{`*${note}`}</span>
      ))}
    </div>
  );
};
