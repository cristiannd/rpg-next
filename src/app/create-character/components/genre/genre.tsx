import type { IRace } from "@/types";

export default function Genre({
  selectedRace,
}: {
  selectedRace: IRace | null;
}) {
  if (!selectedRace) return;

  return (
    <ul>
      {selectedRace.genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
