/* =========================
   FETCH USER FUNCTION (ASYNC/AWAIT)
========================= */
async function getUser() {
  const resultBox = document.getElementById("result-box");

  resultBox.innerHTML = "Loading user... ⏳";

  try {
    // REAL API CALL
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    // Pick random user
    const user = data[Math.floor(Math.random() * data.length)];

    // Show result
    resultBox.innerHTML = `
      👤 <b>Name:</b> ${user.name} <br>
      📧 <b>Email:</b> ${user.email} <br>
      🏙️ <b>City:</b> ${user.address.city}
    `;

  } catch (error) {
    resultBox.innerHTML = "❌ Error fetching user data";
  }
}