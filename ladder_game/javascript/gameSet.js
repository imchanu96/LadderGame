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

function playerNameAndResultSelectFnc(){
    var titleBox = document.getElementById("titleBox");
    var headCount = parseInt(document.getElementById("headCountNum").value);
    var ladderSize = headCount * 2 - 1;

    cleanFnc(titleBox);

    var warningMessage = document.createElement("div");
    warningMessage.id = "warningMessage";

    titleBox.appendChild(warningMessage);

    var playerNameArea = document.createElement("table"); // 플레이어 이름 표현 구역
    playerNameArea.id = "playerNameArea";
    var playerNameTr = document.createElement("tr");
    playerNameArea.appendChild(playerNameTr);

    
    for (let i = 0; i < ladderSize; i++) {
        if (i % 2 == 0) {
            var playerNameTd = document.createElement("td");
            var playerName = document.createElement("input");
            playerName.className = "playerName";
            playerName.type = "text";
            playerName.placeholder = "이름";
            playerNameTd.appendChild(playerName);
            playerNameTr.appendChild(playerNameTd);
        }
        
    }
    titleBox.appendChild(playerNameArea);
    
    var ladderArr = new Array(10);

    for (let i = 0; i < ladderArr.length; i++) {
        ladderArr[i] = new Array(ladderSize).fill("");
        
    }
    
    for (let i = 0; i < ladderArr.length; i++) { // 사다리 구성
        for (let j = 0; j < ladderArr[0].length; j++) {
            if(j % 2 == 0){ //플레이어별 라인 (ㅣ)
                ladderArr[i][j] = ladderLine;
            }else{
                ladderArr[i][j] = "";
            }
        }
        
    }
    
    var ladderArea = document.createElement("table"); // 사다리 초기 표현 구역
    ladderArea.id = "ladderArea";
    
    
    for (let i = 0; i < ladderArr.length; i++) { // html화면에 구현
        var ladderTr = document.createElement("tr");
        for (let j = 0; j < ladderArr[0].length; j++) {

            var ladderTd = document.createElement("td");
            ladderTr.appendChild(ladderTd);
            ladderTd.innerHTML = ladderTd.innerHTML + ladderArr[i][j];
            
        }
        ladderArea.appendChild(ladderTr);
    }
    titleBox.appendChild(ladderArea);


    var resultArea = document.createElement("table"); // 결과 표현 구역
    resultArea.id = "resultArea";
    var resultTr = document.createElement("tr");
    resultArea.appendChild(resultTr);

    
    for (let i = 0; i < headCount; i++) {
        var resultTd = document.createElement("td");
        var result = document.createElement("input");
        result.className = "result";
        result.type = "text";
        result.placeholder = "결과 정하기";
        resultTd.appendChild(result);
        resultTr.appendChild(resultTd);
        
    }
    titleBox.appendChild(resultArea);


    var gameStartBtnArea = document.createElement("div");
    gameStartBtnArea.id = "gameStartBtnArea";
    var gameStartBtn = document.createElement("input");
    gameStartBtn.id = "gameStartBtn";
    gameStartBtn.type = "button";
    gameStartBtn.value = "게임 시작";

    gameStartBtnArea.appendChild(gameStartBtn);
    titleBox.appendChild(gameStartBtnArea);
    gameStartBtn.addEventListener("click", function gameStartFnc(){ // 게임 시작
        var randNum = 0;
    
        for (let i = 0; i < ladderSize; i++) {  
            for (let j = 0; j < 4; j++) { // 플레이어 수 라인별 // 사다리 이음새 최대 4개 설정
                if(i % 2 != 0){
                    randNum = Math.floor(Math.random()* 10);
                    ladderArr[randNum][i] = ladderJoinner;
                
                }
            }
            
        }
        var playerNameTag = document.getElementsByClassName("playerName");
        var resultTag = document.getElementsByClassName("result");

        
        var playerNameList = new Array();
        var resultList = new Array();
        
        for (let i = 0; i < playerNameTag.length; i++) {
            if(checkValueFnc(playerNameTag[i].value)){ 
                playerNameList.push(i+1);
            }else{
                playerNameList.push(playerNameTag[i].value);
            }
            
            if(checkValueFnc(resultTag[i].value)){
                warningMessage.innerHTML = "결과 정하기를 모두 입력해주세요";
                gameStartBtn.preventDefault();
            }else{
                resultList.push(resultTag[i].value);
            }
            
        }
        

        var resultInfo = {  "headCount" : headCount,
                            "ladderArr" : ladderArr,
                            "playerNameList" : playerNameList,
                            "resultList" : resultList
        }

        cleanFnc(titleBox);
        ladderFnc(resultInfo);
    });
    
   
}

function cleanFnc(tag){
    while ( tag.hasChildNodes() ) // 화면 지우기
    {
        tag.removeChild(tag.firstChild);       
    }
    
}



function checkValueFnc(value){
    if(value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){

        return true;
    }else{
        return false;
    }
}
