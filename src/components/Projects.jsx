import React from 'react'
import EachProject from './EachProject'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
const Projects = () => {

    // var numOfProjects = 6

    // const leftSlider = () => {
    //   const wrap = document.getElementById('wrap')
    //   console.log(wrap, wrap.style.translate);
    //   if (wrap.style.translate !== '') {
    //     if (wrap.style.translate === '1912.5px') {
    //       return
    //     }
    //     console.log(wrap.style.translate);
    //     var value = parseFloat(wrap.style.translate)
    //     console.log(value)
    //     value += 750
    //     var final = String(value)+'px'
    //     console.log(value);
    //     wrap.style.translate = final
    //   } else {
    //     return
    //   }
    // }
    // const rightSlider = () => {
    //   const wrap = document.getElementById('wrap')
    //   console.log(wrap, wrap.style.translate);
    //   if (wrap.style.translate !== '') {
    //     if (wrap.style.translate === '-1837.5px') {
    //       return
    //     }
    //     console.log(wrap.style.translate);
    //     var value = parseFloat(wrap.style.translate)
    //     console.log(value)
    //     value -= 750
    //     var final = String(value)+'px'
    //     console.log(value);
    //     wrap.style.translate = final
    //   } else {
    //     wrap.style.translate = '1162.5px'
    //   }
    // }

    var projects = [
      {
        "name": "Underwater Aquatic Image Classification",
        "techstack": ["Deep Learning", "Python", "Tensorflow", "ResNet", "Contrastive Learning"],
        "description": [
          "Our research project focuses on classifying underwater aquatic images using deep learning. We utilize the FishPak dataset, containing images of six aquatic species classes.",
          "We adopted ResNet152 as our base model due to its robust performance in image classification. To enhance this, we integrated SimCLR, a contrastive loss function that uses cosine distance and logarithms to measure similarity, improving feature representation.",
          "By combining ResNet152 with SimCLR through transfer learning, we fine-tuned the model for underwater image classification. This approach resulted in an impressive 98.7% accuracy.",
          "This project demonstrates the effective application of advanced deep learning techniques in aquatic image classification, aiming to push the boundaries of current capabilities."
        ],
        "github": "https://github.com/poojyanth/UAIC"
      },
      {
        "name": "Lifeline - The Doctor Patient App",
        "techstack": ["NodeJS", "ExpressJS", "ReactJS", "MongoDB", "CSS", "Git"],
        "description": [
          "Developed a user-centric healthcare web application using React, Node.js, Express, and MongoDB, enhancing functionality and user experience with an efficient appointment scheduling system for patients.",
          "Implemented an email notification system for appointments to improve patient engagement and healthcare accessibility, and integrated a blogging feature to share health-related articles, promoting informed decision-making and wellness.",
          "Optimized performance with Redis, reducing information retrieval time by 99.5% (from 3.85s to 18ms), and ensured high code quality through Jest testing.",
          "Utilized GitHub Actions for CI and CD, streamlining development workflows. Deployed the application on Vercel for scalable and efficient hosting."
        ],
        "github": "https://github.com/srawan-meesala/lifeline-fdfed"
      },
      {
        "name": "Potato Disease Detection",
        "techstack": ["Deep Learning", "Python", "Tensorflow", "CNN", "FASTAPI", "tf serving"],
        "description": [
          "Engineered a deep learning solution that analyzed over 1,000 images of potato leaves to distinguish between healthy plants and disease-affected specimens; enhanced diagnostic speed by 50%, significantly improving response time for farmers.",
          "Achieved high model performance with an average prediction confidence of 99.33% and validation accuracy of 99.59%, showcasing robust and reliable classification capabilities.",
          "Implemented a FastAPI server for backend integration, enhancing system communication efficiency by 40%; simultaneously developed a user-friendly ReactJS frontend, enabling real-time disease diagnosis."
        ],
        "github": "https://github.com/srawan-meesala/"
      },
      {
        "name": "Face Detection and Liveliness Test",
        "techstack": ["Computer Vision", "Python", "Haarcascades"],
        "description": [
          "This is a Python project made using OpenCV and Haarcascades using simple ML in which the classifier is trained with pre-collected data to accurately recognize faces.",
          "Liveliness verification ensures the user is a real person through a liveliness test. The test involves the user blinking their eyes a random number of times to prevent spoofing.", 
          "Employs simple machine learning techniques to enhance face detection accuracy and reliability. Entirely developed in Python, making it accessible and easy to integrate with other Python-based systems and applications.",
          "This project showcases proficiency in computer vision and Python programming, demonstrating practical applications of face detection and liveliness verification."
        ],
        "github": "https://github.com/srawan-meesala/Face-Detection-and-Liveliness-Test-using-OpenCV-Python"
      },
      {
        "name": "AddnAttend DApp",
        "techstack": ["Web3.0", "Solidity", "Hardhat", "EthersJS", "ReactJS", "POA", "Ethereum", "ERC20", "CSS"],
        "description": [
          "'AddnAttend' is a decentralized application (DApp) launched on the Goerli testnet, designed to streamline event management through blockchain.",
          "Attendees register for events through the DApp, with their information securely stored on the blockchain. This decentralized approach eliminates the risk of data manipulation and ensures privacy.",
          "The check-in process is streamlined through the DApp, allowing for quick and efficient verification of attendee presence. The integration of an ERC-20 token reward system motivates participants to attend events.",
          "This project showcases advanced skills in blockchain development, particularly in crafting efficient smart contracts and understanding token economics, while offering a practical application in the field of event management."
        ],
        "github": "https://github.com/srawan-meesala/AddNAttend-DApp"
      },
      {
        "name": "Python Typing Test",
        "techstack": ["Python", "Tkinter GUI"],
        "description": [
          "Created an intuitive graphical user interface with Tkinter for a Python typing test, allowing users to practice and enhance their typing skills effectively.",
          "Demonstrated ability to apply Python's core functionalities and GUI libraries to develop practical applications that aid in skill enhancement."
        ],
        "github": "https://github.com/srawan-meesala/typing-test-with-python"
      },
      {
        "name": "Real Estate Management System",
        "techstack": ["Java", "OOPS", "MySQL"],
        "description": [
          "This is a streamlined software solution for managing real estate properties. It serves real estate agencies, property owners, and prospective buyers, offering essential features for property listing, buying, and administrative management.",
          "Key features include property listing, property buying, admin management and data retrieval.",
          "This project showcases proficiency in Java and MySQL, providing a practical solution for basic real estate management needs."
        ],
        "github": "https://github.com/srawan-meesala/dREam"
      },
    ]
    
    return (
        <>
            <div className="card-4">
                <div className="card-2-head">Projects.</div>
                 {/*<div className="corousel">
                  <div className="corousel-inside">
                    <div className="slider">
                      <div onClick={leftSlider} id='left-slider' className="sliders"><FaChevronLeft /></div>
                      <div onClick={rightSlider} id='right-slider' className="sliders"><FaChevronRight /></div>
                    </div> 
                    <div id='wrap' className="wrap">
                      {projects.map((project, key) => 
                        <div className="project" key={key}><EachProject project={project}/></div>
                      )}
                    </div>
                  </div>
                </div>*/}
                <div id='wrap' className="wrap">
                  {projects.map((project, key) => 
                    <div className="project" key={key}><EachProject project={project}/></div>
                  )}
                </div>
            </div>
        </>
    )
}

export default Projects