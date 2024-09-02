import "./NewCost.css"
import CostForm from "./CostForm"

function NewCost(props) {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      id: Math.random().toString(),
      ...inputCostData,
    }
    console.log(costData.id)
    props.onAddCost(costData)
  }

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  )
}

export default NewCost
