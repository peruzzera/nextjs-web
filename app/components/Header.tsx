export default function Header(){
    return(
        <header className="flex justify-between items-center p-4 shadow">
            <div className="text-green-600 font-bold text-xl">Travel</div>
            <nav className="space-x-4 text-gray-700">
            <a href="#">Home</a>
            <a href="#">Tour</a>
            <a href="#">Local Places</a>
            <a href="#">Discount</a>
         </nav>
        </header>

    )
}