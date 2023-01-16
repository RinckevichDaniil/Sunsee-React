import "./styles/App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Admin from "./components/admin";

function App() {
  return (
    <div className="App">
      <div className="wrapp">
        <div className="wrapper">
          <div className="main-wrapper">
            <Header />
            <Admin />
            <Main />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
