// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// console.log(btns);
// btns is a NodeList which can perform forEach
btns.forEach(function (btn) {
    // add event listener to btn
    btn.addEventListener('click', (e) => {
        // console.log(e.currentTarget);
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }

        value.textContent = count;
    });
});