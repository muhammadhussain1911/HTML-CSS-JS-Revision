// const mainDiv = document.createElement('div');
// mainDiv.style.width = '200px';
// mainDiv.style.height = '200px';
// mainDiv.style.backgroundColor = 'red';

// const text = document.createTextNode('Muhammad Hussain'); // best approach
// mainDiv.appendChild(text) // attached text inside div.

// document.body.appendChild(mainDiv);

// function addList() {
//     const input = document.getElementById('langInput')
//     const lang = input.value.trim()
//     if (!lang) return   // prevents empty li
//     const li = document.createElement('li')
//     li.textContent = lang   // more readable than createTextNode
//     document.querySelector('.language').appendChild(li)
//     input.value = ''   // clear input after adding
// }

function addList() {
  const input = document.getElementById('langInput');
  const fruit = input.value.trim();
  if (!fruit) return;
  const li = document.createElement('li');
  li.textContent = fruit;
  document.querySelector('.fruits').appendChild(li);
  input.value = '';
}
