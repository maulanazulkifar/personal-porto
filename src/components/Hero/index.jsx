const Hero = () => {
  return(
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://img.freepik.com/free-vector/boy-wearing-shirt-with-macau-flag_1308-20549.jpg?w=740&t=st=1694593952~exp=1694594552~hmac=40f7d55c73c2adb39663269a9644d7cdb4f4093213134e0d26c06639f57fbdae" className="max-w-sm rounded-lg shadow-2xl" />
        <div className={'md:w-1/3'}>
          <p className={'title-section'}>my name is</p>
          <h1 className="text-3xl font-bold">Maulana <span style={{color: '#7E74F1'}}>Zulkifar</span></h1>
          <p className="py-6">Creative front-end developer with more than +2 years of experience in enterprise companies and startups. Proficient in Html, Tailwind Css, Javascript and React. Passionate about UI/UX</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;