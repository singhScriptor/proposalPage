// First room
let body = document.getElementsByTagName('body')[0];
body.className = 'body bg-pink-500';

let form1 = document.createElement('form');
form1.className = 'form';
body.appendChild(form1);

let div1 = document.createElement('div');
div1.className = 'header flex items-center justify-center h-screen';

div1.innerHTML = `
  <div class="bg-white max-w-2xl w-full p-8 text-center rounded-lg shadow-lg shadow-red-500">
    <h1 class="text-5xl font-bold text-red-500 shadow-lg shadow-red-500 p-5 rounded-lg m-2">
      Happy Valentines Day <span class="animate-pulse inline-block">❤️</span>
    </h1>
    <p class="paragraph italic font-medium text-lg mt-4 p-4 text-red-300 min-h-[80px]"></p>
    <button type="submit" class="click bg-red-500 p-4 text-white rounded shadow-lg text-2xl font-medium">
      Let's Dive
    </button>
  </div>
`;

form1.appendChild(div1);

// Typed.js animation
var typed = new Typed(".paragraph", {
  strings: [
    "I Dhiraj Singh assuring you....",
    "will be loved & cherished forever ❤️"
  ],
  typeSpeed: 50,
  backSpeed: 70,
  loop: true,
  showCursor: false
});

// Transition to second room
document.querySelector(".click").addEventListener("click", function(e) {
  e.preventDefault();

  // Remove first room
  form1.remove();

  // Second room
  let form2 = document.createElement('form');
  form2.className = 'h-screen w-screen flex items-center justify-center bg-cover bg-center';
  form2.style.backgroundImage = "url('./image/valentineWebPageBc.jpg')";
  form2.innerHTML = `
  <div class="bg-white max-w-2xl w-full p-8 text-center rounded-lg shadow-lg shadow-red-400">
    <h2 class="text-3xl font-bold text-pink-600 mb-6 shadow-lg rounded shadow-red-400">Will you be forever Valentine?<span class="animate-pulse inline-block"> 💞</span></h2>
    <button id="yesBtn" class="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg mr-4 ">Yes 💖</button>
    <button id="noBtn" class="bg-gray-500 text-white px-6 py-2 rounded-lg shadow-lg">No 💔</button>
    <div id="result" class="mt-6 text-xl font-bold text-red-600"></div>
    <p class="footer italic text-sm text-purple-500 mt-8 min-h-[30px]"></p>
  </div>
  `;


  body.appendChild(form2);

  // Typed.js footer animation
var footerTyped = new Typed(".footer", {
  strings: [
    "Crafted with love & soul 💕",
    "Forever yours, Dhiraj Singh 🌹"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  showCursor: false
});

  // Yes button
  form2.querySelector("#yesBtn").addEventListener("click", function(e) {
    e.preventDefault();
    form2.querySelector("#result").innerText =
      " Every heartbeat whispered this destiny 💕💫";
  });

  // No button
  let noBtn = form2.querySelector("#noBtn");
  let messages = [
    "😜 Not an option!",
    "😂 Try again, love wins!",
    "🙈 Nope, you can’t escape!",
    "💘 Destiny says YES only!",
    "🤣 Sorry, button ran away!"
  ];
  let msgIndex = 0;

  noBtn.addEventListener("mouseover", function() {
    let x = Math.floor(Math.random() * 200) - 100;
    let y = Math.floor(Math.random() * 200) - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    form2.querySelector("#result").innerText = messages[msgIndex];
    msgIndex = (msgIndex + 1) % messages.length;
  });
});



