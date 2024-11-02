import {Navbar} from "widgets/Navbar/ui/Navbar";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer";


function App() {
  return (
      <div className={classNames('app', {}, [])}>
          <Header />
          <div className="page-wrapper">
              <Navbar />
              <AppRouter />
          </div>
          <Footer />
      </div>
  )
}

export default App
