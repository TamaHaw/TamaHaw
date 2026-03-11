const name = "Wahyu Pratama";
const description = "Developer specialized in Game and Web Development.";

const content = `
# Hi, I'm ${name} 👋

${description}

### 🛠 Tech Stack
- **Languages:** Dart, C#
- **Frameworks:** Flutter, Unity

*Last updated: ${new Date().toLocaleString()}*
`;

await Deno.writeTextFile("README.md", content);
console.log("README.md updated!");
