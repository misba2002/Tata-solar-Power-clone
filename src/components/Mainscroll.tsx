import ImagesMainpage from "@/components/Images";
import Tatamainpage from "@/mainPages/tataMainpage";
import Projectpage from "@/mainPages/projectspage";
import FeaturedProjects from "@/mainPages/featuredprojects";
import OurAchievements from "@/mainPages/ourAchi";
import MediaPage from "@/mainPages/mediaPage";
import Helperpage from "@/mainPages/helper";
import SocialPage from "@/mainPages/socialPage";
import Footer from "@/mainPages/Footer";


export default function MainScroll() {
  return (
    <main className="h-screen w-full  snap-y snap-mandatory snap-always scroll-smooth hide-scrollbar ">
      {/* Each child is one snapping section */}
      <section className="snap-start">
        <ImagesMainpage />
      </section>

      <section className="snap-start">
        <Tatamainpage />
      </section>


      <section className="snap-start ">
        <Projectpage />

      </section>


   

       <section className="snap-start ">
       <FeaturedProjects />

      </section>


      <section className="snap-start ">
       <OurAchievements />

      </section>


     <section className="snap-start ">
            <MediaPage />
     
      </section>

      <section className="snap-start ">
            <Helperpage />
     
      </section>

       <section className="snap-start ">
            <SocialPage/>
     
      </section>

      <section className="snap-start ">
            <Footer />
     
      </section>
        

     
     
     

    </main>
  );
}
