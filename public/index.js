const socket = io()
const fromSocket = document.getElementById('userId')
const localVideo=document.getElementById('localVideo')

socket.on('connect',()=>{
    fromSocket.innerHTML = socket.id
})

//using constructor
// let stream1 = new MediaStream()
// console.log('stream1',stream1)
// setTimeout(() =>console.log('stream 1 tracks',stream1.getTracks(),3000))
//get local media
const openMediaDevices = async()=>{
    try{
        let stream = await navigator.mediaDevices.getUserMedia({video:true,audio:true})
        localVideo.srcObject = stream
    }catch(error){
        console.log(error)
    }
}
openMediaDevices()
//using media devices
// // navigator.mediaDevices.getUserMedia({video:true,audio:true})

// // .then(stream=>{
// //     console.log('stream2',stream)
// //     let tracks = stream.getTracks()
// //     console.log('all tracks',tracks)
// //     tracks.forEach(track=>stream1.addTrack(track))

// //     let stream3 = stream.clone()
// //     console.log('stream3',stream3)
// // })