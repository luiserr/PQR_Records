import {useState} from "react";
import {Layout as AntLayout, Row, Col} from 'antd';
import BarsOutlined from "@ant-design/icons/lib/icons/BarsOutlined";
import Menu from './menu';

const {Header, Content, Footer} = AntLayout;

export default function Layout({children}) {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <AntLayout>
      <Menu show={showMenu} handleMenu={handleMenu}/>
      <Header>
        <div className="logo">
          <BarsOutlined onClick={handleMenu}/>
          Registro de atencion PQR
        </div>
      </Header>
      <Content style={{padding: '0 50px'}}>
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
      <Footer>
        Fundación amigo de la salud
      </Footer>
      <style jsx>{
        `
      color: #fff;   
      
      .site-layout-content {
        min-height: 280px;
        padding: 24px;        
      }  
      
      table {
        width: 100%;
        margin: 0 auto;
      }
      `
      }</style>
    </AntLayout>);
}