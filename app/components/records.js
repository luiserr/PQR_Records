import {Table, Button} from 'antd';
import {EyeOutlined} from '@ant-design/icons';

function getColumns(handleView) {
  return [
    {
      title: 'Name',
      dataIndex: 'fileName',
      onFilter: (value, record) => record.fileName.indexOf(value) === 0,
      sortDirections: ['descend'],
    },
    {
      title: 'Fecha',
      dataIndex: 'createdAt',
      defaultSortOrder: 'descend',
      onFilter: (value, record) => record.createdAt.indexOf(value) === 0,
    },
    {
      title: 'Tipo identificación',
      dataIndex: 'typeDni',
      onFilter: (value, record) => record.typeDni.indexOf(value) === 0,
    },
    {
      title: 'Identificación',
      dataIndex: 'dni',
      onFilter: (value, record) => record.dni.indexOf(value) === 0,
    },
    {
      title: 'Ver',
      dataIndex: '',
      key: 'x',
      render: (row) => <Button
        onClick={() => handleView(row)}
        type="primary"
        shape={'circle'}
        icon={<EyeOutlined/>}
      />
    }
  ];
}


function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

export default function TableRecords({data, handleView}) {
  return (<Table columns={getColumns(handleView)} dataSource={data} onChange={onChange} key={'id'}/>);
}

