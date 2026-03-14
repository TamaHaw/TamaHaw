const name = "Wahyu Pratama";
const description = "Developer specialized in Game, Mobile, and Web Development.";
const githubUsername = "TamaHaw";

const quotes = [
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“Simplicity is the soul of efficiency.” – Austin Freeman",
  "“Games are the only force in the known universe that can get people to take actions against their self-interest.” – Seth Priebatsch",
  "“The best error message is the one that never appears.” – Thomas Fuchs",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde"
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const content = `
# Hi, I'm ${name} 👋

${description}

### 📊 GitHub Stats
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true)

### 🛠 Tech Stack

| Category | Tools & Languages |
| :--- | :--- |
| **Languages** | ![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white) ![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Frameworks** | ![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white) ![Unity](https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white) |
| **Tools** | ![Deno](https://img.shields.io/badge/Deno-000000?style=flat-square&logo=deno&logoColor=white) ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) |

---
> ${randomQuote}
---

*Last updated: ${new Date().toLocaleString()}*
`;

await Deno.writeTextFile("README.md", content);
console.log("README.md updated with official tech colors!");
