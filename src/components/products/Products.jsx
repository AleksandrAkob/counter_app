import { useState } from "react"

const productsArr = [
  { id: 1, name: 'Lenovo', price: '20000', link: 'https://www.ozon.ru/product' },
  { id: 2, name: 'MacBook Air', price: '90000', link: 'https://www.ozon.ru/product' },
  { id: 3, name: 'LG', price: '70000', link: 'https://www.ozon.ru/product' },
  { id: 4, name: 'X', price: '110000', link: 'https://www.ozon.ru/product' }
]



export function Products() {

  const [count, setCount] = useState(0)
  const [activeBtn, setActiveBtn] = useState(0)

  const handleClick = (value) => {
    setCount(value)
    setActiveBtn(value)
  }


  const products = productsArr.filter((prod) => Number(prod.price) > count)


  const prodArr = products.map((product, index) => {
    return <ProductCard
      key={product.id}
      name={product.name}
      price={product.price}
      link={product.link} />
  })

  return (
    <>

    <div style={{ display: 'flex', gap: "20px" }}>
      {prodArr}
    </div>

    <div className="btn-group">
         <button className={`btn ${activeBtn == 0 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(0)}>Больше 0</button>
        <button className={`btn ${activeBtn == 20000 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(20000)}>Больше 2</button>
        <button className={`btn ${activeBtn == 70000? 'btn-outline-primary' : 'btn-primary'}`} onClick={() =>handleClick(70000)}>Больше 7</button>
        <button className={`btn ${activeBtn == 100000? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(100000)}>Больше 10</button>
    </div>

    </>
  )

}


function ProductCard(props) {

  return (

    <div className="card" style={{ width: "18rem" }}>
      <img src="https://ir-7.ozone.ru/s3/multimedia-1-y/wc1000/7159569262.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price} р</p>
        <a href={props.link} className="btn btn-primary">Подробнее</a>
      </div>
    </div>
  )
}




export function User() {


  return (
    <div style={{ display: 'flex', gap: "20px" }}>
      <UserCard user={'Мухин Александр Святославович'} age={'26'} description={'Детектив'} />
      <UserCard user={'Иванова Дарья Леонидовна'} age={'34'} description={'Швея'} />
      <UserCard user={'Максимов Артём Владиславович'} age={'28'} description={'Слесарь-механик'} />
    </div>
  )

}




function UserCard({user, age, description}) {
 
  return (

    <div className="card" style={{ width: "18rem" }}>
      <ul>
          <div className="card-body">
            <h5 className="user-name">{user}</h5>
            <p className="user-age">{age}</p>
            <p className="user-description">{description}</p>
          </div>
      </ul>
    </div>
  )
}









