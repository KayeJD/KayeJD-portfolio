export function Header() {
    return (
        <header className="py-6 shadow-sm bg-white mb-10 w-full">
            <div className="container mx-auto px-6 flex items-center justify-between">
            <a
                href="/"
                className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition"
            >
                KD<span className="text-blue-600">.</span>
            </a>
            <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
                <a href="/#projects" className="hover:text-blue-600">
                Projects
                </a>
                <a href="/#about" className="hover:text-blue-600">
                About
                </a>
                <a href="/#contact" className="hover:text-blue-600">
                Contact
                </a>
            </nav>
            </div>
        </header>
    );
}