import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadModel, predictFace } from "../utils/faceRecognition";

export const Login = () => {
  const webcamRef = useRef(null);
  const [agentName, setAgentName] = useState("");
  const [intruderAlert, setIntruderAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadModel();
    startCamera();
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

    const highestPrediction = await predictFace(webcamRef.current);
    console.log("Mayor probabilidad detectada:", highestPrediction);

    const knownAgents = ["Abigail Miñano", "Luis Adrian"];

    if (
      highestPrediction.className &&
      knownAgents.includes(highestPrediction.className.trim()) &&
      highestPrediction.probability > 0.8
    ) {
      setAgentName(highestPrediction.className);

      if (highestPrediction.className.trim() === "Abigail Miñano") {
        navigate("/home-admin");
      } else if (highestPrediction.className.trim() === "Luis Adrian") {
        navigate("/home-admin");
      }
    } else {
      setIntruderAlert(true);
      setTimeout(() => setIntruderAlert(false), 3000); // 🔥 La alerta dura 3 segundos
    }
  };

  return (
    <div className="flex flex-col items-center justify-center relative w-full h-screen bg-black text-white">
      {intruderAlert && (
        <div className="fixed top-0 left-0 w-full h-full bg-red-800 text-white text-6xl font-bold flex items-center justify-center animate-flicker">
          🚨 INTRUSO DETECTADO 🚨
        </div>
      )}

      <h2 className="text-red-500 text-2xl">Login con Reconocimiento Facial</h2>

      {/* Cámara activada aquí */}
      <video
        ref={webcamRef}
        autoPlay
        className="border-4 border-red-500 shadow-lg"
        width="400"
        height="300"
      ></video>

      <button
        onClick={handleDetect}
        className="bg-blue-500 text-white px-6 py-3 mt-4 hover:bg-blue-700 transition-all duration-300"
      >
        Detectar
      </button>

      {agentName && (
        <h2 className="text-green-500 text-2xl mt-4 font-mono">
          Acceso concedido a: {agentName}
        </h2>
      )}
    </div>
  );
};
