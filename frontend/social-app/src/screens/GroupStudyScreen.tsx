import React, {useState} from 'react';
import {Layout, Menu} from "antd";


interface GroupStudyScreenProps {
}

const GroupStudyScreen: React.FC<GroupStudyScreenProps> = (props: GroupStudyScreenProps) => {
    const [openChat, setOpenChat] = useState('0');

    return <Layout>
        <Layout.Sider>
            <Menu
                mode="inline"
                onSelect={({key}: {key: string}) => {
                    setOpenChat(key)
                }}
                defaultSelectedKeys={[openChat]}
                style={{height: '100%', borderRight: 0}}
            >
                {["Board", "Files", "Chat"].map((item, key) => <Menu.Item
                    key={key}
                >
                    {item}
                </Menu.Item>)}
            </Menu>
        </Layout.Sider>
        <Layout.Content style={{backgroundColor: "#FFFFFF", margin: 13}}>

        </Layout.Content>
    </Layout>;
};

export default GroupStudyScreen
