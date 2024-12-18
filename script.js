const buttonOne = document.getElementById("button-one")
buttonOne.addEventListener("click", function(){
//string olduğu için number'a çevirmemiz gerek.
 const count = document.getElementById("count")
//count bir sayı olmadığı için bizim sayıya ulaşmamız gerekiyor. Bunun için İnnerHTML kullandık.
let countNumber = Number(count.innerHTML)
countNumber++
count.innerHTML = countNumber

if(countNumber % 5 === 0 ){
    alert("Kısa bir mola")
}
});

const rain = document.getElementById("rain")
const rainIcon = document.getElementById("rainIcon")

rainIcon.addEventListener("click", function(){
    if (rain.paused){
        rain.play()
        rainIcon.className = "fa-solid fa-music"
    } else {
        rain.pause()
        rainIcon.className = "fa-solid fa-cloud"
    }
})

const piano = document.getElementById("piano")
const pianoIcon = document.getElementById("pianoIcon")

pianoIcon.addEventListener("click", function(){
    if (piano.paused){
        piano.play()
        pianoIcon.className = "fa-solid fa-music";
    } else {
        piano.pause()
        pianoIcon.className = "fa-solid fa-moon";
    }
})

const meditation = document.getElementById("meditation")
const meditationIcon = document.getElementById("meditationIcon")

meditationIcon.addEventListener("click", function(){
    if (meditation.paused){
        meditation.play()
        meditationIcon.className = "fa-solid fa-music";
    } else {
        meditation.pause()
        meditationIcon.className = "fa-solid fa-heart";
    }
})

const volumeInput = document.getElementById("volumeInput");
volumeInput.addEventListener("input", function(){
    rain.volume = volumeInput.value / 100;                    // 100'e bölerek 0-1 arasında bir değere dönüştürülür.
    piano.volume = volumeInput.value / 100;                   //Çünkü volume özelliği 0-1 arası değer alır
    meditation.volume = volumeInput.value / 100;
});




