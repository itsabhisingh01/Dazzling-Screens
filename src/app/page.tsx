export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Theater Booking System 🎭</h1>
      <p className="text-lg">Book your favorite movies with ease!</p>
      <button className=" bg-gray-800 px-5 py-3 my-5 cursor-pointer hover:bg-amber-50 hover:text-black rounded-xl transition duration-500">Book Now</button>
    </main>
  );
}
