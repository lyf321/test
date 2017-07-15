/**
 * Created by liyangfan on 17-7-15.
 */

import React from "react";
import {browserHistory} from 'react-router'

class UpdateUser extends React.Component {

    update() {
        const userName = this.refs.userName.value;
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        const gender = $('input:radio[name="sex"]:checked').val();
        const phone = this.refs.phone.value;
        const email = this.refs.email.value;
        const remark = this.refs.remark.value;

        this.props.updateUser({userName, name, age, gender, phone, email, remark});


        browserHistory.push("/");
    }

    render() {
        return <div id="addUser">
            <br/>
            <div>
                用户名：<input type="text" className="form-control" placeholder="用户名" classID="userName" ref="userName"
                           defaultValue={this.props.updateInfo.userName} disabled/><br/>
            </div>
            <div>
                姓名：<input type="text" className="form-control" placeholder="姓名" ref="name"
                          defaultValue={this.props.updateInfo.name}/><br/>
            </div>
            <div>
                年龄：<input type="text" className="form-control" placeholder="年龄" ref="age"
                          defaultValue={this.props.updateInfo.age}/><br/>
            </div>
            <div>
                电话：<input type="text" className="form-control" placeholder="电话" ref="phone"
                          defaultValue={this.props.updateInfo.phone}/><br/>
            </div>
            <div>
                邮箱：<input type="text" className="form-control" placeholder="邮箱" ref="email"
                          defaultValue={this.props.updateInfo.email}/><br/>
            </div>
            <div>
                备注：<input type="text" className="form-control" placeholder="备注" ref="remark"
                          defaultValue={this.props.updateInfo.remark}/><br/>
            </div>
            <div>
                <input type="radio" name="sex" value="male" checked/>男
                <input type="radio" name="sex" value="female"/>女
            </div>
            <button type="reset">取消</button>
            <button onClick={this.update.bind(this)}>修改</button>
        </div>
    }
}

export default UpdateUser;