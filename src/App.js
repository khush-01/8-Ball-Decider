import { useContext } from "react";
import { MyContext } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import "animate.css";
import Initial from "./components/Initial";
import Confirm from "./components/Confirm";
import Result from "./components/Result";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const App = () => {
  const context = useContext(MyContext);

  const handleComponent = () => {
    let screen = context.state.screen;
    if (screen === 0) return <Initial />;
    if (screen === 1) return <Confirm />;
    if (screen === 2) return <Result />;
  };

  return (
    <div>
      <div className="container">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={context.state.screen}
            timeout={400}
            classNames="zoom"
          >
            {handleComponent()}
          </CSSTransition>
        </SwitchTransition>
      </div>

      <ToastContainer position="top-left" autoClose={3000} />

      <footer>Copyright &copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default App;
