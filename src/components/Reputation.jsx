import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    label: "Campaign Wins",
  },
  {
    number: "10+",
    label: "Bounties Wins",
  },
  {
    number: "6+",
    label: "Creator Agencies",
  },
  {
    number: "4+",
    label: "Ambassador Programs",
  },
];

export default function Reputation() {
  return (
    <section
      id="reputation"
      className="py-40 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl md:text-7xl font-black text-center mb-16">
          Reputation
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={stat.label}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-5xl font-black text-purple-400">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}