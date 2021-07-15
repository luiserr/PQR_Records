import {Modal} from "antd";

export default function Player({visible, setVisible, record = {}}) {

  const onCancel = () => {
    setVisible(!visible);
  };

  const onOk = async () => {
    const result = await fetch('/api/fileRecord', {
      method: 'POST',
      body: JSON.stringify(record),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(result.json().success, result);
    setVisible(false);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      okText={'Marcar como archivada'}
      cancelText={'Cerrar'}
    >
      <p><b>Tipo identificación:</b> {record.typeDni} </p>
      <p><b>Identificación:</b> {record.dni} </p>
      <p><b>Fecha:</b> {record.createdAt} </p>
      <audio controls>
        <source src={`/records/${record.fileName}`} type="audio/mp3"/>
      </audio>
    </Modal>
  );
}