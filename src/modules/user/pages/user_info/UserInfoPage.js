/**
 * Created by zhongzihuan on 2018/12/23.
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(({namespace}) => ({namespace}))
class UserInfoPage extends PureComponent {

  render() {
    return (
      <div style={styles.container}>
        UserInfoPage
      </div>
    );
  }
}

const styles = {
  container:{

  },
};

export default UserInfoPage
