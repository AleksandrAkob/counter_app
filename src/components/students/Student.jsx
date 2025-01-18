export function Student() {


  return (
    <div style={{ display: 'flex', gap: "20px" }}>
      <StudentCard name={'Мухин Святослав Александрович'} course={'1'} descriotion={'62,55'} />
      <StudentCard name={'Иванов леонид Данилович'} course={'3'} descriotion={'63,88'} />
      <StudentCard name={'Максимов Владимер Артёмович'} course={'2'} descriotion={'63,21'} />
    </div>
  )

}




function StudentCard(props) {
    return (
  
      <div className="card" style={{ width: "18rem" }}>
        <ul>
            <div className="card-body">
              <h5 className="user-name">{props.name}</h5>
              <p className="user-age">{props.course}</p>
              <p className="user-description">{props.descriotion}</p>
            </div>
        </ul>
      </div>
    )
  }
  