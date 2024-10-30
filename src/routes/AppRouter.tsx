import { BrowserRouter, Route, Routes } from "react-router-dom"
import { navigationRoute } from "./RouteNavigation"






const AppRouter = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
        {
            navigationRoute.map((item,index)=>(
                <Route key={index} path={item.path} element={item.element} errorElement={item.errorElement}>
                  {
                    item?.children && item.children.map((child,index)=>(
                      <Route key={index} path={child.path} element={child.element} errorElement={child.errorElement} />
                    ))
                  }
                </Route>
            ))
        }
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default AppRouter;
