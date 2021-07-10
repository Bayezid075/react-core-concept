import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Bayezid"
  var color ={
    backgroundColor: 'black',
    color:'white',
    padding: '10px 10px',
    borderRadius: '10px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        This is react core concept 
        </p>
      
        <p style={color}>
          My first paragraps
        </p>
        <p style={{color:'red', backgroundColor:'white'}}>
          This is another paragraps
      
        </p>
         
         <LetComp name="bayezid hoshen"/>
         <LetComp age="11"/>
         <LetComp ambition ="world class developer" />
          <Product Price="$355" Proname="photoshop"/>
          <Product Price="$500" Proname="ilustrator"/>
          <Product Price="$600" Proname="preminum pro"/>
      </header>
    </div>
  );
}

 
function LetComp(props){
 const CompStyle ={
   fontFamily: 'arial ',
   fontSize: '25px',
   width: '100%',
   background:'black'

 }
 return <div style={CompStyle}>
    <h3> Name : { props.name} {props.age}</h3>
    <h3> ambition : { props.ambition}</h3>
    <p> work with react</p>
 </div>
}

// crate a comoponent 
// function Me(){
//   return <h1> Name:  Bayezid</h1>
// }

 function Product (props){
   const style = {
     border: '2px solid red',
     borderRadius: '10px',
     backgroundColor: 'lightgray',
     padding:'10px',
     color: 'black',
     width: '300px',
     float: 'left'
   }

   return <div style={style}>
        <p>{props.Proname} </p>
        <h3> {props.Price}</h3>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere.
       </p>

   </div>

 }
  




export default App;
