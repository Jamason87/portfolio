function setupTextExpand(selector, delay, defaultLength = 1) {
    objs = document.querySelectorAll(selector);
    
    for (let i = 0; i < objs.length; i++) {
      let obj = document.getElementById(objs[i].id);
      let defaultExpandString = obj.innerText;
      let timeouts = [];
      
      let setDefault = function () {
          let tmpDefault = "";
        
        for (let i = 0; i < defaultLength; i++) {
            if (defaultExpandString.split("")[i] === undefined) {
              return;
          }
          
            tmpDefault += defaultExpandString.split("")[i];
        }
        
        obj.innerText = tmpDefault;
      }
      
      setDefault();
      
      obj.onmouseover = function () {
        let htmlString = defaultExpandString.split("")[0];
        
        for (let i = defaultLength; i < defaultExpandString.length; i++) {
          timeouts.push(setTimeout(function () {
            obj.innerText += defaultExpandString.split("")[i];
          }, delay * i));
        }
      }
      
      obj.onmouseout = function () {
        for (let i = 0; i < timeouts.length; i++) {
          clearTimeout(timeouts[i]);
        }
        
        timeouts = [];
        
        setDefault();
      }
    }
  }
  
  window.onload = function() {
    //setupTextExpand("#firstNameHover", 100, 1);
    //setupTextExpand("#lastNameHover", 100, 1);
  }