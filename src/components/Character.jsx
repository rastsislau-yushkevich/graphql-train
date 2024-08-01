import { useQuery } from '@apollo/client';
import { CHARACTER_PAGE } from '../apollo/characters';

const Character = ({ name, episode, image }) => {
  return (
    <div>
      <p>{name}</p>
      <img
        src={image}
        alt={name}
      />
      <ul>
        {episode?.map((ep) => (
          <li key={ep.name}>{ep.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Character;
