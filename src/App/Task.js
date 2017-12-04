import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'antd'

export default class Task extends Component {
    render(){
        return  <Card>
            <Link to={'/task/section'}>section</Link>
            t content
        </Card>
    }
}