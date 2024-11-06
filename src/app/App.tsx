import {Navbar} from "widgets/Navbar/ui/Navbar";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
      <div className={classNames('app', {}, [])}>
          <Header />
          <div className="page-wrapper">
              <Navbar />
              <AppRouter />
          </div>
          <Footer />
          <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
      </div>
  )
}

export default App
