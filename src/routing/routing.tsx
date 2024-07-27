import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, ErrorComponent } from '../pages';
import { Layout } from '../layouts/layout';


interface Props {
    children: React.ReactNode
}

export const WrapLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}


export const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={
                    <WrapLayout>
                        <Home />
                    </WrapLayout>
                } />
                <Route path='/about' element={
                    <WrapLayout>
                        <About />
                    </WrapLayout>
                } />
                <Route path='*' element={
                    <WrapLayout>
                        <ErrorComponent />
                    </WrapLayout>
                } />
            </Routes>
        </Router>
    )
}