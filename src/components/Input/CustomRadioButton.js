import React, { useState } from 'react'
import './Radio.css'
function CustomRadioButton() {
  const [Livraison, setLivraison] = useState('')

  const handleChange = (e) => {
    setLivraison(e.target.value)
  }

  return (
    <div class="content">
      <div class="dpx">
        <form>
          <div class="py">
            <label>
              <input
                onChange={handleChange}
                type="radio"
                class="option-input radio"
                name="Livraison"
                value="Livraison à domicile"
              />
              Livraison à domicile
            </label>
            {Livraison == 'Livraison à domicile' ? (
              <div>Livré le mardi 29 nov. pour 7.00 DT</div>
            ) : (
              ''
            )}
            <label>
              <input
                onChange={handleChange}
                type="radio"
                class="option-input radio"
                name="Livraison"
                value=" Livraison au bureau"
              />
              Livraison au bureau
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}
export default CustomRadioButton
