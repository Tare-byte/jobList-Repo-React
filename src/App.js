import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Index from "./Screens/Index.jsx";
import JobList from "./Screens/JobListing.jsx";
import JobDetails from "./Screens/JobDetails.jsx";
import Resume from "./Screens/Resume.jsx";
import Profile from "./Screens/Profile.jsx";
import PostResume from "./Screens/PostResume";
import JobPost from "./Screens/JobPost";
import EditResume from "./Screens/EditResume";
import ProfileDetails from "./Screens/ProfileDetails";
import BookMark from "./Screens/BookMarks";
import AppliedJob from "./Screens/AppliedJobs";
import DeleteAccount from "./Screens/DeleteAccount";
import Signup from "./Screens/Signup";
import Signin from "./Screens/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post-resume" element={<PostResume />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/edit-resume" element={<EditResume />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/applied-job" element={<AppliedJob />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
