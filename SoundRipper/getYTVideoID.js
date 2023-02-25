export function getYTVideoID(link){
    return String(link).split("watch?v=")[1];
}