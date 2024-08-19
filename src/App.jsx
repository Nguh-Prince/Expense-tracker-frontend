import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import { useState, useMemo } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expense/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1)
  const global = useGlobalContext()

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }
  const OrbMemo = useMemo(() => {
    return <Orb />
  }, []);

  return (
    <ApplStyled bg={bg} className="App">
      {OrbMemo}

      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </ApplStyled>
  );
}
const ApplStyled = styled.div`
   height:100vh;
   background-image:url(${props => props.bg});
   position: relative;
   
   main{
   flex:1;
   background: rgba(252, 246, 249, 0.78);
   border:3px solid #FFFFFF;
   backdrop-filter: blur(4.5px);
   border-radius:32px;
   overflow-x:hidden;
   &::wekit-scrollbar{
   width:0;}}

`;


export default App;