let startBtn = document.getElementById("start"),

    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],

expensesInputs = document.getElementsByClassName('expenses-item'),

btnExpenses = document.getElementsByTagName('button')[0],
btnOptionalexpenses = document.getElementsByTagName('button')[1],
btnCountBudget = document.getElementsByTagName('button')[2],


optionalExpensesInputs = document.querySelectorAll('.optionalexpenses-item'),

incomeOptional = document.querySelector('#income'),
savings = document.querySelector('#savings'),
sumValue = document.querySelector('#sum'),
percentValue = document.querySelector('#percent'),
year = document.querySelector('.year-value'),
month = document.querySelector('.month-value'),
day = document.querySelector('.day-value');


btnExpenses.disabled = true;
btnOptionalexpenses.disabled = true;
btnCountBudget.disabled = true;

let money, time, btnAll;;
// for(i = 0; i < 3; i++ ){
// btnAll= document.getElementsByTagName('button')[i];
// btnAll.style.display = "none"
// };

startBtn.addEventListener('click', function(){
    time = prompt( "Введите дату в формате YYYY-MM-DD");
    money = +prompt("ваш бюджет на месяц?", " ");

    // for(i = 0; i < 3; i++ ){
    //     btnAll= document.getElementsByTagName('button')[i];
    //     btnAll.removeAttribute('style', 'display');
    //     };
    btnExpenses.disabled = false;
    btnOptionalexpenses.disabled = false;
    btnCountBudget.disabled = false;

    while(isNaN(money) || money == " " || money == null){
       money = +prompt("ваш бюджет на месяц?", " ");
    }
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

btnExpenses.addEventListener('click', function(){
    let sum = 0;

    for(let i  = 0; i < expensesInputs.length; i++){
        let a = expensesInputs[i].value,
            b = expensesInputs[++i].value;

        if((typeof(a)) != null && (typeof(b)) != null  && a != ' '  &&  b != ' ' &&   a.length < 50){
           // console.log(" vse rabotaet");
            appData.expenses[a] = b;
            sum += +b;
        } else{
            i = i-1;
         // alert("Please Enter SOME INFO!!!!");
        }    
    }
    expenses.textContent = sum;  
});

btnOptionalexpenses.addEventListener('click', function(){

    for(let i = 0; i < optionalExpensesInputs.length; i++){
      let c = optionalExpensesInputs[i].value;
      //let  d = i+1; 
      appData.optionalExpenses[i] = c;
      optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
    }

});

btnCountBudget.addEventListener('click', function(){

     if(appData.budget != undefined){
        // appData.moneyPerDay = +(appData.budget/30).toFixed();
        // perDay = appData.moneyPerDay;
        // sum = +expensesInputs[1].value + +expensesInputs[3].value;
        // daybudget.textContent =  perDay - (sum/30); 

        appData.moneyPerDay = ((appData.budget - +expenses.textContent)/30).toFixed();
        daybudget.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay <= 100){
            level.textContent = "Minimalnij uroven dostatka";
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            level.textContent = "Srednij uroven dostatka";
        } else if(appData.moneyPerDay >= 2000){
            level.textContent = "Visokij uroven dostatka";
        }else{
            level.textContent = "Chto to poshlo ne tak!!!";
    };
}else{
    daybudget.textContent = "Chto to poshlo ne tak!!!";
}
});

incomeOptional.addEventListener('input', function(){
    let items = incomeOptional.value;
    appData.income = items.split(', ');
    income.textContent = appData.income;
});

savings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false; 
    }else{
        appData.savings = true; 
    }
});

sumValue.addEventListener('input', function() {
  if(appData.savings == true){
    let sum = +sumValue.value,
       percent = +percentValue.value;

       appData.monthIncome = (sum/100/12*percent).toFixed(2);
       appData.yearIncome = (sum/100*percent).toFixed(2);

       monthsavings.textContent = appData.monthIncome;
       yearsavings.textContent = appData.yearIncome ;
  }
});

percentValue.addEventListener('input', function() {
    if(appData.savings == true){
        let sum = +sumValue.value,
        percent = +percentValue.value;
 
        appData.monthIncome = (sum/100/12*percent).toFixed(2);
        appData.yearIncome = (sum/100*percent).toFixed(2);
 
        monthsavings.textContent = appData.monthIncome;
        yearsavings.textContent = appData.yearIncome ;
  
    }
  });


let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: false,
    
};
// console.log(Object.keys(appData).length);



