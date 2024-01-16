import { useEffect } from "react";
import Header from "components/Header";
import Footer from 'components/Footer';

const NotFound = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(

      <>
            <div className="flex flex-col justify-center items-center w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />

              <img src="images/404 error page not found.png" alt="construction" className="w-[80%] md:1/2 lg:w-2/5 img-fluid object-cover"/>
            </div>

              <h1 className="text-[clamp(1.3em,8vw,4em)] font-noto text-center opacity-80">Oops, You ran out of Code</h1>
              <p className="font-noto p-4 text-md font-normal text-center"> The page you requested for does not exist here</p>
          <Footer />
    </>
    )
}
export default NotFound;
