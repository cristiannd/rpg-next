"use server";

export async function createCharacter(formData: FormData) {
  const rawFormData = {
    nameCharacter: formData.get("nameCharacter"),
  };

  fetch("./src/app/create/actions.ts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al cargar el archivo JSON: ${response.statusText}`
        );
      }

      return response.json();
    })
    .then((data) => console.log(data));

  console.log({ rawFormData });
}
