import { useState } from "react"
import "./App.css"

const App = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  const handelClear = (e) => {
    e.preventDefault()
    setAge("");
    setHeight("");
    setWeight("");
  }

  const calculateBMI = (e) => {
    e.preventDefault()
    const bmix = weight / height
    if (bmix < 16) {
      setBmi(bmix + " Sevier Thinness")
    } else if (bmix >= 16 && bmix < 18.5) {
      setBmi(bmix + " Moderate Thinness")
    } else if (bmix >= 18.5 && bmix < 25) {
      setBmi(bmix + " Normal")
    } else {
      setBmi(bmix + " Overweight")
    }
  }
  return (
    <>

      <div className="app-container">
        <form>
          <span className="age" required min ="2" >Age</span><input required value={age} onChange={(e) => setAge(e.target.value)} min="2" max="120" className="age-inp" type="number" /><span>ages: 2-120</span>
          <p> <span>Gender</span><input name="gender" type="radio" value="Male" />Male<input value="Female" name="gender" type="radio" />Female</p>
          <p>Height <input required min="1" value={height} onChange={(e) => setHeight(e.target.value)} type="number" placeholder="cm" /></p>
          <p>Weight <input required min="1" value={weight} onChange={(e) => setWeight(e.target.value)} type="number" placeholder="kg" /></p>
          <button onClick={(e) => calculateBMI(e)} >Calculate</button><button onClick={(e) => handelClear(e)}>Clear</button>
        </form>
        <p className="parats"> BMI = {bmi}</p>
      </div>
    </>
  )
}

export default App