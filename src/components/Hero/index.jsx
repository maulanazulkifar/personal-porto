const Hero = () => {
  return(
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className="max-w-sm rounded-lg shadow-2xl" />
        <div className={'w-1/3'}>
          <p className={'title-section'}>my name is</p>
          <h1 className="text-3xl font-bold">Maulana <span style={{color: '#7E74F1'}}>Zulkifar</span></h1>
          <p className="py-6">Creative front-end developer with more than +2 years of experience in enterprise companies and startups. Proficient in Html, Tailwind Css, Javascript and React. Passionate about UI/UX</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;