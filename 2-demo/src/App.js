import React from 'react';
import './App.css';


function Welcome(props){
  return (
    <h1>Hello {props.name}!</h1>
  );
}

function withLoading(Component){
  return ({isLoading, ...rest}) => (
    isLoading 
      ? 'loading...' 
      : <Component {...rest}/>
  );
}


const WelcomeWithLoading = withLoading(Welcome);


const HOBBY_OPTIONS = {
  NOT_SELECTED: 'Not Selected',
  GUITAR: 'Guitar',
  WRESTLING: 'Wrestling'
};

class App extends React.Component {
  state = {
    newTodo: '',
    todos: [],
    loading: false,
    name: '',
    hobby: '',
    about: '',
  };

  createChangeHandler = field => {
    return event => {
      this.setState({
        [field]: event.target.value
      })
    };
  }

  componentDidMount(){
    this.setState({
      loading: true,
      name: ''
    });

    setTimeout(() => {
      this.setState({
        loading: false,
        name: 'Max'
      });
    }, 2000);

    setTimeout(() => {
      if (this.inputRef.current){
        this.inputRef.current.focus();
      }
    }, 0);
  }

  inputRef = React.createRef()

  todoId = 1;

  handleInputChange = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  handleSubmitButtonClick = () => {
    const newTodo = {
      text: this.state.newTodo,
      isDone: false,
      id: this.todoId++
    };

    this.setState({
      todos: [
        ...this.state.todos,
        newTodo
      ],
      newTodo: ''
    });
  };

  handleTodoClick = todoId => {
    const foundTodo = this.state.todos.find(
      todo => todo.id === todoId
    );

    const nextTodo = {
      ...foundTodo,
      isDone: !foundTodo.isDone
    };

    const nextTodos = this.state.todos.filter(
      todo => todo.id !== todoId
    );

    this.setState({
      todos: [
        ...nextTodos,
        nextTodo
      ]
    });
  };

  handleTodoDelete = todoId => {
    const nextTodos = this.state.todos.filter(
      todo => todo.id !== todoId
    );

    this.setState({
      todos: nextTodos
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log({
      name: this.state.name,
      hobby: this.state.hobby,
      about: this.state.about
    });
  }


  render(){
    const doShowEmptyNameMessage = (
      !this.state.name.length 
      && !this.state.loading
    );

    return (
      <div className="App">
        <WelcomeWithLoading 
          isLoading={this.state.loading} 
          name={this.state.name}
        />
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input 
              placeholder="name"
              type="text" 
              value={this.state.name}
              onChange={this.createChangeHandler('name')}
            />
            
          </div>
          {
            doShowEmptyNameMessage && (
              <span style={{color: 'red', fontSize: 15}}>
                You need to input some name
              </span>
            )
          }
          <div>
            <select 
              type="text" 
              value={this.state.hobby}
              onChange={this.createChangeHandler('hobby')}
            >
              {
                Object.entries(HOBBY_OPTIONS)
                  .map(([key, value]) => (
                    <option 
                      value={key === HOBBY_OPTIONS.NOT_SELECTED ? '' : key}
                    >
                      {value}
                    </option>
                  ))
              }
            </select>
          </div>
          <div>
          <textarea 
            placeholder="about"
            value={this.state.about}
            onChange={this.createChangeHandler('about')}
          />
          </div>
          <button type="submit">submit</button>
        </form>
        <div>
          <input
            ref={this.inputRef}
            onChange={this.handleInputChange} 
            value={this.state.newTodo}
          />
          <button 
            onClick={this.handleSubmitButtonClick}
          >
            Add todo
          </button>
          <div>
            {
              this.state.todos
                .map(
                  todo => (
                    <li 
                      key={todo.id} 
                      className={
                        todo.isDone 
                        ? 'Todo-completed'
                        : ''
                      }
                    >
                      <span 
                        onClick={
                          () => this.handleTodoClick(todo.id)
                        }
                      >
                        {todo.text}
                      </span>
                      <button 
                        onClick={
                          () => this.handleTodoDelete(todo.id)
                        }
                      >
                        delete
                      </button>
                    </li>
                  )
                )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;


const apply = func => (
  number => func(number)
);
  
const applyCeil = apply(Math.ceil);

console.log(
  applyCeil(42.4)
);
