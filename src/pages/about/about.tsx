import * as React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const About: React.FC = () => {
    let navigate = useNavigate();

    return(
        <>
        <h1>About Component is here.</h1>
        <Button onClick={() => navigate("/")}>Go back to Home</Button>
        </>
    )
}