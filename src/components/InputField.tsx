import React from "react"
import "./styles.css"

const InputField = () => {
  return (
    <form className="form-input">
      <input type="input" className="search-input" placeholder="ENTER A NEW TASK" />
      <button type="submit" className="button-input">ADD</button>
    </form>
  )
}

export default InputField