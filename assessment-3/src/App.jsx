import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

// REACT ROUTER DOM IMPORT
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS IMPORT
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import NotFound from "./components/NotFound";

// COURSES FILE IMPORT
import courses from "./data/courses";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mt-4">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <CourseList {...props} courses={courses} />}
          />

          <Route
            path="/course/:id"
            render={(props) => <CourseDetails {...props} courses={courses} />}
          />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
