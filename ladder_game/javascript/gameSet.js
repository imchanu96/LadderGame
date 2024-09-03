var ladderLine = "ㅣ";
var ladderJoinner = "ㅡ";

function headCountDownFnc() {
    var num = document.getElementById("headCountNum");
    num.value = parseInt(num.value) - 1;
    if(num.value < 2){
        alert("인원수는 최소 2명입니다.");
        num.value = 2;
    }
}
function headCountUpFnc() {
    var num = document.getElementById("headCountNum");
    num.value = parseInt(num.value) + 1;
    if(num.value > 10){
        alert("인원수는 최대 10명입니다.");
        num.value = 10;
    }
}

function gameStartFnc(){ // 게임 시작
    var titleBox = document.getElementById("titleBox");
    var headCount = parseInt(document.getElementById("headCountNum").value);
    var ladderSize = headCount * 2 - 1;
    while ( titleBox.hasChildNodes() ) // 화면 지우기
    {
        titleBox.removeChild(titleBox.firstChild);       
    }

    var playerArr = new Array(10);
    for (let i = 0; i < playerArr.length; i++) {
        playerArr[i] = new Array(ladderSize).fill("");
        
    }

   
    for (let i = 0; i < playerArr.length; i++) { // 사다리 구성
        for (let j = 0; j < playerArr[0].length; j++) {
            if(j % 2 == 0){ //플레이어별 라인 (ㅣ)
                playerArr[i][j] = ladderLine;
            }else{
                playerArr[i][j] = "   .  ";
            }
        }
        
    }

    var randNum = 0;

    for (let i = 0; i < ladderSize; i++) {  
        for (let j = 0; j < 4; j++) { // 플레이어 수 라인별 // 사다리 이음새 최대 4개 설정
            if(i % 2 != 0){
                randNum = Math.floor(Math.random()* 10);
                playerArr[randNum][i] = ladderJoinner;
            
            }
        }
        
    }
    
    

    for (let i = 0; i < playerArr.length; i++) { // html화면에 구현
        for (let j = 0; j < playerArr[0].length; j++) {
            
            titleBox.innerHTML = titleBox.innerHTML + playerArr[i][j];
            
        }
        titleBox.innerHTML = titleBox.innerHTML + '<br>';
    }
}
