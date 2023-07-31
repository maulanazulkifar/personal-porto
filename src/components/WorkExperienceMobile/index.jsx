const WorkExperienceMobile = () => {
  return(
    <div className={'container p-4'}>
      <div className={'flex flex-col items-center'}>
        <div className={'flex flex-col items-center'}>
          <p className={'title-section'}>CAREER PATH</p>
          <p className={'title-subsection'}>Working Experiences</p>
        </div>
      </div>
      <p className={'title-job-text'}>Front-end Dev</p>
      <p className={'location-job-text'}>California</p>
      <p>Nov 2020 - Present · Full-time</p>
      <div className={'flex py-4 gap-2'}>
        <div className="badge badge-outline">Swift</div>
        <div className="badge badge-outline">Go</div>
      </div>
      <div className="divider"></div>
      <ul className={'list-disc px-4'}>
        <li>Improving overall website performance for mobile users.</li>
        <li>Improving overall website performance for mobile users.</li>
        <li>Improving overall website performance for mobile users.</li>
        <li>Improving overall website performance for mobile users.</li>
      </ul>
    </div>
  )
}

export default WorkExperienceMobile;