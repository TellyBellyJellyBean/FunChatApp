import { PrettyChatWindow } from "react-chat-engine-pretty"


const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic('5af1d098-1aa6-4b54-b4b0-98eaf65511ef', proprs.user.username, props.user.secret);
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
            projectId='5af1d098-1aa6-4b54-b4b0-98eaf65511ef'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: "100%"}}
            />
        </div>
    )
}

export default ChatsPage