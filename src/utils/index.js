import Swal from "sweetalert2";
import { movieSer } from "../service/movieSer";


export const swalCustom = (icon, title, time) => {
    return Swal.fire({
        icon,
        title,
        showConfirmButton: false,
        timer: time,
    });
}


export const isValueInArray = (value, array) => array?.includes(value);


export const fetchApiMovie = async (nameUri, params , optional) => {
    try {
        let result = []
        for(let i = 9; i > 0; i--) {
            let res = await movieSer[nameUri]({maNhom: `GP0${i}`, ...params})
            let data = res.data.content
            if(data.length > 5 || optional) {
                result = data
                break;
            }
        }
        return result
    } catch (err) {
        console.log(err)
    }
}

