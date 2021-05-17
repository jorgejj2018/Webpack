import React, {Component} from "react"
export class Helloworld extends Component{
    render(){
        return(
        <>
        <nav className="menu">
            {this.props.menu.map((el) =>(
                <a key={el[0]} href={el[1]}>
                    {el[0]}
                    </a>
                ))
            }
        </nav>
          <img className="icon" src={this.props.logo} alt={this.props.name} />  
          <h2>Hola Mundo Con {this.props.name}</h2>
        </>
        )
    }
}