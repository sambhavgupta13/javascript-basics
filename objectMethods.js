let salaries = {
    
  };

  function sumSalaries(salaries){
      let sum = 0;
      let arr = Object.values(salaries)
      for(let i=0;i<arr.length;i++){
          sum+=arr[i]
      }
      return sum
  }

  console.log(sumSalaries(salaries))