import React, { Component } from 'react'
import './MainPage.less'
import background from '../../assets/img/background.jpg'

class MainPage extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="container-fluid">
                <img src={background} alt="Background image" style={{ width: "100%", height: "100%" }} />
            </div>
        )
    }
}

export default MainPage;