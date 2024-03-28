import { useVegetables } from './VegetableListContext'

const VegetableList = () => {
  const { vegetables } = useVegetables()

  return (
    <ul className="grid-container">
      {vegetables.map((v, index) => (
        <li key={index}>
          <img src={v.img} />
          <div>
            {v.title}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default VegetableList
