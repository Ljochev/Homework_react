import './App.css'
import List from './components/List'
const list4 = []
function App() {
//   const getData = async () => {
//   console.log("Stage1")
//   const response = await fetch("http://localhost:3000/cards")
//   console.log("Stage2")
//   const data = await response.json()
//   console.log("Stage3")
//   data.forEach(element => {
//     let object = {
//       isPacked: element.isPacked,
//       name: element.name,
//       className: element.className
//     }
//     list4.push(object)
//   })
//   return  <List list={list4}/>
  
// }


// console.log(list4[0])

  const list1 = [
    {
      isPacked: true,
      name: "Apple",
      className: "fruit"
    },
    {
      isPacked: false,
      name: "Banana",
      className: "fruit"
    },
    {
      isPacked: true,
      name: "Brocolli",
      className: "vegetable"
    },
    {
      isPacked: false,
      name: "Carrot",
      className: "vegetable"
    }
  ]


  const list2 = [
    {
      isPacked: true,
      name: "Brocolli",
      className: "vegetable"
    },
    {
      isPacked: false,
      name: "Carrot",
      className: "vegetable"
    },
    {
      isPacked: true,
      name: "Apple",
      className: "fruit"
    },
    {
      isPacked: false,
      name: "Banana",
      className: "fruit"
    }
  ]
  const list3 = [
    {
      isPacked: true,
      name: "Brocolli",
      className: "vegetable"
    },
    {
      isPacked: true,
      name: "Apple",
      className: "fruit"
    },
    {
      isPacked: false,
      name: "Carrot",
      className: "vegetable"
    },
    {
      isPacked: false,
      name: "Banana",
      className: "fruit"
    }
  ]

  return (
<>
<List list={list1}/>
<List list={list2}/>
<List list={list3}/>
</>
  )
}

export default App





{/* homework
  01. da kreirate nova react app.
  02. vo App.jsx da importirate nova komponenta PackageList.
  03. vo PackageList treba da imate nekolku items kade shto vo sekoj item imate text i boolean isPacked
  04. Vo Item componenta treba da prikazete imeto i da prikazete chekmark ako go ima ili x ako go nema boolean.

  ✅  ❌
  X   < */}