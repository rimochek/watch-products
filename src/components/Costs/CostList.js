import CostItem from "./CostItem"
import "./CostList.css"

const CostList = (props) => {
  if (props.costs.length === 0) {
    return (
      <h2 className="cost-list__fallback">
        There are no expenditures in this year
      </h2>
    )
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          costName={cost.costDescription}
          costAmount={cost.amount}
        />
      ))}
    </ul>
  )
}

export default CostList
