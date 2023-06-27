const getValues = () => {
  divArr = document.getElementsByClassName("grid_square");
  posArr = [];
  for (let i = 0; i < width * height; i++) {
    const binaryClicked = divArr[i].dataset.clicked;
    posArr.push(binaryClicked);
  }
  return posArr;
};
const sendData = async () => {
  data = getValues();
  console.log("sending off data");
  xhr = getXmlHttpRequestObject();
  xhr.onreadystatechange = dataCallback;
  // asynchronous requests
  xhr.open("POST", "http://localhost:6969/data", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // Send the request over the network
  xhr.send(JSON.stringift({ data: data }));
};

const sendTestData = async () => {
  data = getValues();
  answer = document.getElementById("tbox").value;
  localStorage.setItem(answer, data);
  console.log("sending off training data with value of " + answer);
  const response = await fetch("http://localhost:6969/testing", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "content-Type": " application/json",
    },
    body: JSON.stringify({ answer: answer, data: data }),
  });
  serverReq = response.json();
  console.log(serverReq);
  respP = document.getElementById("resp");
  resp.innerHTML = serverReq;
};
