import {useEffect, useState} from "react";
import Player from "../app/components/player";
import Layout from "../app/components/layout";
import TableRecords from "../app/components/records";
import useSocket from '../app/hooks/socket';

import 'antd/dist/antd.css';

export default function Home({myRecords}) {

  const [records, setRecords] = useState(myRecords);
  const [visible, setVisible] = useState(false);
  const [record, setRecord] = useState({});

  const socket = useSocket();

  useEffect(() => {

    function handleRecords(payload) {
      setRecords(payload);
    }

    if (socket) {
      socket.on('getRecords', handleRecords)
    }
  }, [socket]);

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
  const myRecords = await res.json();
  return {
    props: {
      myRecords
    }
  }
}
