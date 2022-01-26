import { DocPage, Signup } from "./pages";

const defaultRoutes = [
  {
    path: "/signup",
    name: "Signup Page",
    element: Signup,
    layout: "",
  },
  {
    path: "/",
    name: "Landing Page",
    element: DocPage,
    layout: "",
  },
];

export { defaultRoutes };
