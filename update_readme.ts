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
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true)
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical&hide_border=true)

### 🛠 Tech Stack
- **Languages:** Dart, C#, TypeScript
- **Frameworks:** Flutter, Unity

---
> ${randomQuote}
---

*Last updated: ${new Date().toLocaleString()}*
`;

await Deno.writeTextFile("README.md", content);
console.log("README.md updated with stats and a fresh quote!");
