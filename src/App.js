import { useState } from 'react';
import './App.css';
import Data from "./Data.json"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage= 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex)
  const npage = Math.ceil(Data.length /recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)


  function nextPage () {
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  }

  function prePage () {
    if (currentPage !== 1){
      setCurrentPage(currentPage -1)
    }
  }

  function changeCurrentPage (id){
    setCurrentPage(id)

  }
  return (
    <div className="App">
   <table className='table '>
    <thread>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </thread>
    <tbody>
      {records.map((d,i) => (
        <tr key={i}>
          <td>{d.ID}</td>
          <td>{d.Name}</td>
          <td>{d.email}</td>
        </tr>
      ))}
    </tbody>
   </table>
   <nav>
    <ul className='pagination'>
      <li className="page-item">
        <a href='#' className='page-link' onClick={prePage}>Prev</a>
      </li>
      {numbers.map((n, i) => (
        <li className={`page-item ${currentPage === n ? 'active':''}`} key={i}>
          <a href="#" className='page-link' onClick={() =>changeCurrentPage(n)}>{n}</a>
        </li>
      ))
}
<li className='page-item'>
  <a href='#' className='page-link' onClick={nextPage}>Next</a>
</li>

      
    </ul>
   </nav>
      
    </div>
  );
}

export default App;
