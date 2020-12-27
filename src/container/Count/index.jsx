//Count容器组件
import {connect} from 'react-redux'
import countUI from '../../components/Count'
import {increAction,decreAction} from '../../redux/count_action'

/* const mapStateToProps = (state) => {
  return {count:state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    incre: data => dispatch(increAction(data)),
    decre: data => dispatch(decreAction(data))
  }
}

//创建并暴露Count容器组件，connect函数第一次调用需要传递两个函数参数，用于传递状态和操作状态的方法
export default connect(mapStateToProps,mapDispatchToProps)(countUI) */


//优化
export default connect(
  state => ({count:state}),
  {
    incre:increAction,
    decre:decreAction
  }
)(countUI)