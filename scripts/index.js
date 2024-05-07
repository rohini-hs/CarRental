
/* call Anonymous function */
window.onload = function(){

    //get the button handle
    let btnCalculate = document.getElementById("Calculate");
    btnCalculate.onclick = btnCalcFunc;

}
function btnCalcFunc(){
      //read number of days

      let noofDays = document.getElementById("NOD");
      nodValue = noofDays.value;

      //Calculate Car rentals
      let carrental = nodValue * 550

      //check if any checkboxes are checked

      let tt = document.getElementById("TollTag");
      let gpsid = document.getElementById("gps");
      let RA = document.getElementById("RoadAssint");


      let TollValue = 0;
      let gpsValue = 0;
      let roadAsValue = 0;
      let OptionalValue = 0;

      if (tt.checked){
        TollValue = 100;
      }

      if (gpsid.checked){
        gpsValue = 27;
      }

      if (RA.checked){
        roadAsValue = 60;
      }

      /* calculate OptionalValue*/

      OptionalValue = TollValue + gpsValue + roadAsValue;

      /*calcuate surcharges */
      let under25Yes = document.getElementById("yes");
      let under25No = document.getElementById("no");
let surchargesValue = 0;

      if (under25Yes.checked){
        surchargesValue = 120;
      }
    
TotalDueValue = surchargesValue + OptionalValue + carrental
let messageDiv = document.getElementById("TotalCost");
messageDiv.innerHTML = TotalDueValue

}