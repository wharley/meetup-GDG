import App from '../components/App'
import Header from '../components/Header'
import PageList from '../components/PageList'

export default (props) => (
  <App>
    <Header pathname={ props.url.pathname } />
    <PageList />
  </App>
)
