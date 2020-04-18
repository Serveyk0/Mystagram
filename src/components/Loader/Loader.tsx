import React from 'react'
//@ts-ignore
import { Circle, Heart, Ellipsis, DualRing, Facebook, Grid, Hourglass, Ring, Ripple, Roller, Spinner, Orbitals, Ouroboro} from 'react-spinners-css';
import './Loader.sass'

export const Loader = (  ) => { 
    return (
        <div className='Loader'>

{/* <Circle/>
<Ellipsis/>	
<DualRing/>	
<Facebook/>	
<Grid/>	
<Heart/>	
<Hourglass/>	
<Ring/>	 */}
<div className='LoaderRipple'>
<Ripple color="#ffffff"/>
</div>
{/* <Roller/>	
<Spinner/>
<Orbitals/>
<Ouroboro/> */}
      </div>
    )
}