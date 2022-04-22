import React from 'react';


const Circular = (props) => {
	return(
			<div style={{borderRadius: '100%', backgroundColor:'blue', height: '500px', width:'500px'}}> 
				{props.children}
			</div>
		)
}

export default Circular;