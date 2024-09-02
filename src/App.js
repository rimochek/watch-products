import React, { useState } from "react"
import ItemsList from "./components/Costs/ItemsList"
import NewCost from "./components/NewCost/NewCost"

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    costDescription: "fridge",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 3, 25),
    costDescription: "furniture",
    amount: 1500,
  },
  {
    id: "c3",
    date: new Date(2000, 5, 30),
    costDescription: "microwave",
    amount: 500,
  },
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <ItemsList costs={costs} />
    </div>
  )
}

export default App
