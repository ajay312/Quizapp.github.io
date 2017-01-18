'use strict';
/*
 * used to get quiz text and structure  from local json
 */
angular.module('quizApp').factory('quizFactory', [ '$http', function($http) {
	
	
	return {
	  // Function used to get security qns.
	  getQuizData : function() {
		//$http.get('file:///D:/myQuizApp/json/quiz.json').success(function(data) { 
    // });due to cross dommain unable to get local json/quiz
	var quizJson={
   "data":{
      "questions":{
        
               "level":[
                  {
                     "question":[
                        {
                           "title":"What does SAPÂ® stand for?",
                           "answer":[
                              "Services for Application Programming",
                              {
                                 "_correct":"1",
                                 "__text":"Systems, Applications, and Programs"
                              },
                              "Sino-American Peace",
                              "Statistical Analysis Program"
                           ]
                        },
                        {
                           "title":"What does Tcode mean?",
                           "answer":[
                              "Television Code",
                              "Translation Code",
                              "Transition Code",
                              {
                                 "_correct":"1",
                                 "__text":"Transaction Code"
                              }
                           ]
                        },
                        {
                           "title":"What does ERP stand for?",
                           "answer":[
                              "Enterprise Research Program",
                              {
                                 "_correct":"1",
                                 "__text":"Enterprise Resource Planning"
                              },
                              "Enterprise Resource Performance"
                           ]
                        },
                        {
                           "title":"What does SRM stand for?",
                           "answer":[
                              "System Renewal Manager",
                              {
                                 "_correct":"1",
                                 "__text":"Supplier Relationship Management"
                              },
                              "Supply Relations Maintenance",
                              "Site Recovery Manager"
                           ]
                        },
                        {
                           "title":"True or False: SAPÂ® was founded in 1976.",
                           "answer":[
                              "True",
                              {
                                 "_correct":"1",
                                 "__text":"False, founded in 1972"
                              }
                           ]
                        },
                        {
                           "title":"What does SCM stand for?",
                           "answer":[
                              "System Control Manager",
                              {
                                 "_correct":"1",
                                 "__text":"Supply Chain Management"
                              },
                              "Supply Control Maintenance",
                              "Super Cool Manager"
                           ]
                        },
                        {
                           "title":"Which is not one of the 3 layers of systems in SAPÂ®?",
                           "answer":[
                              "Application Layer",
                              "Presentation Layer",
                              "Database Layer",
                              {
                                 "_correct":"1",
                                 "__text":"Hardware Layer"
                              }
                           ]
                        },
                        {
                           "title":"What does GRC stand for?",
                           "answer":[
                              "Global Technical System",
                              "Global Trade Services",
                              {
                                 "_correct":"1",
                                 "__text":"Governance, Risk, and Compliance"
                              },
                              "Global Testing Site"
                           ]
                        },
                        {
                           "title":"Which is not an SAPÂ® version?",
                           "answer":[
                              "4.6C",
                              {
                                 "_correct":"1",
                                 "__text":"4.7D"
                              },
                              "ECC5",
                              "3.1H"
                           ]
                        },
                        {
                           "title":"What does BEX stand for?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"Business Explorer"
                              },
                              "Business Executive Exchange",
                              "Business Exhibition"
                           ]
                        },
                        {
                           "title":"Who is the CEO of SAPÂ®?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"Jim Hagemann Snabe and Bill MCDermott are joint co-CEOs"
                              },
                              "Werner Brandt",
                              "Henning Kagermann",
                              "Hasso Plattner"
                           ]
                        },
                        {
                           "title":"What does GTS stand for?",
                           "answer":[
                              "Global Technical System",
                              {
                                 "_correct":"1",
                                 "__text":"Global Trade Services"
                              },
                              "Government Trade Services",
                              "Global Testing Site"
                           ]
                        },
                        {
                           "title":"What does PLM stand for?",
                           "answer":[
                              "Productive License Management",
                              {
                                 "_correct":"1",
                                 "__text":"Product Lifecycle Management"
                              },
                              "Personal Lifestyle Modification",
                              "Product License Manager"
                           ]
                        },
                        {
                           "title":"What is the title of the 2005 SAPÂ® Song?",
                           "answer":[
                              "I'm such a SAPÂ®",
                              {
                                 "_correct":"1",
                                 "__text":"ERP of the Century"
                              },
                              "General Ledger Rocks",
                              "Ode to the MRP"
                           ]
                        },
                        {
                           "title":"What Tcode do you use to set your individual preferences in SAPÂ®?",
                           "answer":[
                              "ST01",
                              {
                                 "_correct":"1",
                                 "__text":"SU01"
                              },
                              "SM01",
                              "MM01"
                           ]
                        },
                        {
                           "title":"Where is SAPPHIREÂ® USA currently held?",
                           "answer":[
                              "Austin, TX",
                              {
                                 "_correct":"1",
                                 "__text":"Orland, FL"
                              },
                              "Missoula, MT"
                           ]
                        },
                        {
                           "title":"What is IDES and what does it stand for?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"A demo system for SAPÂ® -- International Demonstration and Education System"
                              },
                              "An SAPÂ® module -- Internal Demand and External Supply",
                              "An SAPÂ® training system - Internet-based Dramatic Education System"
                           ]
                        },
                        {
                           "title":"What is R/3?",
                           "answer":[
                              "3 sets of financial reports provided by SAPÂ® (P&L, Balance Sheet, Cash Flow)",
                              {
                                 "_correct":"1",
                                 "__text":"The third generation of the product from SAP"
                              },
                              "The Rest-3 protocol used by SAPÂ® since 1995"
                           ]
                        },
                        {
                           "title":"SAPÂ® was founded by 5 former Microsoft employees.",
                           "answer":[
                              "True",
                              {
                                 "_correct":"1",
                                 "__text":"False"
                              }
                           ]
                        },
                        {
                           "title":"What does SCN stand for?",
                           "answer":[
                              "SAPÂ® Code Network",
                              "SAPÂ® Connected Network",
                              {
                                 "_correct":"1",
                                 "__text":"SAPÂ® Community Network"
                              }
                           ]
                        },
                        {
                           "title":"Approximately how many people are employed by SAPÂ®?",
                           "answer":[
                              "20,000",
                              {
                                 "_correct":"1",
                                 "__text":"50,000"
                              },
                              "80,000"
                           ]
                        },
                        {
                           "title":"When was SAPÂ® founded?",
                           "answer":[
                              "1962",
                              {
                                 "_correct":"1",
                                 "__text":"1972"
                              },
                              "1982"
                           ]
                        }
                     ],
                     "_difficulty":"0",
                     "_title":"SAPÂ® General (Level 1)",
                     "_points_per_question":"10",
                     "_seconds_per_question":"30",
                     "_total_questions":"5"
                  },
                  {
                     "question":[
                        {
                           "title":"Which of the following is not an SAPÂ® application?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"SAPÂ® HRM"
                              },
                              "SAPÂ®  CRM",
                              "SAPÂ®  PLM",
                              "SAPÂ®  SCM"
                           ]
                        },
                        {
                           "title":"What does OSS stand for?",
                           "answer":[
                              "Online  Service Standard",
                              {
                                 "_correct":"1",
                                 "__text":"Online  Service System"
                              },
                              "Optimal  System Standard"
                           ]
                        },
                        {
                           "title":"What does BIW stand for?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"Business  Information Warehouse"
                              },
                              "Business  Interactive Wiki",
                              "Business  Information Wall",
                              "Business  Insight Warehouse"
                           ]
                        },
                        {
                           "title":"Can BW run without a SAPÂ® R/3Â® implementation?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"Yes"
                              },
                              "No"
                           ]
                        },
                        {
                           "title":"What does OLAP stand for?",
                           "answer":[
                              "Oracle  Laughs at Plattner",
                              {
                                 "_correct":"1",
                                 "__text":"Online  Analytical Processing"
                              },
                              "Online  Analytical Program"
                           ]
                        },
                        {
                           "title":"What is an extractor?",
                           "answer":[
                              "An  apparatus for solvent-contact with liquids or solids for removal of  specified components.",
                              "A  data retrieval mechanism in the SAPÂ® source system.",
                              "A  mechanism in a firearm.",
                              {
                                 "_correct":"1",
                                 "__text":"All  of the above."
                              }
                           ]
                        },
                        {
                           "title":"Can you create a table with fields not referring to data elements?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"Yes"
                              },
                              "No"
                           ]
                        },
                        {
                           "title":"What is dunning?",
                           "answer":[
                              "A  place where political campaign speeches are made.",
                              {
                                 "_correct":"1",
                                 "__text":"The  process by which you \"invoice\" a customer for past due items."
                              },
                              "To  assail with loud continued noise."
                           ]
                        },
                        {
                           "title":"What does DSAG stand for?",
                           "answer":[
                              "Deutsche  SAPÂ® Group",
                              {
                                 "_correct":"1",
                                 "__text":"Deutschsprachige SAPÂ® Anwendergruppe"
                              },
                              "Deutsche  Systemanalyse Gruppe"
                           ]
                        },
                        {
                           "title":"What is a dialog work process?",
                           "answer":[
                              "R/3Â®  work process used to handle communication between SAPÂ® systems",
                              "R/3Â®  work process used to move data from one system to another",
                              {
                                 "_correct":"1",
                                 "__text":"R/3Â®  work process used to process requests from users working online"
                              },
                              "R/3Â®  work process used to start other work processes"
                           ]
                        },
                        {
                           "title":"What is a transport in SAPÂ®?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"Term  for software logistics in R/3Â®, for data export and import  between R/3Â® systems"
                              },
                              "Team  that tests data between systems",
                              "An  interface between the presentation and database layer",
                              "A  protocol for encrypting data"
                           ]
                        },
                        {
                           "title":"What does RFC stand for?",
                           "answer":[
                              "Remote  Firewall Connector",
                              {
                                 "_correct":"1",
                                 "__text":"Remote  Function Call"
                              },
                              "Real  Fast Communication",
                              "Remote  Function Communication"
                           ]
                        },
                        {
                           "title":"What is an R/3Â® instance?",
                           "answer":[
                              "SID  of R/3Â®",
                              "Installation  of Netweaver",
                              "Your  SAPÂ® System Landscape",
                              {
                                 "_correct":"1",
                                 "__text":"An administrative unit that groups together components of an R/3Â® system that offer one or more services"
                              }
                           ]
                        },
                        {
                           "title":"What does the SAPÂ® Gateway Service do?",
                           "answer":[
                              "Performs  logon load balancing",
                              {
                                 "_correct":"1",
                                 "__text":"Connects  networks with various protocols"
                              },
                              "Releases locks",
                              "Starts and updates jobs"
                           ]
                        },
                        {
                           "title":"What Operating system cannot be used to house a backend SAPÂ® system?",
                           "answer":[
                              "Windows",
                              "Linux",
                              {
                                 "_correct":"1",
                                 "__text":"Tiger"
                              },
                              "Solaris"
                           ]
                        },
                        {
                           "title":"Which RAID level does SAPÂ® recommend for the R/3Â® database?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"RAID 1"
                              },
                              "RAID 2",
                              "RAID 4",
                              {
                                 "_correct":"1",
                                 "__text":"RAID 5"
                              }
                           ]
                        },
                        {
                           "title":"Which work processes log on to the database when R/3Â® is started?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"All  work processes"
                              },
                              "All work processes except the enqueue",
                              "Only the work processes of the central instance",
                              "Only the dialog, background, and update work processes"
                           ]
                        },
                        {
                           "title":"What is the activity group administrator authorized to do?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"Create  activity groups"
                              },
                              {
                                 "_correct":"1",
                                 "__text":"Maintain  authorization fields"
                              },
                              "Change  users",
                              "Allocate  agents to the activity group"
                           ]
                        },
                        {
                           "title":"Which special users are there in R/3Â®? (Select 2 answers)",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"SAPÂ®*"
                              },
                              "SAPÂ®DBA",
                              {
                                 "_correct":"1",
                                 "__text":"DDIC"
                              },
                              "SUPER"
                           ]
                        },
                        {
                           "title":"Why does an RDBMS require the log files?",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"To recover the current status of a database if an error occurs"
                              },
                              "To log error messages",
                              "To store information about the locations of directories and files in thedatabase",
                              "To back up time-critical data"
                           ]
                        }
                     ],
                     "_difficulty":"1",
                     "_title":"SAPÂ® General (Level 2)",
                     "_points_per_question":"20",
                     "_seconds_per_question":"35",
                     "_total_questions":"5"
                  },
                  {
                     "question":[
                        {
                           "title":"When creating a logon group for Logon Load Balancing, which of the following CANNOT be specified?",
                           "answer":[
                              "Maximum allowable response time.",
                              "Maximum number of users who may be logged on to the instance.",
                              "Name of the instance defined for the logon group.",
                              {
                                 "_correct":"1",
                                 "__text":"Maximum number of sessions per user."
                              },
                              "Name of the logon group"
                           ]
                        },
                        {
                           "title":"Which R/3 System user is used for starting external programs using SAP background jobs?",
                           "answer":[
                              "DDIC",
                              "SAP*",
                              "SAPR3",
                              {
                                 "_correct":"1",
                                 "__text":"SAPCPIC"
                              },
                              "<sid>adm"
                           ]
                        },
                        {
                           "title":"Name the R/3 System transaction used for monitoring a spool requests.",
                           "answer":[
                              "SM50",
                              "SM51",
                              "SPAD",
                              {
                                 "_correct":"1",
                                 "__text":"SP01"
                              },
                              "SM37"
                           ]
                        },
                        {
                           "title":"Which of the following is authorized to maintain R/3 user id parameters?",
                           "answer":[
                              "Only the R/3 system administrator.",
                              "All R/3  users having an account in the same R/3 client.",
                              "Only the user himself.",
                              {
                                 "_correct":"1",
                                 "__text":"Only the R/3 system administrator and the user."
                              }
                           ]
                        },
                        {
                           "title":"Which of the following functions is NOT possible using the SAP Online Service System (OSS)?",
                           "answer":[
                              "Execute online searches for R/3 Notes.",
                              "Register problems with the SAP Hotline.",
                              "Lookup SAP training dates and course offerings.",
                              "Register changes to SAP objects.",
                              {
                                 "_correct":"1",
                                 "__text":"All are possible"
                              }
                           ]
                        },
                        {
                           "title":"What is the protocol used by SAP Gateway process?",
                           "answer":[
                              "SSL Protocol",
                              {
                                 "_correct":"1",
                                 "__text":"TCP/IP Protocol"
                              },
                              "UDP Protocol",
                              "RFC Protocol"
                           ]
                        },
                        {
                           "title":"What are the layers of data description in R/3?",
                           "answer":[
                              "The external layer",
                              "The ABAPÂ®/4 layer",
                              "The database layer",
                              {
                                 "_correct":"1",
                                 "__text":"All of the above"
                              }
                           ]
                        },
                        {
                           "title":"Update tasks work in Synchronous Mode only",
                           "answer":[
                              "True",
                              {
                                 "_correct":"1",
                                 "__text":"False"
                              }
                           ]
                        },
                        {
                           "title":"With LDB one can modify the pre-generated selection screen to their needs.",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"True"
                              },
                              "False"
                           ]
                        },
                        {
                           "title":"In an LDB, the layout of the Database program is determined by both Structure and Selections.",
                           "answer":[
                              {
                                 "_correct":"1",
                                 "__text":"True"
                              },
                              "False"
                           ]
                        },
                        {
                           "title":"It is not necessary to maintain the Parent-Child relationship between the tables in Logical Database Structure.",
                           "answer":[
                              "True",
                              {
                                 "_correct":"1",
                                 "__text":"False"
                              }
                           ]
                        },
                        {
                           "title":"It is possible to assign a local data object defined in a subroutine or function module to a field group.",
                           "answer":[
                              "True",
                              {
                                 "_correct":"1",
                                 "__text":"False"
                              }
                           ]
                        }
                     ],
                     "_difficulty":"2",
                     "_title":"SAPÂ® General (Level 3)",
                     "_points_per_question":"50",
                     "_seconds_per_question":"40",
                     "_total_questions":"5"
                  }
               ]		
			
         
      },
      
 
      "final_score_rules":{
         "rule":[
            {
               "_min_percent":"0",
               "__text":"SAPÂ® Novice: Keep studyingâ€¦"
            },
            {
               "_min_percent":"25",
               "__text":"SAPÂ® Beginner: Youâ€™re getting there. Try again..."
            },
            {
               "_min_percent":"50",
               "__text":"SAPÂ® Expert: You know SAPÂ®. Well done!"
            },
            {
               "_min_percent":"75",
               "__text":"SAPÂ® Master: Ok, now we are impressed. Good job!"
            },
            {
               "_min_percent":"90",
               "__text":"SAPÂ® Genius: WOW, you should ask for a raise!"
            }
         ]
      }
   }
};
return quizJson.data;
	
	  }
	};
  } ]);
 