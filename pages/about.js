import React from 'react'
import App from '../components/App'
import Header from '../components/Header'

export default (props) => (
  <App>
    <Header pathname={ props.url.pathname } />
    <h2>About Nextjs</h2>
    <p>Welcome Nextjs :).</p>
  </App>
)
