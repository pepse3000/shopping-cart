import {Navbar} from "widgets/Navbar/ui/Navbar";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";
import {Header} from "widgets/Header";


function App() {
  return (
      <div className={classNames('app', {}, [])}>
          <Header />
          <div className="page-wrapper">
              <Navbar />
              <AppRouter />
          </div>
      </div>
  )
}

export default App
