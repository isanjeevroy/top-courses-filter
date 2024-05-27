import Navbar from "./components/Navbar"
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import { api_url, filterData } from "./data";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      const response = await fetch(api_url);
      const optput = await response.json();
      setCourses(optput.data);
      // console.log(courses);
    }catch(error){
      toast.error("Network problem");
    }
    setLoading(false);
    
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

      <div>
        <Navbar />
      </div>

      <div>
        <Filter 
        filterData={filterData}
        category={category}
        setCategory ={setCategory}
        
        />
      </div>

      <div>
        {
        loading ? <Spinner/> : <Cards courses={courses} category={category} /> 
        }
      </div>

    </div>
  )
}

export default App
