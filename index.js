let mainContainer = document.getElementById("mainContainer")

async function getData() {
  let response = await fetch("https://tribhuwan-admin.vercel.app/api/v1/noticeData");
  let data = await response.json();
  console.log(data);
  length = data.length;
  for(let i=0; length > i ; length-- ){
  let len = length - 1;
  let noticeDiv = document.createElement('div')
  let title = document.createElement('h1')
  let message = document.createElement('p')
  
  title.textContent =  data[len]['title']
  message.textContent =  data[len]['message']
  noticeDiv.appendChild(title)
  noticeDiv.appendChild(message)
  mainContainer.appendChild(noticeDiv)
  noticeDiv.classList.add('notice')
  }

}

getData()
