function toggleMenu(type) {
    const hotSection = document.getElementById('hot-section');
    const coldSection = document.getElementById('cold-section');
    const hotBtn = document.getElementById('hotBtn');
    const coldBtn = document.getElementById('coldBtn');
  
    if (type === 'hot') {
      hotSection.style.display = 'block';
      coldSection.style.display = 'none';
      hotBtn.classList.add('active');
      coldBtn.classList.remove('active');
    } else {
      hotSection.style.display = 'none';
      coldSection.style.display = 'block';
      coldBtn.classList.add('active');
      hotBtn.classList.remove('active');
    }
  }
  
  // Optional: Welcome alert on page load
  window.onload = () => {
    alert("Welcome to Cherry's Coffee Shop! ☕");
  };
  