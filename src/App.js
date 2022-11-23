import Form from "./components/Form"
import "./App.css";
import {BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import GoBackToSignUp from "./components/GoBackToSignUp";




const App = () => {
  return (  <> 
<Router>  
<Routes>

<Route exact path="/" element={<Form/>}/>
<Route exact path="/GoBackToSignUp" element={<GoBackToSignUp/>}/>
</Routes>

</Router>
    
    
    </>
    )
}

export default App