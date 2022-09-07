const remNulls = (arr) => {
    for( var i = 0; i < arr.length; i++){ 
        if ( arr[i] === '') { 
            arr.splice(i,1); 
        }
    }
    arr.forEach(element => {
        console.log(element);
    });
}

const names = ['Divine','Janet','','Amen','Yvan','Jost'];

remNulls(names);