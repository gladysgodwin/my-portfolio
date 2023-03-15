// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const formData = new FormData(form);
//   console.log(form, "form")
//   fetch('/https://portfolio.praestohealth.com.ng:3000/submit-data', {
//     method: 'POST',
//     body: formData
//   })
//   .then(response => {
//     if (response.ok) {
//         console.log('sucess')
//     } else {
//         console.log('failed')
//     }
//   })
//   .catch(error => {
//     console.log('error')
//   });
// });
async function submitData(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    };

    try {
      const response = await fetch('http://localhost:3000/submit-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const result = await response.text();
          console.log('Response:', result);
        } else {
          console.error('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    document.getElementById('contact').addEventListener('submit', submitData);

