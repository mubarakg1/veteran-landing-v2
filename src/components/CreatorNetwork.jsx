import { motion } from "framer-motion";

import ap from "../assets/logos/aplogo.jpg";
import ccc from "../assets/logos/ccclogo.jpg";
import brick from "../assets/logos/bricktopianlogo.jpg";
import arcadia from "../assets/logos/arcadialogo.jpg";
import pandora from "../assets/logos/pandoralogo.jpg";
import kronicles from "../assets/logos/kronicleslogo.jpg";

const agencies = [
{
name: "AP Collective",
logo: ap,
},
{
name: "CCC",
logo: ccc,
},
{
name: "Bricktopians",
logo: brick,
},
{
name: "Arcadia",
logo: arcadia,
},
{
name: "Pandora",
logo: pandora,
},
{
name: "Kronicles",
logo: kronicles,
},
];

export default function CreatorNetwork() {
return ( <section
   id="creator-network"
   className="py-32 px-6"
 > <div className="max-w-7xl mx-auto">


    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.4em] text-orange-400 mb-3">
        Creator
      </p>

      <h2 className="text-5xl md:text-7xl font-black">
        Creator Network
      </h2>

      <p className="text-zinc-400 max-w-2xl mx-auto mt-5">
        Organizations and teams I've worked with across
        content, growth, community and Web3 campaigns.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-6">

      {agencies.map((agency) => (
        <motion.div
          key={agency.name}
          whileHover={{
            y: -8,
          }}
          className="
            group
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            transition-all
            duration-300
            hover:border-orange-500/30
          "
        >

          <div className="h-24 flex items-center justify-center">

            <img
              src={agency.logo}
              alt={agency.name}
              className="
                max-h-16
                object-contain
                grayscale
                group-hover:grayscale-0
                transition-all
                duration-300
              "
            />

          </div>

          <div className="mt-6 text-center">

            <h3 className="font-semibold">
              {agency.name}
            </h3>

            <p className="text-zinc-500 text-sm mt-2">
              Creator
            </p>

          </div>

        </motion.div>
      ))}

    </div>

    <div className="mt-16 text-center">

      <p className="text-zinc-500">
        Worked across multiple Web3 growth,
        creator and community ecosystems.
      </p>

    </div>

  </div>
</section>

);
}
