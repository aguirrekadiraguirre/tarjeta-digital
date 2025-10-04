body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: url('img/fondo.jpg') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.tarjeta {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  width: 320px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.foto-perfil img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #4CAF50;
  margin-bottom: 15px;
}

h1 {
  margin: 10px 0;
  font-size: 24px;
  color: #333;
}

h2 {
  margin: 5px 0;
  font-size: 18px;
  color: #555;
}

p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.botones button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2 ease, background-color 0.3s ease;
}

.botones button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}