import React from 'react';
import {Typography} from "antd";


interface MessageProps {
    owned: boolean;
    message: string;
    name?: string
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
    const {owned, message, name} = props;
    console.assert(name != undefined || owned);

    return <div
        style={{
            marginTop: 7,
            display: "flow-root"
        }}
    >
        {
            !owned && <Typography.Text style={{float: owned ? 'right' : 'left'}}>{name}</Typography.Text>
        }
        <br/>
        <div
            style={{
                padding: 7,
                borderRadius: 10000,
                backgroundColor: owned ? "#5588dd" : "#cccccc",
                display: 'inline',
                float: owned ? 'right' : 'left'
            }}
        >
            <Typography.Text
                style={{color: owned ? "#FFFFFF" : "#000000",}}
            >
                {message}
            </Typography.Text>

        </div>
    </div>;
};

export default Message;
