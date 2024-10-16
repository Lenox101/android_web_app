import { androidImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width navbar navbar-expand-lg navbar-light bg-light">
            <img src={androidImg} alt="Android" width={34}  height={34}/>
            {/* Nav items */}
            <ul className="flex flex-1 justify-center max-sm:hidden">
                {navLists.map((nav) => (
                    <li key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                        {nav}
                    </li>
                ))}
            </ul>

            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                <img src={searchImg} alt="Search" width={18} height={18} />
                <img src={bagImg} alt="Bag" width={24} height={24} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar