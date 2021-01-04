let obj={
		'a':'hello',
    'b':{
    		'c':'bye',
        'd':{
        	'e':'hai',
          'f':'chalo'
        }
    }
}
let arr={};
function flatten(obj,s){
    Object.keys(obj).map((key)=>{
    			if(typeof(obj[key])!=="object"){
                if(s.length===0){
                		s+=key;
                }
                else{
                	s+='.'+key;
                }
                arr[s]=obj[key];
                s=s.slice(0,s.length-2);
          }
          else{
          		if(s.length===0){
              		s=key;
              }
              else{
              		s+='.';
                  s+=key;
              }
              flatten(obj[key],s);
          }
    })
}
flatten(obj,"");
console.log(arr);
