import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>RPG Next</h1>

      <Link href="/create-character" className="bg-blue-500 m-2 px-2 py-1 rounded text-white">
        Crear personaje
      </Link>
    </main>
  );
}
