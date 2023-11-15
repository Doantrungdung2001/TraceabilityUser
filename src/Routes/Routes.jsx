// import * as Pages from '../Pages'

// export const NormalRoutes = [
//     {path: '/', element: <Pages.About/>},
//     {path: '/results', element: <Pages.Farm/>},
//     {path: '/farm', element: <Pages.Farm/>},
//     {path: '/news', element: <Pages.New/>},
//     {path: '/about-us', element: <Pages.About/>}
// ];

import Home from '../Pages/Home/Home'
import Result from '../Pages/Result/Result'
import Farm from '../Pages/Farm/Farm'
import New from '../Pages/New/New'
import About from '../Pages/AboutUs/About'
import ProflieFarm from '../Pages/Farm/ProflieFarm'

export const NormalRoutes = [
    {path: '/', element: <Home/>},
    {path: '/results', element: <Result/>},
    {path: '/farm', element: <Farm/>},
    {path: '/farm/detail', element: <ProflieFarm/>},
    {path: '/news', element: <New/>},
    {path: '/about-us', element: <About/>}
];