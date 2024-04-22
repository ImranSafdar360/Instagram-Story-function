 const data = [
    {dp:"https://img.freepik.com/free-photo/front-view-young-male-red-shirt-black-wall_140725-142267.jpg?t=st=1708976228~exp=1708979828~hmac=fe21a12897c066042c279b7bf5e7c591c125d8cc31d4bd5bef3da6737726803f&w=826", story:"https://img.freepik.com/free-photo/full-shot-woman-taking-photo_23-2148503403.jpg?w=360&t=st=1708979073~exp=1708979673~hmac=ee04e3373238d2e2733d6b3ae3048516e5627161ba8d8b51ea476a2121abb698"},
    {dp:"https://img.freepik.com/free-photo/handsome-guy-posing-outdoors_1153-780.jpg?w=826&t=st=1708976468~exp=1708977068~hmac=921b864036018f3aea40d86e3f0241e94e40b2e6932582e4bab58d32c6564d0d", story:"https://img.freepik.com/free-photo/close-up-fashion-portrait-pretty-blonde-young-woman-with-natural-makeup-wearing-straw-hat-holding-vintage-retro-hipster-old-camera-outdoors_291049-417.jpg?w=360&t=st=1708979075~exp=1708979675~hmac=31c2b701b2b214c63905f5c3e9961a858c8aedbba0e93f7b123d8041fa933684"},
    {dp:"https://img.freepik.com/free-photo/confident-young-brunette-caucasian-boy-sun-glasses-standing-with-crossed-arms_141793-103831.jpg?w=740&t=st=1708976471~exp=1708977071~hmac=73f27afe458fa4a5fec85f4ba2b8e2f20618c4ab705266ef95a76ad0a152d742", story:"https://img.freepik.com/free-photo/beautiful-girl-hat-smiling-taking-pictures-sitting-stairs_176420-6892.jpg?w=360&t=st=1708979077~exp=1708979677~hmac=d230b5bd50f2bd02a160a0d1e51f91ac38e9ad6b9a35c127a850c4c0ff9a4d2d"},
    {dp:"https://img.freepik.com/premium-photo/youth-boy-black-casual-sport-clothes-summer-background_75156-403.jpg?w=826", story:"https://img.freepik.com/free-photo/photographer-make-photoshoot-woman_1157-37027.jpg?w=360&t=st=1708979079~exp=1708979679~hmac=ee97f1553a292f0f99fa803aa2aab7b913256b3c39659ff508a0d2a2c250555e"},
    {dp:"https://img.freepik.com/free-photo/fashionable-young-guy-dressed-t-shirt-denim-jacket-posing-studio-isolated-dark-background_613910-5814.jpg?w=826&t=st=1708976479~exp=1708977079~hmac=f4023306db688cd683465cdece173c4145e6cb24f8b92fd2b6acc779be051b8f", story:"https://img.freepik.com/free-photo/woman-smiling-holding-camera-photo_1286-100.jpg?1&w=360&t=st=1708979080~exp=1708979680~hmac=987d6ab7cc688bb630581ce818d5c556ad1091e923be13c15e8859d6ad1b2c76"}
 ];

const storyBox = document.querySelector("#open-story");
const story1 = document.querySelector(".story");
const main = document.querySelector("#stories");

const showDp = () =>{
    var clutter = "";
    data.forEach(function(elem, idx){
        clutter += `<div class="story">
        <img id="${idx}" src="${elem.dp}">
    </div>   `
    })
main.innerHTML = clutter;
}
showDp();
main.addEventListener(
    "click", function(dets){
        storyBox.style.display = 'block';
        storyBox.style.backgroundImage = `url(${data[dets.target.id].story})`;
        setTimeout(function(){
            storyBox.style.display = 'none';
        },3000)
    }
)