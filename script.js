const form = document.getElementById('form');

const checker = document.getElementById('check-me');
const sendbtn = document.getElementById('submit');
checker.onchange = function() {
  sendbtn.disabled = !this.checked;
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
  // if (title.value === '' || text-body.value === ''){
  //   e.preventDefault();
  //   alert("Fill in the provided fields");
  // }
  console.log("Sent")
  const payload = new FormData(form);
  console.log([...payload]);
  fetch('https://jsonplaceholder.typicode.com/posts',{
      // type : 'POST',
      method: 'POST',
      body: payload,
  })
  .then(res => res.json())
})