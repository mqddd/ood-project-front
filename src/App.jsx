import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import AuthPage from './components/auth/index';
import MainPage from './components/app/index';
import Profile from './components/app/profile';
import Add from './components/app/ask';
import Questions from './components/app/questions';
import QuestionDetail from './components/app/question-detail';

import './App.css';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<AuthPage/>}/>
            <Route path="/index" element={<MainPage/>}>
              <Route path="profile" element={<Profile/>}/>
              <Route path="questions" element={<Questions/>}/>
              <Route path="add" element={<Add/>}/>
              <Route path="question-detail" element={<QuestionDetail/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;