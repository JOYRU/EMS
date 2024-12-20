import axios from "axios"
import { useNavigate } from "react-router-dom"

export const columns = [
    {
        name: "S No",
        selector:(row)=>row.sno
    },
    {
        name:"Department Name",
        selector:(row)=>row.dept_name
    },
    {
        name:"Action",
        selector:(row)=>row.action
    }
]

export const DepartmentButtons = ({_id,onDepartmentDelete})=>{
   // console.log(_id);
    const navigate = useNavigate()

    const handleDelete= async(_id)=>{
        const confirm = window.confirm("Do you want to delete??!!") ;
        if(confirm){

      
        const response =await axios.delete('https://dev-ems-api.vercel.app/api/departments/'+_id);
         if(response){
            //navigate('/admin-dashboard/departments')
            onDepartmentDelete(_id)
         }
        }

    }
    return (
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-teal-600 text-white" 
              onClick={()=>navigate('/admin-dashboard/department/'+_id)}
              >Edit</button>
            <button className="px-3 py-1 bg-red-600 text-white" onClick={()=>handleDelete(_id)}>Delete</button>
        </div>
    )
}