function orderChai (size :"small"|"medium" |"large" | number){
    if(size == "small"){
        return `small chai`;
    }
    else if(size == "medium"){
        return  `meduim chai`;
    }
    else if(size == "large"){
        return `large chai`;
    }
    else{
       return `order no : ${size} `
    }

}


class KhuladChai{
    serve(){
        return `Serving khuladChai`
    }
}
class CuttingChai{
    serve(){
        return `Serving Cutting Chai`
    }
}
function serve(chai : KhuladChai | CuttingChai){
     if(chai instanceof KhuladChai){
        return chai.serve();
     }
}

type Chaiorder = {
    type : string ;
    sugar : number;
}
 
function isChaiOrder(obj:any): obj is Chaiorder {
     return (
        typeof obj == "object" &&
        obj !== null && 
        typeof obj.type === "string"&&
        typeof obj.sugar === "number"
     )
}
function serveOrder(item: Chaiorder | string){
    if(isChaiOrder(item)){
        return `Serving${item.type} chai with ${item.sugar}`
    }
    return `Serving Custom chai:${item}`
}