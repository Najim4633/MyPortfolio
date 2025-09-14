export function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">Portfolio</div>
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
