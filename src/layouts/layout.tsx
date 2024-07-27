import * as React from 'react';
import { ResponsiveAppBar as Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';

interface Props {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}: Props) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}