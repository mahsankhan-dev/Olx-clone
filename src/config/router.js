import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Dashboard from "../Views/Dashboard";
import SignUp from "../Views/Sign UP";
import Login from "../Views/Login";
import CreateAdd from "../Views/CreateAdd";
import MyAdds from "../Views/MyAdds";
import Profile from "../Views/Profile";
import Detail from "../Views/Detail";
import EditProf from "../Views/Edit Prof";

function App(props) {
    console.log('user ki id', props.user)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={props.user ? <Dashboard /> : <Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/createadd" element={props.user ? <CreateAdd /> : <Login />} />
                <Route path="/myadd" element={props.user ? <MyAdds /> : <Login />} />
                <Route path="/profile" element={props.user ? <Profile /> : <Login />} />
                <Route path="/detail/:adId" element={props.user ? <Detail /> : <Login />} />
                <Route path="/editprofile" element={props.user ? <EditProf /> : <Login />} />
            </Routes>
        </Router>
    )
}

export default App