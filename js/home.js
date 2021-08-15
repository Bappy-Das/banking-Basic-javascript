// for diposit money and add balance

document.getElementById('diposit-btn').addEventListener('click', function () {

    // diposit money 
    const dipositMoney = document.getElementById('diposit-input');
    const dipositValue = parseFloat(dipositMoney.value);

    const currentMoney = document.getElementById('diposit-money');
    const currentdiposit = parseFloat(currentMoney.innerText);

    const newdiposit = currentdiposit + dipositValue;
    currentMoney.innerText = newdiposit;

    // ballance add 
    const getBalnace = document.getElementById('balance-total');
    const accountBalance = parseFloat(getBalnace.innerText);
    // console.log(accountBalance);

    // currentBalance 
    const currentBalance = accountBalance + dipositValue;
    getBalnace.innerText = currentBalance;

    dipositMoney.value = '';

})

// handle with withdraw handler and reduce balcance

document.getElementById("withdraw-btn").addEventListener('click', function () {
    // get main value 
    const withdrawTotal = document.getElementById('withdraw-balance');
    const withdrawBalance = parseFloat(withdrawTotal.innerText);

    // get input value
    const withdrawinput = document.getElementById('withdraw-input');
    const withdrawCurrrent = parseFloat(withdrawinput.value);

    // set diposit value 
    withdrawTotal.innerText = withdrawBalance + withdrawCurrrent;

    // reduce main balance 

    const mainBalance = document.getElementById('balance-total');
    const intBalance = parseFloat(mainBalance.innerText);

    const reduceBalance = intBalance - withdrawCurrrent;
    mainBalance.innerText = reduceBalance;

    withdrawinput.value = '';
    // withdrawTotal.innerText = withdrawCurrrent;
})