import React from "react";
import styles from "../styles/Question.module.css";

export default class Question extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pressStatus: false,
        }
    }

    handleClick(){
        this.setState({
            pressStatus: !this.state.pressStatus,
        })
    }

    render(){

        const normaltext = styles.question;
        const boldtext = styles.boldquestion;

        const answershow = styles.showanswer;
        const answerhide = styles.hideanswer;

        const downarrow = styles.dropdownarrow;
        const uparrow = styles.dropdownarrowrotate;
        return(
            
            <div className={styles.questioncontainer}>
                <button
                    onClick={()=>{
                        this.handleClick();
                    }}
                    
                >
                <p className={this.state.pressStatus?boldtext:normaltext}>{this.props.question}</p>
                <img 
                    src="/icon-arrow-down.svg"
                    alt="drop down"
                    className={this.state.pressStatus?uparrow:downarrow}
                />
                </button>
                <div className={this.state.pressStatus?answershow:answerhide}>
                    <p>
                        {this.props.answer}
                    {/* You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan. */}
                    </p>
                </div>
                <div className={styles.divider}>
                </div>
            </div>
        )
    }
}