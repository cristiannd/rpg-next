"use client";

import { createCharacter } from "./actions";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        action={createCharacter}
        className="bg-yellow-800 p-4 rounded-xl text-gray-200"
      >
        <h2 className="text-4xl">Create your character</h2>
        <div className="flex flex-col gap-3">
          <div className="flex">
            <label htmlFor="nameCharacter" className="pe-2">
              Name:
            </label>
            <input
              type="text"
              name="nameCharacter"
              placeholder="Write your character's name"
              id="nameCharacter"
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
              <label htmlFor="woman" className="px-2">Woman</label>
            </div>
          </fieldset>
        </div>
        <button type="submit" className="bg-black py-1 px-4 rounded text-xl">Create</button>
      </form>
    </div>
  );
}
