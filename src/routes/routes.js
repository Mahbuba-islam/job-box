import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AccountCreator from "../pages/register/AccountCreator";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "../utils/PrivateRoute";
import AddJob from "../pages/employeeDashboard/AddJob";
import EmployerDashboard from "../pages/employeeDashboard/EmployerDashboard";
import CandidateDashboard from "../pages/candidateDashboard/CandidateDashboard";
import AppliedJobs from "../pages/candidateDashboard/AppliedJobs";
import Candidates from "../pages/employeeDashboard/Candidates";
import CandidateDetails from "../pages/CandidateDetails";
import Profile from "../pages/Profile";
import Users from "../pages/Users";
import ChatRoom from "../pages/Chat/ChatRoom";
import Messages from "../pages/Chat/Messages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/conversation/:id",
        element: <ChatRoom />,
      },
      {
        path: "/messagesBox",
        element: <Messages/>,
      },
      {
        path: "/users",
        element: <Users />,
      },
      
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/applicant/:id",
        element: <CandidateDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "candidates",
        element: <Candidates />,
      },
      {
        path: "employer",
        element: <EmployerDashboard />,
      },
      {
        path: "candidate",
        element: <CandidateDashboard />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

export default routes;
