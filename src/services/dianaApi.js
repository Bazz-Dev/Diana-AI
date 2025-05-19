const API_URL = "http://10.156.16.48:8000/diana";

export async function enviarPreguntaDiana(pregunta) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pregunta }),
  });

  if (!res.ok) {
    throw new Error("Error al conectar con Diana");
  }

  const data = await res.json();

  // 👉 Asegúrate de retornar solo el texto relevante
  return data.respuesta ?? "Diana no respondió 😢";
}
