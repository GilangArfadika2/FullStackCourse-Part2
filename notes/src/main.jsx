import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(<App />);




// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// promise.then(response => {
//   console.log(response)
// })

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })



// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true,
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false,
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true,
//   },
// ]

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App notes={notes} />
// )

// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
// })