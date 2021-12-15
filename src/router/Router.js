import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerticalLayout from "../layouts/VerticalLayout";
import { BlankRoutes, VerticalRoutes } from "./routes/MainRoutes";

const Router = () => {

  const GetVerticalRoutes = () => {
    return VerticalRoutes.map((route, index) => {
      return route.children ? (
        <Route path={route.path} element={route.element} key={index}>
          {route.children.map((child, index) => {
            return (
              <Route path={child.path} element={child.element} key={index} />
            );
          })}
        </Route>
      ) : (
        <Route path={route.path} element={route.element} key={index} />
      );
    });
  };
  const GetBlankRoutes = () => {
    return BlankRoutes.map((route, index) => {
      return route.children ? (
        <Route path={route.path} element={route.element} key={index}>
          {route.children.map((child, index) => {
            return (
              <Route path={child.path} element={child.element} key={index} />
            );
          })}
        </Route>
      ) : (
        <Route path={route.path} element={route.element} key={index} />
      );
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {GetBlankRoutes()}
        <Route element={<VerticalLayout />}>
          {GetVerticalRoutes()}
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
