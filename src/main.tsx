import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import './styles/index.module.css'
import './styles/Header.scss'
import './styles/Footer.scss'
import './styles/Home.scss'
import './styles/App.scss'
import './styles/Slides.scss'
import './styles/Form.scss'
import './styles/About.scss'
import './styles/Success.scss'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
