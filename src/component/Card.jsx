import Data from '../utils/data.json'

function Card(props){
    return(
        <div className="GridContainer">
        {
          Data.map((card, index) => (
          <div key={index} className="Card">
            <p><span className='KeyStyle'>Имя:</span><span className='CardName'> {card.name}</span></p>
            <p><span className='KeyStyle'>Вселенная:</span>{card.universe}</p>
            <p><span className='KeyStyle'>Альтерэго:</span>{card.alterego}</p>
            <p><span className='KeyStyle'>Род занятий:</span>{card.occupation}</p>
            <p><span className='KeyStyle'>Друзья:</span>{card.friends}</p>
            <p><span className='KeyStyle'>Суперспособности:</span>{card.superpowers}</p>
            <img src={card.url} alt={card.name} />
            <p>{card.info}</p>
          </div>
          ))
          
        }
        </div>
    )
}

export default Card;