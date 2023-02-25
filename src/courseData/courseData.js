import mern from '../assests/images/mern.jpg';
import ielts from '../assests/images/ielts.jpg';
import machineLearning from '../assests/images/machineLearning.png';
import digitalMarketing from '../assests/images/digitalMarketing.png';
import drawing from '../assests/images/drawing.jpg';
import financialAnalyst from '../assests/images/financialAnalyst.png';
import businessLaw from '../assests/images/businessLaw.jpg';
import angular from '../assests/images/angular-course.jpg';
import bcs from '../assests/images/bcs-course.jpg';
import docker from '../assests/images/docker.jpg';
import dotnet from '../assests/images/dotnet.jpg';
import ios from '../assests/images/ios-development.png';
import linux from '../assests/images/linux-course.jpeg';
import mba from '../assests/images/mba-course.jpg';
import rProgramming from '../assests/images/r-course.jpg';
import seo from '../assests/images/seo-courses.jpeg';
import kidEnglish from '../assests/images/kidsEnglish.png';
import learnQuran from '../assests/images/learn_Quran.png';
import businessEnglish from '../assests/images/businessEnglish.png';
import rubyAndRail from '../assests/images/rubyAndRails.png';
import autoCad from '../assests/images/autoCad.png';
import ethicalHacking from '../assests/images/ethicalHacking.jpg';
import mikrotik from '../assests/images/mikrotik.jpg';
import emailMarketing from '../assests/images/emailTemplate.png';
import professionalEnglish from '../assests/images/professionalEnglish.jpg';



const coursesData = [
    {
      id: "01",
      title: "MERN STACK",
      lesson: 12,
      students: 27.2,
      rating: 5.9,
      imgUrl: mern,
      paymentType: 'paid',
    },
  
    {
      id: "02",
      title: "IELTS",
      lesson: 12,
      students: 25.1,
      rating: 4.9,
      imgUrl: ielts,
      paymentType: 'paid',
    },
  
    {
      id: "03",
      title: "MACHINE LEARNING",
      lesson: 12,
      students: 7.5,
      rating: 4.5,
      imgUrl: machineLearning,
      paymentType: 'unpaid',
    },
    
    {
        id: "04",
        title: "DIGITAL MARKETING",
        lesson: 12,
        students: 20.7,
        rating: 5.2,
        imgUrl: digitalMarketing,
        paymentType: 'paid',
      },
      
    {
        id: "05",
        title: "DRAWING FOR BEGINNER",
        lesson: 12,
        students: 12.5,
        rating: 4.1,
        imgUrl: drawing,
        paymentType: 'unpaid',
      },
      
    {
        id: "06",
        title: "FINANCIAL ANALYST",
        lesson: 12,
        students: 9.8,
        rating: 3.9,
        imgUrl: financialAnalyst,
        paymentType: 'unpaid',
      },
      
    {
        id: "07",
        title: "BUSINESS LAW",
        lesson: 12,
        students: 8.5,
        rating: 4.7,
        imgUrl: businessLaw,
        paymentType: 'unpaid',
      },
      
    {
        id: "08",
        title: "Angular Course",
        lesson: 18,
        students: 2.5,
        rating: 4.2,
        imgUrl: angular,
        paymentType: 'paid',
      },
      
    {
        id: "09",
        title: "BCS Preli",
        lesson: 22,
        students: 7.5,
        rating: 4.9,
        imgUrl: bcs,
        paymentType: 'paid',
      },
      
    {
        id: "10",
        title: "Docker",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: docker,
        paymentType: 'paid',
      },
      
    {
        id: "11",
        title: "Dotnet",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: dotnet,
        paymentType: 'paid',
      },
      
    {
        id: "12",
        title: "IOS Development",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: ios,
        paymentType: 'paid',
      },
      
    {
        id: "13",
        title: "Linux",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: linux,
        paymentType: 'paid',
      },
      
    {
        id: "14",
        title: "MBA",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: mba,
        paymentType: 'paid',
      },
      
    {
        id: "15",
        title: "R Programming",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: rProgramming,
        paymentType: 'paid',
      },
      
    {
        id: "16",
        title: "SEO",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: seo,
        paymentType: 'paid',
      },

    {
        id: "17",
        title: "Kid English",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: kidEnglish,
        paymentType: 'paid',
      },
      
    {
        id: "18",
        title: "Learn Quran",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: learnQuran,
        paymentType: 'paid',
      },
      
    {
        id: "19",
        title: "Business English",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: businessEnglish,
        paymentType: 'paid',
      },
      
    {
        id: "20",
        title: "Ruby & Rails",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: rubyAndRail,
        paymentType: 'paid',
      },
      
    {
        id: "21",
        title: "AutoCad",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: autoCad,
        paymentType: 'paid',
      },
      
    {
        id: "22",
        title: "Ethical Hacking",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: ethicalHacking,
        paymentType: 'paid',
      },
      
    {
        id: "23",
        title: "Mikrotik",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: mikrotik,
        paymentType: 'paid',
      },
      
    {
        id: "24",
        title: "Email Marketing",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: emailMarketing,
        paymentType: 'paid',
      },
      
    {
        id: "25",
        title: "Professional English",
        lesson: 8,
        students: 1.5,
        rating: 3.2,
        imgUrl: professionalEnglish,
        paymentType: 'paid',
      },
  ];

  export default coursesData;