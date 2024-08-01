import { useQuery } from '@apollo/client';

import { CHARACTER_PAGE } from '../apollo/characters';

import Character from './Character';
import { useState } from 'react';

const CharactersList = () => {
  let [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(CHARACTER_PAGE, {
    variables: { page },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h3>Characters List</h3>
      {data?.characters?.characters?.map((char, index) => (
        <Character
          key={char.id}
          {...char}
        />
      ))}
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage(--page)}
        >
          {'<'}
        </button>
        <button onClick={() => setPage(++page)}>{'>'}</button>
      </div>
    </div>
  );
};

export default CharactersList;
