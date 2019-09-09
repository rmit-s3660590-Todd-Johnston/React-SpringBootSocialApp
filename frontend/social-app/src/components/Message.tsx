import React from 'react';
import {Typography} from "antd";


interface MessageProps {
    owned: boolean;
    message: string;
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
    return <div
        style={{
            marginTop: 7,
            display: "flow-root"
        }}
    >
        <div
            style={{
                padding: 7,
                borderRadius: 10000,
                backgroundColor: props.owned ? "#5588dd" : "#cccccc",
                display: 'inline',
                float: props.owned ? 'right' : 'left'
            }}
        >
            <Typography.Text
                style={{color: props.owned ? "#FFFFFF" : "#000000",}}
            >
                {props.message}
            </Typography.Text>

        </div>
    </div>;
};

export default Message;
