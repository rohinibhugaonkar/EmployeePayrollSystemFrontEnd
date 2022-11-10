
import './App.css';
import Appbar from './components/Appbar'
import BottomAppBar from './components/BottomAppBar'
import Employee from './components/Employee'
import RegisterUser from './components/RegisterUser'
import EmployeeDetails from './components/EmployeeDetails'
import EmployeeDetailsUpdate from './components/EmployeeDetailsUpdate'
import AddEmployee from './components/AddEmployee'
import PayrollDetails from './components/PayrollDetails'
import SwipeableTextMobileStepper from './components/SwipeableTextMobileStepper'
import FloatingActionButtonExtendedSize from './components/FloatingActionButtonExtendedSize'
import {
  Route,
  Routes,
  Link,
  Outlet
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import MediaCard from './components/MediaCard';


const HomeLoginScreen = () => {
  return (
    
    <div >
   
      <h2  > PLease login / Register to view Details</h2>
   
      
      <Outlet />
    </div>
  );
};


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLoginScreen />} />
      <Route path="login" element={<Employee />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="employeeDetails" element={<EmployeeDetails />} />
        <Route path="employeeDetailsUpdate" element={<EmployeeDetailsUpdate />} />
        <Route path="addEmployee" element={<AddEmployee />} />
        <Route path="payrollDetails" element={<PayrollDetails />} />
        <Route path="addNewEmployee" element={<AddEmployee />} />

        {/* Optional index route if no nested routes match */}
      
    </Routes>
    
  );
};

function App() {
  return (
   <div className="App">
      <Appbar />
      <AppRoute />
        <FloatingActionButtonExtendedSize />
        <SwipeableTextMobileStepper />
        <BottomAppBar />
      </div>
   
  );
}

export default App;

