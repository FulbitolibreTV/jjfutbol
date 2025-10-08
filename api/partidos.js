// api/partidos.js
export default async function handler(req, res) {
  const API_KEY = 'bf4de732be074fef9a967c716a5fc4a2';
  try {
    const response = await fetch('https://api.football-data.org/v4/matches', {
      headers: { 'X-Auth-Token': API_KEY }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al cargar partidos' });
  }
}
