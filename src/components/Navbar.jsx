export default function Navbar(){
  return(
    <nav className="flex justify-between px-6 py-6">
      <h1 className="font-bold text-xl">VETERAN</h1>
      <button>
        <a href="#contact" className="bg-purple-600 px-4 py-2 rounded-xl" >
          Work With Me
        </a>
      </button>
    </nav>
  )
}