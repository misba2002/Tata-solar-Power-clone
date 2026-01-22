"use clinet";

export interface mediadata{
    year:string,
    description:string,
    image:string,
    href:string

}


export const media:mediadata[][]=[
  [
    {
        year:"August 13, 2025",
        description:"Tata Power Launches ‘Ghar Ghar Solar’ in Pune to Accelerate Rooftop Solar Adoption Across Maharashtra",
        image:"/mediaImg/med-tv.jpg",
        href:"https://www.tatapowersolar.com/wp-content/uploads/2025/09/03064206/media-coverage-13aug25.pdf"
    },
     {
        year:"July 24, 2025",
        description:"Tata Power Renewables’ Neemuch RUMSL Solar Project Operates at 431 MWp, Capable of Powering Around 95% of Indore",
        image:"/mediaImg/med-banner.jpg",
        href:"https://www.tatapowersolar.com/wp-content/uploads/2025/09/03064208/media-coverage-24jul25.pdf"
    }
  ],
  [
     {
        year:"July 3, 2025",
        description:"Tata Power Renewables commissions record 752 MW of solar projects in Q1 FY26<",
        image:"/mediaImg/med-wind.jpg",
        href:"https://www.tatapowersolar.com/wp-content/uploads/2025/09/03064205/media-coverage-03jul25.pdf"
    },
     {
        year:"July 9, 2025",
        description:"Tata Powers Solar manufacturing arm (TP Solar  Limited) crosses 4 GW of solar module production at its Tamil Nadu Facility",
        image:"/mediaImg/med-suit.jpg",
        href:"https://www.tatapowersolar.com/wp-content/uploads/2025/09/03064206/media-coverage-09jun25.pdf"
    }
]

]