import Link from "next/link"
import InputSearch from "./inputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex justify-between md:items-center p-4 md:flex-row flex-col gap-2">
                <Link href="/" className="font-bold text-5xl">NDIVANIMELIST</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar