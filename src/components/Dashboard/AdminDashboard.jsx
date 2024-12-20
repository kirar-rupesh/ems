import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  
  return (
    <div className="h-screen w-full p-10">
      {/* console.log(data.id) */}
      {/* <h1>{data.id}</h1> */}
      <Header />
      <CreateTask />
      <AllTask />
     
    </div>
  );
};

export default AdminDashboard;
