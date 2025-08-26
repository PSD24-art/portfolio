import { main_hero } from "./Hero.module.css";

function Hero() {
  return (
    <div className={`${main_hero}`}>
      <img
        src="../assets/bg.png"
        alt="Code Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <div className="flex flex-col justify-center items-start text-3xl m-15">
        <div>Hi, I’m</div>
        <div>Prathamesh</div>
        <div className="text-2xl mb-2">I build interactive web apps</div>
        <div className="text-xl">
          Passionate software developer focused on building impactful and
          scalable digital solutions.
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hero;
