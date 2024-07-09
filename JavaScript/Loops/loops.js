
var count = 0;
while (count < 5) {
    console.log("Ola")
    count++;
}

var count = 0;
var vals = [10,20,30,40,50, 60,70,80,90,100];
while(count < vals.length) {
    console.log(vals[count])
    count++
}


var count = 0;
var vals = [10,20,30,40,50, 60,70,80,90,100];
while(count < vals.length) {
    if(vals[count] == 50) {
        break
    }
    console.log(vals[count])
    count++
}

var count = 0;
var vals = [10,20,30,40,50, 60,70,80,90,100];
while(count < vals.length) {
    if(vals[count] == 50) {
        count++
        continue
    }
    console.log(vals[count])
    count++
}

var count = 0
do{
    console.log("Ola");
    count++
}while(count < 5)


var count = 0
var vals = [10,30, 70,50,100];
do{
    console.log(vals[count]);
    count++
}while(count < vals.length)

var count = 0
var vals = [10,30, 70,50,100];
do{
    console.log(vals[count]);
    count++
    if(vals[count] == 50) {
        break
    }
}while(count < vals.length)


var count = 0
var vals = [10,30, 70,50,100];
do{

    if(vals[count] == 50) {
        count++
        continue
    }
    console.log(vals[count]);
    count++
}while(count < vals.length)


//  FOR LOOP 
var vals = [10,30,70,50,100]
for(count = 0; count < 5; count ++) {
console.log(vals[count] ++)
}

var vals = [10,30,70,50,100];
for(count = 0; count < 5; count ++) {
    if(vals[count] == 50) {
        count++
        break
    }
    console.log(vals[count])
    count++
} 

var vals = [10,30,70,50,100];
for(count = 0; count < vals.length; count++) {
    if(vals[count] == 50) {
       continue
    }
    console.log(vals[count])
} 


var vals = [10, 30, 70, 50, 100]
for (x of vals) {
    if(x == 50) {
        continue
    }
    console.log(x)
}


var vals = [10, 30, 70, 50, 100]
for (x of vals) {
    if(x == 50) {
        break
    }
    console.log(x)
}

var vals = [10, 30, 70, 50, 100]
for (x in vals) {
    if(x == 50) {
        
    }
    console.log(vals[x])
}

var vals = [10, 30, 70, 50, 100]
for (x in vals) {
    if(vals [x] == 50) {
        break
    }
    console.log(vals[x])
}

var vals = [10, 30, 70, 50, 100]
for (x in vals) {
    if(vals[x] == 50) {
        continue
    }
    console.log(vals[x])
}
