import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-indigo-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">
                        Employee Management
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link href="/"
                        className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/login"
                        className="text-gray-300 hover:text-white">
                        Login
                    </Link>
                    <Link href="/employees"
                        className="text-gray-300 hover:text-white">
                        employees
                    </Link>
                </div>
            </div>
        </nav>
    );
}