import Swal from "sweetalert2";


export const swalCustom = (icon, title, time) => {
    return Swal.fire({
        icon,
        title,
        showConfirmButton: false,
        timer: time,
    });
}


export const isValueInArray = (value, array) => array?.includes(value);