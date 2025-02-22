import Logo from "../assets/Bite_Buzz.png"

const Header=()=>
    (
        <div className="flex  justify-between items-center px-8 py-4 shadow-lg" >
            <a className="flex  items-center gap-2 cursor-pointer" href="#">
                <img src={Logo} className="w-12 h-13 "/>
                <span className="text-2xl font-bold">Bite Buzz</span>
            </a>
            <div className="flex gap-20 mr-20">
                <a className=" flex items-center cursor-pointer gap-2 font-semibold hover:text-gray-600" href="#">
                <i class="fa-solid fa-house"></i>Home</a> 
                
                <a className=" flex items-center cursor-pointer gap-2 font-semibold hover:text-gray-600" href="#">
                <i class="fa-solid fa-circle-info"></i>About Us</a>


                <a className=" flex items-center cursor-pointer gap-2 font-semibold hover:text-gray-600" href="#">
                <i class="fa-solid fa-phone"></i>Contact Us </a>

                <a className=" flex items-center cursor-pointer gap-2 font-semibold hover:text-gray-600" href="#">
                <i class="fa-solid fa-cart-shopping"></i>Cart</a>
            </div>
        </div>
    )
 
export default Header