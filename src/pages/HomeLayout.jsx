import { Outlet, useNavigation} from "react-router-dom";
import { Header, Navbar, Loading} from './../components/index'

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading'

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? 
      <Loading /> : 
      <main className='align-element py-20'><Outlet /></main>}     
    </>
  );
};

export default HomeLayout;
