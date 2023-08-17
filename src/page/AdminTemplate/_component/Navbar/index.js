import React ,{ useState }from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { actLogOut } from '../../AuthPage/duck/actions';
import {
  DesktopOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

    const items = [
      getItem('Film', '1', <DesktopOutlined />,[
        getItem('Danh Sách Phim', '2',<NavLink  to="/admin/dashboard"></NavLink>),
        getItem('Thêm Mới Phim', '3',<NavLink  to="/admin/add-film"></NavLink>),
      ]),
      getItem('User', 'sub1', <UserOutlined />, [
        getItem('Danh Sách User', '5', <NavLink  to="/admin/manage-user"></NavLink>),
        getItem('Thêm Mới User', '6',<NavLink  to="/admin/add-user"></NavLink>),
      ]),
    ];

    export default function NavbarAdmin() {
      const dispatch = useDispatch();
      const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className='alert alert-warning'
        >
          <div className='d-flex justify-content-between'>
            <h1>ADMIN MANANAGE</h1>
            <div className='pr-5'>
              <button className='btn btn-info'
              onClick={()=>{
                dispatch(actLogOut(navigate));
              }}
              >Log Out</button>
            </div>           
          </div>
          
       
        </Header>
        
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Outlet/>
        </Content>
      
      </Layout>
    </Layout>
  )
}
