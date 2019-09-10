import React, {useState} from 'react';
import {Input, Layout, Menu, Typography} from "antd";
import Message from "../components/Message";
import ChatWindow from "../containers/ChatWindow";


interface ChatScreenProps {
}

const ChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    const [openChat, setOpenChat] = useState('0');

    return <Layout>
        <Layout.Sider>
            <Menu
                mode="inline"
                onSelect={({key}) => {
                    setOpenChat(key)
                }}
                defaultSelectedKeys={[openChat]}
                style={{height: '100%', borderRight: 0}}
            >
                {["Tom", "Jack", "Todd", "Sherry"].map((item, key) => <Menu.Item
                    key={key}
                >
                    {item}
                </Menu.Item>)}
            </Menu>
        </Layout.Sider>
        <ChatWindow/>
    </Layout>;
};

export default ChatScreen;
