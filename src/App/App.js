import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Breadcrumb, Card} from 'antd'

class App extends Component {
    constructor() {
        super()
        this.state = {
            path: [],
            breadcrumbTask: [
                {
                    name: 'task',
                    linkTo: '/task'
                },
                {
                    name: 'section',
                    linkTo: '/task/section'
                }]
        }
    }

    componentDidMount() {
        const pathSnippets = this.props.location.pathname.split('/').filter(i => i)
        this.setState({path: pathSnippets})
    }

    componentWillReceiveProps(nextProps) {
        const pathSnippets = nextProps.location.pathname.split('/').filter(i => i)
        this.setState({path: pathSnippets})
    }

    changePath(url) {
        let replacePath = this.state.breadcrumbTask.filter((p) => p.name === url)[0].linkTo
        this.props.history.replace(replacePath)
    }

    render() {
        return (
            <div>
                <Card title={'面包屑'}>
                    <Breadcrumb>
                        {
                            this.state.path.map((item, key) => {
                                return <Breadcrumb.Item key={key}><a
                                    onClick={this.changePath.bind(this, item)}>{item}</a></Breadcrumb.Item>
                            })
                        }
                    </Breadcrumb>
                    <div style={{margin: '10px 0px'}}>
                        <Link to={'/task'}>task</Link>
                    </div>
                </Card>

            </div>
        )
    }
}

export default App
