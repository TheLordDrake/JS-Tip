function calculateTip() {
    let bill = document.getElementById('billamt').value;
    let percent = document.getElementById('serviceQual').value;
    let peepCount = document.getElementById('peopleamt').value;

    if (bill === null || bill === '') {
        alert('Please enter a value');
        return;
    }

    if (percent === null || percent <= 0) {
        alert('Please select service quality');
        return;
    }

    if (peepCount === null || peepCount === '' || peepCount <= 1)
    {
        peepCount = 1;
        document.getElementById('each').style.display = 'none';
    }
    else {
        document.getElementById('each').style.display = 'block';
    }

    let total = (bill * percent) / peepCount;
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);

    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;
}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById("calculate").onclick = function() {
    calculateTip();
};