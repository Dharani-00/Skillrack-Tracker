// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("challenge-form");
  const tableBody = document.getElementById("challenge-table-body");

  // Load saved challenges from localStorage
  const savedChallenges = JSON.parse(localStorage.getItem("challenges")) || [];
  savedChallenges.forEach(addChallengeToTable);

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("challenge-name").value.trim();
    const difficulty = document.getElementById("difficulty").value;
    const status = document.getElementById("status").value;

    if (!name || !difficulty || !status) {
      alert("Please fill out all fields.");
      return;
    }

    const challenge = { name, difficulty, status };
    addChallengeToTable(challenge);
    saveChallenge(challenge);
    form.reset();
  });

  // Add challenge to table
  function addChallengeToTable({ name, difficulty, status }) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${name}</td>
      <td>${difficulty}</td>
      <td>${status}</td>
    `;

    tableBody.appendChild(row);
  }

  // Save challenge to localStorage
  function saveChallenge(challenge) {
    savedChallenges.push(challenge);
    localStorage.setItem("challenges", JSON.stringify(savedChallenges));
  }
});