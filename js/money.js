function getInputElementValueById(ElementId) {
    const elementValue = document.getElementById(ElementId);
    const elementValueString = elementValue.value;
    const checkString = stringValueCheck(elementValueString);

    if (checkString == false) {
       // alert('please provide corrent data');
        return false;
    }
    const currentValue = parseInt(elementValueString);
    if (isNaN(currentValue)) {
        //alert('please provide value');
        return false;
    }
    return currentValue;
}
function stringValueCheck(value) {
    for (const element of value) {
        if (isNaN(element)) {
            return false;
        }
    }
    return true;
}
function getElementInnerValueById(Id,amount){
    const innerAmountSet=document.getElementById(Id);
    innerAmountSet.innerText=amount;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalIncome = getInputElementValueById('input-income-field');
    const foodCost=getInputElementValueById('input-food-field');
    const rentCost=getInputElementValueById('input-rent-field');
    const clothsCost=getInputElementValueById('input-cloths-field');
    if (totalIncome == false || foodCost == false || rentCost == false || clothsCost == false) {
        alert('Please check input section and provide valid data for calculation');
        return;
    }
    else{
       const totalExpense=foodCost+ rentCost+clothsCost;
       if(totalExpense>totalIncome){
        alert('Cut your coat according to your cloth');
        return;
       }
       getElementInnerValueById('total-expenses',totalExpense);
       const balanceCalculation=totalIncome-totalExpense;
       getElementInnerValueById('total-balance',balanceCalculation);
       

    }
    document.getElementById('save-btn').addEventListener('click',function(){
        const totalIncomeAmount=getInputElementValueById('input-income-field');
        const saveAmountPercent=getInputElementValueById('input-save-field');
        const totalSave=((totalIncomeAmount)*(parseFloat(saveAmountPercent/100))).toFixed(2);
        
        getElementInnerValueById('save-Amount',totalSave);
       
        const remainBalanceid=document.getElementById('total-balance');
        const remainBalanceidString=remainBalanceid.innerText;
        const remainBalanceidStringamount=parseInt(remainBalanceidString);

        const reaminingbalance=remainBalanceidStringamount-totalSave;
        
        getElementInnerValueById('Remain-Balance', reaminingbalance);
    })
})
