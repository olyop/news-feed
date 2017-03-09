// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import Components


// Main App
class Index extends React.Component {
	render() {
		return (
			<div className="index">
				
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1>Template</h1>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}

// Render to DOM
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)