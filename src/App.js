import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height = "100vh"
            projectID = "ada263db-d3cf-43b4-b004-54060c09f55c"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=> <ChatFeed{ ... chatAppProps}/>}
            />
    );
}

export default App;