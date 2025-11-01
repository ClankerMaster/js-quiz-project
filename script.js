document.getElementById("submitBtn").addEventListener("click", evaluateQuiz);

function evaluateQuiz() {
  const form = document.getElementById("quizForm");
  const results = document.getElementById("results");
  const scoreDisplay = document.getElementById("scoreDisplay");
  const messageDisplay = document.getElementById("messageDisplay");

  let answers = ["a", "a", "a"];
  let score = 0;

  for (let i = 1; i <= 3; i++) {
    let selected = form[`q${i}`].value;

    if (!selected) {
      alert(`You missed question ${i}!`);
      continue;
    }

    if (selected === answers[i - 1]) {
      score++;
    }
  }

  let feedback;
  switch (score) {
    case 3:
      feedback = "Excellent! You nailed it!";
      break;
    case 2:
      feedback = "Good job! Almost perfect!";
      break;
    default:
      feedback = "Keep practicing! You’ll get it next time.";
  }

  let passStatus = score >= 2 ? "Pass ✅" : "Try Again ❌";

  results.classList.remove("hidden");
  scoreDisplay.textContent = `Your score: ${score}/3`;
  messageDisplay.textContent = `${feedback} (${passStatus})`;
}