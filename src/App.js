import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMappind,
  Editor,
} from "./pages";

import "./App.css";

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ backgroundColor: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">sidebar w-0</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar">
              Navbar
            </div>
          </div>
          <div className="">
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="ECommerce" />
              <Route path="/ecommerce" element="ECommerce" />

              {/* Pages */}
              <Route path="/orders" element="Orders" />
              <Route path="/employees" element="employees" />
              <Route path="/customers" element="customers" />

              {/* Apps */}
              <Route path="/kanban" element="kanban" />
              <Route path="/editor" element="Editor" />
              <Route path="/calendar" element="calendar " />
              <Route path="/color-picker" element="color-picker " />

              {/* Charts */}
              <Route path="/line" element="line " />
              <Route path="/area" element="Area " />
              <Route path="/bar" element="Bar " />
              <Route path="/pie" element="Pie " />
              <Route path="/financial" element="financial " />
              <Route path="/color-mapping" element="color-mapping " />
              <Route path="/pyramind" element="pyramind " />
              <Route path="/stacked" element="Stacked " />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
