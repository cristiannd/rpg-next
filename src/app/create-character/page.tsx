"use client";

import { createCharacter } from "./actions";
import Races from "./components/races/races";
import databaseRaces from "../../../data/races.json";
import type { IRace, ICharacter, IGenre } from "@/types";
import { useState } from "react";
import Genre from "./components/genre/genre";
import styles from "./page.module.css";
import CharacterName from "./components/character-name/character-name";

export default function Page() {
  const [characterName, setCharacterName] = useState("");
  const [selectedRace, setSelectedRace] = useState<IRace | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);

  const characterNameHandler = (name: string) => {
    setCharacterName(name);
  };

  const raceSelectionHandler = (race: IRace) => {
    setSelectedRace(race);

    // If there is only one genre, it is automatically selected
    if (race.genres.length === 1) genreSelectionHandler(race.genres[0]);
  };

  const genreSelectionHandler = (genre: IGenre) => {
    setSelectedGenre(genre);
  };

  const formActionHandler = () => {
    console.log({ characterName, selectedRace, selectedGenre });
    if (!selectedRace) return;
    if (!selectedGenre) return;

    const character: ICharacter = {
      characterName,
      race: selectedRace,
      genre: selectedGenre,
    };

    createCharacter(character);
  };

  return (
    <div className={styles.container}>
      <form action={formActionHandler} className={styles.form}>
        <h2 className={styles.title}>Create your character</h2>

        <div className="">
          {/* Character's name */}
          <CharacterName characterNameHandler={characterNameHandler} />

          {/* Character's race */}
          <div>
            <p>Select a race</p>
            <Races
              races={databaseRaces}
              selectedRace={selectedRace}
              raceSelectionHandler={raceSelectionHandler}
            />
          </div>

          {/* Character's genre */}
          <Genre
            selectedRace={selectedRace}
            selectedGenre={selectedGenre}
            genreSelectionHandler={genreSelectionHandler}
          />
        </div>

        <button type="submit" className="">
          Create
        </button>
      </form>
    </div>
  );
}
