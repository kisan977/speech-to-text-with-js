

// first ma speech recongitntion create 1.

// it provides recongnition api to us
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

// then we create an object of sppechregotion

const recognition= new SpeechRecognition();


// inside the div tag
let para=document.createElement('p');

// for content of paragraph from html

const content=document.querySelector('content');

content.appendChild(para);


// now we add event listner on recogntion and it pass many event

recognition.addEventListner('result', e =>{

console.log(e.results[0][0].transcript);

const transcript = e.results[0][0].transcript;

para.textContent=transcript;

// if user says negative thing it replace with it
if(transcript.includes('stupid')){
	para.textContent=transcript.replace('stupid','be positive');
}
 else{

 	para.textContent=transcript;
 }

// this is for every time new para
if(e.results[0].isfinal)
{
para=document.createElement('p');
content.appendChild(para);

}

});


// for continuos listning we user onend
 recognition.addEventListner('end',recognition.start);

// it starts to listner
recognition.start();

// all the data are in transcript

// isfinal is used to auto correct
