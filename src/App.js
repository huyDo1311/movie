// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import LoginPage from "./page/LoginPage/LoginPage";
import DetailPage from "./page/DetailPage/DetailPage";
import Layout from "./page/template/Layout";
import BookingPage from "./page/BookingPage/BookingPage";
import Spinner from "./component/Spinner/Spinner";
import AdminPage from "./page/AdminPage/AdminPage";
import AdminTemplate from "./page/template/AdminTemplate/AdminTemplate";
import DashBroad from "./page/AdminPage/Dashbroad/DashBroad";
import Films from "./page/AdminPage/Films/Films";
import ShowTime from "./page/AdminPage/ShowTime/ShowTime";
import AddNew from "./page/AdminPage/Films/AddNew/AddNew";
import Edit from "./page/AdminPage/Films/Edit/Edit";


function App() {
  return (
    <div>
      {/* <Spinner /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout content={<HomePage />} />} />
          <Route path="/login" element={<Layout content={<LoginPage />} />} />
          <Route
            path="/detail/:id"
            element={<Layout content={<DetailPage />} />}
          />
          <Route
            path="/booking"
            element={<Layout content={<BookingPage />} />}
          />


          {/* Admin Routing */}
          {/* <Route path="list-user" element={<Layout content={<AdminPage1 />}/>} /> */}
          <Route path="admin-page" element={<AdminPage />} />
          <Route path="/admin" element={<AdminTemplate component={<DashBroad/>}/>} />
          <Route path="/admin/films" element={<AdminTemplate component={<Films/>}/>} />
          <Route path="/admin/films/addnew" element={<AdminTemplate component={<AddNew/>}/>} />
          <Route path="/admin/films/edit/:id" element={<AdminTemplate component={<Edit/>}/>} />
          <Route path="/admin/users" element={<AdminTemplate component={<DashBroad/>}/>} />
          <Route path="/admin/show-times" element={<AdminTemplate component={<ShowTime/>}/>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
