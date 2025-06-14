import { DateTime } from "./nodemodules/luxon/src/luxon.js";


document.getElementById("calculate").addEventListener("click",()=>{
    const inputDate = document.getElementById('datepicker').value;
    const jsDate = new Date(inputDate).toISOString().split('T')[0];
    console.log(document.getElementById('datepicker').value);
     if (!inputDate) {
        alert("Please enter a valid date.");
        return;
      }

    
     const birthDate = DateTime.fromISO(jsDate);
     const now = DateTime.now();

     if (birthDate > now) {
        alert("Birthdate cannot be in the future.");
        return;
      }
     
      const diff = now.diff(birthDate, ['years', 'months', 'days']).toObject();

      document.getElementById('result').innerText =
      `You are ${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days old.`;
     

})