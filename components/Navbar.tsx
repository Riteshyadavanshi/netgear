export const Navbar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5] mx-10  md:mx-40 rounded-b-md">
            <div className="text-xl">Netgear Company</div>
            <div className="flex md:hidden">
                <button id="hamburger">
                    <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                    <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                </button>
            </div>
            <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
                <a href="#home" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Home</a>
                <a href="#services" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">Services</a>
                <a href="#aboutus" className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none">About us</a>
                
            </div>

            
        </nav>
    )
}