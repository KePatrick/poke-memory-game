
const cards = document.querySelectorAll('.memory-card');
const frontCards = document.querySelectorAll('.front-face')
let wincount = 0;
let hasFlippedCard = 0;
let lockBoard = false;
let firstCard, secondCard, thirdCard;
let turns = 0;
let progress = 100;
let pokeInfoData = {
  '1':{"pokeID":"#001妙蛙種子","attributes":"毒/草",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png",
  "info":"&emsp;經常可見牠在太陽下睡午覺的樣子。在沐浴了充足的陽光之後，牠背上的種子就會成長茁壯。",
  "flipOrNot":0},
  
  '2':
  {"pokeID":'#002妙蛙草',"attributes":"毒/草",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png",
  "info":"&emsp;下盤為了支撐背上的花苞而變得強韌。當待在太陽底下一動也不動的時間變長，就表示大朵的花即將盛開。",
  "flipOrNot":0},
  
  '3':{"pokeID":'#003妙蛙花',"attributes":"毒/草",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0186d64c5773c8d3d03cd05dc79574b2d2798d4f.png",
  "info":"&emsp;據說充足的營養和陽光會讓花朵的顏色變得更加鮮豔。花朵散發的香氣能夠療癒人心。",
  "flipOrNot":0},
  
  "4":{"pokeID":'#004小火龍',"attributes":"火",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png",
  "info":"&emsp;天生喜歡熱熱的東西。據說當牠被雨淋濕的時候，尾巴的末端會冒出煙來。",
  "flipOrNot":0},
  
  "5":{"pokeID":'#005火恐龍',"attributes":"火",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png",
  "info":"&emsp;揮動燃燒著火焰的尾巴，用鋒利的爪子撕裂對手。性情十分粗暴。",
  "flipOrNot":0},
  
  "6":{"pokeID":'#006噴火龍',"attributes":"火/飛行",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2050f1fd1283f473d7d048f8631712e7e003f802.png",
  "info":"&emsp;會噴出彷彿連岩石都能燒焦的灼熱火焰。有時會引發森林火災。",
  "flipOrNot":0},
  
  "7":{"pokeID":'#007傑尼龜',"attributes":"水",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png",
  "info":"&emsp;甲殼的作用不僅是用來保護自己，圓潤的外形和表面的溝槽會減少水的阻力，使牠能夠快速地游泳。",
  "flipOrNot":0},
  
  "8":{"pokeID":'#008卡咪龜',"attributes":"水",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png",
  "info":"&emsp;甲殼的作用不僅是用來保護自己，圓潤的外形和表面的溝槽會減少水的阻力，使牠能夠快速地游泳。",
  "flipOrNot":0},
  
  "9":{"pokeID":'#009水箭龜',"attributes":"水",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2fe157db59153af8abd636ab03c7df6f28b08242.png",
  "info":"&emsp;甲殼上的噴射口能夠精確地瞄準目標。射出的水彈可以命中５０公尺外的空罐子。",
  "flipOrNot":0},
  
  "16":{"pokeID":'#016波波',"attributes":"一般/飛行",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0e7c6e616404c683f00701b591eeab56e465641a.png",
  "info":"&emsp;因為方向感非常好，所以無論到了離巢穴多遠的地方，都能不迷路地飛回巢穴。",
  "flipOrNot":0},
  
  "17":{"pokeID":'#017比比鳥',"attributes":"一般/飛行",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/a2935587b7c61e6e6da88da3578d700c133246e5.png",
  "info":"&emsp;會飛在空中巡視自己廣大的地盤。要是有誰膽敢侵犯牠的地盤，牠會毫不留情地用利爪狠狠教訓一番。",
  "flipOrNot":0},
  
  "18":{"pokeID":'#018大比鳥',"attributes":"一般/飛行",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/01e13954dff668c1420407c98b308c81b83f6dda.png",
  "info":"&emsp;有著亮麗羽毛的寶可夢。有許多訓練家被大比鳥頭上美麗的羽毛深深吸引而開始培育牠。",
  "flipOrNot":0},
  
  "25":{"pokeID":'#025皮卡丘',"attributes":"電",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png",
  "info":"&emsp;雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力一口氣釋放出來。",
  "flipOrNot":0},
  
  "26":{"pokeID":'#026雷丘',"attributes":"電",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/9c28defa939e230800ec0d0c421d9f82c60df77a.png",
  "info":"&emsp;尾巴會發揮接地線的作用把電氣導入地面，所以自己不會被電得發麻。",
  "flipOrNot":0},
  
  "37":{"pokeID":'#037六尾',"attributes":"火",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/f285c634efd141918f6ad066a6f59c20746d9050.png",
  "info":"&emsp;雖然還是孩子，但已擁有美麗的６根尾巴。長大後尾巴會變得更多。",
  "flipOrNot":0},
  
  "38":{"pokeID":'#038九尾',"attributes":"火",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/cc96e6a4eee980724ebd725bb8785334d3290074.png",
  "info":"&emsp;每一根尾巴裡都蘊含著神通力。據說牠的壽命長達１０００年。",
  "flipOrNot":0},
  
  "60":{"pokeID":'#060蚊香蝌蚪',"attributes":"水",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/8e8d47c5af6084904793496ddddb3e5f516e79f7.png",
  "info":"&emsp;漩渦的方向隨著地域的不同有著微妙的差異。蚊香蝌蚪的愛好者似乎一眼就能分辨出來。",
  "flipOrNot":0},
  
  "61":{"pokeID":'#061蚊香君',"attributes":"水",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/7e16ace7443d45cc1def215c8cf82beefc69041c.png",
  "info":"&emsp;雖然已經能在陸地上生活，但還是棲息在有大量魚寶可夢可以獵食的水中。",
  "flipOrNot":0},
  
  "62":{"pokeID":'#062蚊香泳士',"attributes":"水",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/da2fce266d1c13743742451617b2976d6bfd483d.png",
  "info":"&emsp;在水屬性寶可夢中是屬於游泳健將那一類型，但平時卻生活在陸地上。",
  "flipOrNot":0},
  
  "63":{"pokeID":'#063凱西',"attributes":"超能",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5d05e6f2393a6a72fb36da26a79fd3db95ae7412.png",
  "info":"&emsp;即使在睡夢中也會使出各式各樣的超能力，所以很難分辨牠是不是醒著。",
  "flipOrNot":0},
  
  "64":{"pokeID":'#064勇基拉',"attributes":"超能",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/96613b8fe63edfdf800cde823078fadc6ea9aae9.png",
  "info":"&emsp;有傳聞說此寶可夢乃是擁有神通之力的小童變化而成，其真偽尚無法證實。手中湯匙據推測有增強腦波的效能。",
  "flipOrNot":0},
  
  "65":{"pokeID":'#065胡地',"attributes":"超能",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/265d42cf68deea0a54dacf3a4f1953198f55ad53.png",
  "info":"&emsp;有傳聞說此寶可夢乃是擁有神通之力的小童變化而成，其真偽尚無法證實。手中湯匙據推測有增強腦波的效能。",
  "flipOrNot":0},
  
  "69":{"pokeID":'#069喇叭芽',"attributes":"草/毒",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/47ae88a63c66e32e957da303ad50b72268e097e4.png",
  "info":"&emsp;無論多強的攻擊都能靠著彎曲纖細柔軟的身體來迴避。會從口中吐出連鐵都能融化的液體。",
  "flipOrNot":0},
  
  "70":{"pokeID":'#070口呆花',"attributes":"草/毒",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/b19541cee78bc2a00eb3f59f7a2fcca67469eb78.png",
  "info":"&emsp;到了晚上就會用臀部的鉤子掛在樹枝上睡覺。如果睡相不好，早上就會掉到地上。",
  "flipOrNot":0},
  
  "71":{"pokeID":'#071大食花',"attributes":"草/毒",
  "img":"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/f010b09344a212ecb98c6f209233c0661db0e7a8.png",
  "info":"&emsp;會讓長在頭上的藤蔓像小生物一樣動來動去引誘獵物。等獵物靠近時就會張開大嘴一口吞掉。",
  "flipOrNot":0}
}

// 





function showToast() {
  // 创建一个 Toast 实例
  var toast = new bootstrap.Toast(document.querySelector('.toast'), {
      autohide: true, // 启用自动隐藏
      delay: 6000 // 显示时间，以毫秒为单位
  });

  // 显示 Toast
  toast.show();
}



// 



function brightness(which){
  
  
    document.getElementsByClassName(`${which}`)[0].style.filter = 'brightness(1)'
    
  
}


function infoEvolute(x,stage){
  
  x = parseInt(x)
  stage = parseInt(stage)
  console.log(stage)
  let after1 = x+1;
  let after2 = x+2;
  // let beforImg = pokeInfoData[`${x-1}`]['img']
  // let beforImg2 = pokeInfoData[`${x-2}`]['img']
  // let afterImg = pokeInfoData[`${x+1}`]['img']
  // let afterImg2 = pokeInfoData[`${x+2}`]['img']
  var beforImg,beforImg2,afterImg,afterImg2
  if (stage==2){
    document.getElementById('fig1').style.display = 'flex'
    beforImg = pokeInfoData[`${x-1}`]['img']
    afterImg = pokeInfoData[`${x+1}`]['img']
    console.log('退化:'+pokeInfoData[`${x-1}`]['flipOrNot'])
    console.log('進化'+pokeInfoData[`${x+1}`]['flipOrNot'])
    if(pokeInfoData[`${x-1}`]['flipOrNot']==1){
      brightness('befor')
    }
    else{
      document.getElementsByClassName(`befor`)[0].style.filter = 'brightness(0.2)'
    }

    if(pokeInfoData[`${x+1}`]['flipOrNot']==1){
      brightness('after')
    }
    else{
      document.getElementsByClassName(`after`)[0].style.filter = 'brightness(0.2)'
    }
    afterImg = pokeInfoData[`${x+1}`]['img']
    document.getElementsByClassName('befor')[0].src = `${beforImg}`
    document.getElementsByClassName('after')[0].src = `${afterImg}`
    document.getElementById("info1").innerHTML = "一階型態"
    document.getElementById("info2").innerHTML = "三階進化"}
  if (stage==1){

    document.getElementById('fig1').style.display = 'flex'
    afterImg = pokeInfoData[`${x+1}`]['img']
    afterImg2 = pokeInfoData[`${x+2}`]['img']

    
    if(pokeInfoData[`${x+1}`]['flipOrNot']==1){
      brightness('befor')
    }
    else{
      document.getElementsByClassName(`befor`)[0].style.filter = 'brightness(0.2)'
    }

    if(pokeInfoData[`${x+2}`]['flipOrNot']==1){
      brightness('after')
    }
    else{
      document.getElementsByClassName(`after`)[0].style.filter = 'brightness(0.2)'
    }
    document.getElementById("info1").innerHTML = "二階進化"
    document.getElementById("info2").innerHTML = "三階進化"
    document.getElementsByClassName('befor')[0].src = `${afterImg}`
    document.getElementsByClassName('after')[0].src = `${afterImg2}`
    
  }
  if (stage==3){
    document.getElementById('fig1').style.display = 'flex'
    beforImg = pokeInfoData[`${x-2}`]['img']
    beforImg2 = pokeInfoData[`${x-1}`]['img']

    console.log('退化:'+pokeInfoData[`${x-2}`]['flipOrNot'])
    console.log('進化'+pokeInfoData[`${x-1}`]['flipOrNot'])
    if(pokeInfoData[`${x-2}`]['flipOrNot']==1){
      brightness('befor')
    }
    else{
      document.getElementsByClassName(`befor`)[0].style.filter = 'brightness(0.2)'
    }

    if(pokeInfoData[`${x-1}`]['flipOrNot']==1){
      brightness('after')
    }
    else{
      document.getElementsByClassName(`after`)[0].style.filter = 'brightness(0.2)'
    }

    document.getElementsByClassName('befor')[0].src = `${beforImg}`
    document.getElementsByClassName('after')[0].src = `${beforImg2}`
    document.getElementById("info1").innerHTML = "一階型態"
    document.getElementById("info2").innerHTML = "二階進化"}

  if (stage == 10){
    document.getElementById('fig1').style.display = 'none'

    if(pokeInfoData[`${x+1}`]['flipOrNot']==1){
      brightness('after')
    }
    else{
      document.getElementsByClassName(`after`)[0].style.filter = 'brightness(0.2)'
    }

    afterImg = pokeInfoData[`${x+1}`]['img']
    document.getElementsByClassName('after')[0].src = `${afterImg}`
    document.getElementById("info2").innerText = "二階進化"}
  if (stage == 20){
    document.getElementById('fig1').style.display = 'none'

    if(pokeInfoData[`${x-1}`]['flipOrNot']==1){
      brightness('after')
    }
    else{
      document.getElementsByClassName(`after`)[0].style.filter = 'brightness(0.2)'
    }
    beforImg = pokeInfoData[`${x-1}`]['img']
    document.getElementsByClassName('after')[0].src = `${beforImg}`
    document.getElementById("info2").innerText = "一階型態"
  }
}

var leaderboardData = [{"name":"a","score":"15"},{"name":"b","score":"35"}]







function getPosition (element) {
  var x = 0;
  var y = 0;
  
  while ( element ) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }

  return x;
}




function flipCard() {
  // 剛剛沒配對成功的話，就把牌蓋起來
  
  if (lockBoard) return;
  let front = this.getElementsByClassName('front-face')[0].dataset.pokemon;
  let fliped = parseInt(front.substring(front.length-3,front.length));
  pokeInfoData[`${fliped}`]['flipOrNot'] = 1;
  
  // 避免翻同一張牌當做第二張
  if (this === firstCard) return;
  if (this === secondCard) return; //+
  this.classList.add('flip');
  
  
  if (hasFlippedCard == 0) {
    hasFlippedCard = 1;
    firstCard = this; // this => the clicked card
    
    return;
  }
  if (hasFlippedCard == 1) {
    hasFlippedCard = 2;
    secondCard = this; // this => the clicked card
    
    if ((firstCard.dataset.framework == 'PIKA' &&  secondCard.dataset.framework == 'PIKA')||
    (firstCard.dataset.framework == 'FOX' &&  secondCard.dataset.framework == 'FOX')
    ){
      specialcase()
    }
    return;
  }

  thirdCard = this
  

  checkForMatch();
}
function specialcase(){
  wincounter();
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}




function checkForMatch() {
  // 如果牌組配對成功 => isMatch
  // 就不可以再點擊那組牌 => disableCards()
  // 配對錯誤就把該牌組蓋起來 => unflipCards()
  if ((firstCard.dataset.framework == 'PIKA' &&  secondCard.dataset.framework == 'PIKA')||
  (firstCard.dataset.framework == 'FOX' &&  secondCard.dataset.framework == 'FOX')){
    
    setTimeout(() => {
      wincounter();
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      thirdCard.classList.remove('flip');
      resetBoard();
    }, 850);

  }
  
  
  
  else if((firstCard.dataset.framework == 'PIKA' &&  thirdCard.dataset.framework == 'PIKA')||
  (firstCard.dataset.framework == 'FOX' &&  thirdCard.dataset.framework == 'FOX')){
    lockBoard = true;
    setTimeout(() => {
      wincounter()
      firstCard.removeEventListener('click', flipCard);
      thirdCard.removeEventListener('click', flipCard);
      secondCard.classList.remove('flip');
      resetBoard();
    }, 850);
  }
    
  else if((thirdCard.dataset.framework == 'PIKA' &&  secondCard.dataset.framework == 'PIKA')||
 (thirdCard.dataset.framework == 'FOX' &&  secondCard.dataset.framework == 'FOX')
  ){
    lockBoard = true;
    setTimeout(() => {
      wincounter()
      secondCard.removeEventListener('click', flipCard);
      thirdCard.removeEventListener('click', flipCard);
      firstCard.classList.remove('flip');
      resetBoard();
    }, 850);
  }
  else{
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework 
  &&firstCard.dataset.framework === thirdCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();}
  
  
  
  
  
}

function disableCards() {
  // 移除監聽事件，釋放記憶體
  
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  thirdCard.removeEventListener('click', flipCard);
  
  resetBoard();
  wincounter();
}

function unflipCards() {
  lockBoard = true;

  // 把牌蓋起來
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    thirdCard.classList.remove('flip');
    resetBoard();
  }, 850);
}


function leaderboard(name,score){
    let leaderboardDiiv = document.getElementById("leaderboardlist");
    leaderboardDiiv.innerHTML += `<h2>${name}: ${score}次</h2>`


}

$.get("/leaderboard", function (e){
  
  let leaderboardData = e
  
  leaderboardData.sort(function(a,b){
    return b.score-a.score;
  })
  for (let i = 0; i <= leaderboardData.length-1; i++){
  leaderboard(leaderboardData[i]['name'],leaderboardData[i]['score'])   
  }

  
})



  


function resetBoard() {
  
  [hasFlippedCard, lockBoard] = [0, false];
  [firstCard, secondCard, thirdCard] = [null, null, null];
  turns ++;
  
  progress-=2

  document.getElementById('point').innerText = `剩餘回合數:${progress/2}`;
  document.getElementsByClassName('progress-bar')[0].style.width = `${progress}%`
  if (progress==98){
    showToast()
  }

  if (progress<=0){
    alert ('you loss')
    
    cards.forEach(card => card.removeEventListener('click', flipCard));
  }
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 25);
    card.style.order = randomPos;
  });
})();







function wincounter(){
  wincount++;
  if (wincount==9){
    async function a(){
      alert("you win");
      var leaderboardname = prompt("請請輸入姓名","");
      var dataToLeaderboard = {
        name : leaderboardname,
        score : `${progress/2}`
        
      }
      await $.ajax({
      type: "post",
      url: "/leaderboard/new",
      contentType: "application/json",
      data: JSON.stringify(dataToLeaderboard),  
      succes:function(e){
        console.log("success")
      }
    });
  
  
    await $.get("/leaderboard", function (e){
    
      let leaderboardData = e
      
      leaderboardData.sort(function(a,b){
        return b.score-a.score;
      })
      document.getElementById("leaderboardlist").innerHTML = ""
      for (let i = 0; i <= leaderboardData.length; i++){
        leaderboard(leaderboardData[i]['name'],leaderboardData[i]['score'])   
        }
      
    
      
    })}
    a()

  }
  
}
function showInfo(){
  let infoPokeID = this.dataset.pokemon;
  let stage = this.dataset.stage;
  let pokeDataID = parseInt(infoPokeID.substring(infoPokeID.length-3,infoPokeID.length))
  document.getElementsByClassName('info-title')[0].style["display"] = 'inline-flex';
  document.getElementsByClassName('gameRule')[0].style["display"] = 'none';
  changeInfo(pokeDataID)
  infoEvolute(pokeDataID,stage)
}

function closeInfo(){
  
  document.getElementsByClassName('info-title')[0].style["display"] = 'none';
  document.getElementsByClassName('gameRule')[0].style["display"] = 'inline-flex';
}


var pokeImgLink = 'https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/3245e4f8c04aa0619cb31884dbf123c6918b3700.png'
document.getElementById('pokeInfoImg').src=`${pokeImgLink}`
cards.forEach(card => card.addEventListener('click', flipCard));
frontCards.forEach(card => card.addEventListener('click', showInfo));

function changeInfo(x){
  let info = pokeInfoData[`${x}`]["info"]
  let pokeID = pokeInfoData[`${x}`]["pokeID"]
  let attributes = pokeInfoData[`${x}`]['attributes']
  let pokeInfoImg = pokeInfoData[`${x}`]['img']
  
  document.querySelector("div.info-title>.pokeID").innerHTML=`${pokeID}`
  document.querySelector("div.info-title>div.attributes").innerHTML=`屬性:${attributes}`
  document.querySelector("div.info-title>#pokeInfoImg").src=`${pokeInfoImg}`
  document.querySelector("div.info-title>div.info").innerHTML=`${info}`

}
function reload(){
  
  window.location.reload();
}

