import { useState, useEffect } from 'react'
import IssueList from './components/IssueList'
import SearchBar from './components/SearchBar'
import './App.css'

function App () {
  const [issues, setIssues] = useState([])

  const sendSearch = (search) => {
    if (issues.length > 0) {
      const filteredIssues = issues.filter((issue) => {
        return issue.title.includes(search) || issue.body.includes(search) || issue.labels.some((label) => label.name.includes(search))
      })
      setIssues(filteredIssues)
    } else {
      fetch(`https://api.github.com/search/issues?q=${search}+repo:facebook/react`)
        .then((res) => res.json())
        .then((results) => {
          const data = results.items
          const filteredIssues = data.filter((issue) => {
            return issue.id.includes(search) || issue.user.login.includes(search) || issue.html_url.includes((search))
          })
          setIssues(filteredIssues)
        })
        .catch((err) => console.log(err))
    }
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
