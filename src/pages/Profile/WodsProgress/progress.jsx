import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries, VerticalBarSeries} from 'react-vis';
import {useEffect, useState} from "react"

const Progress = (props) => {
    const [lineGraph, updateLineGraph] = useState([]);
    const [barGraph, updateBarGraph] = useState([]);
    useEffect(() => {
        if(!props.data || props.data.length === 0){
            return;
        }
        const newLineGraph = props.data.map((data, index)=>(
            {
                x : index + 1,
                y : data.weight
            }
        ))
        updateLineGraph(newLineGraph)
        const newBarGraph = props.data.map((data, index)=>(
            {
                x : index + 1,
                y : data.repetitions
            }
        ))
        updateBarGraph(newBarGraph)
        console.log(newBarGraph);
    }, [props.data])
    const maxY = Math.max.apply(Math, lineGraph.map(function(o) { return o.y; }))
    return(
        <div>
            <XYPlot
                width={300}
                height={300}
                yDomain={[0, maxY]}
                xDomain={[1, lineGraph.length]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries data={barGraph}/>
                <LineSeries data={lineGraph}/>

            </XYPlot>
        </div>
    )
}

export default Progress

/*
    jours en absice
    ordonees 
        baton : nb d'exos
        courbe : nb de reps
*/

/*
    p
*/