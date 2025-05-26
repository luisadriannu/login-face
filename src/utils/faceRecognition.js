import * as tmImage from "@teachablemachine/image";

const URL = "/public/model/";
const MIN_PROBABILITY = 0.99; // 🔥 Umbral mínimo para aceptar una detección
let model, maxPredictions;

export const loadModel = async () => {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();
};

export const predictFace = async (webcamElement) => {
  if (!model) {
    await loadModel();
  }

  const prediction = await model.predict(webcamElement);
  console.log("Todas las predicciones:", prediction); // Verificar qué valores devuelve el modelo

  let highestPrediction = { className: "", probability: 0 };

  prediction.forEach((p) => {
    if (p.probability > highestPrediction.probability) {
      highestPrediction = p;
    }
  });

  console.log("Predicción con mayor probabilidad:", highestPrediction);

  // 🔥 Solo devolveremos la detección si supera el umbral definido
  return highestPrediction.probability >= MIN_PROBABILITY
    ? highestPrediction
    : { className: "Intruso", probability: 0 };
};
