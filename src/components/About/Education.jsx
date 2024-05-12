import React from 'react'

const Education = () => {


    const skills = [
        { name: "Outsourcing Education", percent: 60 },
        { name: "Business Development", percent: 50 },
        { name: "Creative Design", percent: 80 },
        { name: "Social Studies", percent: 70 },
        { name: "Technical Studies", percent: 35 }
      ];
  return (
   <>
   <div className="EducationContainer">


    <div className="EducationLeftContainer">
        
<h1>Promoting Good Education since the
 <span className='EduStyle'> very </span>beginning</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in illum quidem praesentium quis vel neque, officiis corporis eligendi, corrupti soluta magni numquam dolore suscipit libero, perferendis at sint eos.</p>

<div className="partner">
    <div className="partner1">
<img src="/partner1.webp" alt="" />
    </div>
    <div className="partner2">
<img src="/partner2.webp" alt="" />
    </div>

    <div className="partner3">
<img src="/partner3.webp" alt="" />
    </div>
</div>
    </div>

    <div className="EducationRightContainer">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skillName">{skill.name}</div>
          <div className="skillBar">
            <div className="skillProgress" style={{ width: `${skill.percent}%` }}>
              <span className="skillPercent">{skill.percent}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>

   </div>
   
   
   </>
  )
}

export default Education
