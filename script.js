const button = document.getElementById("countButton");
button.addEventListener("click", function test() {  
   // teu código vai aqui ... 
   let typedText = document.getElementById("textInput").value;

typedText = typedText.toLowerCase(); 
// Isto muda todas as letras para minúsculas
typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
// Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
// Iremos aprender mais sobre como usar a função replace numa lição mais à frente.
let currentLetter = ''
const letterCounts = {};
const wordCounts = {};
let words = ''
for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    // faça algo com cada letra 
  
    if (letterCounts[currentLetter] === undefined) {
       letterCounts[currentLetter] = 1; 
    } else { 
       letterCounts[currentLetter]++; 
    }
   

 }
 words = typedText.split(/\s/);
for (let i = 0; i < words.length; i++) {
   words = typedText.split(/\s/);
   if (wordCounts[words[i]] === undefined) {
      wordCounts[words[i]] = 1; 
   } else { 
      wordCounts[words[i]]++; 
   }
 }


 for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span);
 }

 for (words in wordCounts) { 
   const span = document.createElement("span"); 
   const textContent = `"${words}": ${wordCounts[words]}, `;
   span.innerText = textContent; 
   const letters = document.getElementById("lettersDiv");
   letters.appendChild(span);
}


});
