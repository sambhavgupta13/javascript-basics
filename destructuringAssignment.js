let user = { name: "John", years: 30 ,isAdmin:true};
({name,years:age,isAdmin="false"}=user)
console.log(name)
console.log(age)
console.log(isAdmin)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function topsalary(salaries){
     
    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;


  }

  console.log(topsalary(salaries))