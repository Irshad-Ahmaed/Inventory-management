import { Menu } from "lucide-react"

const Sidebar = () => {
  return (
    <div>
        {/* Top Logo */}
        <div className="flex gap-3 items-center justify-between md:justify-normal pt-8">
            <div>logo</div>
            <h1 className="font-extrabold text-2xl">IRSHAD</h1>
        
            <button className="md:hidden hover:bg-blue-100 px-3 py-3 bg-gray-100 rounded-full">
                <Menu className="w-4 h-4"/>
            </button>
        </div>

        {/* Links */}

        <div>
            {/* Links here */}
        </div>

        <div>
            <p className="text-xs text-gray-500">&copy; 2024 Ir Dashboard</p>
        </div>
    </div>
  )
}

export default Sidebar