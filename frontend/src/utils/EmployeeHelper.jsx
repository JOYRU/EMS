import axios from "axios"
import { useNavigate } from "react-router-dom"

export const fetchDepartments = async()=>{
     let departments ; 
    try{
    // const response = await axios.get('http://localhost:5000/api/departments',{
          //   headers: {
          //     "Authorization" : 'Bearer '+localStorage.getItem('token')
          //   }
          // })
          const response = await axios.get('https://dev-ems-api.vercel.app/api/departments') ;
        if(response.data.success){
             departments = response.data.departments ; 
             //console.log(departments)

        }
     }catch(error){
        alert(error.response.data.error)
     }
     return departments ; 
}         




export const columns = [
    {
        name: "S No",
        selector:(row)=>row.sno,
        width:"70px"
    },
    {
        name:"Employee Name",
        selector:(row)=>row.emp_name,
        sortable:true,
        width:'130px'
    },
    {
        name:"Image",
        selector:(row)=>row.profileImage,
        width:"100px"
    }
    ,
    {
        name:"Department Name",
        selector:(row)=>row.dept_name,
        width:'120px'
    },
    {
        name:"DOB",
        selector:(row)=>row.dob,
        width:'100px',
        sortable:true
    },
    {
        name:"Action",
        selector:(row)=>row.action,
       
    }
]

export const EmployeeButtons = ({_id,onEmployeeDelete})=>{
   // console.log(_id);
    const navigate = useNavigate()

    const handleDelete= async(_id)=>{
        const confirm = window.confirm("Do you want to delete??!!") ;
        if(confirm){

      
        const response =await axios.delete('https://dev-ems-api.vercel.app/api/employees/'+_id);
         if(response){
            //navigate('/admin-dashboard/departments')
            onEmployeeDelete(_id)
         }
        }

    }
    return (
        <div className="flex">
            <button className="px-3 py-1 bg-teal-600 text-white" 
              onClick={()=>navigate('/admin-dashboard/employee/'+_id)}
              >Edit</button>
            <button className="px-3 py-1 bg-red-600 text-white" onClick={()=>handleDelete(_id)}>Delete</button>
            <button className="px-3 py-1 bg-blue-600 text-white" 
              onClick={()=>navigate('/admin-dashboard/employees/'+_id)}
              >Details</button>
               <button className="px-3 py-1 bg-teal-600 text-white" 
              onClick={()=>navigate('/admin-dashboard/employee/'+_id)}
              >Leave</button>
        </div>
    )
}