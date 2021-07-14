import {Modal} from "antd";

export default function Player({visible, setVisible, record = {}}) {

  const onCancel = () => {
    setVisible(!visible);
  };

  return (
    <Modal title="Basic Modal" visible={visible} onCancel={onCancel}>
      <p><b>Tipo identificación:</b> {record.typeDni} </p>
      <p><b>Identificación:</b> {record.dni} </p>
      <p><b>Fecha:</b> {record.createdAt} </p>
      <audio controls>
        <source src={`/${record.fileName}`} type="audio/mp3" />
      </audio>
    </Modal>
);
}