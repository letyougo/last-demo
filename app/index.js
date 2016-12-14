/**
 * Created by xiaoxiaosu on 16/12/14.
 */


import React from 'react'
import ReactDOM from 'react-dom'

import {Button} from 'antd'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';

var Recharts = require('recharts')
const Test = React.createClass({
    getInitialState() {
        return {
            show: true,
            items: [
                0,1,2
            ],
        };
    },
    onClick() {
        this.setState({
            show: !this.state.show,
        });
    },
    onAdd() {
        let items = this.state.items;
        items.push(items.length);
        this.setState({
            show: true,
            items,
        });
    },
    onRemove(i) {
        let items = this.state.items;

        i = i || items.length-1

        items.splice(i, 1);
        this.setState({
            show: true,
            items,
        });
    },
    render() {
        var {items} = this.state
        var nodes = items.map((name,i)=><li key={i} onClick={e=>this.onRemove(i)}>{name}</li>)
        return (
            <div className="queue-demo">
                <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>切换</Button>
                    <Button onClick={this.onAdd} style={{ marginLeft: 10 }}>添加</Button>
                    <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>删除</Button>
                </p>
                <div className="demo-content">

                    <div className="demo-tbody" key="b">
                        <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
                            {this.state.show ? nodes : null}
                        </QueueAnim>
                    </div>
                </div>



            </div>
        );
    }
});


class Test2 extends React.Component{
    constructor() {
        super(...arguments);
        this.state = {
            show: true,
        };
        [
            'onClick',
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onClick(){
        this.setState({
            show: !this.state.show,
        });
    }

    render(){
        return (
            <div className="code-box-demo-wrapper">
                <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>切换</Button>
                </p>
                <Animate
                    transitionName="fade"
                    transitionAppear
                >
                    {this.state.show ?
                        <div key="1" className="code-box-shape" >11111</div> : null}
                </Animate>

                <Test/>
            </div>
        );
    }
}
const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,BarChart,Bar,AreaChart,Area} = Recharts;
const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const TinyLineChart = React.createClass({
    render () {
        return (
            <LineChart width={600} height={300} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
})
const TinyBarChart = React.createClass({
    render () {
        return (
            <BarChart width={150} height={40} data={data}>
                <Bar dataKey='uv' fill='#8884d8'/>
            </BarChart>
        );
    }
})

const SimpleAreaChart = React.createClass({
    render () {
        return (
            <AreaChart width={600} height={400} data={data}
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
        );
    }
})

import { Parallax } from 'rc-scroll-anim';
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.animation = { left: '20%', yoyo: true, repeat: -1, duration: 1000 };
        this.animation2 = { scale: 0, yoyo: true, repeat: -1, duration: 1000 };
    }

    render() {
        return (
            <TweenOne
                animation={this.animation}
                paused={this.props.paused}
                style={{ left: '-20%' ,width:100,height:100,background:'red',position:'absolute',left:0,top:0}}
                className="code-box-shape"
            />
        );
    }
}


class Demo2 extends React.Component{
    constructor() {
        super(...arguments);
        this.state = {
            show: true,
        };
        [
            'onClick',
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onClick(){
        this.setState({
            show: !this.state.show,
        });
    }

    render(){
        return (
            <div className="code-box-demo-wrapper">
                <p className="buttons">
                    <Button type="primary" onClick={this.onClick}>切换</Button>
                </p>
                <Animate
                    showProp="show"
                    transitionName="fade"
                >

                    <div  show={this.state.show}>111</div>
                </Animate>
            </div>
        );
    }
}

var mountNode = document.getElementById('root')


ReactDOM.render(<div>
    <Demo/>
    <Demo2/>
    <Test/>
    <TinyLineChart/>
    <TinyBarChart/>
    <SimpleAreaChart/>

</div>, mountNode);

