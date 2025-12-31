import Router from "./Routes.js";
import { SidebarProvider } from "../Context/SidebarContext.js"
import AdminManagement from "../Hod/AdminManagement.js";
import HodSidebar from "../component/HodSidebar.js";



function App() {
  return (
    <SidebarProvider>
       
      <Router />

    </SidebarProvider>
  
  );
}

export default App;
