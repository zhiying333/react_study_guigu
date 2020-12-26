import React, { Component } from 'react'
// import qs from 'querystring'

const detailData = [
  {id:'01',content:'Hello World'},
  {id:'02',content:'Love'},
  {id:'03',content:'张天禹老师优秀呀'}
]
export default class Detail extends Component {
  render() {
    
    // 接收路由组件的params参数
    const {match:{params:{id,title}}} = this.props
    let dataObj = detailData.find((item) => {
      return item.id === id
    })

    /*接收search参数
    const {search} = this.props.location
    let seaStr = search.substring(1)
    const queryObj = qs.parse(seaStr)
    const {id, title} = queryObj
    const dataObj = detailData.find((item) => {
      return item.id === id
    }) */

    /* const {id,title} = this.props.location.state || {}
    const dataObj = detailData.find((item) => {
      return item.id === id
    }) || {} */

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{dataObj.content}</li>
      </ul>
    )
  }
}
