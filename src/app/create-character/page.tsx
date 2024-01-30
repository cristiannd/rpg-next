"use client";

import { createCharacter } from "./actions";

export default function Page() {
  const races = [
    {
      id: '1',
      name: "Human",
      description: "Human description"
    },
    {
      id: '2',
      name: "Orc",
      description: "Orc description"
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        action={createCharacter}
        className="bg-yellow-800 p-4 rounded-xl text-gray-200"
      >
        <h2 className="text-4xl">Create your character</h2>
        <div className="flex flex-col gap-3">
          <div className="flex">
            <label htmlFor="characterName" className="pe-2">
              Name:
            </label>
            <input
              type="text"
              name="characterName"
              placeholder="Write your character's name"
              id="characterName"
              className="w-full"
            />
          </div>

          <fieldset>
            <legend>Select your genre</legend>
            <div>
              <input type="radio" id="man" name="genre" value="man" />
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

          <select name="race" className="text-black">
            <option disabled className="text-gray-400">Select a race</option>
            {
              races.map(race => <option key={race.id}>{race.name}</option>)
            }
          </select>
        </div>

        <button type="submit" className="bg-black py-1 px-4 rounded text-xl">
          Create
        </button>
      </form>
    </div>
  );
}
