import Link from "next/link"

export default function Navbar()
{
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={'/'}>Aman Dubey</Link>
            <Link className="bg-white px-4 py-3" href={'/addtopic'}>Add Topic</Link>
        </nav>
    )
}