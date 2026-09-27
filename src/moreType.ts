try {
    
} catch (error) {
    if( error instanceof Error){
        console.log(error.message)
    }
    console.log("Error" ,error)
}

const data:unknown = "chai aur code"
const strData :string = data as string

type Role = "admin" | "user" | "superadmin" 

function redirectBasedOnRole(role:Role):void {
    if(role === "admin"){
        console.log("redirecting to admin dashboard")
        return 
    }
        else if(role === "user"){
        console.log("redirecting to user dashboard")
        return 
    }
    role;
    
}