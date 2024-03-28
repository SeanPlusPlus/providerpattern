import { useItems } from './ItemListContext'

const ItemList = () => {
  const { items } = useItems()

  return (
    <ul className="grid-container">
      {items.map((item, index) => (
        <li key={index}>
          <img src={item.img} />
          <div>
            {item.title}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ItemList
