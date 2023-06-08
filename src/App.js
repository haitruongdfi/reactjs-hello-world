// import logo from './apple-icon.svg';
import './App.css';
import './styles/style.css';
import { useState, useRef } from 'react';
import Profile from './components/Profile';
import { connect } from 'react-redux'

const grayPic = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function MyButton() { // this is component of React

  const [count, setCount] = useState(0)
  function handleClick() {
    alert("Hi, I'm React");
  }

  const handleClick1 = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>I'm a component</button>
      <button onClick={handleClick1}>Click {count} time{(count > 1) && 's'} </button>
    </>
  );
}



function App(props) {
  let myLargeTitle = useRef(null);
  //console.log("stateFromRedux >>>", props.dataRedux)
  const listUsers = props.dataRedux;

  const handleDeleteUser = (user) => {
    console.log("Delete user ", user.name);
    console.log("Delete user ", user.id);
    props.actionBecomesProp(user);
  }

  const handleUppercaseUser = () => {
    props.actionUppercaseUsers();
  }


  const handleXHover = (id) => {
    document.getElementById(id).style.cursor = "pointer"
  }

  return (
    <div>
      <section>
        <h1 className='my-text' ref={myLargeTitle} onClick={() => { console.log(myLargeTitle.current.innerText) }}>Welcome to my app</h1>
        <img className='avatar' src={grayPic.imageUrl} alt={'Photo of ' + grayPic.name} style={{ width: grayPic.imageSize, height: grayPic.imageSize }} />
        <MyButton />
        <MyButton />
      </section>
      <section>
        <Profile />
      </section>
      <section><h2 ref={(e) => { e && alert("This message raises when React adds DOM '" + e.innerText + "' to DOM tree") }}>Ref Callback</h2></section>
      <section>
        {/* when handleFunction has arguments, we MUST call via a function */}
        {listUsers && listUsers.length > 0 && listUsers.map(item => {
          if (!item.delete)
            return <div id={item.id} key={item.id}>{item.name} <span style={{ fontWeight: "bold" }} onMouseOver={() => { handleXHover(item.id) }} onClick={() => handleDeleteUser(item)}>X</span></div>
          else
            return false;
        }
        )}
      </section>
      <section>
        <button onClick={handleUppercaseUser}>Uppercase Users</button>
      </section>
    </div>
  );
}
/* These below line will map state and dispatches of Redux to props of this component ( App component ) */
const mapStateToProps = (stateOfReduxReturnedByReducer) => {
  return {
    dataRedux: stateOfReduxReturnedByReducer.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch action
    // action  => {type: 'some unique name', payload: xyz} 
    actionBecomesProp: (user) => dispatch({ type: "appComponent/deleteUser", payload: user }),
    actionUppercaseUsers: () => dispatch({ type: "appComponent/uppercaseUser" })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
