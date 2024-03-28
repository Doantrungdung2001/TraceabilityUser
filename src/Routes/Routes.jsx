// import * as Pages from '../Pages'

// export const NormalRoutes = [
//     {path: '/', element: <Pages.About/>},
//     {path: '/results', element: <Pages.Farm/>},
//     {path: '/farm', element: <Pages.Farm/>},
//     {path: '/news', element: <Pages.New/>},
//     {path: '/about-us', element: <Pages.About/>}
// ];

import Home from "../Pages/Home/Home";
import Result from "../Pages/Result/Result";
import Farm from "../Pages/Farm/Farm";
import New from "../Pages/New/New";
import About from "../Pages/AboutUs/About";
import ProflieFarm from "../Pages/Farm/ProflieFarm";
import History from "../Pages/Result/History";
import NotFound from "../Pages/404/NotFound";

export const NormalRoutes = [
  { path: "/", element: <Home /> },
  { path: "/results/:projectId", element: <Result /> },
  { path: "/results/timeline", element: <History /> },
  { path: "/farm", element: <Farm /> },
  { path: "/farm/detail/:farmId", element: <ProflieFarm /> },
  { path: "/news", element: <New /> },
  { path: "/about-us", element: <About /> },
  { path: "/404-notfound", element: <NotFound /> },
];
