import React, {useState} from 'react';
import {Layout, Menu} from "antd";
import ChatWindow from "../containers/ChatWindow";
import Wall from "../containers/Wall";


interface GroupStudyScreenProps {
}

const GroupStudyScreen: React.FC<GroupStudyScreenProps> = (props: GroupStudyScreenProps) => {
    const [openSection, setOpenSection] = useState('Board');

    return <Layout>
        <Layout.Sider>
            <Menu
                mode="inline"
                onSelect={({key}: { key: string }) => {
                    setOpenSection(key)
                }}
                defaultSelectedKeys={[openSection]}
                style={{height: '100%', borderRight: 0}}
            >
                {["Board", "Files", "Chat"].map((item) => <Menu.Item
                    key={item}
                >
                    {item}
                </Menu.Item>)}
            </Menu>
        </Layout.Sider>
        {openSection === "Board" && <Wall/>}
        {openSection === "Files" && <Layout.Content>

        </Layout.Content>}
        {openSection === "Chat" && <ChatWindow/>}
    </Layout>;
};

export default GroupStudyScreen
