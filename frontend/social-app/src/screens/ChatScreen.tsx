import React, {useState} from 'react';
import {Input, Layout, Menu, Typography} from "antd";
import Message from "../components/Message";


interface ChatScreenProps {
}

const ChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    const [openChat, setOpenChat] = useState('0');
    const [inputValue, setInputValue] = useState("");

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
        <Layout.Content style={{
            backgroundColor: "#FFFFFF",
            margin: 26,
            padding: 26,
            display: 'flex',
            flexDirection: "column"
        }}>
            <div style={{overflowY: "scroll", maxHeight: '-webkit-fill-available', flexGrow: 1}}>
                <Message
                    owned={false}
                    message={"Hello from the other side!"}
                />
                <Message
                    owned={true}
                    message={"Hello from me!"}
                />
                <Message
                    owned={true}
                    message={"Hello from me!"}
                />
            </div>
            <Input.Search
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
                onSearch={() => {console.info(inputValue); setInputValue("")}}
                onPressEnter={() => {console.info(inputValue); setInputValue("")}}
                enterButton={"Send"}
            />
        </Layout.Content>
    </Layout>;
};

export default ChatScreen;
