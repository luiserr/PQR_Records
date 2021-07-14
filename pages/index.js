import {useState} from "react";
import Player from "../components/player";
import Layout from "../components/layout";
import TableRecords from "../components/records";

import 'antd/dist/antd.css';

export default function Home({records}) {

  console.log(records);

  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState({});

  const handleView = (row) => {
    setVisible(true);
    setRecord(row);
  };

  return (
    <Layout>
      <TableRecords data={records} handleView={handleView}/>
      <Player visible={visible} setVisible={setVisible} record={record}/>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/records');
  const records = await res.json();
  return {
    props: {
      records
    }
  }
}
