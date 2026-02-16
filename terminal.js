const input = document.getElementById("input");
const output = document.getElementById("output");

const commands = {
  help: `
Available commands:
- help
- about
- clear
- whoami
`,
  about: "Ini adalah website terminal murni tanpa tombol.",
  whoami: "anonymous@web"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();

    output.innerHTML += `<div><span class="prompt">user@web:~$</span> ${cmd}</div>`;

    if (cmd === "clear") {
      output.innerHTML = "";
    } else if (commands[cmd]) {
      output.innerHTML += `<div>${commands[cmd]}</div>`;
    } else {
      output.innerHTML += `<div>command not found: ${cmd}</div>`;
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
