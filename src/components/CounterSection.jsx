import React from "react";
import CountUp from "react-countup";
import { RiUserSmileFill, RiBrushFill, RiTeamFill } from "react-icons/ri"; // 👈 التغيير هنا

const stats = [
  {
    icon: <RiUserSmileFill size={40} className="text-blue-500" />,
    label: "Happy Clients",
    value: 250,
    suffix: "+"
  },
  {
    icon: <RiBrushFill size={40} className="text-green-500" />,
    label: "Artworks Created",
    value: 1200,
    suffix: "+"
  },
  {
    icon: <RiTeamFill size={40} className="text-pink-500" />,
    label: "Team Members",
    value: 15,
    suffix: "+"
  }
];

export default function CounterSection() {
  return (
    <section className="py-12 mr-8 ">
      <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto text-center md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl"
          >
            <div className="mb-4">{stat.icon}</div>
            <h2 className="text-4xl font-bold text-gray-800">
              <CountUp end={stat.value} duration={2} />{stat.suffix}
            </h2>
            <p className="mt-2 text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
