import "./App.css";
import ProfileCard from './ProfileCard';

function App (){
  return(
    <div className="card-container">
      <ProfileCard 
        name="Dave Ebron" 
        age="32" 
        location="London"
        followers="60K" likes="1.2M" 
        photos="2.1K"
      />
    </div>
  );
}

export default App;