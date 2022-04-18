function compute()
{
    let amount = document.getElementById("principal").value;
    let rate = document.getElementById("interestRate").value;
    let years = document.getElementById("years").value;
    years = Number.parseFloat(years);
    if (amount != 0) {
      let targetYear = 2022 + years;
      let gainedAmount = (amount * (rate / 100)) * years;
      document.getElementById("result").innerHTML = ("If you deposit " + amount + ",\nat an interest rate of " + rate + "%.\nYou will receive an amount of " + gainedAmount + ",\nin year "+ targetYear);

    }
    else if (amount == 0) {
      alert("Either no value has been entered or an entry of zero has been made!")
    }

}
