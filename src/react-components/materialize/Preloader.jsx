import React from 'react'

export default props =>
	props.ready
		? props.children
		: (
			<div className="preloader-wrapper big active" style={{ marginLeft: '50%' }}>
				<div className="spinner-layer spinner-blue-only">
					<div className="circle-clipper left">
						<div className="circle"/>
					</div>
				</div>
			</div>
		)
