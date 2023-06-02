var card_image = ["../media/로디.jpg", "../media/루피.jpg", "../media/뽀뽀.jpg",
                  "../media/삐삐.jpg","../media/에디.jpg", "../media/크롱.jpg",
                  "../media/통통이.jpg", "../media/패티.jpg", "../media/포비.jpg",
                  "../media/해리.jpg","../media/뽀로로.jpg", "../media/뒷면.jpg"];

var card_answer = new Array(16);

var fail_emoticon = ["😯", "😥", "😨", "😵", "🤮" ,"🥶", "👿", "🤬"];

var openCount;

var firstCardIndex;

function shuffle() {
    // 0~15 중에 random한 수
    var randomIndex = Math.floor(Math.random() * 16);
    for(var i = 0; i < card_answer.length; i++){
        if(i === randomIndex){
            //정답 index
            card_answer[i] = 1;
        } else{
            //오답 index
            card_answer[i] = 0;
        }
    }
}

function removeCards(){
    var cards = document.getElementsByClassName("cards-container")[0];
    var row = cards.getElementsByTagName("div");
    for(var i = row.length - 1; i >= 0 ; i--){
        cards.removeChild(row[i]);
    }
}

function setCards(){
    var cards = document.getElementsByClassName("cards-container")[0];
    for(var i = 0; i < 16; i++){
        if(i % 4 == 0){
            var row = document.createElement("div");
            cards.appendChild(row);
        }
        var card = document.createElement("img");
        card.className = "card";
        card.id = i;
        card.src = card_image[11];
        card.addEventListener("click", cardClick);
        row.appendChild(card);
    }
}

function cardClick(e){
    var clickedCard = e.target;
    open(clickedCard);
    clickedCard.removeEventListener("click", cardClick);
}

function open(card){
    openCount++;
    if(card_answer[card.id] === 1){
        showResult("🐧 뽀로로 찾기 성공 😜");
        document.body.style.backgroundColor = "rgb(230, 255, 255)";
        var card = document.getElementsByClassName("card");
        for(var i = 0; i < card.length; i++){
            card[i].removeEventListener("click", cardClick);
            card[i].src = card_image[10];
        }
    } else {
        card.src = card_image[(openCount + this.firstCardIndex) % 10];
        showResult("실패 " + fail_emoticon[Math.floor((openCount-1) / 2)]);
        if(openCount === 15){
            showResult("뽀로로 찾기 실패 " + fail_emoticon[7]);
            document.body.style.backgroundColor = "rgb(255, 230, 230)";
            var card = document.getElementsByClassName("card");
            for(var i = 0; i < card.length; i++){
                card[i].removeEventListener("click", cardClick);
                card[i].src = card_image[this.firstCardIndex];
            }
        }
    }
}

function showResult(text){
    var result = document.getElementsByClassName("result")[0];
    result.innerHTML = text;
}

function init(){
    showResult("카드를 눌러 뽀로로를 찾아주세요!");
    shuffle();
    setCards();
    openCount = 0;
    firstCardIndex = Math.floor(Math.random() * 10);
    document.body.style.backgroundColor = "rgb(255, 255, 230)";
}

function restart(){
    removeCards();
    init();
}