import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 h-[500px] w-[500px] bg-purple-600/20 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-orange-500/20 blur-[180px] rounded-full" />

      {/* Giant Background Text */}

      <h1
        className="
        absolute
        text-[8rem]
        md:text-[18rem]
        font-black
        text-white/[0.03]
        select-none
        "
      >
        BUILD
      </h1>

      <div className="relative z-10 text-center max-w-4xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
          uppercase
          tracking-[0.4em]
          text-purple-400
          mb-6
          "
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
          text-6xl
          md:text-8xl
          font-black
          leading-none
          "
        >
          Ready To Build?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
          mt-8
          text-zinc-400
          text-lg
          md:text-xl
          max-w-2xl
          mx-auto
          "
        >
          Helping Web3 ecosystems grow through
          community building, campaigns and creator initiatives.
        </motion.p>

        {/* CTA Button */}

        <motion.a
          href="https://x.com/its_veteran1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
          inline-flex
          mt-12
          px-8
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-purple-600
          to-purple-400
          font-semibold
          shadow-lg
          shadow-purple-500/20
          "
        >
          Work With Me →
        </motion.a>

        {/* Socials */}

        <div
          className="
          mt-20
          flex
          flex-wrap
          justify-center
          gap-8
          "
        >
          <a
            href="https://x.com/its_veteran1"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-3
            text-zinc-300
            hover:text-white
            transition
            "
          >
            <FaXTwitter size={24} />
            <span>@its_veteran1</span>
          </a>

          <a
            href="https://t.me/its_veteran"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-3
            text-zinc-300
            hover:text-white
            transition
            "
          >
            <FaTelegram size={24} />
            <span>@its_veteran</span>
          </a>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-3
            text-zinc-300
            hover:text-white
            transition
            "
          >
            <FaDiscord size={24} />
            <span>veteran_006</span>
          </a>

          <a
            href="mailto:veteranconsoles@gmail.com"
            className="
            flex
            items-center
            gap-3
            text-zinc-300
            hover:text-white
            transition
            "
          >
            <HiOutlineMail size={24} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}