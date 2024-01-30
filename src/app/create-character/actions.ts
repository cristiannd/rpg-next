"use server";

import type { ICharacter } from "@/types";

export async function createCharacter(character: ICharacter) {
  const { characterName, race, genre } = character;

  console.log(character)

  if (!characterName) return;
  if (!race) return;
  if (!genre) return;

  console.log(character);
}
