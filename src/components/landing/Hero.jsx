import { Link } from "react-router-dom";
import { FaMotorcycle, FaCarSide, FaBoxOpen, FaWallet } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              Uganda's Smart Mobility Platform
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight">
              Ride.
              <br />
              Deliver.
              <br />
              Pay.
            </h1>

            <p className="mt-6 text-xl text-blue-100 leading-8">
              Book boda rides, taxis, deliveries and manage digital payments
              from one secure app.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100"
              >
                Book a Ride
              </Link>

              <Link
                to="/driver"
                className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition"
              >
                Become a Driver
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <FaMotorcycle size={42} />
              <h3 className="mt-4 text-xl font-bold">Boda Ride</h3>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <FaCarSide size={42} />
              <h3 className="mt-4 text-xl font-bold">Taxi</h3>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <FaBoxOpen size={42} />
              <h3 className="mt-4 text-xl font-bold">Delivery</h3>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <FaWallet size={42} />
              <h3 className="mt-4 text-xl font-bold">Wallet</h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}