"use client";

import { createCharacter } from "./actions";
import Races from "./components/races/races";
import databaseRaces from "../../../data/races.json";
import type { IRace, ICharacter, IGenre } from "@/types";
import { useState } from "react";
import Genre from "./components/genre/genre";

export default function Page() {
  const [characterName, setCharacterName] = useState("");
  const [selectedRace, setSelectedRace] = useState<IRace | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);

  const raceSelectionHandler = (race: IRace) => {
    setSelectedRace(race);
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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form
        action={formActionHandler}
        className="flex flex-col gap-3 rounded-xl bg-yellow-900 p-4 text-gray-200"
      >
        <h2 className="text-4xl">Create your character</h2>

        <div className="flex flex-col gap-3">
          {/* Character's name */}
          <div className="flex">
            <label htmlFor="characterName" className="pe-2">
              Name:
            </label>
            <input
              type="text"
              name="characterName"
              placeholder="Write your character's name"
              onChange={(e) => setCharacterName(e.target.value)}
              id="characterName"
              className="w-full rounded ps-1 text-black outline-none"
              required
            />
          </div>

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
          <Genre selectedRace={selectedRace} />
        </div>

        <button type="submit" className="rounded bg-black px-4 py-1 text-xl">
          Create
        </button>
      </form>
    </div>
  );
}
