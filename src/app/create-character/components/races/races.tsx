"use client";

import { useState } from "react";
import Race from "../race/race";
import styles from './races.module.css'

export interface Race {
  id: string;
  name: string;
  description: string;
  image: string;
}

const races: Array<Race> = [
  {
    id: "1",
    name: "Human",
    description: "Human description",
    image: "https://picsum.photos/75",
  },
  {
    id: "2",
    name: "Orc",
    description: "Orc description",
    image: "https://picsum.photos/75",
  },
  {
    id: "3",
    name: "Elf",
    description: "Elf description",
    image: "https://picsum.photos/75",
  },
  {
    id: "4",
    name: "Dwarf",
    description: "Dwarf description",
    image: "https://picsum.photos/75",
  },
];

export default function Races() {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);

  const raceSelectionHandler = (race: Race) => {
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
