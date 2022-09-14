import { cssSpace, cssSun, cssPlanet, cssOrbit } from './style';


const Solar = ({ numOfPlanets = 1 }) => {
  
  const getRandomColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor)
    return `#${randomColor}`
  }
  
  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      <div className={cssSun}>
      </div>
      {numOfPlanets && [...Array(parseInt(numOfPlanets)).keys()].map((item) => (
        item < 7 && (
          <div 
            key={`planet-${item}`} 
            className={cssOrbit({
              duration: (item + 2) * 1.7, 
              size: (item + 1) * 100, 
              axis: 500 - (item + 1) * 50,
              index: item,}
            )}>
            <div className={cssPlanet({ color: getRandomColor()})} />
          </div>
        )
      ))}
    </div>
  )
};

export default Solar;
