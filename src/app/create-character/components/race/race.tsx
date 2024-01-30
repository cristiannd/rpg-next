"use client";

import Image from "next/image";
import type { IRace } from "@/types";
import styles from "./race.module.css";

export default function Race({
  race,
  raceSelectionHandler,
  isSelected,
}: {
  race: IRace;
  raceSelectionHandler: (race: IRace) => void;
  isSelected: boolean;
}) {
  const { name, image } = race;

  return (
    <li>
      <button
        onClick={() => raceSelectionHandler(race)}
        type="button"
        className={`${styles.background} ${isSelected ? styles.isSelected : ""}`}
      >
        <h2>{name}</h2>
        <Image
          width="75"
          height="75"
          src={image}
          alt={`Image of ${name.toLowerCase()}`}
        />
      </button>
    </li>
  );
}
