// ボタンが押されたら実行
function alertButton(){
    console.log("ボタンが押されました");
    let inputNum = document.getElementById("inputForm").value;
    const num = document.getElementById("num")
    const tax = document.getElementById("tax").value;
    if(inputNum == "" || tax == ""){
       alert("入力してからボタンを押してください。");
    } else {
        let result = inputNum * (1 + tax / 100);
    num.innerHTML = result + '円';
    }
}
// コメントアウト
