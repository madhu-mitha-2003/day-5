class uber{
    constructor(distance,source,destination){
        this.distance=distance;
        this.source=source;
        this.destination=destination;
    }
}
var u1=new uber(20,"chennai","anna nagar");
var u2=new uber(100,"pondicherry","chennai");
var u1=u2
console.log(u2.name);
console.log(u1.name);
