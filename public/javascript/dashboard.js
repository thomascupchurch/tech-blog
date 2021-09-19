async function dashboard() {
    console.log('dashboard button clicked');
    const response = await fetch('/api/posts/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#dashboard').addEventListener('click', dashboard);
  