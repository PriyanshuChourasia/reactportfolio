import { FaRegNewspaper } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";




const iconSize = 28;
const iconColor = "white"



export const AppIcon = {
    blogIcon:<FaRegNewspaper size={iconSize} color={iconColor} />,
    homeIcon:<MdHome size={iconSize} color={iconColor} />,
    aboutIcon: <SiAboutdotme size={iconSize} color={iconColor} />
}




export const sizeIcons = (size:number, Color:string) =>{

    const facebookIcon = <FaFacebook size={size} color={Color} />;
    const instaIcon = <FaSquareInstagram size={size} color={Color} />;
    const twitterIcon = <BsTwitterX size={size} color={Color} />;
    const serviceIcon = <MdOutlineMiscellaneousServices size={size} color={Color} />

    return{
        facebookIcon,instaIcon,
        twitterIcon,serviceIcon
    }

}