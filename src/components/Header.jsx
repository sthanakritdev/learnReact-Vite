
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({title,theam,setTheam}) => {


    function toggleTheam() {
        if (theam == "light"){
            setTheam("dark")
        }else{
            setTheam("light")
        }
    }
    return (
        <>
        <nav>
            <h1>{title}</h1>
            <span onClick={toggleTheam}>
                {theam == "light" ? <MdSunny size={40}/> : <BsFillMoonStarsFill size={40}/>}
            </span>
        </nav>
        </>
    );
}

export default Header;