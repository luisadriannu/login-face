import { useLoader } from "../context/LoaderContext";

export const Loader = () => {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ffffffa6] bg-opacity-50 z-50">
      <div className="text-center">
        {/* <img
          src={GetImageUrl("logoLoaderGob", "gif")}
          alt="Cargando..."
          className="w-80 h-80"
        /> */}
      </div>
    </div>
  );
};
