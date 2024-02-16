import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex-grow flex flex-col justify-center items-center gap-7">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
        Welcome <span className="block">to</span>{" "}
        <span className="block font-semibold">Dummy Store</span>
      </h2>
      <Link to={"products"}>
        <button className="rounded-xl px-6 py-2 bg-green-600 text-white font-semibold text-md md:text-xl lg:text-2xl">
          Shop Now
        </button>
      </Link>
    </main>
  );
};
export default Home;
