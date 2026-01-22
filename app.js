import { db } from "./firebase.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

let currentStudent = null;

window.login = async function () {
  const code = document.getElementById("studentCode").value;
  const pass = document.getElementById("studentPass").value;

  const ref = doc(db, "students", code);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    alert("Student not found");
    return;
  }

  const data = snap.data();
  if (data.password !== pass) {
    alert("Wrong password");
    return;
  }

  currentStudent = { code, name: data.name };

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("examBox").style.display = "block";
};

window.submitExam = async function () {
  await setDoc(doc(db, "results", currentStudent.code), {
    name: currentStudent.name,
    submittedAt: new Date().toISOString()
  });

  alert("Exam submitted");
};
