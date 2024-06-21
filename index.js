

//   const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const formData = new FormData(form)

//   const urlEncoded = new URLSearchParams(formData).toString();

//   // application/x-www-form-urlencoded
//   fetch('https://ve/api/v1/notice/add', {
//     method: "POST",
//     body: urlEncoded,
//     headers: {
//       'Content-type': 'application/x-www-form-urlencoded'
//     }
//   })

  // form.reset()



})

// async function getJokes() {
//   let x = await fetch("https://vercelb-ten.vercel.app/info");
//   let y = await x.json();
//   console.log(y);
//   console.log(y['firstName']);
//   let title = document.createElement('h1')
//   let message = document.createElement('p')
//   title.textContent = y['title'];
//   message.textContent = y['message'];
//   document.getElementById('data').appendChild(title)
//   document.getElementById('data').appendChild(message)
// }



  

//  const createTodo = async ()=>{
//     fetch("http://localhost:9001/api/jokes", {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Frontend',
//           body: 'Hello, I am Frontend',
//           userId: 80,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json)
//         .then((json) => console.log(json));


// }

// createTodo();


// //   self.addEventListener('fetch', e => {
// //     const {url} = e.request;
// //     if(url.includes('https://localhost:8000')) {
// //       const newUrl = url.replace('/api/jokes/');
// //       e.respondWith(fetch(newUrl));
// //   console.log(newUrl)
// //     }
// //   });


// //   data = async fetch("https://localhost:8000/api/jokes")
// //     .then((response) => await response.json())
// //     .then((data) => awaitconsole.log(data));

// // async function colle(){
// //    await fetch("/api/jokes")
// //     .then((response)=> response.json())
// //     .then(())
// // }

// getJokes();

async function getData() {
  let response = await fetch("https://tribhuwan-admin.vercel.app/api/v1/noticeData");
  let data = await response.json();
  console.log(data);
  console.log(data.length);
  for(let i=0; i< data.length ; i++ ){
   let title = document.createElement('h1')
   let message = document.createElement('p')
   title.textContent = data[i]['title']
   message.textContent = data[i]['message']
   document.getElementById('data').appendChild(title)
   document.getElementById('data').appendChild(message)
  }
  // console.log(data[0]);
  //  let title = document.createElement('h1')
  //  let message = document.createElement('p')
  // title.textContent = y['title'];
  // message.textContent = y['message'];
  // document.getElementById('data').appendChild(title)
  // document.getElementById('data').appendChild(message)
}

getData()
