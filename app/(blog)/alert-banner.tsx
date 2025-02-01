import Link from "next/link";

export default function AlertBanner() {
 

  return (
    <div
      className="flex bg-orange-600 text-black font-bold justify-between h-14 px-4 pt-4 left-0 z-50 w-full border-b   backdrop-blur"
    >
    
      <div className="text-center text-sm font-extrabold">
       BLOGS
    </div>
    <nav className="flex font-bold space-x-6 text-sm">
      <Link href="/" className="hover:text-white">Home</Link>
      <Link href="about" className="hover:text-white">About</Link>
      <Link href="contact" className="hover:text-white">Contact</Link>
    </nav>
    </div>
  );
}
