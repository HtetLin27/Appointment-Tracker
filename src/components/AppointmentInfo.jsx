import React from 'react'
import {BiTrash} from "react-icons/bi";


const AppointmentInfo = ({appointment,onDeleteAppointment}) => {
  return (
    <li className="flex gap-x-[5px] px-3 py-3 items-start">
            <button  
            onClick={()=> onDeleteAppointment(appointment.id)}
            type="button" className="rounded text-white bg-red-500 p-[5px]"><BiTrash/></button>
            <div className="flex-grow">
              <div className="flex justify-between">
                <span className="font-medium text-2xl text-blue-500 flex-1">{appointment.petName}</span>
                <span>{appointment.aptDate}</span>
              </div>
              <div> <span className="font-bold text-blue-500">Owner :      </span> {appointment.ownerName}
              </div>
              <div className="leading-tight">{appointment.aptNotes}</div>
            </div>
          </li>
  )
}

export default AppointmentInfo