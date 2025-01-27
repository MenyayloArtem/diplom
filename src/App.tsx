import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import InformationLayout from "./layouts/InformationLayout.tsx";
import InformationPage from "./pages/Information/MainInformationPage.tsx";
import ManagementPage from "./pages/Information/ManagementPage.tsx";
import EducationPage from "./pages/Information/EducationPage.tsx";
import DocumentsPage from "./pages/Information/DocumentsPage.tsx";
import TeachersPage from "./pages/Information/TeachersPage.tsx";
import Content from "./pages/Information/Content.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/information" element={<InformationLayout />}>
          <Route path="/information" element={<Content />}/>
            <Route path="/information/main" element={<InformationPage />}/>
            <Route path="/information/management" element={<ManagementPage />}/>
            <Route path="/information/education" element={<EducationPage />}/>
            <Route path="/information/documents" element={<DocumentsPage />}/>
            <Route path="/information/teachers" element={<TeachersPage />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;