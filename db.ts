export function IDBRequestAsyncService<T extends IDBRequest>(request:T):Promise<Event> {
    return new Promise<Event>((resolve, reject)=>{
        request.addEventListener('success',(e)=>resolve(e))
        request.addEventListener('error',reject)
    })
}