// code your solution here
function saturdayFun(message="roller-skate")
 {
    return `This Saturday, I want to ${message}!`;
  }
  let mondayWork = function(work="go to the office") 
  {
    return `This Monday, I will ${work}.`
  }
  
  let wrapAdjective = function(myStyle="*")
   {
    return function(description="special") 
    {
      return `You are ${myStyle}${description}${myStyle}!`
    }
  }


