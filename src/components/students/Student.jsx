import { useState } from "react"



const studentsArr = [
  {id: 1, name: 'Мухин Святослав Александрович', course: "1", description: "62,55"},
  {id: 2, name: 'Иванов леонид Данилович', course: "3", description: "63,88"},
  {id: 3, name: 'Максимов Владимер Артёмович', course: "2", description: "63,21"},
  {id: 4, name: 'Константинов Даниил Львович', course: "4", description: "55,05"},
  {id: 5, name: 'Сахаров Константин Егорович', course: "2", description: "60,92"},
  {id: 6, name: 'Васильев Марк Александрович', course: "5", description: "56,55"},
  {id: 7, name: 'Степанов Юрий Сергеевич', course: "3", description: "54,49"},
  {id: 8, name: 'Кондрашова Марьям Глебовна', course: "1", description: "56,08"},
  {id: 9, name: 'Коршунова Марьям Тимофеевна', course: "2", description: "54,13"},
  {id: 10, name: 'Семенова София Артёмовна', course: "3", description: "57,19"},
  {id: 11, name: 'Козловская Арина Владимировна', course: "5", description: "65,39"},
  {id: 12, name: 'Попова Ксения Алексеевна', course: "4", description: "56,31"},
  {id: 13, name: 'Семенов Матвей Дмитриевич', course: "1", description: "62,23"}
]

export function Student() {

 const [course, setCourse] = useState(0)



  function handleClick(value) {
    setCourse(value)
    console.log(value)
  }

  let students

  if (course > 0) {
    students = studentsArr.filter((stud) => Number(stud.course) == course)
  } else {
      students = studentsArr
  }



  
  const studArr = students.map((student) => {
    return (
      <StudentCard key={student.id} name={student.name} course={student.course} description={student.description}/>
     )
  })

  return (
    <div>
      <div style={{ display: 'flex',  flexWrap: 'wrap', gap: "20px" }}>
            {studArr}
      </div>  
      
       <div className="btn-group">
          <button className={`btn ${course == 0 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(0)}>все курсы</button>
          <button className={`btn ${course == 1 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(1)}>1 курс</button>
          <button className={`btn ${course == 2 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(2)}>2 курс</button>
          <button className={`btn ${course == 3 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(3)}>3 курс</button>
          <button className={`btn ${course == 4 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(4)}>4 курс</button>
          <button className={`btn ${course == 5 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(5)}>5 курс</button>
       </div>
    </div>
 
  )
}



export function StudentCard(props) {

  const {name, course, description} = props


  return (
    <div className="card" style={{ width: "200px" }}>
         <ul>
          <div className="card-body">
            <h5 className="student-name">{name}</h5>
            <p className="student-course">{course} курс</p>
            <p className="student-description">{description}</p>
          </div>
        </ul>
    </div>
    )
}




  //   const [course, setCourse] = useState(0)
  // const students = studentsArr.filter((prod) => Number(prod.course) > course)

  // console.log(Student)

//  export function StudentFilter() {

//   const [activeBtn, setActiveBtn] = useState(0)

//   const handleClick = (value) => {
//     // setCourse(value)
//     setActiveBtn(value)
//   }
//     return (

//       <>
//           <div style={{ display: 'flex', gap: "20px" }}> </div>
            
//           <div className="btn-group">
//                <button className={`btn ${activeBtn == 0 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(0)}>Больше 0</button>
//               <button className={`btn ${activeBtn == 20000 ? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(20000)}>Больше 2</button>
//               <button className={`btn ${activeBtn == 70000? 'btn-outline-primary' : 'btn-primary'}`} onClick={() =>handleClick(70000)}>Больше 7</button>
//               <button className={`btn ${activeBtn == 100000? 'btn-outline-primary' : 'btn-primary'}`} onClick={() => handleClick(100000)}>Больше 10</button>
//           </div>
      
//           </>
//         )
//   }
  