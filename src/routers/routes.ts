import { lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyHome = lazy(() => import("../pages/Home"));
const LazyPortfolio = lazy(() => import("../pages/Portfolio"));
const LazyContact = lazy(() => import("../pages/Contact"));

export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    Component: LazyHome,
    name: "Inicio",
  },
  {
    to: "/portfolio",
    path: "portfolio",
    Component: LazyPortfolio,
    name: "Portafolio",
  },
  {
    to: "/contact",
    path: "contact",
    Component: LazyContact,
    name: "Contacto",
  },
];
