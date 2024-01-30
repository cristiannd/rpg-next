"use client";

import { useState } from "react";
import Race from "../race/race";
import styles from './races.module.css'
import type { Race as IRace } from "../../page";

export default function Races({ races }: { races: Array<IRace>}) {
  const [selectedRace, setSelectedRace] = useState<IRace | null>(null);

  const raceSelectionHandler = (race: IRace) => {
    setSelectedRace(race);
  };

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
