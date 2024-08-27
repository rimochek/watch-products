import "./ItemsList.css"
import CostItem from "./CostItem"
import Card from "../UI/Card"
import CostsFilter from "./CostsFilter"
import { useState } from "react"

function ItemsList(props) {
  const [selectedYear, setSelectedYear] = useState("2021")

  const saveYearHandler = (year) => {
    setSelectedYear(year)
  }

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={saveYearHandler} year={selectedYear} />
        <CostItem
          date={props.costs[0].date}
          costName={props.costs[0].costDescription}
          costAmount={props.costs[0].amount}
        ></CostItem>
        <CostItem
          date={props.costs[1].date}
          costName={props.costs[1].costDescription}
          costAmount={props.costs[1].amount}
        ></CostItem>
        <CostItem
          date={props.costs[2].date}
          costName={props.costs[2].costDescription}
          costAmount={props.costs[2].amount}
        ></CostItem>
      </Card>
    </div>
  )
}

export default ItemsList
