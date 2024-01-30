"use client";

import type { IGenre, IRace } from "@/types";
import styles from "./genre.module.css";
import { useEffect } from "react";

export default function Genre({
  selectedRace,
  selectedGenre,
  genreSelectionHandler,
}: {
  selectedRace: IRace | null;
  selectedGenre: IGenre | null;
  genreSelectionHandler: (genre: IGenre) => void;
}) {
  if (!selectedRace) return;

  return (
    <ul className={styles.genres}>
      {selectedRace.genres.map((genre) => {
        return (
          <li
            className={`${styles.genre} ${genre.id === selectedGenre?.id ? styles.selectedGenre : ""}`}
            key={genre.id}
            onClick={() => genreSelectionHandler(genre)}
          >
            <h2 className={styles.genreName}>{genre.name}</h2>
            <p className={styles.genreDescription}>{genre.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
