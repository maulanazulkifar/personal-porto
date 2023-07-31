import './index.css'
import {useState} from "react";

const WorkExperience = () => {
  const [data, setData] = useState(
    [
      {
        isActive: true,
        id: 1,
        name: 'Telkom Indonesia',
        date: 'Jun 2019 - Jul 2019',
        position: 'Internship',
        role: 'Web Developer Internship',
        location: 'Bandung',
        tech: ['PHP', 'HTML', 'CSS'],
        task: [
          'Create a web base application to facilitate the work of the informants'
        ]
      },
      {
        isActive: false,
        id: 2,
        name: 'Rekacipta Inovasi ITB',
        date: 'Oct 2020 - Jan 2021',
        position: 'Internship',
        role: 'Web Developer Internship',
        location: 'Bandung',
        tech: ['Wordpress', 'PHP', 'CSS'],
        task: [
          'Develop company profile website using Wordpress'
        ]
      },
      {
        isActive: false,
        id: 3,
        name: 'PT. Akhdani Reka Solusi',
        role: 'Software Engineer',
        location: 'Bandung',
        date: 'Jun 2021 - Jun 2022',
        position: 'Contract',
        tech: ['PHP', 'Laravel', 'CSS', 'Javascript', 'Vue', 'Flutter'],
        task: [
          'Develop Web App from client using Quasar ( Vue.js) , Laravel',
          'Prototyping Mobile App using Flutter'
        ]
      },
      {
        isActive: false,
        id: 4,
        name: 'Soundclub.Ltd',
        role: 'Junior Frontend Developer',
        date: 'Jun 2022 - Oct 2022',
        position: 'Fulltime',
        location: 'London (Remote)',
        tech: ['React', 'React Native', 'Tailwind', 'Next js'],
        task: [
          'Bug fixing on Mobile app using React Native',
          'Develop new module in Mobile App',
          'Develop Webapp using Next Js'
        ]
      },
      {
        isActive: false,
        id: 5,
        name: 'OPPO Indonesia',
        role: 'Frontend Developer',
        date: 'Oct 2022 - Present',
        position: 'Fulltime',
        location: 'Jakarta',
        tech: ['React', 'React Native', 'Tailwind', 'Bootstrap'],
        task: [
          'Develop microsite for campaign and activity',
          'Develop internal webapp',
          'Develop app for sister company',
          'Develop mobile reporting apps with React Native'
        ]
      }
    ]
  )

  const selectActive = (id) => {
    data.map(item => {
      if (item.id === id) {
        item.isActive = true;
      } else {
        item
      }
    })
  }
  return(
    <div id={'career_section'} className={'px-4 py-4'}>
      <div className={'flex flex-col sm:items-start'}>
        <div className={'flex flex-col items-center'}>
          <p className={'title-section'}>CAREER PATH</p>
          <p className={'title-subsection'}>Working Experiences</p>
        </div>
      </div>
      <div className={'flex'}>
        <div className={'flex flex-col w-1/3'}>
          <ul className="menu">
            {
              data.map(item => {
                console.log(item);
                return(
                  <li key={item.id}>
                    <a className={'flex justify-between'}>
                      <p>{item.name}</p>
                      {
                        item.isActive ? <span className="material-icons">chevron_right</span>:''
                      }
                    </a>
                  </li>
                  )
              })
            }
          </ul>
        </div>
        <div className={'py-4 p-4'}>
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
      </div>
    </div>
  )
}

export default WorkExperience;