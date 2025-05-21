// // 요소 노드
// const aEl = document.createElement("a");
// document.body.appendChild(aEl);

// // 텍스트 노드
// const txtEl = document.createTextNode("길벗");
// document.querySelector("a").appendChild(txtEl);

// // href 속성 노드
// const hrefAttr = document.createAttribute("href");
// hrefAttr.value = "https://www.gilbut.co.kr";
// document.querySelector("a").setAttributeNode(hrefAttr);

function toggleP() {
  const pE1 = document.querySelector("p");
  // pE1.parentNode.removeChild(pE1);
  if (pE1.style.display === "none") {
    pE1.style.display = "block";
  } else {
    pE1.style.display = "none";
  }
}

function removeAllA() {
  const childNodes = document.body.childNodes;
  childNodes.forEach((node) => {
    if (node.nodeName === "A") {
      // 태그는 무조건 대문자로 반환함
      node.parentNode.removeChild(node);
    }
  });
}

function focusEvent() {
  console.log("focus on");
}

function blurEvent() {
  console.log("focus out");
}

const inputAge = document.querySelector("#age");
// inputAge.onfocus = () => {
//     console.log("Age focus on");
// }
// inputAge.onblur = () => {
//     console.log("Age focus out");
// }
inputAge.addEventListener("focus", () => {
  console.log("Age focus on");
});
inputAge.addEventListener("blur", () => {
  console.log("Age focus out");
});
inputAge.addEventListener("keypress", (e) => {
  console.log(e.keyCode);
});

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", (e) => { // 화살표를 쓰면 this의 범위가 달라진다.
  if (e.target.style.color === "red") {
    e.target.style.color = "black";
  } else {
    e.target.style.color = "red";
  }
});

const pEls = document.querySelectorAll("p");
pEls.forEach((el) => {
  el.addEventListener("click", function () {
    if (this.style.color === "red") {
      this.style.color = "black";
    } else {
      this.style.color = "red";
    }
  });
});
