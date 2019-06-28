import http from './http';


async function getDogs(PickerSelectedVal1,PickerSelectedVal2,PickerSelectedVal3) {
    //return await http('v2/animals?type=dog&age=baby')
    return await http(`v2/animals/?type=dog&size=${PickerSelectedVal1}&age=${PickerSelectedVal2}&gender=${PickerSelectedVal3}`)

}



export default {
  getDogs,
  
}