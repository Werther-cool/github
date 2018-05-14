import React from 'react';
import { connect } from 'dva';

const view = ({dispath,demo})=>{

  return (
    <div>123</div>
  )


}
export default connect(({demo})=>{{demo}})(view)