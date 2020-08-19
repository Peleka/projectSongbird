import React from 'react'
import './Rounds.scss'

const Rounds = props => {
  const rounds = ["Разминка", "Воробьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы"]
  
  return (
    <ul className='Rounds'>
     {rounds.join(' ')}// тут элементы массива внести
    </ul>
  )
}

export default Rounds
