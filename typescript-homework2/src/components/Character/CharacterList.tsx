import { useState, useEffect } from "react";
import { Character } from "./Character";

interface CharacterList {
  id: number;
  name: string;
}
const CharactersPage: React.FC = () => {
  const [characterList, setCharacterList] = useState<CharacterList>({
      id: 0,
      name: "",
  });
  const loadCharacterInfo = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const characterData = await response.json();
      setCharacterList(characterData);
  }
  return (
<div className="container">
        <div className="row">
          {characterList.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default CharactersPage;