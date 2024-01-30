"use server";

export async function createCharacter(formData: FormData) {
  const rawFormData = {
    characterName: formData.get("characterName"),
    genre: formData.get("genre"),
    race: formData.get("race"),
  };

  console.log(rawFormData);
}
