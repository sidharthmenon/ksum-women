var app = new Vue({
  el: '#slidervue',
  data: {
    speakers: [
  {
    "image": "event-slider-22.png",
    "sl": 1,
    "name": "Sarada Muraleedharan  IAS",
    "desi": "Director General",
    "company": "NIFT"
  },
  {
    "image": "event-slider-6.png",
    "sl": 2,
    "name": "Sunita Sanghi",
    "desi": "Senior Advisor",
    "company": "Ministry of Skill Development & Entrepreneurship"
  },
  {
    "image": "event-slider-5.png",
    "sl": 3,
    "name": "Dr. Mridul Eapen",
    "desi": "Member",
    "company": "Kerala State Planning Board"
  },
  {
    "image": "event-slider-15.png",
    "sl": 4,
    "name": "Dr. M. Beena IAS",
    "desi": "Chairperson",
    "company": "Cochin Port Trust"
  },
  {
    "image": "event-slider-20.png",
    "sl": 5,
    "name": "Dr. Chithra S IAS",
    "desi": "Director",
    "company": "IT Mission"
  },
  {
    "image": "event-slider-1.png",
    "sl": 6,
    "name": "Anjali Bansal",
    "desi": "Founder",
    "company": "Avaana Capital"
  },
  {
    "image": "event-slider-3.png",
    "sl": 7,
    "name": "Padmaja Ruparel",
    "desi": "Co-Founder",
    "company": "IAN"
  },
  {
    "image": "event-slider-4.png",
    "sl": 8,
    "name": "Shanti Mohan",
    "desi": "Founder",
    "company": "Lets Venture"
  },
  {
    "image": "event-slider-12.png",
    "sl": 9,
    "name": "Shalini Warrier",
    "desi": "COO",
    "company": "Federal bank"
  },
  {
    "image": "event-slider-7.png",
    "sl": 10,
    "name": "Deena Jacob",
    "desi": "Co-Founder & CFO",
    "company": "Open Financial Technologies"
  },
  {
    "image": "event-slider-2.png",
    "sl": 11,
    "name": "Deepti Dutt",
    "desi": "Head of strategic initiatives Public sector",
    "company": "Amazon"
  },
  {
    "image": "event-slider-8.png",
    "sl": 12,
    "name": "Anupam Nidhi",
    "desi": "Head Corporate citizneship an Sustainability",
    "company": "Siemens"
  },
  {
    "image": "event-slider-17.png",
    "sl": 13,
    "name": "Shelley Thakral",
    "desi": "Head of Policy programme ( India, South Asia and Central Asia)",
    "company": "Facebook"
  },
  {
    "image": "event-slider-18.png",
    "sl": 14,
    "name": "Sunita Singh",
    "desi": "Executive Vice President",
    "company": "Wadhwani Foundation"
  },
  {
    "image": "event-slider-21.png",
    "sl": 15,
    "name": "Shrayana Bhattacharya",
    "desi": "Senior Economist",
    "company": "World Bank"
  },
  {
    "image": "event-slider-14.png",
    "sl": 16,
    "name": "Sheela Kochouseph",
    "desi": "Founder",
    "company": "V-star"
  },
  {
    "image": "event-slider-13.png",
    "sl": 17,
    "name": "Rashmi Bansal",
    "desi": "Author, Motivational Speaker, Entrepreneur",
    "company": ""
  },
  {
    "image": "event-slider-25.png",
    "sl": 18,
    "name": "Ms. Jancy Jose",
    "desi": "Managing Director & CEO",
    "company": "Strava Technologies (P) Ltd"
  },
  {
    "image": "event-slider-16.png",
    "sl": 19,
    "name": "Nivedha R M",
    "desi": "Founder & CEO",
    "company": "Trashcon"
  },
  {
    "image": "event-slider-26.png",
    "sl": 20,
    "name": "Ms. Shilpa Elizabeth Abraham",
    "desi": "Business Analyst",
    "company": "WAN-IFRA"
  },
  {
    "image": "event-slider-24.png",
    "sl": 21,
    "name": "Sri. M Sivasankar IAS",
    "desi": "Secretary IT",
    "company": ""
  },
  {
    "image": "event-slider-23.png",
    "sl": 22,
    "name": "Dr.Saji Gopinath",
    "desi": "CEO",
    "company": "KSUM"
  }
]
  }
});

var app = new Vue({
  el: '#agenda',
  data: {
    left: [
      {
        "time": "08:00 am -09:30 am",
        "item": "Registration and Networking"
      },
      {
        "time": "9.31 am - 09:40 am",
        "item": "Welcome and Opening Remarks"
      },
      {
        "time": "09:41am -10:00 am",
        "item": "Inauguration and Keynote Address"
      },
      {
        "time": "10:01 am -10:30 am",
        "item": "FIRESIDE CHAT - Women to Inspire - Stories of Successful Entrepreneurs"
      },
      {
        "time": "10:31 am -11:15 am",
        "item": "PANEL DISCUSSION  - Women in Business"
      },
      {
        "time": "11:16 am -11:30 am",
        "item": "Networking Break"
      },
      {
        "time": "11:31 am -12:15 pm",
        "item": "PANEL DISCUSSION - Inclusivity in the Workplace"
      },
      {
        "time": "12:16 pm - 1:15 pm",
        "item": "Startup Pitching"
      }
    ],
    right:[
      {
        "time": "1:16 pm - 2.00 pm",
        "item": "IDEA EXCHANGE & NETWORKING LUNCH"
      },
      {
        "time": "2.01 pm - 3:00 pm",
        "item": "Startup Pitching"
      },
      {
        "time": "03:01 pm - 03:45 pm",
        "item": "PANEL DISCUSSION - The Women Building Tomorrow’s Business"
      },
      {
        "time": "03:46 pm - 04:00 pm",
        "item": "Networking Break"
      },
      {
        "time": "04:01 pm - 04:45pm",
        "item": "PANEL DISCUSSION - Building an Inclusive Entrepreneurship Ecosystem"
      },
      {
        "time": "04:46 pm - 05:15 pm",
        "item": "Honouring the Change Makers"
      },
      {
        "time": "",
        "item": "Valedictory Address"
      }
    ]
  }
});