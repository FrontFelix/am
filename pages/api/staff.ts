export interface StaffTeam {
  name: string;
  age: string;
  description: {};
  imageSrc: string;
  linkedIn: string;
  faceBook: string;
  Twitter: string;
  role: string;
}

export const staffTeam: StaffTeam[] = [
  {
    name: "David",
    age: "xx",
    description: {
      row1: "Hi, I’m David! I’m from Glasgow, Scotland, and I am the co-founder & business director of Albannach Mòr. I started AM because I have a strong passion for web3 and wanted to bring a different way of showing how the web3 could combine with whisky. After many years of trying to find a  passion for something to work for, I decided to take matters into my own hands and start my own business. Albannach Mòr is a fantastic new web3 whiskey brand that will be my main focus from now on in.",
      row2: "Outside of AM, I have a love for technology. Read & researching new innovating ways the world will work in the future fascinates me. The way we intend to use web3 and our whisky brand, it will fascinate other. I can’t wait to show this!",
      row3: "Also have a spot for whisky (obviously), not a massive drinker but I love a whisky when I can relax. My personal favourite at the moment is dram of Glenmorangie / Single Malt",
    },
    faceBook: "xx",
    imageSrc: "/images/profileHolder.jpg",
    Twitter: "test",
    linkedIn: "Test",
    role: "Co-Founder & Business Director",
  },
  {
    name: "Jake",
    age: "xx",
    description: "test11",
    faceBook: "xx",
    imageSrc: "/images/profileHolder.jpg",
    Twitter: "test",
    linkedIn: "Test",
    role: "Co-Founder & Commercial Director",
  },
  {
    name: "Justin",
    age: "xx",
    description: "test11",
    faceBook: "xx",
    imageSrc: "/images/profileHolder.jpg",
    Twitter: "test",
    linkedIn: "Test",
    role: "Co-Founder & Operations Director",
  },
];

export async function getStaffs() {
  return staffTeam;
}

export function getStaff(name: string) {
  let member = staffTeam.find((member) => member.name === name);
  return member;
}
