import "./ItemsList.css"
import Card from "../UI/Card"
import CostsFilter from "./CostsFilter"
import { useState } from "react"
import CostList from "./CostList"
import CostsDiagram from "./CostsDiagram"

function ItemsList(props) {
  const [selectedYear, setSelectedYear] = useState("2021")

  const saveYearHandler = (year) => {
    setSelectedYear(year)
  }

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear
  })
  console.log(filteredCosts)

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={saveYearHandler} year={selectedYear} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  )
}

export default ItemsList
