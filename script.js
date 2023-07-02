function changeText(text) {
    var textField = document.getElementById('text-field');
    textField.textContent = text;
  }

var myInfo = document.getElementById('myInfo');
var text = document.createTextNode('This page is for testing purposes only. On the homepage www.w3schools.com I already have the courses of HTML and CSS mostly through and have acquired the basic knowledge. Now I deal with JavaScript and will try to apply any new experience on this website. For this I have cloned my repository via cmd and only need to code my portfolio via Visual Studio Code. Afterwards I open cmd and type git add when I have created a new file. After writing codes to that file, I type in cmd git commit -am with the message to add the changes to the cache, so to speak. And when I am done with everything, I enter git push again in cmd to get the changes made uploaded to my repository on Github and updated.');
myInfo.appendChild(text);