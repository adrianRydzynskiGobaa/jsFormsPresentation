document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submitBtn');

  function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const birthDate = document.getElementById('birthDate').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      document.getElementById('email-error').textContent = 'Podaj poprawny adres email!';
      isValid = false;
    } else {
      document.getElementById('email-error').textContent = '';
    }

    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthDate.match(birthDateRegex)) {
      document.getElementById('birthDate-error').textContent = 'Podaj poprawną datę urodzenia w formacie RRRR-MM-DD!';
      isValid = false;
    } else {
      document.getElementById('birthDate-error').textContent = '';
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordRegex)) {
      document.getElementById('password-error').textContent = 'Hasło powinno zawierać co najmniej 8 znaków, w tym przynajmniej jedną wielką literę i jedną cyfrę!';
      isValid = false;
    } else {
      document.getElementById('password-error').textContent = '';
    }

    if (password !== confirmPassword) {
      document.getElementById('confirmPassword-error').textContent = 'Potwierdzenie hasła nie jest zgodne z wprowadzonym hasłem!';
      isValid = false;
    } else {
      document.getElementById('confirmPassword-error').textContent = '';
    }

    if (isValid) {
      alert('Formularz został poprawnie wypełniony!');
    }
  }

  submitBtn.addEventListener('click', validateForm);
});
