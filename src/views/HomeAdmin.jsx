import { useState } from "react";
import { Menu } from "../components/Menu";
import { GetImageUrl } from "../utils/getImageUrl";
import { motion } from "framer-motion";

export const HomeAdmin = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <article className="flex">
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`flex flex-col gap-6 transition-all duration-300 ease-in-out h-fit my-auto  ${
          isOpen ? "ml-110" : "ml-0"
        } p-8 flex-1`}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white flex items-center gap-5"
        >
          <img
            className="w-70"
            src={GetImageUrl("letras-fbi", "png")}
            alt="Imagen de muestra"
          />
          <p className="text-[#63DAF1] text-neon text-8xl font-bicubik">
            AGENTS
          </p>
        </motion.div>

        <div className="flex items-center text-white gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-6xl font-ttLakes font-bold">
              Bienvenido agente
            </h3>
            <p className="mt-2 text-3xl">
              ABIGAIL <span>"Kitty patitas suaves"</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <button
              className="relative px-6 py-3 text-[#BBF8F9] font-medium transition hover:brightness-110 cursor-pointer z-10"
              style={{
                clipPath:
                  "polygon(14px 0%, calc(100% - 14px) 0%, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0% calc(100% - 14px), 0% 14px)",
                backgroundColor: "#000",
              }}
            >
              Learn more
              <span
                className="absolute inset-0 border-[3px] border-[#00afd0] z-[-1]"
                style={{
                  clipPath:
                    "polygon(14px 0%, calc(100% - 14px) 0%, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 14px 100%, 0% calc(100% - 14px), 0% 14px)",
                  borderRadius: "1.2rem",
                }}
              />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex items-center text-white gap-8 "
        >
          <div className="relative w-60 h-70 transition-transform duration-400 hover:scale-105 cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full "
              src={GetImageUrl("marco", "png")}
              alt="Marco"
            />

            <motion.img
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="absolute top-10 left-1/2 transform -translate-x-1/2 w-28"
              src={GetImageUrl("huella", "png")}
              alt="Huella"
            />

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-base font-semibold"
            >
              Criminal investigation
            </motion.p>
          </div>

          <div className="relative w-60 h-80 transition-transform duration-400 hover:scale-105 cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full"
              src={GetImageUrl("marco", "png")}
              alt="Marco"
            />
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="absolute top-10 left-1/2 transform -translate-x-1/2 w-36"
              src={GetImageUrl("admin", "png")}
              alt="Admin"
            />
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-base font-semibold"
            >
              View profile
            </motion.p>
          </div>

          <div className="relative w-60 h-70 transition-transform duration-400 hover:scale-105 cursor-pointer">
            <img
              className="absolute inset-0 w-full h-full"
              src={GetImageUrl("marco", "png")}
              alt="Marco"
            />
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="absolute top-10 left-1/2 transform -translate-x-1/2 w-36"
              src={GetImageUrl("scam", "png")}
              alt="Scam"
            />
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-base font-semibold"
            >
              Report crime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </article>
  );
};
