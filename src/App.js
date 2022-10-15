import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './redux/redux-store';
import { Provider, connect } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer'
//import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
//import UsersContainer from './components/Content/Users/UsersContainer';
import Login from './components/Content/Login/Login';
import Preloader from './components/common/Preloader';
import { initializeApp } from "./redux/app-reducer"
const DialogsComponent = React.lazy(() => import('./components/Content/Dialogs/DialogsContainer'));
const UsersComponent = React.lazy(() => import('./components/Content/Users/UsersContainer'));
const App = (props) => {
 // props.initializeApp()
  useEffect(() => {
    props.initializeApp()
  },[])
  if (!props.initialized) {
    return <Preloader />
  }
  return (
    <div className='page__wrapper'>
      <HeaderContainer />
      <Navbar />
      <Suspense fallback={<div><Preloader /></div>}>
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={ <DialogsComponent />} />
          <Route path="/users/*" element={<UsersComponent />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}
let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
const MyApp = connect(mapStateToProps, { initializeApp })(App)
const MainApp = (props) => {
  return /* <React.StrictMode>  */<BrowserRouter>
    <Provider store={store}>
      <MyApp />
    </Provider>
  </BrowserRouter>
  /*  </React.StrictMode>  */
}
export default MainApp
