import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
         inputarray:['',''],
         result:''
        };
    this.handlechangeinput1=this.handlechangeinput1.bind(this);
    this.handlechangeinput2=this.handlechangeinput2.bind(this);
    this.handleclick=this.handleclick.bind(this);  
    this.handleclear=this.handleclear.bind(this); 
}
handleclick(){
    let count=0;
    if (this.state.inputarray[0]!='' && this.state.inputarray[1]!='') {
        console.log('yes input');
        const str1=this.state.inputarray[0];
        const str2=this.state.inputarray[1];
        const strlength=str1.length+str2.length;
        for (let index = 0; index < str1.length; index++) {
            if(str2.includes(str1[index])){
                count++;
            }
        }
        const total=strlength-count;
        if (total%6==0) {
            this.setState({result:"Friends"});
        }else if(total%6==1){
            this.setState({result:"Love"});
        }else if(total%6==2){
            this.setState({result:"Affection"});
        }else if(total%6==3){
            this.setState({result:"Marriage"});
        }else if(total%6==4){
            this.setState({result:"Enemy"});
        }else if(total%6==5){
            this.setState({result:"Siblings"});
        }
    }else{
        console.log('no input');
       this.setState({result:"Please Enter valid input"});
    }
    
}
handlechangeinput1(e){
    const val=e.target.value;
    console.log('in input change',val);
this.setState(data=>{
    const temp={...data};
    temp.inputarray[0]=val;
    return temp
})
}
handlechangeinput2(e){
    const val=e.target.value;
    console.log('in input change2',val);
this.setState(data=>{
    const temp={...data};
    temp.inputarray[1]=val;
    return temp
})
}
handleclear(){
    console.log('clear');
    this.setState({
         inputarray:['',''],
         result:''
    })
}
    render() {
        return(
            <div id="main">
                <input onChange={this.handlechangeinput1} data-testid="input1" value={this.state.inputarray[0]} type="text" name="name1" placeholder="Enter first name" required/>
                <input onChange={this.handlechangeinput2} data-testid="input2" value={this.state.inputarray[1]} type="text" name="name2" placeholder="Enter second name" required/>
               <button onClick={this.handleclick} data-testid="calculate_relationship">Calculate Relationship Future</button>  
               <button onClick={this.handleclear} data-testid="clear">Clear</button>
               <h3 data-testid="answer">{this.state.result}</h3>
               {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
