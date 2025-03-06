import Navbar from "../components/Navbar";

const Home = () => {

  return (
    <>
        <Navbar></Navbar>
        <div className="flex flex-col items-center justify-center h-screen">
            <h className="text-3xl mb-4">Home Page</h>
        </div>
    </>
  );
};

export default Home;
