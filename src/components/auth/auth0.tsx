import * as React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const LoginComponent: React.FC = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    return (
        !isAuthenticated && (
            <button onClick={() =>loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export const LogoutComponent: React.FC = () => {
    const {logout, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <button onClick={() =>logout()}>
                Sign Out
            </button>
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