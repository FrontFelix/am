export interface StaffTeam {
  id: string;
  name: string;
  description: {};
  imageSrc: string;
  hoverImage: string;
  linkedIn: string;
  faceBook: string;
  Twitter: string;
  role: string;
}

export const staffTeam: StaffTeam[] = [
  {
    id: "Jake",
    name: "Jake aka Brennz",
    description: {
      row1: "Hi, I'm Jake Brennan. With over seven years of experience in sales and advertising, I have a strong track record of helping clients achieve their goals.",
      row2: "I have experience in both face-to-face and virtual sales, and I'm skilled at building relationships and understanding my clients' needs. I was born and raised in Glasgow, and I have always been passionate about customer service and delivering an easy and enjoyable product experience. In my free time, I love spending time with friends and family and enjoying all that Glasgow has to offer. I'm an avid football fan and I also have a passion for collecting whisky.",
      row3: "I believe that building strong relationships with my clients is key to success, and I'm always looking for ways to exceed their expectations.",
    },
    faceBook: "xx",
    imageSrc: "/images/jake2.jpeg",
    hoverImage: "/images/jake1.jpeg",
    Twitter: "test",
    linkedIn: "Test",
    role: "Co-Founder & Commercial Director",
  },
  {
    id: "David",
    name: "David aka TheJaff",
    description: {
      row1: "Hi, I'm David. I was born and raised in Glasgow and have a diverse background in the construction industry. I have worked my way up from apprentice to site manager to business owner, gaining valuable experience and skills along the way.",
      row2: "In addition to my construction background, I have a strong passion for WEB3 and have been involved in this space for a number of years, participating in various communities and serving as staff for several projects. I am always seeking new opportunities to learn about and stay up-to-date with the latest WEB3 advancements.",
      row3: "In my free time, I enjoy reading about and researching new and innovative ways in which the world will work in the future. I also value spending time with my family and friends and have a passion for collecting whisky.",
    },
    faceBook: "xx",
    imageSrc: "/images/jaff2.jpeg",
    hoverImage: "/images/jaff1.jpeg",
    Twitter: "test",
    linkedIn: "Test",
    role: "Co-Founder & Business Director",
  },
  {
    id: "Justin",
    name: "Justin aka Jeeezy",
    description: {
      row1: "Hi, I'm Justin. I am a 31-year-old Glasgow native with a diverse background in business and education. I have experience running my own business and have also worked as a student counselor in both college and high school settings for the past four years.",
      row2: "This experience has given me a strong foundation in customer service and the ability to build relationships with clients and students. In my free time, I enjoy spending quality time with my family and participating in Brazilian Jiu-jitsu, both as a hobby and occasional competitor. My dedication to continuous learning and self-improvement has helped me excel in both my personal and professional endeavors. I am also an avid football fan and try to attend games whenever possible. In addition to my passions for sports and self-improvement, I am a fan of whisky and enjoy trying new brands and learning about the distillation process.",
      row3: "Overall, I am a hard-working individual who is always seeking new ways to educate and improve myself and others, both mentally, physically, and financially.",
    },
    faceBook: "xx",
    imageSrc: "/images/justin2.jpeg",
    hoverImage: "/images/justin1.jpeg",
    Twitter: "test",
    linkedIn: "Test",
    role: "Co-Founder & Operations Director",
  },
];

export async function getStaffs() {
  return staffTeam;
}

export function getStaff(name: string) {
  let member = staffTeam.find((member) => member.id === name);
  return member;
}
