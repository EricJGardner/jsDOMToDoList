// var p = document.createElement('p');
// p.innerHTML = '<a href="#">Hide</a>';
// p.onclick = function () {
//     setTimeout(function () {
//         document.getElementById('foo').style.display='none';
//     }, 1000);
//     return false;
// };

// var el = document.getElementById('foo');
// el.parentNode.insertBefore(p, el);         
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//This doesn't Work
// var gone = document.querySelector('li');
// var i;
// for (i = 0; i < gone.length; i++) {
//   gone[i].onclick = setTimeout(function() {
//     var div = this.parentElement;
//     div.style.display = "none";}, 1000);
//   }

// This does not work
// var close = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = setTimeout(function() {
//     var div = this.parentElement;
//     div.style.display = "none"}, 1000);
//   }


// Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//     console.log("I'm on line 74");
//   }
// }

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      console.log("I'm on 117");
    }
  }
}