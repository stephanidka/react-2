import Card from './Card'; // Предположим, что у вас уже есть компонент Card
import DataHeroes from './utils/data.json' // Предположим, что у вас уже есть файл с данными о героях

function HeroList() {
  return (
    <div>
      {DataHeroes.map((hero, index) => (
        <Card
          key={index}
          name={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpowers={hero.superpowers}
          url={hero.url}
          info={hero.info}
        />
      ))}
    </div>
  );
}

export default HeroList;