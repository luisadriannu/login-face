import { GetImageUrl } from "../utils/getImageUrl";
import { motion } from "framer-motion";

export const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative h-screen me-24"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute top-1/2 -translate-y-1/2 left-0 md:left-12 z-50 bg-[#062F37]
    rounded-r-lg py-4 transition-transform duration-300 ease-in-out cursor-pointer h-40 ${
      isOpen ? "translate-x-88" : "translate-x-0 md:translate-x-[-50px]"
    }`}
        style={{
          clipPath:
            "polygon(0% 0%, calc(100% - 12px) 0%, 100% 20%, 100% 80%, calc(100% - 12px) 100%, 0% 100%)",
          minWidth: "60px",
        }}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cyan-300 mx-auto"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.div>
      </button>

      <aside
        className={`fixed top-0 left-0 bg-[#062F37] text-[#BBF8F9] text-neon z-40 overflow-hidden
        transition-all duration-300 ease-in-out h-full ${
          isOpen ? "w-100 p-6" : "w-0 p-0"
        }`}
        style={{
          clipPath:
            "polygon(80px 0%, 100% 0%, 100% 100%, 80px 100%, 0% 90%, 0% 10%)",
        }}
      >
        {isOpen && (
          <div className="flex flex-col h-full gap-12">
            <div className="flex justify-center mt-4">
              <motion.img
                src={GetImageUrl("logo", "png")}
                alt="Logo"
                className="w-55 mx-auto"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            <ul className="ms-8 mt-4 space-y-6 text-3xl font-medium tracking-widest font-bicubik">
              <li>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                  className="flex gap-4"
                >
                  <img
                    src={GetImageUrl("marco-circular", "png")}
                    className="w-8"
                    alt="Imagen de muestra"
                  />
                  <a
                    href="#"
                    className="hover:text-white transition-transform duration-400 hover:scale-105 "
                  >
                    INICIO
                  </a>
                </motion.div>
                <img
                  src={GetImageUrl("tecnologia", "png")}
                  className={"w-40 ms-16"}
                  alt="Imagen de muestra"
                />
              </li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <a
                  href="#"
                  className="inline-block hover:text-white transition-transform duration-400 hover:scale-105"
                >
                  PERFIL
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                className="my-8"
              >
                <a
                  href="#"
                  className="inline-block hover:text-white transition-transform duration-400 hover:scale-105"
                >
                  MISIONES
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <a
                  href="#"
                  className="inline-block hover:text-white transition-transform duration-400 hover:scale-105"
                >
                  REPORTES
                </a>
              </motion.li>
            </ul>

            {/* <div className="mb-6 flex justify-center ">
              <img
                src={GetImageUrl("gears", "png")}
                alt="Engranajes"
                className="w-10"
              />
            </div> */}
          </div>
        )}
      </aside>
    </motion.div>
  );
};
