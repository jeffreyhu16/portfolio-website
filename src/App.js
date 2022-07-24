import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import Main from './components/Main';
import MainContent from './components/MainContent';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import WorkPage from './components/WorkPage';

export default function App() {
    
    const [click, setClick] = React.useState(false);

    return (
        <ThemeProvider theme={lightTheme}>
            <Router>
                <Routes>
                    <Route 
                        path='/' 
                        element={
                            <Main click={click} setClick={setClick} >
                                <MainContent click={click} setClick={setClick} />
                            </Main>
                        }
                    />
                    <Route 
                        path='about' 
                        element={
                            <Main click={click} setClick={setClick} >
                                <AboutPage />
                            </Main>
                        }
                    />
                    <Route 
                        path='skills' 
                        element={
                            <Main click={click} setClick={setClick} >
                                <SkillsPage />
                            </Main>
                        }
                    />
                    <Route path='work' element={<WorkPage />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

