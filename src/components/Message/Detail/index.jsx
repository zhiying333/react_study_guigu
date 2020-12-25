import React, { Component } from 'react'

const detailData = [
  {id:'01',content:'Hello World'},
  {id:'02',content:'Love'},
  {id:'03',content:'张天禹老师优秀呀'}
]
export default class Detail extends Component {
  render() {
    const {match:{params:{id,title}}} = this.props
    let dataObj = detailData.find((item) => {
      return item.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{dataObj.content}</li>
      </ul>
    )
  }
}
