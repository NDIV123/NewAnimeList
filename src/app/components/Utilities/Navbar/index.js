import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex justify-between p-4 md:flex-row flex-col gap-2">
                <Link href="/" className="font-bold text-2xl">NDIVANIMELIST</Link>
                <input placeholder="cari anime..." className="text-black"/>
            </div>
            
        </header>
    )
}

export default Navbar