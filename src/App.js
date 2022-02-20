
import './App.css';
import Home from './page/Home';
function App() {
  window.addEventListener('DOMContentLoaded', setup);
  function setup() {
    const options = {
      rootMargin: '0px 0px -200px 0px'
    }
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        } else { return; }
      })
    }, options);
    const h1Group = document.querySelectorAll('h1');
    h1Group.forEach(h1 => observer.observe(h1));
    const pGroup = document.querySelectorAll('p');
    pGroup.forEach(p => observer.observe(p));
    const divGroup = document.querySelectorAll('.move');
    divGroup.forEach(p => observer.observe(p));
  }

//   async function getMedia(constraints) {
//     let stream = null;
  
//     try {
//       stream = await navigator.mediaDevices.getUserMedia(constraints);
//       /* use the stream */
//     } catch(err) {
//       /* handle the error */
//     }
//   }
//   navigator.mediaDevices.getUserMedia(constraints)
// .then(function(stream) {
//   /* use the stream */
// })
// .catch(function(err) {
//   /* handle the error */
// });
// var constraints = { audio: true, video: { width: 1280, height: 720 } };

// navigator.mediaDevices.getUserMedia(constraints)
// .then(function(mediaStream) {
//   var video = document.querySelector('video');
//   video.srcObject = mediaStream;
//   video.onloadedmetadata = function(e) {
//     video.play();
//   };
// })
// .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.

  return (
    <>
      <Home />
      
      {/* <section>
      <web-cam>

     
      <div id="container">
        <canvas width="644.5" height="450"></canvas>
        
        <div id="video-container" style={{width: "644.5px", height: "450px"}}>
      <video id="front-camera" autoplay="" playsinline=""></video>
      <video id="rear-camera" autoplay="" playsinline=""></video>
    </div>
        
        <div id="preview-container" hidden="" style={{width: "644.5px", height: "450px"}}>
          <video id="preview" playsinline="" src="null" style={{width: "644.5px", height: "450px"}}></video>
          <material-button id="close-video" raised="" hidden="" style={{display:" none"}}>
            <i className="material-icons" slot="left-icon">clear</i>
          </material-button>
        </div>
        
        <div id="video-buttons">
          <material-button id="init-video" raised="">
            <i className="material-icons" slot="left-icon">video_call</i>
          </material-button>
          
          <material-button id="capture-video" raised="" hidden="" style={{display: 'none'}}>
            <i className="material-icons" slot="left-icon">video_call</i>
            <input type="file" slot="file-input" id="video-input" accept="video/*" capture=""/>
          </material-button>
          
          
          <material-button id="start-video" raised="" hidden="" style={{display: 'none'}}>
            <i className="material-icons" slot="left-icon">videocam</i>
          </material-button>
          
          <material-button id="suspend-video" raised="" style={{display: 'none'}} hidden="">
            <i className="material-icons" slot="left-icon">videocam_off</i>
          </material-button>
          
          <material-button id="toggle-camera" raised="" style={{display: 'none'}} hidden="">
            <i className="material-icons" slot="left-icon">switch_video</i>
          </material-button>
          
          <material-button id="pip" raised="" style={{display: 'none'}} hidden="">
            <i className="material-icons" slot="left-icon">picture_in_picture_alt</i>
          </material-button>
          
          <material-button id="airplay" raised="" hidden="" style={{display: 'none'}}>
            <i className="material-icons" slot="left-icon">airplay</i>
          </material-button>
          
          <material-button id="record-video" raised="" style={{display: 'none'}} hidden="">
            <i className="material-icons" slot="left-icon">fiber_manual_record</i>
          </material-button>
          
          <material-button id="stop-record-video" raised="" hidden="" style={{display: 'none'}}>
            <i className="material-icons" slot="left-icon">stop</i>
          </material-button>
          
          <material-button id="stop-video" raised="" style={{display: 'none'}} active="" hidden="">
            <i className="material-icons" slot="left-icon">power_settings_new</i>
          </material-button>
          
          <material-button id="play" raised="" hidden="" style={{display: 'none'}}>
            <i className="material-icons" slot="left-icon">play_arrow</i>
          </material-button>
          
          <material-button id="pause" raised="" hidden="" style={{display: 'none'}}>
            <i className="material-icons" slot="left-icon">pause</i>
          </material-button>
          
          <material-button id="download" raised="" hidden="" style={{display: 'none'}}>
            <a download="video.mp4" id="download-link" slot="left-icon" target="_blank" href=' '>
              <i className="material-icons">get_app</i>
            </a>
          </material-button>
        </div>
      </div>
      <material-dialog id="permission-dialog" style={{display: 'none'}}>
        <h3 slot="header">No access to media</h3>
        <p slot="body">Your device does not have permission to access the camera and microphone. Please enable this in your device's 
        settings.</p>
        <div slot="footer">
          <material-button id="dialog-close" label="Close" raised=""></material-button>
        </div>
    </material-dialog>
      </web-cam>
    </section> */}

    </>
  );
}

export default App;
