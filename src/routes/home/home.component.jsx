import Directory from "../../components/directory/directory.component";
import { categories } from "./categories";

const Home = () => {

  return (
    <Directory categories={categories}/>
  );
}

export default Home;