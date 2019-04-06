import ReactStarter from "../../components/ReactStarter";
import NotFoundPage from "../../components/NotFoundPage";

export const routes = [
  {
    component: ReactStarter,
    exact: true,
    path: "/"
  },
  { component: NotFoundPage }
];
