export default function Hero() {
	return (
	  <div className="relative h-screen">
		<video className="w-full h-full object-cover" autoPlay loop muted>
		  <source src="/static/STG_flash.mp4" type="video/mp4" />
		  {/*Create Your Own Stunning Video at https://spacetypegenerator.com/flash.html */}
		</video>
	  </div>
	);
  }
  