//Getting the elements and setting an initial scope
(function () {
  var elements = document.querySelectorAll("[data-tw-bind]");
  scope = {};

  elements.forEach((element) => {
    console.log({ element });
    if (element.type === "text" || element.type === "textarea") {
      var propToBind = element.getAttribute("data-tw-bind");
      addScopeProp(propToBind);
      element.onkeyup = function () {
        scope[propToBind] = element.value;
      };
    }
  });

  function addScopeProp(prop) {
    if (!scope.hasOwnProperty(prop)) {
      var value;
      Object.defineProperty(scope, prop, {
        set: function(newValue) {
          value = newValue;
          elements.forEach(function(element){
            if(element.getAttribute('data-tw-bind')===prop){
                if(element.type && (element.type === "text" || element.type === "textarea")){
                    element.value = newValue;
                } else if(!element.type){
                    element.innerHTML = newValue;
                }
            }
          })
        },
        get: function(){
            return value
        },
        enumerable: true
      });
    }
  }
})();
