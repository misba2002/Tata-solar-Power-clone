"use client";

export interface slide{
    header:string;
    description:string;
    link:string;
    points:{icon:string;text:string}[];
    img:string;

}

export const projectSlide:slide[]=
[
    {
        header:"Chengmari Tea Estate",
        description:"Asia’s Largest Tea Estate with Innovative Solar Power Technology",
        link:"https://www.tatapowersolar.com/press-release/tata-power-renewable-energy-limited-lights-up-asias-largest-tea-estate-with-innovative-solar-power-technology/",
        points:
        [  
            {
                icon:"/projectpage-images/projectpageicon/tea_icon.png",
                text:"Tata Power Renewable Energy Limited (TPREL) commissions <samp>1040 kW</samp> Bifacial Solar System with Chengmari Tea Estate."
            },
            {
                icon:"/projectpage-images/projectpageicon/tea_iconLine.png",
                text:"First-ever on- <samp>ground bifacial modules</samp> installation in eastern India."


            },
            {
                icon:"/projectpage-images/projectpageicon/tea_iconCloud.png",
                text:"Completed in six months despite challenging <samp>3.5-month monsoon conditions.</samp>"
            },
            {
                icon :"/projectpage-images/projectpageicon/tea_iconPanel.png",
                text:"Project involves around <samp>1,900 modules.</samp>"
            },
            {
                icon:"/projectpage-images/projectpageicon/tea_iconElectricity.png",
                text:"Expected to <samp>generate 1.5 MUs of energy annually</samp> for the tea estate."
            },

        ],
        img:"/projectpage-images/projectpage-Chengmari.webp",






    },
// ANOTHER DATA 
    {
        header:"",
        description:"Crossed 1.4 GW capacity of Group Captive Projects.",
        link:"https://www.tatapowersolar.com/press-release/tata-power-renewable-energy-limited-crosses-significant-milestone-of-1-4-gw-capacity-of-group-captive-projects/",
        points:[
        
            {
                icon:"/projectpage-images/projectpageicon/tea_icon.png",
                text:"Tata Power Renewable Energy Limited (TPREL) <samp>achieves 1.4 GW capacity</samp> in group captive projects in the last seven months."
            },
            {
                icon:"/projectpage-images/projectpageicon/suc_iconHandshake.png",
                text:"<samp>Success attributed to Power Delivery Agreements</samp> with key industries, including Tata Steel, Tata Motors,Mukand Limited" 
                        
            },
            {
                icon:"/projectpage-images/projectpageicon/collaboration_iconPS.png",
                text:"Collaborations include <samp>constructing a 41MW captive solar plant</samp> for Tata Power's upcoming <samp>4.3GW Solar manufacturing</samp> facility in Tamil Nadu."
            },
            {
                icon:"/projectpage-images/projectpageicon/demostration_iconBulb.png",
                text:"Demonstrates TPREL's commitment to <samp>sustainable energy solutions</samp> and highlights its leading role in India's renewable energy sector."
            },

        ],
        img:"/projectpage-images/projectpage-solargarden.webp",

    },

];



