import {Navbar} from "widgets/Navbar/ui/Navbar";
import {classNames} from "shared/lib/classNames/classNames";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";

function App() {
  return (
      <div className={classNames('app', {}, [])}>
          <Navbar />
      </div>
  )
}

export default App
