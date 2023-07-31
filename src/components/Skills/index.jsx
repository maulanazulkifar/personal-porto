import './index.css'

const Skills = () => {
  return(
    <div className={'px-4'} id={'education_section'}>
      <div className={'flex flex-col items-center  sm:items-start'}>
        <div className={'flex flex-col items-center'}>
          <p className={'title-section'}>Learning PATH</p>
          <p className={'title-subsection'}>Education & Skills</p>
        </div>
      </div>
      <div className={'flex flex-col sm:flex-row'}>
        <div className={'sm:w-1/3 p-4'}>
          <p className={'name-university-text'}>Kingston University</p>
          <p className={'degree-university-text'}>Bachelor's degree</p>
          <p className={'year-university-text'}>2015-2019</p>
        </div>
        <div className={'sm:w-1/2 p-4'}>
          <p>For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.</p>
          <div className={'py-8'}>
            <div>
              <p>React</p>
              <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
            </div>
            <div>
              <p>React</p>
              <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
            </div>
            <div>
              <p>React</p>
              <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;