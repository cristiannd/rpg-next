import styles from "./character-name.module.css";
export default function CharacterName({
  characterNameHandler,
}: {
  characterNameHandler: (name: string) => void;
}) {
  return (
    <div className={styles.container}>
      <label htmlFor="characterName" className={styles.characterName}>
        Name:
      </label>
      <input
        type="text"
        name="characterName"
        placeholder="Write your character's name"
        onChange={(e) => characterNameHandler(e.target.value)}
        id="characterName"
        className={styles.input}
        required
      />
    </div>
  );
}
