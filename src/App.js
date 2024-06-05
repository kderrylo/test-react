// import HelloWorld from "./components/HelloWorld";
import { useState } from "react";
import "./App.css"
// import Sample from "./components/Sample";
import Navbar from "./components/Navbar";
// import Greetings from "./components/Greetings";



function App() {
  
  const [name, setName] = useState("");

  const [students, setStudents] = useState(['Elon', 'Jeff', 'Kim']);

  const [notification, setNotification] = useState(false);

  // function
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(name);
    setStudents( currentStudent => [...currentStudent, name]);
    setName('');
  }

  const handleDelete = (deletingStudent) => {
    const newStudent = students.filter((student)=> student !== deletingStudent)
    setStudents(newStudent)
    
  }

  const handleNotification = () =>{
    setNotification(!notification)
  }

  return (
    
    <div className="App">
      <Navbar></Navbar>
      {/* <HelloWorld name2={famname} name0={firstname}/>
      <div className="goodbye-css">{saygoodbye}</div>
      <Sample></Sample>
      <br></br>
      <Greetings></Greetings> */}

      {notification ? <div className="notif">[!] this is notification</div> : ''}

      <button onClick={()=>handleNotification()}>notification</button>

      <form onSubmit={handleSubmit}>
        <div>Input your name:</div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="submit" />
      </form>

      <br></br>
      <h1>List of all student</h1>
      <ul>
        {
          students.map((student,index) => <li key={index}>{student} <button onClick={()=>handleDelete(student)}>Delete</button></li>)
        }
      </ul>
      

    </div>
  );
}

export default App;
