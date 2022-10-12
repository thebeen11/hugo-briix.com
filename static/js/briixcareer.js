var activeDropdown = ''

var qa = document.getElementById("qa-button");

qa.onclick = function () {
  if (activeDropdown == 'qa-button') {
    $("#qa-button").removeClass('text-secondary')
    $("#qa-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#qa-content").css("display", "none")
  $("#qadropArrow").removeClass('dropIconActive')
  activeDropdown = ''
  } else {
    $("#be-content").css("display", "none")
    $("#qa-content").css("display", "block")
    
    
    $("#mobile-content").css("display", "none")
    $("#qa-drop").removeClass('border-title').addClass('border-secondary shadow-lg shadow-secondary/25')
    $("#be-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    
    
    $("#mobile-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#qa-button").addClass('text-secondary')
    $("#be-button").removeClass('text-secondary')
    
    
    $("#mobile-button").removeClass('text-secondary')
    $("#qadropArrow").addClass('dropIconActive')
    $("#bedropArrow").removeClass('dropIconActive')
    
    $("#mobiledropArrow").removeClass('dropIconActive')
  activeDropdown = 'qa-button'
  }
};



var be = document.getElementById("be-button");

be.onclick = function () {
  if (activeDropdown == 'be-button') {
  $("#be-button").removeClass('text-secondary')
  $("#be-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#be-content").css("display", "none")
  $("#bedropArrow").removeClass('dropIconActive')
  activeDropdown = ''
  } else {
  $("#be-content").css("display", "block")
  $("#qa-content").css("display", "none")
  
  
  $("#mobile-content").css("display", "none")
  $("#be-drop").removeClass('border-title').addClass('border-secondary shadow-lg shadow-secondary/25')
  
  $("#qa-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  
  $("#mobile-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#be-button").addClass('text-secondary')
  
  $("#qa-button").removeClass('text-secondary')
  
  $("#mobile-button").removeClass('text-secondary')
  $("#bedropArrow").addClass('dropIconActive')
  $("#qadropArrow").removeClass('dropIconActive')
  
  $("#mobiledropArrow").removeClass('dropIconActive')
  activeDropdown = 'be-button'
      // document.getElementById('platformvid').play();

  }
};



var mobile = document.getElementById("mobile-button");

mobile.onclick = function () {
  if (activeDropdown == 'mobile-button') {
    $("#mobile-button").removeClass('text-secondary')
    $("#mobile-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
  $("#mobile-content").css("display", "none")
  $("#mobiledropArrow").removeClass('dropIconActive')
  activeDropdown = ''
  } else {
    $("#be-content").css("display", "none")
    
    
    $("#qa-content").css("display", "none")
    $("#mobile-content").css("display", "block")
    $("#mobile-drop").removeClass('border-title').addClass('border-secondary shadow-lg shadow-secondary/25')
    $("#be-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    $("#qa-drop").removeClass('border-secondary shadow-lg shadow-secondary/25').addClass('border-title ')
    
    
    $("#mobile-button").addClass('text-secondary')
    $("#be-button").removeClass('text-secondary')
    $("#qa-button").removeClass('text-secondary')
    
    
    $("#mobiledropArrow").addClass('dropIconActive')
    $("#sekuritasdropArrow").removeClass('dropIconActive')
    

  activeDropdown = 'mobile-button'
  }
};

