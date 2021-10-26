let ismark = function (s) {
  const res = [];
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for(let x of s){
      if(map.has(x)){

        if(!res.length || x != map.get(x)) {
            return false;
        }

        res.pop;
      } else {

        res.push(x);
      }  
  }
  return true;
};


ismark("()");
