





function towerofhinno(n,Arod,Brod,Crod){
  if(n===1){
    console.log(`Move disk 1 from ${Arod} to ${Brod}`)
    return
  }
    towerofhinno(n-1, Arod,Crod,Brod)
    console.log(`move disk ${n} from ${Arod} to ${Brod}`)
    towerofhinno(n-1,Crod, Brod, Arod)
  }

towerofhinno(3, 'A', 'B', 'C')


function gcd(a,b){
  
  
    while(b !== 0){
      
     let rem = a % b 
      a = b
      b = rem 
    }
    return a 
  }
  
  console.log(gcd(56,98))