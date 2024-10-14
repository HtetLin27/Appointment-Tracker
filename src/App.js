import { BiArchive} from "react-icons/bi";
import Search from './components/Search'
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import { useCallback, useEffect, useState } from "react";

function App() {

  const [appointmentList,setAppointmentList] = useState([]);
  const [query,setQuery] = useState('');
  const [sortBy,setSortBy] = useState('petName');
  const [orderBy,setOrderBy] = useState("asc");

  const filteredAppointements = appointmentList.filter(item => {
    return (item.petName.toLowerCase().includes(query.toLowerCase()) ||
            item.ownerName.toLowerCase().includes(query.toLowerCase())|| 
            item.aptNotes.toLowerCase().includes(query.toLowerCase())
     )
  }).sort((a,b)=>{
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
     a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)
    })
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData])

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top"/> Your Appointments
      </h1>
      <AddAppointment />
      <Search query={query} 
        onQueryChange={myQuery => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange = {mySort => setOrderBy(mySort) }
        sortBy={sortBy}
        onSortByChange={mySort => setSortBy(mySort)}
        />
       <ul className="divide-y divide-gray-200">
         {filteredAppointements.map((appointment)=>(
          <AppointmentInfo appointment={appointment} key={appointment.id}
          onDeleteAppointment={
            appointmentId => setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId ))
          }/>
         ))}
       </ul>
    </div>
  );
}

export default App;
