import { motion } from "framer-motion";

const stats = [
{
number: "50+",
label: "Campaigns",
},
{
number: "10+",
label: "Bounties",
},
{
number: "6+",
label: "Creator Networks",
},
{
number: "5+",
label: "Ecosystems",
},
];

export default function Impact() {
return (
<section className="py-32 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-center text-6xl md:text-8xl font-black mb-20">
      Impact
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="border-b border-white/10 pb-8">
        <h3 className="text-7xl font-black bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
          50+
        </h3>
        <p className="uppercase tracking-widest text-zinc-500">
          Campaigns Executed
        </p>
      </div>

      <div className="border-b border-white/10 pb-8">
        <h3 className="text-7xl font-black bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
          10+
        </h3>
        <p className="uppercase tracking-widest text-zinc-500">
          Bounties Won
        </p>
      </div>

      <div className="border-b border-white/10 pb-8">
        <h3 className="text-7xl font-black bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
          6+
        </h3>
        <p className="uppercase tracking-widest text-zinc-500">
          Creator Networks
        </p>
      </div>

      <div className="border-b border-white/10 pb-8">
        <h3 className="text-7xl font-black bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
          5+
        </h3>
        <p className="uppercase tracking-widest text-zinc-500">
          Ecosystems
        </p>
      </div>

    </div>
  </div>
</section>
  );
}