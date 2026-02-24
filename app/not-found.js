import Link from "next/link"

export default function NotFound() {
    return (
        <div className="bg-[#002333] min-h-screen flex justify-center items-center">
            <div className="w-[520px] h-[380px] shadow-2xl rounded-3xl p-[50px] gap-[20px] text-center flex flex-col justify-center items-center bg-[#FFFFFF]">
                <h1 className="text-6xl font-extrabold text-[#159A9C]">404</h1>
                <h2 className="text-2xl font-bold text-[#002333]">Oops! Page not found</h2>
                <p className="text-[#B4BEC9] text-sm">
                    The page you are looking for does not exist or has been removed. You can return to the homepage and continue using the site.
                </p>
                <Link href="/">
                    <button className="bg-[#159A9C] text-[#FFFFFF] rounded-xl p-3 mt-4 hover:bg-[#DEEFE7] hover:text-[#002333] transition duration-300">
                        🏠 Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    )
}
