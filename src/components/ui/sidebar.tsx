export default function Sidebar() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-8 text-black">🎬 Dazzling</h1>
        <ul className="space-y-7 ml-7 text-gray-500">
          {[
            "Dashboard",
            "Bookings",
            "Theaters",
            "Coupons",
            "Slots",
            "Schedules",
            "Payments",
            "Security",
            "Settings",
          ].map((item) => (
            <li key={item} className="cursor-pointer hover:text-yellow-500">
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* <Button>Log Out</Button> */}
      <button className="text-gray-500 mt-0 text-sm">Log Out</button>
    </>
  );
}
