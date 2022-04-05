import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
import data from "./data/data.json";
import {useState} from 'react';


function App() {
  const [crudData, setcrudData] = useState(data)
  const onSave = (form) => {
    const copyData = {...crudData}
    copyData.members.push(form)
    setcrudData(copyData)
  }
  return (
    <div className="jumbotron text-center">
      <Table data={crudData}>
        <RowList data={crudData}/>
      </Table>
      <CreateForm save={onSave}/>
      <Modal />
    </div>
  );
}

export default App;
