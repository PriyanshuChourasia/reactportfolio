import { HeaderWrapper } from "@/constants/containers/wrapper/HeaderWrapper"
import { sizeIcons } from "@/constants/Icons/AppIcons"
import { navigationRoute } from "@/routes/RouteNavigation"
import { NavLink } from "react-router-dom"

const Header = () => {

  const {facebookIcon,instaIcon,twitterIcon} = sizeIcons(22,'white');

  const linkIcons = [facebookIcon,instaIcon,twitterIcon];


  return (
    <HeaderWrapper className="flex items-center  justify-between z-40 bg-[rgba(0,0,0,0.43)] w-full fixed">
      <div>
        <h3 className="text-4xl hover:text-teal-500 cursor-pointer text-teal-300 font-bold">
          P.C.
        </h3>
      </div>
      <div className="flex justify-between gap-[3vw] items-center">
      {
        navigationRoute.map((item)=>{
           return item?.children && item.children.map((rou,index)=>{
            if(rou.isHeader === true)
            {
                return <NavLink key={index} 
                className={({isPending,isActive})=> isPending ? "text-gray-600" : isActive ? "text-gray-100 underline-offset-2 underline font-bold text-xl" :"text-gray-200 font-medium"} 
                to={rou.path}>{rou.name}</NavLink>
            }
            else return null;
           }) 
        })
      }
      </div>
      <div>
        <ul className="flex gap-[2vw] cursor-pointer">
            {
              linkIcons.map((item,index)=>(
                <li className="" key={index}>{item}</li>
              ))
            }
        </ul>
      </div>

      {/* <h1 className="text-3xl text-black">Header</h1> */}
    </HeaderWrapper>
  )
}

export default Header
