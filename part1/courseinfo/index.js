import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    const course = {
        
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
    }
    
    const Header = (prop) => {

        return (
        <div>
            <h1>{prop.name}</h1>
        </div>
        )
    }
    
    const Part = (part) => {
        
        return (
            <div>
                <p>
                {part.name} {part.ex}
                </p>
            </div>
        )
    }
    
    const Content = (prop) => {
        return (
        <div>
            <Part name={prop.parts[0].name} ex={prop.parts[0].exercises} />
            <Part name={prop.parts[1].name} ex={prop.parts[1].exercises} />
            <Part name={prop.parts[2].name} ex={prop.parts[2].exercises} />
         </div>
        )
    }

    const Total = (prop) => {
        let sum = prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises
        
        return (
            <div>
              <p>Number of exercises {sum}</p>
            </div>
        )
    }


  return (
    <div>
      <Header {...course} />
      <Content {...course} />
      <Total {...course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))