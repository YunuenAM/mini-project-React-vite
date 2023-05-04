import React, { useState, useEffect } from 'react'
import './IssueList.css'

function IssueList () {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then((response) => response.json())
      .then((data) => setIssues(data))
  }, [])

  return (
    <div>
      <h2>Lista de issues en React</h2>
      <table>
        <thead>

          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td><a href={issue.html_url} target='_blank' rel='noopener noreferrer'>{issue.title}</a></td>
              <td>{issue.user.login}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IssueList
