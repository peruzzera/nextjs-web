export default function PerfectHoliday(){
    return (
        <section className="text-center py-10">
  <h3 className="text-orange-500 font-bold">Choose Tour</h3>
  <h2 className="text-3xl font-bold">Perfect Holiday</h2>
  <p className="text-gray-500 mb-8">
    Plan your vacation with our exclusive offers
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
    <div>
      <img src="img/holiday-1.jpg.svg" className="rounded mb-2" />
      <h4 className="font-bold">Winter Tour</h4>
      <p className="text-sm text-gray-600">Austria</p>
    </div>
    <div>
      <img src="img/holiday-2.jpg.svg" className="rounded mb-2" />
      <h4 className="font-bold">Summer Vibes</h4>
      <p className="text-sm text-gray-600">Greece</p>
    </div>
    <div>
      <img src="img/holiday-3.jpg.svg" className="rounded mb-2" />
      <h4 className="font-bold">Beach Holiday</h4>
      <p className="text-sm text-gray-600">Thailand</p>
    </div>
    <div>
      <img src="img/holiday-4.jpg.svg" className="rounded mb-2" />
      <h4 className="font-bold">City Break</h4>
      <p className="text-sm text-gray-600">London</p>
    </div>
    <div>
      <img src="img/holiday-5.jpg.svg" className="rounded mb-2" />
      <h4 className="font-bold">Adventure</h4>
      <p className="text-sm text-gray-600">Bali</p>
    </div>
    <div>
      <img src="img/holiday-6.jpg.svg" className="rounded mb-2" />
      <h4 className="font-bold">Island Safari</h4>
      <p className="text-sm text-gray-600">Maldives</p>
    </div>
  </div>
  <button className="mt-8 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
    View All
  </button>
</section>

    )
}