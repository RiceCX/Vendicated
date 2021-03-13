```js
1	// Loop from 1 to 100
2	var regEX_FORfizz = /\d{0,2}5|d?0$/
3	// 
4	const buzz_name = /^(0|3|6|9|12|15|18|21|24|27|30|33|36|39|42|45|48|51|54|57|60|63|66|69|72|75|78|81|84|87|90|93|96|99)$/
5	
6	// Creates a regex to match fizz numbers
7	var Get_FizzBUZZ = 
8	
9	  (hashmap) => {
10	  // CReates a HASH_map that we loop over to calculate the number of fizzes we need to PRint
11	  let number= new String   ()   ;
12	  
13	      // if buzz name exists do not add fizz or buzz
14	      if (
15	
16	 hashmap.toString()
17	                                
18	                            .match(buzz_name)
19	
20	
21	      )
22	        number = "fizz"
23	
24	      // Stores the current value
25	      if (
26	    hashmap.toString                              ()
27	      .match                                      (
28	    regEX_FORfizz                                  ))        number+= "buzz"
29	
30	  // copied this from stackoverflow NO CLUE what iut does
31	  if (hashmap % 3!= 0&&!(hashmap% 5 === 0)) number = hashmap;
32	
33	  // Return our hashmap
34	  return number
35	}
36	
37	// If i is bigger than 300 then exit
38	for (var type = 1; 100 > type && type!== 100; type = type+1) {
39	  // console.log is inefficient ? NMaybe find betterway?
40	  console.log(Get_FizzBUZZ(type))
41	}
```
