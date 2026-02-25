const form = document.getElementById('login-form');
const statusMessage = document.getElementById('status-message');
const togglePinButton = document.getElementById('toggle-pin');
const pinInput = document.getElementById('pin');

function setStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = type;
}

togglePinButton.addEventListener('click', () => {
  const isPassword = pinInput.type === 'password';
  pinInput.type = isPassword ? 'text' : 'password';
  togglePinButton.setAttribute('aria-pressed', String(isPassword));
  togglePinButton.setAttribute('aria-label', isPassword ? 'Hide PIN' : 'Show PIN');
  togglePinButton.textContent = isPassword ? '🙈' : '👁';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.email.value.trim();
  const mobile = form.mobile.value.trim();
  const pin = form.pin.value.trim();

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const mobileValid = /^[0-9]{10,15}$/.test(mobile);
  const pinValid = /^[0-9]{4,6}$/.test(pin);

  if (!emailValid) {
    setStatus('Please enter a valid email address.', 'error');
    return;
  }

  if (!mobileValid) {
    setStatus('Please enter a valid mobile number (10-15 digits).', 'error');
    return;
  }

  if (!pinValid) {
    setStatus('Please enter a valid PIN (4-6 digits).', 'error');
    return;
  }

  setStatus('Login successful. Redirecting…', 'success');

  window.setTimeout(() => {
    window.location.href = 'customer360.html';
  }, 350);
});
