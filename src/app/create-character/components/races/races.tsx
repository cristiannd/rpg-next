"use client";

import Race from "../race/race";
import styles from "./races.module.css";
import type { IRace } from "@/types";

export default function Races({
  races,
  selectedRace,
  raceSelectionHandler,
}: {
  races: Array<IRace>;
  selectedRace: IRace | null;
  raceSelectionHandler: (race: IRace) => void
}) {
  return (
    <ul className={styles.races}>
      {races.map((race) => (
        <Race
          key={race.id}
          race={race}
          raceSelectionHandler={raceSelectionHandler}
          isSelected={selectedRace?.id === race.id}
        />
      ))}
    </ul>
  );
}
