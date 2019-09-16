import React, {useState} from 'react';
import {Input, Layout} from "antd";
import Message from "../components/Message";


interface ChatWindowProps {
}

const ChatWindow: React.FC<ChatWindowProps> = (props: ChatWindowProps) => {
    const [inputValue, setInputValue] = useState("");

    return <Layout.Content style={{
            backgroundColor: "#FFFFFF",
            margin: 26,
            padding: 13,
            display: 'flex',
            flexDirection: "column"
        }}>
            <div style={{overflowY: "scroll", maxHeight: '-webkit-fill-available', flexGrow: 1, padding: 13}}>
                <Message
                    owned={false}
                    name={"Jack"}
                    message={"Hello from the other side!"}
                />
                <Message
                    owned={false}
                    name={"Jack"}
                    message={"Hello from the other side!"}
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
        </Layout.Content>;
};

export default ChatWindow
