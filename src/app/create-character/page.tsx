"use client";

import { useFormState } from "react-dom";
import { createCharacter } from "./actions";

export default function Page() {
  // const [state, dispatch] = useFormState(createCharacter, initialState);

  return (
    <div>
      <form action={createCharacter}>
        <h2>Create your character</h2>

        <div className="border-b-2">
          <label htmlFor="nameCharacter" className="mr-2">
            Name:
          </label>
          <input
            type="text"
            name="nameCharacter"
            placeholder="Write your character's name"
            id="nameCharacter"
            className="border-0 focus:outline-none"
          />
        </div>

        <fieldset className="border-b-2">
          <legend>Select your genre</legend>
          <div>
            <input type="radio" id="man" name="genre" value="man" />
            <label htmlFor="man">Man</label>
          </div>
          <div>
            <input type="radio" id="woman" name="genre" value="woman" />
            <label htmlFor="woman">Woman</label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="bg-blue-400 m-2 px-2 py-1 rounded text-white"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
