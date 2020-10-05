import React from "react";
import Item from "./Item";

function ItemsContainer() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('cat-food-two.vercel.app/items.json')
      .then((res) => res.json())
      .then((json) => setItems(json.items))
  }, [])

  return (
    <ul className="items-container">
      {items && items.map((item) => <Item key={item.id} {...item} />)}
    </ul>
  )
}

export default ItemsContainer