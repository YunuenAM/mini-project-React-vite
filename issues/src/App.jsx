import { useState, useEffect } from 'react'
import IssueList from './components/IssueList'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App () {
  const [issues, setIssues] = useState([])
  const [tablaIssues, setTablaIssues] = useState([])
  const [busqueda, setBusqueda] = useState('')

  const peticionGet = async () => {
    await axios.get('https://api.github.com/repos/facebook/react/issues')
      .then(response => {
        setIssues(response.data)
      }).catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    peticionGet()
  }, [])

  useEffect(() => {
    setTablaIssues(
      issues.filter(issue => issue.title.toLowerCase().includes(busqueda.toLowerCase()))
    )
  }, [issues, busqueda])

  return (
    <div className='App'>
      <IssueList issues={tablaIssues} busqueda={busqueda} setBusqueda={setBusqueda} />
    </div>
  )
}

export default App
