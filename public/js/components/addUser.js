/**
 * Created by liyangfan on 17-7-14.
 */
import React from "react";

class addUser extends React.Component {

    addUser() {

        const userName = this.refs.userName.value;
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        const gender = $('input:radio[name="sex"]:checked').val();
        const phone = this.refs.phone.value;
        const email = this.refs.email.value;
        const remark = this.refs.remark.value;

        this.props.addUser({userName,name,age,gender,phone,email,remark});
    }

    render() {
        return <div id="addUser">
            <br/>
            {/*<form action="">*/}
                <div>
                    <input type="text" className="form-control" placeholder="用户名" ref="userName"/><br/>
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="姓名" ref="name"/><br/>
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="年龄" ref="age"/><br/>
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="性别" ref="gender"/><br/>
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="电话" ref="phone"/><br/>
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="邮箱" ref="email"/><br/>
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="备注" ref="remark"/><br/>
                </div>
                <div>
                    <input type="radio" name="sex" value="male"/>男
                    <input type="radio" name="sex" value="female"/>女
                </div>
                <button type="reset">取消</button>
                <button onClick={this.addUser.bind(this)}>添加</button>
            {/*</form>*/}
        </div>
    }
}

export default addUser;