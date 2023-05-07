import logo from './logo.svg';
import './App.css';
import Form from './Components/Form.tsx';
import TableData from './Components/TableData.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Form/> */}
      {/* <TableData /> */}
      <Routes>
        <Route path="/" element={<TableData />}></Route>
        <Route path="/addBlog" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
