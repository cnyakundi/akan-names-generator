function day (century, year, day,month){
    return ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
  };
  
  if day<=0 || day>31{
    alert('You have entered an invalid day')
  };
  
  if  month<= 0 || month> 12 {
    alert('You have entered an invalid month')
  };
  
  var maleNames = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  
  //Logic for female Akan names 
  function gender () {
    if (day===1 && femaleName[1] )
    alert("Your Akan name is Adwowa")
  }else if {
    if (day===2 && femaleName[2])
    alert("Your Akan name is Abenaa")
  }else if {
    if (day===3 && femaleName[3])
    alert("Your Akan name is Akua")
  } else if {
    if (day===4 && femaleName[4])
    alert("Your Akan name is Akua")
  }else if {
    if (day===5 && femaleName[5])
    alert("Your Akan name is Afua")
  }else if {
    if (day===6 && femaleName[6])
    alert("Your Akan name is Ama")
  }else if {
    if(day===7 && femaleName[0])
    alert("Your Akan name is Akosua")
  }else if {
    if (day===1 && maleNames[1] )
    alert("Your Akan name is Kwadwo")
  }else if {
    if (day===2 && maleNames[2])
    alert("Your Akan name is Kwabena")
  }else if {
    if (day===3 && maleNames[3])
    alert("Your Akan name is Kwaku")
  } else if {
    if (day===4 && maleNames[4])
    alert("Your Akan name is Yaw")
  }else if {
    if (day===5 && maleNames[5])
    alert("Your Akan name is Kofi")
  } else if {
    if (day===6 && maleNames[6])
    alert("Your Akan name Kwame")
  }else if {
    if(day===7 && maleNames[0])
    alert("Your Akan name is Kwasi")
  }else{
    default;
  }
