
//for time--------------------------------------------------------------------------------------------------------
let countdown; // 用來儲存計時器的變數
let timeRemaining = 60; // 計時器的初始值（60秒）

function updateTimer() {
    const timeDisplay = document.querySelector('.time'); // 獲取顯示時間的元素
    timeDisplay.textContent = `倒數：${timeRemaining}秒`; // 更新顯示內容
    
    if (timeRemaining <= 0) {
        clearInterval(countdown); // 停止計時器
        const choice = confirm('時間到💥！要回首頁還是重新開始？\n按確定回首頁，按取消重新開始。');
        if (choice) {
            goHome(); // 回到首頁
        } else {
            restartTimer(); // 重新開始
        }
    } else {
        timeRemaining--; // 減少剩餘時間
    }
}

function startTimer() {
    countdown = setInterval(updateTimer, 1000); // 每秒更新一次計時器
}

function goHome() {
    clearInterval(countdown); // 在轉換頁面前停止計時器
    window.location.href = '../start/main.html'; // 將當前窗口導向 main.html
}

function restartTimer() {
    timeRemaining = 60; // 重設時間
    startTimer(); // 重新啟動計時器
}



//for generate number--------------------------------------------------------------------------------------------------------

// 將隨機數字插入到運算符號的旁邊
function updateRandomNumbers() {
    // 取得要更新的數字元素
    const number1 = document.querySelector('.operation-number1');
    const number2 = document.querySelector('.operation-number2');

    // 設定隨機數字
    while(1){
        num = Math.floor(Math.random() * 81) + 1; // 生成 1 到 81 之間的數字
        var arr=[];
        for( i=1; i<=num; i++){
            if(num%i==0){
                arr.push(i);
            }
        }
        subNum = Math.floor(Math.random()*arr.length);
        if(num/arr[subNum] < 10 && arr[subNum] <10){
            break;
        }
    }

    number1.textContent = num;
    number2.textContent = num/arr[subNum]+arr[subNum];

}

// 網頁載入時更新數字
window.onload = function() {
    updateRandomNumbers();
    startTimer(); // 頁面加載後啟動計時器
};

//for select number--------------------------------------------------------------------------------------------------------
function updateSelection(id) {
    const selectElement = document.getElementById(id);
    const selectedValue = selectElement.value;
    
    // 將「請選擇」變為所選數字
    selectElement.style.color = "#000"; // 改變字體顏色，讓選擇的數字更顯眼
}

// 檢查使用者選擇是否正確
function checkSelection() {
    const userNumber1 = parseInt(document.getElementById('number1').value); // 使用者選擇的第一個數字
    const userNumber2 = parseInt(document.getElementById('number2').value); // 使用者選擇的第二個數字

    const displayNumber1 = parseInt(document.querySelector('.operation-number1').textContent); // 隨機生成的第一個數字
    const displayNumber2 = parseInt(document.querySelector('.operation-number2').textContent); // 隨機生成的第二個數字

    // 比對使用者選擇的數字是否正確
    if (userNumber1 + userNumber2 === displayNumber2 && userNumber1 * userNumber2 === displayNumber1) {
        alert("正確！重新生成數字！");
        updateRandomNumbers(); // 更新新的隨機數字
        resetSelections(); // 重置選擇
    } else {
        alert("錯誤！請再試一次！");
    }
}

// 重置選擇數字
function resetSelections() {
    document.getElementById('number1').selectedIndex = 0; // 重置第一個選項
    document.getElementById('number2').selectedIndex = 0; // 重置第二個選項
    restartTimer(); // 重新啟動計時器
}

