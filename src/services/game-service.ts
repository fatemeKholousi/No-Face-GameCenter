import apiClient from "./api-client";

class GameService{
    endpoint:string;
    constructor(endpoint:string){
        this.endpoint=endpoint
    }

    getGameList(){
        const controller=new AbortController()
        const request=apiClient.get(this.endpoint,{signal:controller.signal})
    return {request, cancel:()=>controller.abort()}
    }
}
export default GameService