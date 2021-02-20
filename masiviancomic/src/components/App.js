//Design Libraries
import { Layout } from 'antd';

//Components - Subcomponents
import Comic from './comic/Comic';

//Styles
import './App.css';

//Constants
const { Header, Footer, Content } = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header-nav">
          Comic Rating
        </Header>
        <Content className="content-app">
          <Comic/>
        </Content>
        <Footer className="footer-design">
          <div className="footer-content">
            Cristian Orjuela © 2021 
          </div>
        </Footer>
      </Layout>
    </div>
  );
};
