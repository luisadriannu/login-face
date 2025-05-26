import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadModel, predictFace } from "../utils/faceRecognition";

export const Login = () => {
  const webcamRef = useRef(null);
  const [agentName, setAgentName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadModel();
    startCamera(); // Llamamos a la función para activar la cámara
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
      }
    } catch (error) {
      alert("No se pudo acceder a la cámara. Verifica los permisos.");
      console.error("Error activando la cámara:", error);
    }
  };

  const handleDetect = async () => {
    if (!webcamRef.current) {
      alert("La cámara no está activa. Asegúrate de permitir el acceso.");
      return;
    }

    // 🔥 Ahora recibimos el objeto completo, no solo className
    const highestPrediction = await predictFace(webcamRef.current);
    console.log("Mayor probabilidad detectada:", highestPrediction);

    // Lista de agentes conocidos
    const knownAgents = ["Abigail Miñano", "Luis Adrian"];

    // ✅ Ahora verificamos si el objeto completo tiene un nombre válido y su probabilidad es alta
    if (
      highestPrediction.className &&
      knownAgents.includes(highestPrediction.className.trim()) &&
      highestPrediction.probability > 0.5
    ) {
      setAgentName(highestPrediction.className);

      if (highestPrediction.className.trim() === "Abigail Miñano") {
        navigate("/home-admin");
      } else if (highestPrediction.className.trim() === "Luis Adrian") {
        navigate("/home-admin");
      }
    } else {
      alert("Intruso detectado 😨");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-red-500 text-2xl">
        {" "}
        Login con Reconocimiento Facial
      </h2>

      {/* Cámara activada aquí */}
      <video
        ref={webcamRef}
        autoPlay
        className="border-2 border-red-500"
      ></video>

      <button
        onClick={handleDetect}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Detectar
      </button>

      {agentName && (
        <h2 className="text-green-500 text-xl mt-4">
          Acceso concedido a: {agentName}
        </h2>
      )}
    </div>
  );
};
