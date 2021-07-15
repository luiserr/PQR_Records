import {Drawer} from 'antd';

export default function menu({show, handleMenu}) {

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      closable={true}
      onClose={handleMenu}
      visible={show}
    >
      <p>Este es mi menu</p>
    </Drawer>
  );
}