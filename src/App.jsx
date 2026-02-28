import Category from "./Components/Category";
import Company from "./Components/Company";
import FeaturedJobs from "./Components/FeaturedJobs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LatestJobs from "./Components/LatestJobs";
import PostJobCTA from "./Components/PostJobCTA";

const App = () => {
  return (
    <div>
      <Header/>
      <Company/>
      <Category/>
      <PostJobCTA/>
      <FeaturedJobs/>
      <LatestJobs/>
      <Footer/>
    </div>
  );
};

export default App;