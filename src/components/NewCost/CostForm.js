import React, { useState } from "react"
import "./CostForm.css"

function CostForm(props) {
  const [name, setName] = useState("")
  const [summ, setSumm] = useState("")
  const [date, setDate] = useState("")

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const summChangeHandler = (event) => {
    setSumm(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const costData = {
      costDescription: name,
      amount: summ,
      date: new Date(date),
    }

    props.onSaveCostData(costData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Summ</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={summChangeHandler}
            value={summ}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2024-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add expenditure</button>
        </div>
      </div>
    </form>
  )
}

export default CostForm
