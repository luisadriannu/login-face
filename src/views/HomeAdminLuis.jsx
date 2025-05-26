import { Menu } from "../components/Menu";
import { GetImageUrl } from "../utils/getImageUrl";

export const HomeAdmin = () => {
  return (
    <article className="flex">
      <Menu />

      {/* <div>
        <div className="text-white flex items-center">
          <img src={GetImageUrl("letras-fbi", "png")} alt="" />
          <p>Agents</p>
        </div>

        <div className="flex text-white gap-4">
          <div>
            <p>Bienvenido agente</p>
            <p>
              Abigail <span>"Kitty patitas suaves"</span>
            </p>
          </div>

          <button>Learn more</button>
        </div>

        <div className="flex text-white">
          <div>
            <img src={GetImageUrl("huella", "png")} alt="Imagen de muestra" />
            <p>Criminal investigation</p>
          </div>
          <div>
            <img src={GetImageUrl("admin", "png")} alt="Imagen de muestra" />
            <p>View profile</p>
          </div>
          <div>
            <img src={GetImageUrl("scam", "png")} alt="Imagen de muestra" />
            <p>Report crime</p>
          </div>
        </div>
      </div> */}
    </article>
  );
};
