import { useEffect, useState } from 'react';
import './CharacterList.scss';

function CharacterList() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error(error));
    }, []);

    const characterData = JSON.stringify(characters, null, 2);
    console.log(characterData);


    return (

        <section>
            <h1>The Rick and Morty API</h1>
            <h2>Characters list</h2>
            <div className="box-total">
                {characters.map((character) => (
                    <div className="box-container">
                        <img key={character.image} src={character.image} alt="ProfileImage" />
                        <div className="info">
                            <h3 key={character.id}> {character.name}  </h3>
                            
                            <p key={character.gender}>
                                <span>Gender:</span> {character.gender}
                            </p>
                            <p key={character.species} > {character.species}
                                <span key={character.status}> - </span> {character.status}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}

export default CharacterList;