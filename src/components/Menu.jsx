import { useState } from "react";
import { GetImageUrl } from "../utils/getImageUrl";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative h-screen">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute top-100 left-0 md:left-12 z-50 bg-[#062F37]
        rounded-r-lg px-2 py-4 transition-transform duration-300 ease-in-out cursor-pointer ${
          isOpen ? "translate-x-80" : "translate-x-0 md:translate-x-[-50px]"
        }`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 100% 100%, 0 100%)",
        }}
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
          className="text-cyan-300"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 h-4/5 bg-[#062F37] text-[#BBF8F9] text-neon z-40 overflow-hidden
        transition-all duration-300 ease-in-out md:m-12 ${
          isOpen ? "w-80 p-6" : "w-0 p-0"
        }`}
        style={{
          clipPath:
            "polygon(80px 0%, 100% 0%, 100% 100%, 80px 100%, 0% 90%, 0% 10%)",
        }}
      >
        {isOpen && (
          <div className="flex flex-col h-full gap-12">
            <div className="flex justify-center mt-4">
              <img
                src={GetImageUrl("logo", "png")}
                alt="Logo"
                className="w-40 mx-auto"
              />
            </div>

            <ul className="ms-8 mt-4 space-y-6 text-2xl font-medium tracking-widest font-ttlakes">
              <li>
                <div className="flex gap-4">
                  <img
                    src={GetImageUrl("marco-circular", "png")}
                    className="w-8"
                    alt="Imagen de muestra"
                  />
                  <a href="#" className="hover:text-white transition">
                    INICIO
                  </a>
                </div>
                <img
                  src={GetImageUrl("tecnologia", "png")}
                  className={"w-40 ms-12"}
                  alt="Imagen de muestra"
                />
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  PERFIL
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  MISIONES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  REPORTES
                </a>
              </li>
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
    </div>
  );
};
