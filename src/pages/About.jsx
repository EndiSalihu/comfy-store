const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Relax and unwind as you explore a thoughtfully designed store filled
        with all the apps you need, neatly organized for a stress-free browsing
        experience. The Cozy App Store offers a laid-back environment where you
        can discover handpicked apps tailored to your lifestyle. Whether you're
        looking for tools to make your day easier or apps that bring a little
        joy, everything is just a click away. Enjoy the soothing design, smooth
        navigation, and a curated collection that feels like home. It's not just
        about downloading apps—it's about creating a comfy, enjoyable experience
        every time you shop. Step inside, take your time, and find the perfect
        app for every moment.
      </p>
    </>
  );
};
export default About;
