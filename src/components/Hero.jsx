import { motion } from "framer-motion";
import pfp from "../assets/images/pfp.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[150px]" />
      <div className="absolute bottom-10 right-20 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[150px]" />

      {/* Giant Background Text */}
      <h1 className="absolute text-[10rem] md:text-[20rem] font-black text-white/[0.03] select-none">
        VETERAN
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Avatar Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Floating Cards */}

          <div className="absolute -top-4 left-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            🏆 30+ Campaign Wins
          </div>

          <div className="absolute top-20 -right-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            🚀 Creator Lead
          </div>

          <div className="absolute bottom-12 -left-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            🎯 Bounty Winner
          </div>

          <div className="absolute -bottom-4 right-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
            🌍 Ambassador
          </div>

          {/* Avatar */}

          <div className="relative">
            <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl scale-110" />

            <img
              src={pfp}
              alt="Veteran"
              className="relative w-[320px] md:w-[450px] rounded-full"
            />
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="uppercase tracking-[0.4em] text-purple-400 font-semibold">
            Web3 Ambassador
          </p>

          <h1 className="mt-4 text-6xl md:text-8xl font-black leading-none">
            Veteran
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Web3 Ambassador, Creator and Community Builder helping
            emerging ecosystems grow through strategic campaigns,
            content and community engagement.
          </p>

          <div className="mt-8 space-y-2 text-2xl font-semibold">
            <p>Building Communities.</p>
            <p>Driving Adoption.</p>
            <p>Creating Impact.</p>
          </div>

          <div className="flex gap-4 mt-10">
            <button 
            //this should be a link to ambassador work
            >
             <a href="#ambassadors" className="bg-gradient-to-r from-purple-600 to-purple-400 px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition">
               View My Work
             </a>
             
             
            </button>

            <button className="border border-white/10 px-7 py-4 rounded-2xl backdrop-blur-xl hover:bg-white/5 transition">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}