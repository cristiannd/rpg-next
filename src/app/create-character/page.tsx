"use client";

import { createCharacter } from "./actions";
import RaceOption from "./components/race/race";
import Races from "./components/races/races";

export default function Page() {


  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <form
        action={createCharacter}
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
              id="characterName"
              className="w-full rounded ps-1 text-black outline-none"
              required
            />
          </div>

          {/* Character's race */}
          <div>
            <p>Select a race</p>
            <Races />
          </div>

          {/* Character's genre */}
          <fieldset>
            <legend>Select a genre</legend>
            <div>
              <input type="radio" id="man" name="genre" value="man" required />
              <label htmlFor="man" className="px-2">
                Man
              </label>
            </div>
            <div>
              <input type="radio" id="woman" name="genre" value="woman" />
              <label htmlFor="woman" className="px-2">
                Woman
              </label>
            </div>
          </fieldset>
        </div>

        <button type="submit" className="rounded bg-black px-4 py-1 text-xl">
          Create
        </button>
      </form>
    </div>
  );
}
