function setActiveTab(event, tabName) {
  event.preventDefault();
  
  // Remove active class from all tabs
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  // Add active class to clicked tab
  event.target.classList.add('active');
  
  // Update welcome message
  const messages = {
      'Home': 'Welcome home! Find everything you need for your furry friend.',
      'About Us': 'Learn about our mission to help dog owners everywhere!',
      'Get Involved': 'Join our community and make a difference for dogs!',
      'More': 'Discover additional resources and helpful tools.'
  };
  
  document.getElementById('welcomeMessage').textContent = messages[tabName];
}

function bouncePaw() {
  const pawIcon = document.querySelector('.paw-icon');
  pawIcon.classList.add('bounce');
  
  // Remove bounce class after animation
  setTimeout(() => {
      pawIcon.classList.remove('bounce');
  }, 600);
}

// Set Home as active by default
window.onload = function() {
  document.querySelector('.nav-tab').classList.add('active');
};

// ===== Next Script Block =====

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9855437d0037a1f1',t:'MTc1ODkxNTk0Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})()