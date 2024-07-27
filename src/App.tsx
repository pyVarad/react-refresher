import React from 'react'
import { RouterComponent } from './routing/routing'
import {useAuth0} from '@auth0/auth0-react'


function App() {

  const {isLoading, error} = useAuth0();

  return (
    <React.Fragment>
      {error && (<h3>Failed....</h3>)}
      {!error && isLoading && <p>Loading....</p>}
      {!error && !isLoading && <RouterComponent />}
    </React.Fragment>
  )
}

export default App
