import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import WorkPage from './components/WorkPage';

export default function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='skills' element={<SkillsPage />} />
                    <Route path='work' element={<WorkPage />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

