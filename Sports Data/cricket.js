let maxOver=10;
let runs=0;
let ballEle;
initiation();
function initiation(){
    let secOver=document.getElementById("over");
    for(let i=0;i<maxOver;i++){
        let elOver = document.createElement("div");
        let p=document.createElement("p");
        p.innerHTML=`Over ${i+1}`;
        elOver.appendChild(p);
        let ballHolder=document.createElement("div");
        elOver.appendChild(ballHolder);
        for (let j = 0; j < 6; j++) {
            ballHolder.appendChild(document.createElement("div"));
        }
        secOver.appendChild(elOver);
    }
    setBall(1,1);
}
function setBall(o,b){
    if(ballEle!=null){
        ballEle.className="";
    }
    document.querySelector(`#over :nth-child(${o}) > div :nth-child(${b})`).className="currentBall";
}
function addRuns(){
    let runInput=document.getElementById("scoreInput");
}