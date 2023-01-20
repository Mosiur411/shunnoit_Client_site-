import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../app/store';
export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </Provider>
  )
}
