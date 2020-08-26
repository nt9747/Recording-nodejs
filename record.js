const Recorder = require('node-rtsp-recorder').Recorder
 
var rec = new Recorder({
    url: 'rtsp://admin:Abc123456!@192.168.1.65',
    timeLimit: 60, // time in seconds for each segmented video file
    folder: 'videos',
    name: 'cam1',
    directoryPathFormat: 'MMM-D-YYYY',
    fileNameFormat: 'M-D-h-mm-ss',
})
// Starts Recording
rec.startRecording();

setTimeout(() => {
    console.log('Stopping Recording')
    rec.stopRecording()
    rec = null
}, 300000)

