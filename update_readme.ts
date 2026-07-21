const name = "Wahyu Pratama";
const description = "Developer specialized in Game, Mobile, and Web Development.";
const githubUsername = "TamaHaw";

const quotes = [
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“A late game is only late until it ships. A bad game is bad forever.” – Shigeru Miyamoto",
  "“It’s not a bug – it’s an undocumented feature.” – Anonymous",
  "“Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs",
  "“The function of good software is to make the complex appear to be simple.” – Grady Booch",
  "“Digital design is like painting, except the paint never dries.” – Neville Brody",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  "“Simplicity is the soul of efficiency.” – Austin Freeman",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const lastUpdated = new Date().toLocaleString("id-ID", {
  timeZone: "Asia/Jakarta",
  dateStyle: "long",
  timeStyle: "short",
});

const content = `
<div align="center">

# Hi, I'm ${name} 👋

${description}

<img src="https://komarev.com/ghpvc/?username=${githubUsername}&style=flat-square&color=blueviolet" alt="Profile views" />
<img src="https://img.shields.io/github/followers/${githubUsername}?style=flat-square&color=blueviolet" alt="GitHub followers" />

</div>

---

### 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&count_private=true" alt="GitHub Stats" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical&hide_border=true&langs_count=8" alt="Top Languages" height="165" />

<img src="https://streak-stats.demolab.com/?user=${githubUsername}&theme=radical&hide_border=true&date_format=M%20j%5B%2C%20Y%5D" alt="GitHub Streak" height="165" />

</div>

<details>
<summary>🏆 GitHub Trophies</summary>
<br>
<div align="center">
<img src="https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=radical&no-frame=true&row=1&column=7" alt="GitHub Trophies" />
</div>
</details>

---

### 🛠 Tech Stack

| Category | Tools & Languages |
| :--- | :--- |
| **Languages** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white) ![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white) |
| **Frameworks** | ![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white) ![Unity](https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white) ![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black) ![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat-square&logo=astro&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white) |
| **Backend & Tools** | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white) ![Google App Script](https://img.shields.io/badge/Google_Apps_Script-4285F4?style=flat-square&logo=google&logoColor=white) ![Deno](https://img.shields.io/badge/Deno-000000?style=flat-square&logo=deno&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) |

---

<div align="center">

> ${randomQuote}

</div>

---

<div align="center">

*Last updated: ${lastUpdated} WIB*

</div>
`;

await Deno.writeTextFile("README.md", content);
console.log("✅ README.md updated with GitHub Stats & Top Languages (including private repos)!");
