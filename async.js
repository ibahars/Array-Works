//async-awaitExmaple
async function sayHello() {
  return "Merhaba, dünya!";
}

async function main() {
  try {
    const waiting = await sayHello();
    console.log("it finished");
  } catch (error) {
    console.error("Hata:", error); //chatgpt neden catch kısmını ekledi
  }
}
main();
//promise çalıştım ama henüz bitmedi.çünkü bu kısmı çözemiyorum.
