import { Space } from "antd";
import "./App.css";
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import PageContent from './components/PageContent'
import SideMenu from './components/Sidebar';
import axios from 'axios';



function App() {
  // Make an HTTP request to your backend API
  axios.get('/api/data')
    .then(response => {
      // Handle the response data
      console.log(response.data);
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });

  return (
    <div className="App">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}
export default App;