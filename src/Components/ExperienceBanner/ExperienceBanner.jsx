import { useEffect, useState } from "react";
import jbl_speaker from "../../assets/JBL_BOOMBOX2.png";
export default function ExperienceBanner() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-31T23:59:59").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="max-w-screen-xl  mx-auto mt-12 p-8 mb-2 sm:mb-14 bg-linear-to-r 
      from-black/70 to-black
      rounded-2xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden"
    >
      {/* Left side image */}
      <div className="w-full md:w-1/2">
        <img
          data-aos="fade-right"
          src={jbl_speaker}
          alt="Experience"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side content */}
      <div
        data-aos="fade-left"
        className="w-full md:w-1/2 p-8 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Enhance Your Experience
        </h2>

        {/* Countdown Timer */}
        <div className="flex justify-center md:justify-start space-x-4 mb-6">
          <div className="bg-white text-center text-[#003F62] shadow w-20 rounded-full p-3">
            <p className="text-xl font-bold">{timeLeft.days || "00"}</p>
            <span className="text-sm ">Days</span>
          </div>
          <div className="bg-white text-center text-[#003F62] shadow w-20 rounded-full p-3">
            <p className="text-xl font-bold">{timeLeft.hours || "00"}</p>
            <span className="text-sm ">Hours</span>
          </div>
          <div className="bg-white text-center text-[#003F62] shadow w-20 rounded-full p-3">
            <p className="text-xl font-bold">{timeLeft.minutes || "00"}</p>
            <span className="text-sm ">Minutes</span>
          </div>
          <div className="bg-white text-center text-[#003F62] shadow w-20 rounded-full p-3">
            <p className="text-xl font-bold">{timeLeft.seconds || "00"}</p>
            <span className="text-sm ">Seconds</span>
          </div>
        </div>

        {/* Button */}
        <button className="px-5 cursor-pointer py-2 bg-[#EDA415] hover:bg-orange-500 rounded-lg text-white font-semibold shadow-md transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}
