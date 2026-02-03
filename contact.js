import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  // paste your config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  await addDoc(collection(db, "contacts"), {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    time: new Date()
  });

  alert("Message sent!");
  e.target.reset();
});
