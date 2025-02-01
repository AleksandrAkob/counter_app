import { useState } from "react"

function Slider({ handleClick, price }) {



	const handleSliderChange = (event) => {
		handleClick(Number(event.target.value))
	}


	return (
		<div className="slider__wrap">
			<h1>Регулеровка цены</h1>
			<div>
				<input
            type="range"
             min="0"
						max="110000"
						value={price}
						step={'1000'}
						onChange={handleSliderChange}
					/>
                <div className="price__display">цена:{price}</div>
            </div>
		</div>
	)
    
}

export default Slider