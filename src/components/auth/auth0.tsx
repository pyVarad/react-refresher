import * as React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button, ButtonProps, styled } from '@mui/material';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


export const LoginComponent: React.FC = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
            <ColorButton color="secondary" onClick={() =>loginWithRedirect()}>
                Sign In
            </ColorButton>
        )
    )
}

export const LogoutComponent: React.FC = () => {
    const {logout, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <ColorButton color="secondary" onClick={() =>logout()}>
                Sign Out
            </ColorButton>
        )
    )
}

export const ProfileComponent: React.FC = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <article>
                {JSON.stringify(user)}
            </article>
        )
    )
}