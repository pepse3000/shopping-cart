import {Navbar} from "widgets/Navbar/ui/Navbar";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";


function App() {
  return (
      <div className={classNames('app', {}, [])}>
          <Navbar />
          <AppRouter />
      </div>
  )
}

export default App
