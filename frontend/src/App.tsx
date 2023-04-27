import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import Messages from "./pages/Messages";
import CreateMessage from "./pages/CreateMessage";
import MyMessages from "./pages/MyMessages";
const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/" element={<Messages />} />
                    <Route path="/create" element={<CreateMessage />} />
                    <Route path="/mymessages" element={<MyMessages />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;