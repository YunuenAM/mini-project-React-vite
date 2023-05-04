import { useState, useEffect } from 'react'
import IssueList from './components/IssueList'
import SearchBar from './components/SearchBar'
import './App.css'

function App () {
  const [issues, setIssues] = useState([])

  const sendSearch = (search) => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((res) => res.json())
      .then((results) => {
        const data = results.items
        setIssues(data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((res) => res.json())
      .then((results) => {
        const data = results
        setIssues(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='App'>
      <SearchBar handleSearch={sendSearch} />
      <div className='grid-cards'>
        {issues.map((issue) => (
          <IssueList key={issue.id} url={issue.html_url} />
        ))}
      </div>
    </div>
  )
}

export default App

// import { useState, useEffect } from 'react'
// import IssueList from './components/IssueList'
// import SearchBar from './components/SearchBar'

// function App () {
//   const [issues, setIssues] = useState([])

//   const sendSearch = (search) => {
//     fetch('https://api.github.com/repos/facebook/react/issues')
//       .then(res => res.json())
//       .then(results => {
//         const { data } = results
//         setIssues(data)
//       })
//       .catch(err => console.log(err))
//   }

//   useEffect(() => {
//     fetch('https://api.github.com/repos/facebook/react/issues')
//       .then(res => res.json())
//       .then(results => {
//         const { data } = results
//         setIssues(data)
//       }).catch(err => console.log(err))
//   }, [])

//   return (
//     <div className='App'>
//       <SearchBar handleSearch={sendSearch} />
//       <div className='grid-cards'>
//         {issues.map(issue => (
//           <IssueList key={issue.id} url={issue.html_url} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App
