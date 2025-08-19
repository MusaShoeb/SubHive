import Link from "next/link"

export default function NavBar () {
    return (
        <div className="flex m-10">
            <div className="title text-lg">
                Sub Hive
            </div>
            <nav className="text-[var(--text-gradient)] text-md mx-5">
                <Link href = "/" className="mx-2">Home</Link>
                <Link href = "/substitutes" className="mx-2">Substitutes</Link>
                <Link href = "/pricing" className="mx-2">Pricing</Link>
                <Link href = "/profile" className="mx-2">Profile</Link>
                <Link href = "/login" className="mx-2">Login</Link>
            </nav>

        </div>
    )
}