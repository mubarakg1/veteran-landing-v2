import { motion } from "framer-motion";
import { CheckCircle, ArrowUpRight } from "lucide-react";

import angland from "../assets/logos/anglanglogo.jpg";
import wach from "../assets/logos/wachai.jpg";
import edel from "../assets/logos/edellogo.jpg";
import action from "../assets/logos/actionmodellogo.jpg";
import wintoken from "../assets/logos/1wintokenlogo.jpg";
import tomoland from "../assets/logos/tomolandlogo.jpg";

const programs = [
{
name: "1 win Token",
handle: "@1winToken",
logo: wintoken,
url: "https://x.com/1winToken",
},
{
name: "Wach AI",
handle: "@Wach_ai",
logo: wach,
url: "https://x.com/Wach_ai",
},
{
name: "Edel Finance",
handle: "@edeldotfinance",
logo: edel,
url: "https://x.com/edeldotfinance",
},
{
name: "Action Model",
handle: "@ActionModelAI",
logo: action,
url: "https://x.com/ActionModelAI",
},
{
name: "Angland",
handle: "@AnglandX",
logo: angland,
url: "https://x.com/AnglandX",
},
{
name: "Tomoland",
handle: "@tomoland_app",
logo: tomoland,
url: "https://x.com/tomoland_app",
}
];

export default function Ambassadors() {
return ( <section
   id="ambassadors"
   className="relative py-28 px-6"
 > <div className="max-w-7xl mx-auto">


    <div className="text-center mb-16">

    <p className="uppercase tracking-[0.4em] text-purple-400 mb-3">
  Experience
</p>

<h2 className="text-4xl md:text-6xl font-black">
  Ambassador Experience
</h2>

<p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
  Ecosystems I've contributed to through ambassador programs,
  campaigns, community engagement and advocacy.
</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

      {programs.map((program) => (
        <motion.a
          key={program.name}
          href={program.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -6,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-5
            transition-all
            duration-300
            hover:border-purple-500/40
            hover:bg-white/[0.05]
          "
        >
          <div className="flex justify-center mb-5">
            <img
              src={program.logo}
              alt={program.name}
              className="h-14 object-contain"
            />
          </div>

          <div className="flex items-center justify-center gap-1">

            <h3 className="font-semibold text-sm md:text-base">
              {program.name}
            </h3>

            <CheckCircle
              size={16}
              className="fill-sky-500 text-sky-500"
            />

          </div>

          <p className="text-purple-400 text-xs text-center mt-2">
            Ambassador
          </p>

          <div className="flex items-center justify-center gap-1 mt-4 text-zinc-400 text-xs">

            <span>{program.handle}</span>

            <ArrowUpRight
              size={12}
              className="opacity-60"
            />

          </div>

        </motion.a>
      ))}

    </div>
    <div className="flex justify-center mt-12">
  <a
    href="https://x.com/its_veteran1"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-6 py-3
      rounded-2xl
      border border-white/10
      bg-white/[0.03]
      hover:bg-white/[0.05]
      hover:border-purple-500/40
      transition-all
    "
  >
    View More Experience →
  </a>
</div>

  </div>
</section>

);
}
