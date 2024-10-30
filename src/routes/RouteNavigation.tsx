import { lazy } from "react";
import { AppIcon, sizeIcons } from "@/constants/Icons/AppIcons";
import { IAppRouteInterface } from "@/interfaces/RouteInterface/AppRouteInterface";
import HomePage from "@/views/home/Home";
import AboutPage from "@/views/about/About";
import BlogPage from "@/views/blog/Blog";
import MainLayout from "@/views/layout/main";
import ServicePage from "@/views/service/Service";



// const HomePage = lazy(()=> import("@/views/home/Home"));
// const AboutPage = lazy(()=> import('@/views/about/About'));
// const BlogPage  = lazy(()=> import("@/views/blog/Blog"));
// const MainLayout = lazy(()=> import("@/views/layout/main"));


const {serviceIcon} = sizeIcons(24,"white");




export const navigationRoute:IAppRouteInterface[] = [
    /**
     * Routes of SPA
     */
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<div>Error</div>,
        isHeader:true,
        icon: AppIcon.homeIcon,
        children:[
            {
                path:"/",
                element:<HomePage/>,
                errorElement:<div>Error</div>,
                isHeader:true,
                icon: AppIcon.homeIcon,
                name:"Home"
            },
            {
                path:"service",
                element:<ServicePage/>,
                errorElement:<div>Error</div>,
                isHeader:true,
                icon:serviceIcon,
                name:"Services"
            },
            {
                path:"about",
                element:<AboutPage/>,
                errorElement:<div>Error</div>,
                isHeader:true,
                icon: AppIcon.aboutIcon,
                name:"About"
            },
            {
                path:"blog",
                element:<BlogPage/>,
                errorElement:<div>Error</div>,
                isHeader:true,
                icon:AppIcon.blogIcon,
                name:"Blog"
            },

        ]
    },


];