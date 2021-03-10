import React from 'react'
import {bubbleSort} from './bubbleSort'
import {mergeSort} from './mergeSort'
import {QuickSort} from './quickSort'


class Visualizer extends React.Component {

    state = {bars: [], updateIndex: -1, isLast: false, numberOfBars: 85, len: 0};

    componentDidMount() {
        this.initBars(this.state.numberOfBars);       
    }

    componentDidUpdate() {
    }

    render() {
        var visChart = [];
      
        visChart = this.state.bars.map((value, index) => {    
            if(this.state.len <= 1) {
                if(!this.state.isLast && this.state.updateIndex !== - 1 && (index === this.state.updateIndex || index === this.state.updateIndex + 1)) 
                    return <div className="bar" style={{ height: `${value}px`, backgroundColor:'red' }} key={index}></div>;
                else {
                    return <div className="bar" style={{ height: `${value}px`, backgroundColor:'blue' }} key={index}></div>;
                }
            }
            else if((index >= this.state.updateIndex && index <= this.state.len) && !this.state.isLast && this.state.updateIndex !== - 1 && (index === this.state.updateIndex || index === this.state.updateIndex + 1)) 
                    return <div className="bar" style={{ height: `${value}px`, backgroundColor:'red' }} key={index}></div>;
                else {
                    return <div className="bar" style={{ height: `${value}px`, backgroundColor:'blue' }} key={index}></div>;
                }

        });
        
        return (
            <div>
                <div className="btn-container">
                    <button className="reset-btn" onClick = {() => this.initBars(100)}>Reset</button>
                    <input type="range" min="15" max="180" value={this.state.numberOfBars} onChange={
                        (event) => { 
                            this.initBars(event.target.value)
                            this.setState({numberOfBars: event.target.value}) 
                        }
                    }/>
                    <div className="sorting-algo-container">
                        <button className="mergesort-btn btn" onClick = {() => this.quickWrapper()}>QuickSort</button>
                        <button className="mergesort-btn btn" onClick = {() => this.mergeWrapper()}>MergeSort</button>
                        <button className="bubblesort-btn btn" onClick = {() => bubbleSort(this.state.bars, this.callBackForState)}>BubbleSort</button>
                    </div>
                </div>
                <div className="container">
                    {visChart}
                    
                </div>
                
            </div>
        );
    }
    

    //helper functions
    randomVal = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    initBars = (size) => {
        const arr = [];
        for(let i=0; i<size; i++) {
            arr[i] = this.randomVal(20, 350);
        }
        this.setState({bars: arr, updateIndex: -1, numberOfBars: size});
    }

    callBackForState = (arr, index, isLast, len) => {
        if(isLast)
            this.setState({bars: arr, updateIndex: index, isLast: true, len: len});
        else
            this.setState({bars: arr, updateIndex: index, isLast: false, len: len});
    } 

    mergeWrapper = () => {
        mergeSort(this.state.bars,0, this.state.bars.length, this.callBackForState, true);
    }

    quickWrapper = () => {
        QuickSort(this.state.bars, 0, this.state.bars.length-1, this.callBackForState, true);
    }

}

export default Visualizer;