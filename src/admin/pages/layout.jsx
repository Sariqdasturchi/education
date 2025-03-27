import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BookOpen, ChartSpline, ClipboardCheck, FlaskConical, PanelsTopLeft } from 'lucide-react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/admin/Header';
const { Sider, Content } = Layout;
const items = [
    {
        key: '1',
        icon: <PanelsTopLeft />,
        label: 'Darsliklar',
        path: '/admin/darsliklar'
    },
    {
        key: '2',
        icon: <ClipboardCheck />,
        label: 'Topshiriqlar',
        path: '/admin/topshiriqlar'
    },
    {
        key: '3',
        icon: <FlaskConical />,
        label: 'Testlar',
        path: '/admin/testlar'
    },
    {
        key: '4',
        icon: <ChartSpline />,
        label: 'Analitika',
        path: '/admin/analitika'
    },
    {
        key: '5',
        icon: <BookOpen />,
        label: 'Maqolalarim',
        path: '/admin/maqolalarim'
    },
]

const details = [
    {
        id: '1',
        path: '/admin/darsliklar',
        name: 'darsliklar',
        title: 'Darsliklar',
        addbtn: "Darslik qo'shish",
        backbtn: false
    },
    {
        id: '2',
        path: '/admin/topshiriqlar',
        name: 'topshiriqlar',
        title: 'Topshiriqlar',
        addbtn: "Topshiriq qo'shish",
        backbtn: false
    },
    {
        id: '3',
        path: '/admin/testlar',
        name: 'testlar',
        title: 'Testlar',
        addbtn: "Test qo'shish",
        backbtn: false
    },
    {
        id: '4',
        path: '/admin/analitika',
        name: 'analitika',
        title: 'Analitika',
        addbtn: '',
        backbtn: false
    },
    {
        id: '5',
        path: '/admin/maqolalarim',
        name: 'maqolalarim',
        title: 'Maqolalar',
        addbtn: "Maqola qo'shish",
        backbtn: false
    },
    {
        id: '6',
        path: '/admin/maqolalarim/edit',
        name: 'maqolatahrir',
        title: 'Maqolani tahrirlash',
        addbtn: "Saqlash",
        backbtn: true
    }
]

const AdminLayout = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [selectedKey, setSelectedKey] = useState('1');
    const handleMenuClick = (e) => {
        const item = items.find((item) => item.key === e.key);
        if (item) {
            navigate(item.path);
            setSelectedKey(e.key);
        }
    };
    const lastpath = pathname.split("/").filter(Boolean).at(-1);

    const arr = details.find((i) => {
        if (i.name===lastpath || (pathname.split("/").slice(0, -1).join("/") === i.path)){
            return i
        }
    })

    if (!arr){
        return (<Outlet />)
    }
    else{
        return (
            <Layout>
                <Sider style={{ minHeight: '100vh', width: '463px', backgroundColor: '#13265C' }} trigger={null} collapsible>
                    <div className='h-[100px] pt-5 pl-6'>
                        <p className='text-white font-extrabold text-2xl'>ADMIN</p>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[selectedKey]}
                        onClick={handleMenuClick}
                        items={items}
                        style={{
                            backgroundColor: '#13265C',
                            borderRight: '2px solid #334155',
                            padding: '0 12px',
                            margin: '0'
                        }}
                        className="custom-menu"
                    />
                </Sider>
                <Layout>
                    <Header title={arr.title} backbtn={arr.backbtn} addbtn={arr.addbtn}/>
                    <Content
                        style={{
                            padding: '35px 50px',
                            background: '#F4F7FF',
                            height: 'calc(100vh - 100px)',
                            overflowY:'auto'
                        }}
                    >
                        {/* Content will go here */}
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        );
    }
    
}
export default AdminLayout;