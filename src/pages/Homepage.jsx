import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className=" flex-1 text-center text-6xl animate-pulse">
          <h1 className=" h-full flex justify-center items-center">
            Welcome to <br /> Simple CRUD APP
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
