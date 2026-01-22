"use client";



export interface Slidef{
    header:string;
    description:string;
    link:string;
    iconExist:Boolean;
    points:{icon:string;text:string}[];
    image:string;
    knowmore:Boolean;

}

export const feaSlides:Slidef[]=
[
    {
        header:"450 MWp Solar Project in Bikaner, Rajasthan",
        description:"Generate sustainable and renewable power in the Bikaner region of Rajasthan.",
        link:"https://www.tatapowersolar.com/project/450-mwp-solar-project-in-bikaner-rajasthan/",
        iconExist:false,
        points:
        [
            {
                icon:"",
                text:""
            }
        ],
        image:"/FeaturedImg/Bikaner.jpg",
        knowmore:true
    },
     {
        header:"120 kW Vertical Solar Power Farm – Dell",
        description:"With first of its kind installation at hand, the engineering team at Tata Power Solar designed a custom structure with vertical load bearing capacities after a detailed research &amp; development.",
        link:"https://www.tatapowersolar.com/project/120-kw-vertical-solar-power-farm-dell/",
        iconExist:true,
        points:
        [
            {
                icon:"/FeaturedImg/icon-bulb-set-1.png",
                text:"<b>System Size</b><strong>120 kW</strong>",
            }
        ],
        image:"/FeaturedImg/build-1.jpg",
         knowmore:true
    },
     {
        header:"10.8 MW Rooftop Solar Power System – ANERT, Kerala",
        description:"Tata Power Solar based on its credentials and proven ability was selected and an empaneled to install 7700+ rooftop solar power systems.",
         link:"https://www.tatapowersolar.com/project/10-8-mw-rooftop-solar-power-system-anert-kerala/",
        iconExist:true,
        points:
        [
            {
                icon:"/FeaturedImg/icon-bulb-set-1.png",
                text:"<b>System Size</b><strong>10.8 MW</strong>"
            }
        ],
        image:"/FeaturedImg/teraceSolarimg.jpg",
         knowmore:true
    },
     {
        header:"51 MW for Better Energy at Denmark",
        description:"Recognized as one of the premium Tier-1 bankable solar panel and module manufacturers internationally, Tata Power Solar supplied 51 MW ground mount solar power systems.",
        link:"#",
        iconExist:true,
        points:
        [
            {
                icon:"/FeaturedImg/icon-bulb-set-1.png",
                text:"<b>System Size</b><strong>51 MW</strong>"
            }
        ],
        image:"/FeaturedImg/windSolar.jpg",
         knowmore:false
    }












]










